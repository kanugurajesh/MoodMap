import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {

  // Get the score and userId from the request body
  const { score, userId } = await request.json()

  // if both score and userId is passed then create the score field
  if (score && userId) {
    const result = await prisma.score.create({
      data: {
        value: score,
        userId: userId,
      },
    })

    return NextResponse.json(result)

  }

  // if only userId is passed then get all the score related to the user
  if (!score && userId) {
    const result = await prisma.score.findMany({
      where: {
        userId: userId,
      },
    })
    return NextResponse.json(result)
  }

  // if userId and score is not passed or only score is passed return error
  return NextResponse.json('error')
}