'use client'

import { useEffect, useState } from 'react'

interface CalEvent {
  id?: string
  summary?: string
  start?: { dateTime?: string; date?: string }
  end?: { dateTime?: string; date?: string }
  description?: string
  organizer?: { email?: string }
  attendees?: { email?: string; responseStatus?: string }[]
  recurrence?: string[]
  htmlLink?: string
}

function formatDate(ev: CalEvent) {
  const raw = ev.start?.dateTime ?? ev.start?.date ?? ''
  if (!raw) return { date: '—', time: '' }
  const d = new Date(raw)
  const date = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  const time = ev.start?.dateTime
    ? d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    : 'All day'
  return { date, time }
}

function isRecurring(ev: CalEvent) {
  return !!(ev.recurrence && ev.recurrence.length > 0)
}

export default function CalendarPage() {
  const [events, setEvents] = useState<CalEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastSync, setLastSync] = useState<string>('')

  const load = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/calendar')
      const data = await res.json()
      if (data.ok) {
        setEvents(data.events)
        setLastSync(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }))
      } else {
        setError(data.error ?? 'Unknown error')
      }
    } catch (e) {
      setError(String(e))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const milestones = [
    { date: 'Mar 1',  title: 'Shopify store launch',           type: 'Launch'  },
    { date: 'Mar 7',  title: 'First product page live (Shelf)', type: 'Product' },
    { date: 'Mar 14', title: 'Brand content batch #1',          type: 'Content' },
    { date: 'Mar 31', title: 'Public Works site v1 live',       type: 'Launch'  },
  ]

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-blue-900">Calendar</h1>
          <p className="text-slate-500 text-sm mt-0.5">jjjalemanjjj@gmail.com · live feed</p>
        </div>
        <div className="flex items-center gap-3">
          {lastSync && <span className="text-xs text-slate-400">Synced {lastSync}</span>}
          <button
            onClick={load}
            className="text-xs px-3 py-1.5 rounded-lg bg-sky-100 text-blue-800 hover:bg-sky-200 transition font-medium"
          >
            ↻ Refresh
          </button>
        </div>
      </div>

      {/* Status banner */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-50 border border-green-200 text-sm text-green-800 font-medium">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
        Google Calendar connected — live
      </div>

      {/* Live events feed */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-slate-700">Next 14 Days</h2>
          {loading && <span className="text-xs text-slate-400 animate-pulse">Loading…</span>}
        </div>

        {error && (
          <div className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">
            ⚠️ {error}
          </div>
        )}

        {!loading && !error && events.length === 0 && (
          <p className="text-slate-400 text-sm">No events in the next 14 days — calendar is clear 🎉</p>
        )}

        {!loading && events.length > 0 && (
          <div className="space-y-3">
            {events.map((ev, i) => {
              const { date, time } = formatDate(ev)
              const recurring = isRecurring(ev)
              return (
                <div key={ev.id ?? i} className="flex items-center gap-4 p-3 rounded-xl bg-sky-50 hover:bg-sky-100 transition">
                  <div className="text-center min-w-[52px]">
                    <p className="text-xs text-slate-400">{date}</p>
                    <p className="text-xs font-medium text-slate-600">{time}</p>
                  </div>
                  <div className="w-1 h-10 rounded-full bg-blue-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-700 font-medium truncate">{ev.summary ?? '(No title)'}</p>
                    {ev.description && (
                      <p className="text-xs text-slate-400 truncate mt-0.5">{ev.description}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {recurring && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">↻ Recurring</span>
                    )}
                    {ev.htmlLink && (
                      <a
                        href={ev.htmlLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:underline"
                      >
                        Open ↗
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Milestones */}
      <div className="card">
        <h2 className="font-semibold text-slate-700 mb-4">Sprint Milestones</h2>
        <div className="space-y-3">
          {milestones.map(m => (
            <div key={m.title} className="flex items-center justify-between p-3 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-slate-400 min-w-[48px]">{m.date}</span>
                <span className="text-slate-700">{m.title}</span>
              </div>
              <span className={`badge-${m.type === 'Launch' ? 'green' : 'blue'}`}>{m.type}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
