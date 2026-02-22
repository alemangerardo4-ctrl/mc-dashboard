import Card from '@/components/Card'
import StatCard from '@/components/StatCard'
import { 
  FolderKanban, Brain, FileText, Users, 
  CheckSquare, Image, Calendar, Zap 
} from 'lucide-react'

const modules = [
  { title: 'Projects',   href: '/projects',  icon: FolderKanban, color: 'blue',  desc: 'Track active brand + product builds'       },
  { title: 'Tasks',      href: '/tasks',     icon: CheckSquare,  color: 'green', desc: 'Daily to-dos and sprint backlog'             },
  { title: 'Content',    href: '/content',   icon: Image,        color: 'blue',  desc: 'Photo, video, copy pipeline'                 },
  { title: 'Calendar',   href: '/calendar',  icon: Calendar,     color: 'green', desc: 'Launches, deadlines, content drops'          },
  { title: 'Memory',     href: '/memory',    icon: Brain,        color: 'blue',  desc: 'Decisions, research, lessons learned'        },
  { title: 'Docs',       href: '/docs',      icon: FileText,     color: 'green', desc: 'SOPs, specs, brand guidelines'               },
  { title: 'People',     href: '/people',    icon: Users,        color: 'blue',  desc: 'Vendors, partners, contacts'                 },
  { title: 'Workflows',  href: '/workflows', icon: Zap,          color: 'green', desc: 'Automation — Figma → code, order → ship'    },
]

const stats = [
  { label: 'Active Projects', value: '3',    color: 'blue'  },
  { label: 'Open Tasks',      value: '12',   color: 'green' },
  { label: 'Content Pieces',  value: '5',    color: 'blue'  },
  { label: 'This Week',       value: 'Day 1',color: 'green' },
]

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-brand-blue">Mission Control</h1>
          <p className="text-slate-500 mt-1">Public Works — Sustainable outdoor gear, built to last.</p>
        </div>
        <span className="badge-green text-sm px-3 py-1">Day 1 🚀</span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map(s => <StatCard key={s.label} {...s} />)}
      </div>

      {/* Mission statement */}
      <div className="card border-l-4 border-forest-600 bg-gradient-to-r from-forest-50 to-sky-50">
        <h2 className="font-semibold text-forest-700 mb-1">Mission</h2>
        <p className="text-slate-700 leading-relaxed">
          Build a sustainable, DIY-first outdoor brand that ships world-class products with automated workflows, 
          durable documentation, and a lifetime knowledge base. Sky and forest. Anti-corporate. Real.
        </p>
      </div>

      {/* Module grid */}
      <div>
        <h2 className="text-lg font-semibold text-slate-700 mb-4">Command Center</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map(m => (
            <Card key={m.title} {...m} />
          ))}
        </div>
      </div>

      {/* Quick wins */}
      <div className="card">
        <h2 className="font-semibold text-brand-blue mb-3">Today&apos;s Quick Wins</h2>
        <ul className="space-y-2 text-slate-700">
          <li className="flex items-center gap-2"><span className="badge-green">✓</span> OpenClaw gateway online</li>
          <li className="flex items-center gap-2"><span className="badge-green">✓</span> GitHub connected — alemangerardo4-ctrl</li>
          <li className="flex items-center gap-2"><span className="badge-green">✓</span> Mission Control scaffold live</li>
          <li className="flex items-center gap-2"><span className="badge-blue">→</span> Connect Figma MCP for design tokens</li>
          <li className="flex items-center gap-2"><span className="badge-blue">→</span> Set up Vercel deploy pipeline</li>
          <li className="flex items-center gap-2"><span className="badge-blue">→</span> Build first product page (public-works)</li>
        </ul>
      </div>
    </div>
  )
}
