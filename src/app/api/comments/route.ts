import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'

const VALID_TARGETS = new Set(['blog', 'project'])

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const targetType = searchParams.get('targetType')
  const targetSlug = searchParams.get('targetSlug')

  if (!targetType || !targetSlug || !VALID_TARGETS.has(targetType)) {
    return NextResponse.json({ error: 'Invalid comment target' }, { status: 400 })
  }

  const comments = await db.comment.findMany({
    where: { targetType, targetSlug },
    orderBy: { createdAt: 'desc' },
    take: 50,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  })

  return NextResponse.json({ comments })
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json().catch(() => null)
  const targetType = body?.targetType
  const targetSlug = body?.targetSlug
  const commentBody = typeof body?.body === 'string' ? body.body.trim() : ''

  if (!targetType || !targetSlug || !VALID_TARGETS.has(targetType)) {
    return NextResponse.json({ error: 'Invalid comment target' }, { status: 400 })
  }

  if (commentBody.length < 2 || commentBody.length > 500) {
    return NextResponse.json({ error: 'Comment must be 2-500 characters' }, { status: 400 })
  }

  const user = await db.user.findUnique({ where: { email: session.user.email } })

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 401 })
  }

  const comment = await db.comment.create({
    data: {
      body: commentBody,
      targetType,
      targetSlug,
      userId: user.id,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  })

  return NextResponse.json({ comment }, { status: 201 })
}
