'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

const page = () => {
  const { user } = useUser()
  const [image, setImage] = useState(null)

  useEffect(() => {
    if (user?.username != undefined) {
      console.log(user)
      console.log(user?.username)
      console.log(user.emailAddresses[0].emailAddress)
    }
  }, [user])

  //   console.log(user?.username)

  return (
    <main>
      <div>
        <h1>Doctor Page</h1>
        <p>Username: {user?.username}</p>
        <p>Email: {user?.emailAddresses[0].emailAddress}</p>
      </div>
    </main>
  )
}

export default page
