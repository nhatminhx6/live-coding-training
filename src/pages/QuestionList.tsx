
import { useMemo, useState } from 'react'
import { questions } from '../data/questions'
import { QuestionCard } from '../components/QuestionCard'
import type { Difficulty } from '../types'
import { SearchBar } from '../components/SearchBar'

export default function QuestionList() {
  const [query, setQuery] = useState('')
  const [difficulty, setDifficulty] = useState<'all' | Difficulty>('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return questions.filter(it => {
      const matchesQ = !q ||
        it.title.toLowerCase().includes(q) ||
        it.tags.some(t => t.toLowerCase().includes(q))
      const matchesD = difficulty === 'all' || it.difficulty === difficulty
      return matchesQ && matchesD
    })
  }, [query, difficulty])

  return (
    <div className="mx-auto max-w-5xl p-4">
      <h1 className="text-2xl font-bold mb-3">React/JS Live‑Coding Questions</h1>
      <div className="grid gap-3 md:grid-cols-[1fr,200px]">
        <SearchBar onChange={setQuery} />
        <select
          value={difficulty}
          onChange={e => setDifficulty(e.target.value as any)}
          className="rounded-xl border px-3 py-2"
          aria-label="filter by difficulty"
        >
          <option value="all">All difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {filtered.map(q => <QuestionCard key={q.id} q={q} />)}
        {filtered.length === 0 && (
          <div className="text-gray-600">No questions found.</div>
        )}
      </div>
    </div>
  )
}
