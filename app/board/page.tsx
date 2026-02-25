'use client'

import { useState } from 'react'

export default function Board() {
  const [selectedTask, setSelectedTask] = useState<any>(null)
  const [filter, setFilter] = useState('all')

  const tasks = [
    // TO DO
    {
      id: 'pw-001',
      title: 'Figma design system',
      status: 'todo',
      priority: 'P0',
      project: 'public-works',
      tags: ['design', 'figma'],
      owner: 'Gerardo',
      assignedAgent: 'research',
      model: 'N/A',
      reasoning: 'N/A',
      subAgents: [],
      dueDate: '2026-02-25',
      description: 'Build complete design system with colors, typography, components',
      progress: 0,
    },
    {
      id: 'pw-002',
      title: 'Shopify product catalog',
      status: 'todo',
      priority: 'P0',
      project: 'public-works',
      tags: ['dev', 'shopify'],
      owner: 'Winston',
      assignedAgent: 'sonnet',
      model: 'claude-sonnet-4.6',
      reasoning: 'high',
      subAgents: ['haiku-api', 'research-content'],
      dueDate: '2026-02-26',
      description: 'Create product pages for Shelf, Bag, Truck Camper Kit',
      progress: 0,
    },

    // IN PROGRESS
    {
      id: 'ao-001',
      title: 'Coming soon page',
      status: 'inprogress',
      priority: 'P0',
      project: 'aleman-engineer',
      tags: ['dev', 'marketing'],
      owner: 'Winston',
      assignedAgent: 'haiku',
      model: 'claude-haiku-4.5',
      reasoning: 'low',
      subAgents: [],
      dueDate: '2026-02-24',
      description: 'Landing page with hero image and email capture',
      progress: 100,
    },
    {
      id: 'pw-003',
      title: 'Coming soon page',
      status: 'inprogress',
      priority: 'P0',
      project: 'public-works',
      tags: ['dev', 'marketing'],
      owner: 'Winston',
      assignedAgent: 'haiku',
      model: 'claude-haiku-4.5',
      reasoning: 'low',
      subAgents: [],
      dueDate: '2026-02-24',
      description: 'Landing page with hero image and email capture',
      progress: 100,
    },

    // IN REVIEW
    {
      id: 'mc-001',
      title: 'Kanban board upgrade',
      status: 'review',
      priority: 'P0',
      project: 'mc-dashboard',
      tags: ['dev', 'design'],
      owner: 'Winston',
      assignedAgent: 'sonnet',
      model: 'claude-sonnet-4.6',
      reasoning: 'high',
      subAgents: ['haiku-ui', 'research-ux'],
      dueDate: '2026-02-25',
      description: 'Jira-style board with hierarchical workflow and agent matrix',
      progress: 80,
    },

    // DONE
    {
      id: 'infra-001',
      title: 'Discord orchestration',
      status: 'done',
      priority: 'P0',
      project: 'infrastructure',
      tags: ['ops', 'automation'],
      owner: 'Winston',
      assignedAgent: 'haiku',
      model: 'claude-haiku-4.5',
      reasoning: 'low',
      subAgents: [],
      dueDate: '2026-02-24',
      description: 'Bot setup + channel orchestration + comms routing',
      progress: 100,
    },
  ]

  const columns = [
    { id: 'todo', label: 'TO DO', color: 'bg-slate-50' },
    { id: 'inprogress', label: 'IN PROGRESS', color: 'bg-yellow-50' },
    { id: 'review', label: 'IN REVIEW', color: 'bg-blue-50' },
    { id: 'done', label: 'DONE', color: 'bg-green-50' },
  ]

  const statusBg: Record<string, string> = {
    todo: 'bg-slate-100',
    inprogress: 'bg-yellow-100 text-yellow-700',
    review: 'bg-blue-100 text-blue-700',
    done: 'bg-green-100 text-green-700',
  }

  const priorityColor: Record<string, string> = {
    P0: 'bg-red-100 text-red-700',
    P1: 'bg-orange-100 text-orange-700',
    P2: 'bg-yellow-100 text-yellow-700',
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-blue-900">Board</h1>
          <p className="text-slate-500 text-sm mt-1">Jira-style workflow · Hierarchical · Agent-driven</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded text-sm font-medium ${filter === 'all' ? 'bg-blue-900 text-white' : 'bg-slate-200 text-slate-700'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('dev')}
            className={`px-3 py-1 rounded text-sm font-medium ${filter === 'dev' ? 'bg-blue-900 text-white' : 'bg-slate-200 text-slate-700'}`}
          >
            Dev
          </button>
          <button
            onClick={() => setFilter('design')}
            className={`px-3 py-1 rounded text-sm font-medium ${filter === 'design' ? 'bg-blue-900 text-white' : 'bg-slate-200 text-slate-700'}`}
          >
            Design
          </button>
        </div>
      </div>

      {/* Main Board */}
      <div className="grid grid-cols-4 gap-4">
        {columns.map(col => (
          <div key={col.id} className={`${col.color} rounded-lg p-4 min-h-[600px]`}>
            <h2 className="font-semibold text-slate-700 mb-4 text-sm">
              {col.label}
              <span className="ml-2 text-xs text-slate-500">
                ({tasks.filter(t => t.status === col.id).length})
              </span>
            </h2>
            <div className="space-y-3">
              {tasks
                .filter(t => t.status === col.id)
                .filter(t => filter === 'all' || t.tags.includes(filter))
                .map(task => (
                  <button
                    key={task.id}
                    onClick={() => setSelectedTask(task)}
                    className="w-full p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-900 transition text-left space-y-2 shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold text-sm text-slate-800 flex-1">{task.title}</p>
                      <span className={`text-xs px-2 py-0.5 rounded flex-shrink-0 ${priorityColor[task.priority]}`}>
                        {task.priority}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {task.tags.map(tag => (
                        <span key={tag} className="text-xs px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1.5">
                      <div
                        className="bg-blue-900 h-1.5 rounded-full transition-all"
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <div className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-semibold">
                        {task.owner[0]}
                      </div>
                      <span className="text-xs text-slate-500">{task.project}</span>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Task Detail Panel */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black/50 flex items-end z-50">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-2xl p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-blue-900">{selectedTask.title}</h2>
              <button
                onClick={() => setSelectedTask(null)}
                className="text-2xl text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>

            {/* Status & Priority */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-slate-500 mb-1">Status</p>
                <span className={`text-sm px-3 py-1 rounded inline-block font-semibold ${statusBg[selectedTask.status]}`}>
                  {selectedTask.status.toUpperCase()}
                </span>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Priority</p>
                <span className={`text-sm px-3 py-1 rounded inline-block font-semibold ${priorityColor[selectedTask.priority]}`}>
                  {selectedTask.priority}
                </span>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Due Date</p>
                <p className="text-sm font-medium">{selectedTask.dueDate}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-xs text-slate-500 mb-2">Description</p>
              <p className="text-slate-700">{selectedTask.description}</p>
            </div>

            {/* 🤖 Sub-Agent & Model Matrix (New!) */}
            <div className="border-t pt-4 space-y-3">
              <h3 className="font-semibold text-slate-700 flex items-center gap-2">
                🤖 Execution Matrix
              </h3>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500">Primary Agent</p>
                    <p className="font-semibold text-slate-800">{selectedTask.assignedAgent}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Model</p>
                    <p className="font-mono text-sm text-blue-600">{selectedTask.model}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Reasoning</p>
                    <span className={`inline-block text-xs px-2 py-1 rounded ${selectedTask.reasoning === 'high' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                      {selectedTask.reasoning}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Owner</p>
                    <p className="font-semibold text-slate-800">{selectedTask.owner}</p>
                  </div>
                </div>

                {selectedTask.subAgents.length > 0 && (
                  <div className="pt-2 border-t">
                    <p className="text-xs text-slate-500 mb-2">Sub-Agents</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedTask.subAgents.map((agent: any) => (
                        <span key={agent} className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700 font-mono">
                          {agent}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className="border-t pt-4">
              <p className="text-xs text-slate-500 mb-2">Tags</p>
              <div className="flex flex-wrap gap-2">
                {selectedTask.tags.map((tag: any) => (
                  <span key={tag} className="px-3 py-1 rounded bg-slate-100 text-slate-700 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="border-t pt-4 flex gap-2">
              <button className="flex-1 px-4 py-2 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-800 transition">
                Edit Task
              </button>
              <button
                onClick={() => setSelectedTask(null)}
                className="flex-1 px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
