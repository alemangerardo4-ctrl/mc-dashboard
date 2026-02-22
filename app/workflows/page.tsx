export default function Workflows() {
  const workflows = [
    { name: 'Figma → Code',           status: 'Planned', desc: 'Extract design tokens → Tailwind config → component scaffolds' },
    { name: 'Order → Manufacture',    status: 'Planned', desc: 'Sale online → CAD file trigger → manufacturing queue → ship' },
    { name: 'GitHub → Vercel Deploy', status: 'Planned', desc: 'Push to main → CI lint/build → Vercel preview → production' },
    { name: 'Content Pipeline',       status: 'Planned', desc: 'Brief → shoot → edit → approve → publish → schedule' },
    { name: 'Bootstrap Repo',         status: 'Live',    desc: 'gh repo create → scaffold → push templates → CI setup' },
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-blue-900">Workflows</h1>
      <div className="space-y-3">
        {workflows.map(w => (
          <div key={w.name} className="card border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-1">
              <p className="font-semibold text-slate-800">{w.name}</p>
              <span className={w.status === 'Live' ? 'badge-green' : 'badge-gray'}>{w.status}</span>
            </div>
            <p className="text-sm text-slate-500">{w.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
