import { NextResponse } from 'next/server'
import https from 'https'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

function fetchLanyard(userId: string): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'api.lanyard.rest',
        path: `/v1/users/${userId}`,
        method: 'GET',
        rejectUnauthorized: false,
      },
      (res) => {
        let raw = ''
        res.on('data', (chunk) => { raw += chunk })
        res.on('end', () => {
          try { resolve(JSON.parse(raw)) }
          catch (e) { reject(e) }
        })
      }
    )
    req.on('error', reject)
    req.end()
  })
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
        'Cache-Control': 'public, s-maxage=20, stale-while-revalidate=40',
      },
    })
  } catch (err) {
    console.error('Lanyard proxy error:', err)
    return NextResponse.json({ success: false }, { status: 502 })
  }
}
