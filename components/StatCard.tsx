import clsx from 'clsx'

interface StatCardProps {
  label: string
  value: string
  color: 'blue' | 'green'
}

export default function StatCard({ label, value, color }: StatCardProps) {
  return (
    <div className={clsx(
      'rounded-2xl p-4 text-center',
      color === 'blue' ? 'bg-sky-50 border border-sky-100' : 'bg-forest-50 border border-forest-100'
    )}>
      <p className={clsx(
        'text-2xl font-bold',
        color === 'blue' ? 'text-brand-blue' : 'text-forest-700'
      )}>{value}</p>
      <p className="text-xs text-slate-500 mt-1">{label}</p>
    </div>
  )
}
