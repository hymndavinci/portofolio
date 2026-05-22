import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? 'era90tahunan@gmail.com'

async function getRatingSummary() {
  const summary = await db.portfolioRating.aggregate({
    _avg: { rating: true },
    _count: { rating: true },
  })

  return {
    average: summary._avg.rating ?? 0,
    count: summary._count.rating,
  }
}

export async function GET() {
  const session = await getServerSession(authOptions)
  const sessionEmail = session?.user?.email ?? null

  const ratings = await db.portfolioRating.findMany({
    orderBy: { updatedAt: 'desc' },
    take: 20,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
          email: true,
        },
      },
    },
  })

  const currentUserRating = sessionEmail
    ? ratings.find((item) => item.user.email === sessionEmail) ??
      await db.portfolioRating.findFirst({
        where: { user: { email: sessionEmail } },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              image: true,
              email: true,
            },
          },
        },
      })
    : null

  const summary = await getRatingSummary()

  return NextResponse.json({
    ratings,
    currentUserRating,
    isAdmin: sessionEmail === ADMIN_EMAIL,
    ...summary,
  })
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json().catch(() => null)
  const rating = Number(body?.rating)
  const message = typeof body?.message === 'string' ? body.message.trim() : ''

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return NextResponse.json({ error: 'Rating must be 1-5' }, { status: 400 })
  }

  if (message.length < 2 || message.length > 500) {
    return NextResponse.json({ error: 'Message must be 2-500 characters' }, { status: 400 })
  }

  const user = await db.user.findUnique({ where: { email: session.user.email } })

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 401 })
  }

  const portfolioRating = await db.portfolioRating.upsert({
    where: { userId: user.id },
    create: {
      userId: user.id,
      rating,
      message,
    },
    update: {
      rating,
      message,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
          email: true,
        },
      },
    },
  })

  const summary = await getRatingSummary()

  return NextResponse.json({
    rating: portfolioRating,
    currentUserRating: portfolioRating,
    isAdmin: session.user.email === ADMIN_EMAIL,
    ...summary,
  })
}

export async function DELETE(request: NextRequest) {
  const session = await getServerSession(authOptions)

  if (session?.user?.email !== ADMIN_EMAIL) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const body = await request.json().catch(() => null)
  const id = typeof body?.id === 'string' ? body.id : ''

  if (!id) {
    return NextResponse.json({ error: 'Missing rating id' }, { status: 400 })
  }

  await db.portfolioRating.delete({ where: { id } })

  const summary = await getRatingSummary()

  return NextResponse.json({
    deletedId: id,
    ...summary,
  })
}
