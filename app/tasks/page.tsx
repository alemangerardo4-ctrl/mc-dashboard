'use client'
import { useState } from 'react'
import clsx from 'clsx'

type Priority = 'High' | 'Medium' | 'Low'
type Category = 'Dev' | 'Design' | 'Marketing' | 'Ops' | 'Product'
type Status = 'Backlog' | 'Todo' | 'In Progress' | 'Done'

interface Task {
  id: string
  title: string
  priority: Priority
  category: Category
  est: string
  status: Status
  notes?: string
}

const initialTasks: Task[] = [
  // Done
  { id: '1',  title: 'OpenClaw gateway live',              priority: 'High',   category: 'Ops',       est: '30 min',  status: 'Done',       notes: 'Day 1' },
  { id: '2',  title: 'GitHub CLI authenticated',           priority: 'High',   category: 'Dev',       est: '10 min',  status: 'Done',       notes: 'Day 1' },
  { id: '3',  title: 'MC Dashboard scaffold (Next.js)',    priority: 'High',   category: 'Dev',       est: '2 hrs',   status: 'Done',       notes: 'Day 1' },
  { id: '4',  title: 'Brand palette — sky + forest',       priority: 'High',   category: 'Design',    est: '20 min',  status: 'Done',       notes: 'Day 1' },
  { id: '5',  title: 'Vercel deploy pipeline',             priority: 'High',   category: 'Dev',       est: '20 min',  status: 'Done',       notes: 'Day 2' },
  { id: '6',  title: 'Brave Search API upgraded',         priority: 'Medium', category: 'Ops',       est: '5 min',   status: 'Done',       notes: 'Day 2' },
  { id: '7',  title: 'Google Workspace connected (gog)',  priority: 'High',   category: 'Ops',       est: '20 min',  status: 'Done',       notes: 'Day 2' },
  { id: '8',  title: 'Telegram dual-channel connected',   priority: 'High',   category: 'Ops',       est: '10 min',  status: 'Done',       notes: 'Day 2' },

  // In Progress
  { id: '9',  title: 'Kanban board in Mission Control',   priority: 'High',   category: 'Dev',       est: '45 min',  status: 'In Progress' },
  { id: '10', title: 'Figma MCP design token pipeline',  priority: 'High',   category: 'Design',    est: '30 min',  status: 'In Progress' },

  // Todo
  { id: '11', title: 'Shopify store setup',              priority: 'High',   category: 'Product',   est: '45 min',  status: 'Todo' },
  { id: '12', title: 'First product page — shelf',       priority: 'High',   category: 'Product',   est: '1 hr',    status: 'Todo' },
  { id: '13', title: 'Shopify Storefront API integration',priority: 'High',  category: 'Dev',       est: '2 hrs',   status: 'Todo' },
  { id: '14', title: 'Google Calendar live in MC',       priority: 'Medium', category: 'Dev',       est: '30 min',  status: 'Todo' },
  { id: '15', title: 'Gmail widget on dashboard',        priority: 'Medium', category: 'Dev',       est: '30 min',  status: 'Todo' },
  { id: '16', title: 'CAD-to-manufacture workflow plan', priority: 'High',   category: 'Ops',       est: '1 hr',    status: 'Todo' },
  { id: '17', title: 'Brand photography shot list',      priority: 'Medium', category: 'Marketing', est: '30 min',  status: 'Todo' },
  { id: '18', title: 'Content calendar — March',        priority: 'Medium', category: 'Marketing', est: '45 min',  status: 'Todo' },

  // Backlog
  { id: '19', title: 'X/Twitter skill — brand posts',   priority: 'Medium', category: 'Marketing', est: '30 min',  status: 'Backlog' },
  { id: '20', title: 'Public Works portfolio page',      priority: 'Medium', category: 'Design',    est: '2 hrs',   status: 'Backlog' },
  { id: '21', title: 'Order webhook → CAD queue',        priority: 'High',   category: 'Dev',       est: '3 hrs',   status: 'Backlog' },
  { id: '22', title: 'Truck camper kit product page',   priority: 'Medium', category: 'Product',   est: '1 hr',    status: 'Backlog' },
  { id: '23', title: 'Brand bag product page',          priority: 'Medium', category: 'Product',   est: '1 hr',    status: 'Backlog' },
  { id: '24', title: 'aleman-engineer portfolio v1',    priority: 'Low',    category: 'Dev',       est: '3 hrs',   status: 'Backlog' },
]

const columns: { status: Status; label: string; color: string; bg: string }[] = [
  { status: 'Backlog',     label: 'Backlog',      color: 'text-slate-500',  bg: 'bg-slate-100'  },
  { status: 'Todo',        label: 'To Do',        color: 'text-blue-700',   bg: 'bg-sky-100'    },
  { status: 'In Progress', label: 'In Progress',  color: 'text-yellow-700', bg: 'bg-yellow-100' },
  { status: 'Done',        label: 'Done ✓',       color: 'text-green-700',  bg: 'bg-green-100'  },
]

const priorityColors: Record<Priority, string> = {
  High:   'bg-red-100 text-red-600',
  Medium: 'bg-sky-100 text-sky-700',
  Low:    'bg-slate-100 text-slate-500',
}

const categoryColors: Record<Category, string> = {
  Dev:       'bg-violet-100 text-violet-700',
  Design:    'bg-pink-100 text-pink-700',
  Marketing: 'bg-orange-100 text-orange-700',
  Ops:       'bg-teal-100 text-teal-700',
  Product:   'bg-blue-100 text-blue-700',
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [filter, setFilter] = useState<Category | 'All'>('All')

  const filtered = filter === 'All' ? tasks : tasks.filter(t => t.category === filter)

  const move = (id: string, status: Status) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status } : t))
  }

  const counts = columns.map(col => ({
    ...col,
    count: filtered.filter(t => t.status === col.status).length
  }))

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-blue-900">Tasks</h1>
          <p className="text-sm text-slate-400">{tasks.filter(t => t.status === 'Done').length} done · {tasks.filter(t => t.status !== 'Done').length} remaining</p>
        </div>
        {/* Category filter */}
        <div className="flex gap-2 flex-wrap">
          {(['All', 'Dev', 'Design', 'Marketing', 'Ops', 'Product'] as const).map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={clsx(
                'px-3 py-1 rounded-full text-xs font-medium transition-colors',
                filter === c
                  ? 'bg-blue-900 text-white'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Day 2 scoreboard */}
      <div className="card bg-gradient-to-r from-sky-50 to-green-50 border-l-4 border-green-500">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-semibold text-slate-700">Day 2 Scoreboard</h2>
          <span className="badge-green">Feb 22</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Brave Search',     done: true,  est: '5 min'  },
            { label: 'Vercel Deploy',    done: true,  est: '20 min' },
            { label: 'Google (gog)',     done: true,  est: '20 min' },
            { label: 'Kanban Board',     done: true,  est: '45 min' },
            { label: 'Shopify Store',    done: false, est: '45 min' },
            { label: 'Figma MCP',        done: false, est: '30 min' },
            { label: 'Product Page',     done: false, est: '1 hr'   },
            { label: 'Content Calendar', done: false, est: '45 min' },
          ].map(w => (
            <div key={w.label} className={clsx(
              'flex items-center gap-2 px-3 py-2 rounded-xl text-sm',
              w.done ? 'bg-green-50 text-green-700' : 'bg-white text-slate-500'
            )}>
              <span>{w.done ? '✅' : '⬜'}</span>
              <div>
                <p className="font-medium leading-tight">{w.label}</p>
                <p className="text-xs opacity-60">{w.est}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {counts.map(col => (
          <div key={col.status} className="space-y-3">
            {/* Column header */}
            <div className={clsx('px-3 py-2 rounded-xl flex items-center justify-between', col.bg)}>
              <span className={clsx('font-semibold text-sm', col.color)}>{col.label}</span>
              <span className={clsx('text-xs font-bold px-2 py-0.5 rounded-full bg-white', col.color)}>
                {col.count}
              </span>
            </div>

            {/* Task cards */}
            <div className="space-y-2 min-h-[100px]">
              {filtered
                .filter(t => t.status === col.status)
                .map(task => (
                  <div key={task.id} className="card p-4 space-y-2 group">
                    {/* Title */}
                    <p className="text-sm font-semibold text-slate-800 leading-snug">{task.title}</p>

                    {/* Meta row */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={clsx('badge text-xs', priorityColors[task.priority])}>
                        {task.priority}
                      </span>
                      <span className={clsx('badge text-xs', categoryColors[task.category])}>
                        {task.category}
                      </span>
                      <span className="badge bg-slate-50 text-slate-400 text-xs ml-auto">
                        ⏱ {task.est}
                      </span>
                    </div>

                    {/* Notes */}
                    {task.notes && (
                      <p className="text-xs text-slate-400">{task.notes}</p>
                    )}

                    {/* Move buttons */}
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {col.status !== 'Backlog' && (
                        <button
                          onClick={() => move(task.id, columns[columns.findIndex(c => c.status === col.status) - 1].status)}
                          className="text-xs px-2 py-1 rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
                        >
                          ← Back
                        </button>
                      )}
                      {col.status !== 'Done' && (
                        <button
                          onClick={() => move(task.id, columns[columns.findIndex(c => c.status === col.status) + 1].status)}
                          className="text-xs px-2 py-1 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors ml-auto"
                        >
                          Move →
                        </button>
                      )}
                    </div>
                  </div>
                ))}

              {filtered.filter(t => t.status === col.status).length === 0 && (
                <div className="border-2 border-dashed border-slate-100 rounded-xl h-[80px] flex items-center justify-center">
                  <span className="text-xs text-slate-300">Empty</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
