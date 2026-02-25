'use client'

import { useState } from 'react'

export default function Kanban() {
  const [tasks] = useState([
    {
      id: 'p0-1',
      title: 'Product pages live (Shelf, Bag, Truck Camper)',
      status: 'In Progress',
      priority: 'P0',
      owner: 'Winston',
      model: 'claude-sonnet-4.6',
      reasoning: 'high',
      points: 13,
      tags: ['Dev', 'Shopify'],
      dueDate: '2026-02-25',
    },
    {
      id: 'p0-2',
      title: 'Figma tokens → Tailwind sync',
      status: 'Ready',
      priority: 'P0',
      owner: 'Winston',
      model: 'claude-sonnet-4.6',
      reasoning: 'high',
      points: 8,
      tags: ['Design', 'Automation'],
      dueDate: '2026-02-25',
    },
    {
      id: 'p1-1',
      title: 'MC Shopify widget (products + pricing)',
      status: 'Ready',
      priority: 'P1',
      owner: 'Winston',
      model: 'claude-haiku-4.5',
      reasoning: 'low',
      points: 5,
      tags: ['Dev', 'Dashboard'],
      dueDate: '2026-02-25',
    },
    {
      id: 'p1-2',
      title: 'GitHub repo status widget (live)',
      status: 'In Progress',
      priority: 'P1',
      owner: 'Winston',
      model: 'claude-haiku-4.5',
      reasoning: 'low',
      points: 5,
      tags: ['Dev', 'Dashboard'],
      dueDate: '2026-02-25',
    },
  ])

  const columns = {
    'Ready': 'Sprint Ready',
    'In Progress': 'In Progress',
    'Blocked': 'Blocked',
    'Done': 'Done',
  }

  const priorityColor: Record<string, string> = {
    'P0': 'bg-red-100 text-red-700',
    'P1': 'bg-orange-100 text-orange-700',
    'P2': 'bg-yellow-100 text-yellow-700',
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-blue-900">Sprint Kanban</h1>
        <p className="text-slate-500 text-sm mt-1">Jira-style with Agent/Model matrix</p>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-2 px-2 font-semibold text-slate-600">Task</th>
              <th className="text-left py-2 px-2 font-semibold text-slate-600">Owner</th>
              <th className="text-left py-2 px-2 font-semibold text-slate-600">Model</th>
              <th className="text-left py-2 px-2 font-semibold text-slate-600">Reasoning</th>
              <th className="text-left py-2 px-2 font-semibold text-slate-600">Points</th>
              <th className="text-left py-2 px-2 font-semibold text-slate-600">Due</th>
              <th className="text-left py-2 px-2 font-semibold text-slate-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(t => (
              <tr key={t.id} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="py-2 px-2 text-slate-700 font-medium">{t.title}</td>
                <td className="py-2 px-2 text-xs">{t.owner}</td>
                <td className="py-2 px-2 text-xs font-mono text-blue-600">{t.model.split('-')[2]}</td>
                <td className="py-2 px-2"><span className={`text-xs px-2 py-0.5 rounded ${t.reasoning === 'high' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>{t.reasoning}</span></td>
                <td className="py-2 px-2 font-semibold">{t.points}pt</td>
                <td className="py-2 px-2 text-xs text-slate-500">{t.dueDate}</td>
                <td className="py-2 px-2"><span className={`text-xs px-2 py-0.5 rounded ${priorityColor[t.priority]}`}>{t.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
