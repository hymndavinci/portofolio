import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getPostBySlug } from '@/lib/blog-data'

interface Params {
  params: Promise<{ slug: string }>
}

// GET /api/views/[slug] — ambil view count
export async function GET(_req: Request, { params }: Params) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }

  const record = await db.postView.findUnique({ where: { slug } })
  return NextResponse.json({ views: record?.views ?? post.views })
}

// POST /api/views/[slug] — increment +1
export async function POST(_req: Request, { params }: Params) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }

  const record = await db.postView.upsert({
    where: { slug },
    create: { slug, views: post.views + 1 },
    update: { views: { increment: 1 } },
  })
  return NextResponse.json({ views: record.views })
}
