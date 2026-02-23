export default function CalendarPage() {
  const events = [
    { date: 'Feb 22', title: 'MC Dashboard — Vercel deploy', time: '4:00pm', color: 'blue' },
    { date: 'Feb 22', title: 'Google Workspace connected', time: '4:45pm', color: 'green' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-900">Calendar</h1>
        <span className="text-xs text-slate-400">Connected: jjjalemanjjj@gmail.com</span>
      </div>

      {/* This week */}
      <div className="card">
        <h2 className="font-semibold text-slate-700 mb-4">This Week</h2>
        {events.length > 0 ? (
          <div className="space-y-3">
            {events.map(e => (
              <div key={e.title} className="flex items-center gap-4 p-3 rounded-xl bg-sky-50">
                <div className="text-center min-w-[48px]">
                  <p className="text-xs text-slate-400">{e.date}</p>
                  <p className="text-xs font-medium text-slate-600">{e.time}</p>
                </div>
                <div className={`w-1 h-10 rounded-full ${e.color === 'blue' ? 'bg-blue-400' : 'bg-green-400'}`} />
                <p className="text-slate-700 font-medium">{e.title}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-400 text-sm">No events this week — calendar is clear 🎉</p>
        )}
      </div>

      {/* Upcoming milestones */}
      <div className="card">
        <h2 className="font-semibold text-slate-700 mb-4">Upcoming Milestones</h2>
        <div className="space-y-3">
          {[
            { date: 'Mar 1',  title: 'Shopify store launch', type: 'Launch' },
            { date: 'Mar 7',  title: 'First product page live (Shelf)', type: 'Product' },
            { date: 'Mar 14', title: 'Brand content batch #1', type: 'Content' },
            { date: 'Mar 31', title: 'Public Works site v1 live', type: 'Launch' },
          ].map(m => (
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
