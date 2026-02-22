export default function Tasks() {
  const tasks = [
    { title: 'Connect Figma MCP for design tokens', status: 'TODO', priority: 'High' },
    { title: 'Set up Vercel deploy pipeline',        status: 'TODO', priority: 'High' },
    { title: 'Build first product page (shelf)',     status: 'TODO', priority: 'High' },
    { title: 'Create brand color system in Tailwind',status: 'DONE', priority: 'High' },
    { title: 'Set up MC dashboard scaffold',         status: 'DONE', priority: 'High' },
    { title: 'Connect GitHub CLI (gh)',              status: 'DONE', priority: 'High' },
    { title: 'Define brand mission statement',       status: 'DONE', priority: 'Medium'},
    { title: 'Research CAD-to-manufacture workflow', status: 'TODO', priority: 'Medium'},
    { title: 'Plan content calendar for launch',     status: 'TODO', priority: 'Medium'},
    { title: 'Set up Shopify or headless store',     status: 'TODO', priority: 'Medium'},
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-blue-900">Tasks</h1>
      <div className="space-y-2">
        {tasks.map(t => (
          <div key={t.title} className="card flex items-center justify-between">
            <p className={t.status === 'DONE' ? 'line-through text-slate-400' : 'text-slate-800'}>{t.title}</p>
            <div className="flex gap-2 ml-4 shrink-0">
              <span className={t.priority === 'High' ? 'badge-blue' : 'badge-gray'}>{t.priority}</span>
              <span className={t.status === 'DONE' ? 'badge-green' : 'badge-gray'}>{t.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
