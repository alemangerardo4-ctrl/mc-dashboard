'use client'

import { useState } from 'react'

export default function Content() {
  const [activeTab, setActiveTab] = useState('images')

  const assets = {
    images: [
      { id: 'hero-1', name: 'outdoor-00.jpg', category: 'hero', size: '2.4 MB', uploaded: '2026-02-24' },
      { id: 'shelf-1', name: 'shelf-000.jpg', category: 'shelf', size: '1.8 MB', uploaded: '2026-02-24' },
      { id: 'shelf-2', name: 'shelf-001.jpg', category: 'shelf', size: '1.9 MB', uploaded: '2026-02-24' },
      { id: 'bag-1', name: 'bag-000.jpg', category: 'bag', size: '2.1 MB', uploaded: '2026-02-24' },
      { id: 'camper-1', name: 'camper-000.jpg', category: 'camper', size: '2.3 MB', uploaded: '2026-02-24' },
    ],
    documents: [
      { id: 'brand-1', name: 'Brand Asset Analysis.md', type: 'markdown', size: '48 KB', uploaded: '2026-02-24' },
      { id: 'design-1', name: 'Figma Design Brief.txt', type: 'text', size: '12 KB', uploaded: '2026-02-24' },
    ],
    videos: [],
  }

  const categories = ['all', 'hero', 'shelf', 'bag', 'camper', 'accessories']

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-blue-900">Content Library</h1>
        <p className="text-slate-500 text-sm mt-1">All brand assets, images, and documents</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-200">
        {['images', 'documents', 'videos'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium border-b-2 transition ${
              activeTab === tab
                ? 'border-blue-900 text-blue-900'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            <span className="ml-2 text-xs text-slate-500">({assets[tab as keyof typeof assets].length})</span>
          </button>
        ))}
      </div>

      {/* Images Tab */}
      {activeTab === 'images' && (
        <div className="space-y-4">
          {/* Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                className="px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 hover:bg-blue-900 hover:text-white transition"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {assets.images.map(img => (
              <div key={img.id} className="space-y-2">
                <div className="bg-slate-100 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl">📷</p>
                    <p className="text-xs text-slate-500 mt-1">{img.category}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800 truncate">{img.name}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{img.size}</span>
                    <span>{img.uploaded}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="border-t pt-4 grid grid-cols-4 gap-4">
            <div className="bg-sky-50 rounded-lg p-4">
              <p className="text-xs text-slate-600">Total Images</p>
              <p className="text-2xl font-bold text-blue-900">256</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-xs text-slate-600">Hero Shots</p>
              <p className="text-2xl font-bold text-green-700">22</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <p className="text-xs text-slate-600">Product Photos</p>
              <p className="text-2xl font-bold text-orange-700">234</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-xs text-slate-600">Total Storage</p>
              <p className="text-2xl font-bold text-purple-700">~600 MB</p>
            </div>
          </div>
        </div>
      )}

      {/* Documents Tab */}
      {activeTab === 'documents' && (
        <div className="space-y-2">
          {assets.documents.map(doc => (
            <div key={doc.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-900 transition cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📄</span>
                <div>
                  <p className="font-medium text-slate-800">{doc.name}</p>
                  <p className="text-xs text-slate-500">{doc.size} • {doc.uploaded}</p>
                </div>
              </div>
              <button className="px-3 py-1 rounded bg-blue-100 text-blue-700 text-sm font-medium hover:bg-blue-200 transition">
                Download
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Videos Tab */}
      {activeTab === 'videos' && (
        <div className="text-center py-12">
          <p className="text-slate-500">No videos yet</p>
          <button className="mt-4 px-4 py-2 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-800 transition">
            Upload Video
          </button>
        </div>
      )}
    </div>
  )
}
