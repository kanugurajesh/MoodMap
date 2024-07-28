'use client'

import { useEffect, useState } from 'react'

export default function Page({ params }: { params: { userId: string } }) {
  // creating a state to store the scores
  const [data, setData] = useState(null)

    //  The below function picks up the userId from the url and parses it and makes a request to the backend to get all the scores
  useEffect(() => {
    const sendResult = async () => {
      const result = await fetch(`/api/graph`, {
        method: 'POST',
        body: JSON.stringify({ userId: params.userId }),
      })
      const data = await result.json()
      setData(data)
    }
    sendResult()
  }, [params])

  return (
    <main>
      <div>My Post: {params.userId}</div>
    </main>
  )
}
