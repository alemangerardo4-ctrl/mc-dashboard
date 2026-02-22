export default function Projects() {
  const projects = [
    { name: 'public-works website',    status: 'In Progress', priority: 'High',   repo: 'alemangerardo4-ctrl/public-works'   },
    { name: 'aleman-engineer portfolio', status: 'In Progress', priority: 'Medium', repo: 'alemangerardo4-ctrl/aleman-engineer' },
    { name: 'MC Dashboard',            status: 'In Progress', priority: 'High',   repo: 'alemangerardo4-ctrl/mc-dashboard'   },
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-brand-blue">Projects</h1>
      <div className="space-y-3">
        {projects.map(p => (
          <div key={p.name} className="card flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-800">{p.name}</p>
              <p className="text-sm text-slate-400">{p.repo}</p>
            </div>
            <div className="flex gap-2">
              <span className={p.priority === 'High' ? 'badge-blue' : 'badge-gray'}>{p.priority}</span>
              <span className="badge-green">{p.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
