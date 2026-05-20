import { NextResponse } from 'next/server'
import https from 'https'

export const dynamic = 'force-dynamic'

function fetchContributions(username: string, year: string): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'github-contributions-api.jogruber.de',
        path: `/v4/${username}?y=${year}`,
        method: 'GET',
        rejectUnauthorized: false,
        headers: { 'User-Agent': 'portfolio-app' },
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

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const year = searchParams.get('year') ?? 'last'
  try {
    const data = await fetchContributions('hymndavinci', year)
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 502 })
  }
}
