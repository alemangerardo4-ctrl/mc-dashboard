export default function Memory() {
  const entries = [
    { date: '2026-02-21', title: 'Day 1 — Brand & MC Setup', body: 'Gerardo onboarded Winston. Brand: Public Works — sustainable, DIY, anti-corporate outdoor gear. Products: bags, shelves, truck camper kits. Set up MC dashboard, connected GitHub (alemangerardo4-ctrl). Reasoning set to high.' },
    { date: '2026-02-21', title: 'Tech stack confirmed', body: 'Next.js 14 + Tailwind + TypeScript. Blue/green brand palette (sky + forest). Local dev at localhost:3000. GitHub CLI authenticated. OpenClaw gateway live.' },
    { date: '2026-02-21', title: 'Key workflow goals', body: 'Figma → code pipeline. CAD-to-manufacture order automation. Headless e-commerce (Shopify). Vercel deploy pipeline. All systems documented and backed up to GitHub.' },
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-brand-blue">Memory</h1>
      <div className="space-y-4">
        {entries.map(e => (
          <div key={e.title} className="card border-l-4 border-brand-blue-mid">
            <div className="flex items-center gap-2 mb-2">
              <span className="badge-blue">{e.date}</span>
              <h3 className="font-semibold text-slate-800">{e.title}</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{e.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
