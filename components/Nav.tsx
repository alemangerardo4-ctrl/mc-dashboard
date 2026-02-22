'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  FolderKanban, Brain, FileText, Users, 
  CheckSquare, Image, Calendar, Zap, Home
} from 'lucide-react'
import clsx from 'clsx'

const links = [
  { href: '/',          label: 'Home',      icon: Home          },
  { href: '/projects',  label: 'Projects',  icon: FolderKanban  },
  { href: '/tasks',     label: 'Tasks',     icon: CheckSquare   },
  { href: '/content',   label: 'Content',   icon: Image         },
  { href: '/calendar',  label: 'Calendar',  icon: Calendar      },
  { href: '/memory',    label: 'Memory',    icon: Brain         },
  { href: '/docs',      label: 'Docs',      icon: FileText      },
  { href: '/people',    label: 'People',    icon: Users         },
  { href: '/workflows', label: 'Workflows', icon: Zap           },
]

export default function Nav() {
  const path = usePathname()
  return (
    <header className="bg-white border-b border-sky-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-2">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 mr-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-forest-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">PW</span>
            </div>
            <span className="font-bold text-brand-blue hidden sm:block">Public Works</span>
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  'flex items-center gap-1.5 text-sm whitespace-nowrap px-3 py-1.5 rounded-lg transition-colors',
                  path === href
                    ? 'bg-sky-50 text-brand-blue font-semibold'
                    : 'text-slate-500 hover:text-brand-blue hover:bg-sky-50'
                )}
              >
                <Icon size={15} />
                <span className="hidden md:block">{label}</span>
              </Link>
            ))}
          </nav>

          {/* Status badge */}
          <div className="ml-auto flex items-center gap-2">
            <span className="badge-green text-xs">● Live</span>
          </div>
        </div>
      </div>
    </header>
  )
}
