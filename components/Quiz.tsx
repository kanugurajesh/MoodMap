import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { PHQ9 } from '@/db/questions'
import { AlertDialogBox } from '@/components/AlertDialogBox'
import { useAppDispatch } from '@/lib/hooks'
import { incrementByAmount, initializeCount } from '@/lib/features/counter/counterSlice'
import { Badge } from '@/components/ui/badge'
import sendGemini from '@/lib/sendGemini'
import { updateValue } from '@/lib/features/textarea/textareaSlice'
import { incrementScore } from '@/lib/features/score/scoreSlice'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { useRouter } from 'next/navigation'

const Quiz = () => {
  // declaring the use states
  const router = useRouter()
  const [count, setCount] = useState<number>(0)
  const [answers, setAnswers] = useState<number[]>(Array(PHQ9.length).fill(0))
  const [selectedValue, setSelectedValue] = useState<number>(0)

  // getting the score from the store
  const score = useSelector((state: RootState) => state.score.value)

  // getting the dispatch function
  const dispatch = useAppDispatch()

  // function to increment the score by the given amount
  const incrementBy = (amount: number) => {
    dispatch(incrementByAmount(amount))
  }

  // function to handle the next button
  const handleNext = () => {
    setCount(count + 1)
    incrementBy(10)
  }

  // function to handle the previous button
  const handlePrev = () => {
    setCount(count - 1)
    incrementBy(-10)
  }

  const handPrisma = async (finalScore: number) => {
    const response = await fetch('/api/graph', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ score: finalScore }),
    })
    const data = await response.json()
  }

  // function to handle the submit button
  const handleSubmit = async (e: any) => {
    const newAnswers = [...answers]
    newAnswers[count] = selectedValue
    setAnswers(newAnswers)
    incrementBy(10)

    if (count < PHQ9.length - 1) {
      setCount(count + 1)
    } else {
      dispatch(initializeCount(0))
      const sum = newAnswers.reduce((acc, curr) => acc + curr, 0) + selectedValue
      dispatch(incrementScore(sum))
      handPrisma(sum - selectedValue)
      router.push('/response')
    }
  }

  // function to handle the explain button
  const handleExplain = () => {
    const prompt = `Explain the question "${PHQ9[count].question}" to me easily`
    sendGemini(prompt, 300).then((response) => {
      if (!response) return
      dispatch(updateValue('')) // clearing the previous response
      for (let i = 0; i < response.length; i++) {
        setTimeout(() => {
          dispatch(updateValue(response.slice(0, i + 1)))
        }, 10 * i)
      }
    })
  }

  return (
    <div className="p-2 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <h1 className="font-extrabold text-xl">{PHQ9[count].question}</h1>
        <Badge
          className="w-14 items-center justify-center cursor-pointer"
          onClick={handleExplain}
        >
          Explain
        </Badge>
      </div>
      <div>
        <RadioGroup
          defaultValue={String(answers[count])}
          className="flex flex-col gap-4"
          onValueChange={(value) => setSelectedValue(Number(value))}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="0" id="r1" />
            <Label htmlFor="r1">Not at all</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="r2" />
            <Label htmlFor="r2">Several days</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="r3" />
            <Label htmlFor="r3">More than half the days</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3" id="r4" />
            <Label htmlFor="r4">Nearly every day</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="flex justify-around mt-2">
        <Button
          onClick={count > 0 ? handlePrev : () => {}}
          disabled={count <= 0}
        >
          Prev
        </Button>
        {count >= PHQ9.length - 1 ? (
          <AlertDialogBox handleSubmit={handleSubmit} />
        ) : (
          <Button onClick={handleSubmit}>Submit</Button>
        )}
        <Button
          onClick={count < PHQ9.length - 1 ? handleNext : () => {}}
          disabled={count >= PHQ9.length - 1}
        >
          Skip
        </Button>
      </div>
    </div>
  )
}

export default Quiz
