import { execSync } from 'child_process'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // Get repo status for our main projects
    const repos = [
      'alemangerardo4-ctrl/mc-dashboard',
      'alemangerardo4-ctrl/public-works',
      'alemangerardo4-ctrl/aleman-engineer',
    ]

    const status = repos.map(repo => {
      try {
        const commits = execSync(`gh repo view ${repo} --json nameWithOwner,description,pushedAt --template '{{json .}}'`, {
          encoding: 'utf8',
        })
        const data = JSON.parse(commits)
        return {
          repo: data.nameWithOwner,
          description: data.description,
          lastPush: data.pushedAt,
        }
      } catch (e) {
        return { repo, error: 'Failed to fetch' }
      }
    })

    return NextResponse.json({ ok: true, repos: status })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}
