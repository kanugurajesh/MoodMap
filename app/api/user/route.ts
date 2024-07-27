import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import { encryptPassword } from '@/utils/hash'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
    
  // parsing userId from request json
  const { userId, name, email, imageUrl} = await request.json()

  // find user by userId
  const user = await prisma.user.findUnique({
    where: {
      userId: encryptPassword(userId),
    },
  })

  //   if user exists return user already exists
  if (user) {
    return NextResponse.json('User already exists')
  }

  //   creating the user
  const result = await prisma.user.create({
    data: {
      userId: encryptPassword(userId),
      name: encryptPassword(name),
      email: encryptPassword(email),
      imageUrl: encryptPassword(imageUrl),
    },
  })

  return NextResponse.json('User created')
}
