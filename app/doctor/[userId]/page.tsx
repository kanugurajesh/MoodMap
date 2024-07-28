"use client"

import { useEffect, useState } from 'react'

export default function Page({ params }: { params: { userId: string } }) {
  const [data, setData] = useState(null)

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

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <main>
      <div>My Post: {params.userId}</div>
    </main>
  )
}
