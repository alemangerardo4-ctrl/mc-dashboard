import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import clsx from 'clsx'

interface CardProps {
  title: string
  href: string
  icon: LucideIcon
  color: 'blue' | 'green'
  desc: string
}

export default function Card({ title, href, icon: Icon, color, desc }: CardProps) {
  return (
    <Link href={href} className="card group cursor-pointer block">
      <div className={clsx(
        'w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors',
        color === 'blue'
          ? 'bg-sky-100 text-brand-blue group-hover:bg-sky-200'
          : 'bg-forest-100 text-forest-600 group-hover:bg-forest-200'
      )}>
        <Icon size={20} />
      </div>
      <h3 className="font-semibold text-slate-800 group-hover:text-brand-blue transition-colors">{title}</h3>
      <p className="text-sm text-slate-500 mt-1 leading-snug">{desc}</p>
    </Link>
  )
}
