export default function ContentPage() {
  const pipeline = [
    {
      stage: 'Brief',
      color: 'bg-slate-100 text-slate-600',
      items: [
        { title: 'Shelf product hero shots', type: 'Photo' },
        { title: 'Brand story — origin video', type: 'Video' },
      ]
    },
    {
      stage: 'Shoot',
      color: 'bg-sky-100 text-sky-700',
      items: [
        { title: 'Truck camper kit lifestyle', type: 'Photo' },
      ]
    },
    {
      stage: 'Edit',
      color: 'bg-yellow-100 text-yellow-700',
      items: [
        { title: 'Brand logo + color system', type: 'Design' },
      ]
    },
    {
      stage: 'Approve',
      color: 'bg-orange-100 text-orange-700',
      items: []
    },
    {
      stage: 'Published',
      color: 'bg-green-100 text-green-700',
      items: [
        { title: 'MC Dashboard v1', type: 'Dev' },
      ]
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-blue-900">Content Pipeline</h1>

      {/* Kanban board */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {pipeline.map(col => (
          <div key={col.stage} className="space-y-3">
            <div className={`px-3 py-1.5 rounded-lg text-sm font-semibold text-center ${col.color}`}>
              {col.stage}
            </div>
            <div className="space-y-2 min-h-[120px]">
              {col.items.map(item => (
                <div key={item.title} className="card p-3 space-y-1">
                  <p className="text-sm font-medium text-slate-700 leading-snug">{item.title}</p>
                  <span className="badge-blue text-xs">{item.type}</span>
                </div>
              ))}
              {col.items.length === 0 && (
                <div className="border-2 border-dashed border-slate-100 rounded-xl h-[80px] flex items-center justify-center">
                  <span className="text-xs text-slate-300">Empty</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Content types legend */}
      <div className="card">
        <h2 className="font-semibold text-slate-700 mb-3">Content Types</h2>
        <div className="flex flex-wrap gap-2">
          {['Photo', 'Video', 'Design', 'Copy', 'Dev', 'Social'].map(t => (
            <span key={t} className="badge-blue">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
