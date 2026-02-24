import { NextResponse } from 'next/server'
import { execSync } from 'child_process'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const raw = execSync(
      'gog calendar list --all --days 14 --max 10 -j',
      { encoding: 'utf8', timeout: 10000 }
    )
    const data = JSON.parse(raw)
    return NextResponse.json({ ok: true, events: data.events ?? [] })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ ok: false, events: [], error: message }, { status: 500 })
  }
}
