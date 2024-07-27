import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  const { score } = await request.json()
  const result = await prisma.score.create({
    data: {
      value: score,
    },
  })
  return NextResponse.json(result)
}

export async function GET() {
  const scores = await prisma.score.findMany()
  return NextResponse.json(scores)
}
