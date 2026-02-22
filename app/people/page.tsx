export default function People() {
  const people = [
    { name: 'Gerardo Aleman', role: 'Founder / ME',       status: 'Active' },
    { name: 'Winston',        role: 'AI Partner / Dev',   status: 'Active' },
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-brand-blue">People</h1>
      <div className="space-y-3">
        {people.map(p => (
          <div key={p.name} className="card flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-forest-600 flex items-center justify-center text-white font-bold text-sm">
                {p.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-slate-800">{p.name}</p>
                <p className="text-xs text-slate-400">{p.role}</p>
              </div>
            </div>
            <span className="badge-green">{p.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
