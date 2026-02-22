export default function Docs() {
  const docs = [
    { title: 'Mission Control Master',    category: 'Operations', status: 'Live' },
    { title: 'Brand Guidelines',          category: 'Brand',      status: 'Draft' },
    { title: 'Product Spec — Shelf',      category: 'Product',    status: 'Draft' },
    { title: 'CAD-to-Manufacture Flow',   category: 'Operations', status: 'Draft' },
    { title: 'Content Plan Template',     category: 'Marketing',  status: 'Draft' },
    { title: 'GitHub Workflow Guide',     category: 'Dev',        status: 'Live'  },
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-brand-blue">Docs</h1>
      <div className="space-y-3">
        {docs.map(d => (
          <div key={d.title} className="card flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-800">{d.title}</p>
              <p className="text-xs text-slate-400">{d.category}</p>
            </div>
            <span className={d.status === 'Live' ? 'badge-green' : 'badge-gray'}>{d.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
