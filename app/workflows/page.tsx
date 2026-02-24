export default function Workflows() {
  const workflows = [
    {
      name: 'Figma → Code',
      status: 'In Progress',
      desc: 'Extract design tokens → Tailwind config → component scaffolds',
      steps: [
        { label: 'Generate Figma PAT',         done: false, owner: 'Gerardo' },
        { label: 'Install MCP server',          done: false, owner: 'Winston' },
        { label: 'Configure OpenClaw MCP',      done: false, owner: 'Winston' },
        { label: 'Create Figma design file',    done: false, owner: 'Gerardo' },
        { label: 'Extract + transform tokens',  done: false, owner: 'Winston' },
        { label: 'Wire to MC + automate',       done: false, owner: 'Winston' },
      ],
      playbook: '/integrations/figma/PLAYBOOK.md',
      blocker: 'Waiting on Figma PAT + file from Gerardo',
    },
    {
      name: 'Google Calendar → MC',
      status: 'Live',
      desc: 'gog calendar live feed → MC Calendar page → 14-day event view',
      steps: [
        { label: 'gog auth connected',             done: true,  owner: 'Winston' },
        { label: 'API route /api/calendar',        done: true,  owner: 'Winston' },
        { label: 'Live calendar widget',           done: true,  owner: 'Winston' },
        { label: 'Recurring 9am brief event',      done: true,  owner: 'Winston' },
        { label: 'Invite sent to alemangerardo4',  done: true,  owner: 'Winston' },
      ],
      playbook: null,
      blocker: null,
    },
    {
      name: 'GitHub → Vercel Deploy',
      status: 'Live',
      desc: 'Push to main → CI lint/build → Vercel preview → production',
      steps: [
        { label: 'GitHub CLI authenticated',     done: true,  owner: 'Winston' },
        { label: 'Vercel project linked',        done: true,  owner: 'Winston' },
        { label: 'Auto-deploy on push to main',  done: true,  owner: 'Winston' },
      ],
      playbook: null,
      blocker: null,
    },
    {
      name: 'Order → Manufacture',
      status: 'Planned',
      desc: 'Sale online → CAD file trigger → manufacturing queue → ship',
      steps: [],
      playbook: null,
      blocker: 'Shopify store must be live first',
    },
    {
      name: 'Content Pipeline',
      status: 'Planned',
      desc: 'Brief → shoot → edit → approve → publish → schedule',
      steps: [],
      playbook: null,
      blocker: 'Pending brand photography shot list',
    },
  ]

  const statusStyle: Record<string, string> = {
    'Live':        'bg-green-100 text-green-700',
    'In Progress': 'bg-yellow-100 text-yellow-700',
    'Planned':     'bg-slate-100 text-slate-500',
  }

  const borderStyle: Record<string, string> = {
    'Live':        'border-green-500',
    'In Progress': 'border-yellow-400',
    'Planned':     'border-slate-200',
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-blue-900">Workflows</h1>
        <p className="text-slate-500 text-sm mt-1">Automation pipelines — each with its own playbook + step tracker</p>
      </div>

      <div className="space-y-4">
        {workflows.map(w => (
          <div key={w.name} className={`card border-l-4 ${borderStyle[w.status]}`}>

            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-slate-800 text-base">{w.name}</p>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyle[w.status]}`}>
                {w.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-500 mb-3">{w.desc}</p>

            {/* Step tracker */}
            {w.steps.length > 0 && (
              <div className="space-y-1.5 mb-3">
                {w.steps.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className={s.done ? 'text-green-500' : 'text-slate-300'}>
                      {s.done ? '✅' : '⬜'}
                    </span>
                    <span className={s.done ? 'text-slate-500 line-through' : 'text-slate-700'}>
                      {s.label}
                    </span>
                    <span className="ml-auto text-xs text-slate-400">{s.owner}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center gap-4 flex-wrap">
              {w.blocker && (
                <p className="text-xs text-yellow-600 bg-yellow-50 px-3 py-1 rounded-lg">
                  🚧 {w.blocker}
                </p>
              )}
              {w.playbook && (
                <p className="text-xs text-blue-600 bg-sky-50 px-3 py-1 rounded-lg">
                  📋 Playbook: {w.playbook}
                </p>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
