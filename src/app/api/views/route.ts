import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const records = await db.postView.findMany()
    const viewMap = Object.fromEntries(records.map((r) => [r.slug, r.views]))
    return NextResponse.json(viewMap)
  } catch (error) {
    return NextResponse.json({}, { status: 500 })
  }
}
