'use client'

import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { useState } from 'react'

export default function ServicesPage() {
  const [imageSrc, setImageSrc] = useState<string | null>(null)
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center my-10">
      <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
        <Image
          src="/services/phq.png"
          alt="phq"
          width={400}
          height={400}
          className="cursor-pointer w-full h-52"
        />
        <p className='font-semibold'>I have implemented an phq-9 test taker to take phq-9 assessment from the user</p>
      </Card>
      <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
        <Image
          src="/services/gemini-explain.png"
          alt="gemini explain"
          width={400}
          height={400}
          className="cursor-pointer w-full h-52"
        />
        <p className='font-semibold'>Users can click on explain so that ai can explain the question to them</p>
      </Card>
      <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
        <Image
          src="/services/gemini-message.png"
          alt="gemini message"
          width={400}
          height={200}
          className="cursor-pointer w-full h-52"
        />
        <p className='font-semibold'>Users can ask questions to the gemini model and get good feedback</p>
      </Card>
      <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
        <Image
          src="/services/personalized-response.png"
          alt="personalized response"
          width={400}
          height={400}
          className="cursor-pointer w-full h-52"
        />
        <p className='font-semibold'>After taking the assessment the users are redirected to the response page where he will get a persnalized feedback on his health</p>
      </Card>
      <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
        <Image
          src="/services/mental-track.png"
          alt="mental track"
          width={400}
          height={400}
          className="cursor-pointer w-full h-52"
        />
        <p className='font-semibold'>The graph shows the user mental health status on multiple dates</p>
      </Card>
      <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
        <Image
          src="/services/complete-analysis.png"
          alt="complete analysis"
          width={400}
          height={400}
          className="cursor-pointer w-full h-52"
        />
        <p className='font-semibold'>The gemini gives the response based on all the previous tests results</p>
      </Card>
      <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
        <Image
          src="/services/contact-form.png"
          alt="contact form"
          width={400}
          height={400}
          className="cursor-pointer w-full h-52"
        />
        <p className='font-semibold'>This is an emergency form where users can ask help from people</p>
      </Card>
      <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
        <Image
          src="/services/chat-gemini.png"
          alt="chat gemini"
          width={400}
          height={400}
          className="cursor-pointer w-full h-52"
        />
        <p className='font-semibold'>This is a chat application where users can ask questions related to their mental health. The Gemini knows your complete data about your health</p>
      </Card>
      <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
        <Image
          src="/services/clerk-auth.png"
          alt="clerk auth"
          width={400}
          height={400}
          className="cursor-pointer w-full h-52"
        />
        <p className='font-semibold'>Clerk auth makes your app secure and you can easily manage it.</p>
      </Card>
    </div>
  )
}
