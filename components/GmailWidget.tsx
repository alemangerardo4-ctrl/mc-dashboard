export interface Email {
  id: string
  date: string
  from: string
  subject: string
}

interface GmailWidgetProps {
  emails: Email[]
}

export default function GmailWidget({ emails }: GmailWidgetProps) {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-slate-700">📧 Recent Emails</h2>
        <span className="badge-green text-xs">● Live</span>
      </div>
      <div className="space-y-2">
        {emails.map(e => (
          <div key={e.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-sky-50 transition-colors">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold shrink-0">
              {e.from.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-400">{e.from.split('<')[0].trim().substring(0, 25)}</p>
              <p className="text-sm text-slate-700 truncate font-medium">{e.subject}</p>
              <p className="text-xs text-slate-400">{e.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
