
import { Link } from 'react-router-dom'
import type { Question } from '../types'
import { loadProgress } from '../lib/storage'

export function QuestionCard({ q }: { q: Question }) {
  const progress = loadProgress()[q.id]?.state ?? 'unsolved'
  const badge =
    progress === 'solved' ? 'bg-green-100 text-green-800' :
    progress === 'attempted' ? 'bg-yellow-100 text-yellow-800' :
    'bg-gray-100 text-gray-800'

  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow transition">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-gray-900">{q.title}</h3>
        <span className={`px-2 py-1 rounded text-xs ${badge}`}>{progress}</span>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {q.tags.map(t => (
          <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{t}</span>
        ))}
        <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700">{q.difficulty}</span>
      </div>
      <div className="mt-3 text-sm text-gray-600 line-clamp-3">{q.statement}</div>
      <div className="mt-4">
        <Link to={`/q/${q.slug}`} className="inline-block rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50">
          Open
        </Link>
      </div>
    </div>
  )
}
