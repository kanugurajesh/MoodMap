'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

// creating the interface of the user field
interface userI {
  id: string
  imageUrl: string
  name: string
  email: string
}

const page = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const sendRequest = async () => {
      const result = await fetch('/api/user')
      const data = await result.json()
      setUsers(data)
    }
    sendRequest()
  }, [])

  useEffect(() => {
    console.log(users)
  }, [users])

  return (
    <main className='flex flex-col gap-2 justify-center items-center'>
      <h1 className='font-bold text-2xl mt-5'>Check your patients</h1>
      <div className="mt-10 flex flex-wrap gap-4">
        {users.length > 0 ? (
          users.map((user: userI) => (
            <div
              key={user.id}
              className="p-4 bg-blue-500 text-white w-fit flex flex-col justify-center items-center gap-4 rounded-md border-2 border-blue-500 hover:bg-white hover:text-blue-500 transition-all ease-in-out duration-300 cursor-pointer"
            >
              <Image
                src={user.imageUrl}
                alt={user.name}
                width={150}
                height={150}
                className="rounded-full"
              />
              <div className="font-bold flex flex-col items-center justify-center gap-2">
                <div className="group">
                  <p>{user.name}</p>
                  <div className="w-0 group-hover:w-full bg-black h-1 transition-all ease-in-out duration-300"></div>
                </div>
                <p>{user.email}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </main>
  )
}

export default page
