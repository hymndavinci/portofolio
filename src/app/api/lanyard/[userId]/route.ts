import { NextResponse } from 'next/server'
import https from 'https'

export const dynamic = 'force-dynamic'

// Proxy ke Lanyard API — bypass TLS cert mismatch (api.lanyard.rest pakai cert *.up.railway.app)
const agent = new https.Agent({ rejectUnauthorized: false })

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params
  try {
    const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`, {
      // @ts-expect-error — node-fetch agent, supported in Next.js runtime
      agent,
      next: { revalidate: 30 },
    })
    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    console.error('Lanyard proxy error:', err)
    return NextResponse.json({ success: false }, { status: 502 })
  }
}
