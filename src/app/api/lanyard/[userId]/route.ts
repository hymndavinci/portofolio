import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

async function fetchLanyard(userId: string) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 8000)

  try {
    const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`, {
      cache: 'no-store',
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Lanyard responded with ${response.status}`)
    }

    return response.json()
  } finally {
    clearTimeout(timeout)
  }
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params

  try {
    const data = await fetchLanyard(userId)
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    })
  } catch (err) {
    console.error('Lanyard proxy error:', err)
    return NextResponse.json({ success: false }, { status: 502 })
  }
}
