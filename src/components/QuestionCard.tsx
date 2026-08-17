
import { Link } from 'react-router-dom'
import type { Question } from '../types'

export function QuestionCard({ q }: { q: Question }) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow transition">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-gray-900">{q.title}</h3>
        <span className="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">{q.difficulty}</span>
      </div>
      <div className="mt-3 line-clamp-3 text-sm text-gray-600">{q.description}</div>
      <div className="mt-4">
        <Link to={`/q/${q.slug}`} className="inline-block rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50">
          Open
        </Link>
      </div>
    </div>
  )
}
