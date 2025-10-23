import { useState } from 'react'
import { questions } from '../data/questions'

interface Question {
    slug: string
    title: string
    difficulty: string
    description: string
    examples?: string[]
    starterCode: string
}

export default function QuestionList() {
    const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | 'all'>('easy')
    const [expanded, setExpanded] = useState<string | null>(null)
    const [logs, setLogs] = useState<string[]>([])

    const filtered = questions.filter(
        (q) => difficulty === 'all' || q.difficulty === difficulty
    )

    const runPractice = async (slug: string) => {
        try {
            // ✅ dynamic import file tương ứng
            const module = await import(`../practice/${slug}.ts`)
            const fn = module.default

            // ✅ tìm test cases từ data/questions
            const q = questions.find((x) => x.slug === slug)
            if (!q || !fn) return

            const results: string[] = q.testCases.map((t, i) => {
                const got = fn(...t.input)
                const ok = JSON.stringify(got) === JSON.stringify(t.output)
                return `${i + 1}. ${ok ? '✅ PASS' : '❌ FAIL'} | expected ${JSON.stringify(
                    t.output
                )}, got ${JSON.stringify(got)}`
            })
            setLogs([`▶️ Run: ${slug}`, ...results])
        } catch (err: any) {
            setLogs([`💥 Error running ${slug}: ${err.message}`])
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-[800px] mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4">JS Practice Questions</h1>

                {/* Filter */}
                <div className="flex gap-3 mb-5">
                    {['easy', 'medium', 'hard', 'all'].map((lvl) => (
                        <button
                            key={lvl}
                            onClick={() => setDifficulty(lvl as any)}
                            className={`px-4 py-1.5 rounded-md text-sm border ${
                                difficulty === lvl
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {lvl.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* List */}
                <ul className="space-y-3">
                    {filtered.map((q) => {
                        const isOpen = expanded === q.slug
                        return (
                            <li
                                key={q.slug}
                                className="border rounded-lg bg-white shadow-sm overflow-hidden"
                            >
                                <div className="flex items-center justify-between px-4 py-3">
                                    <div>
                                        <p className="font-semibold text-gray-900">{q.title}</p>
                                        <p className="text-sm text-gray-500">{q.difficulty}</p>
                                    </div>

                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setExpanded(isOpen ? null : q.slug)}
                                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1.5 rounded-md text-sm"
                                        >
                                            {isOpen ? 'Hide' : 'Expand'}
                                        </button>
                                        <button
                                            onClick={() => runPractice(q.slug)}
                                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm"
                                        >
                                            Run
                                        </button>
                                    </div>
                                </div>

                                {isOpen && (
                                    <div className="border-t px-4 py-3 bg-gray-50 text-sm text-gray-800">
                                        <p className="mb-2 font-medium">🧩 Description</p>
                                        <p className="whitespace-pre-wrap text-gray-700 mb-3">{q.description}</p>

                                        {q.examples && q.examples.length > 0 && (
                                            <div className="mb-3">
                                                <p className="font-medium mb-1">📘 Examples:</p>
                                                <ul className="list-disc pl-5 text-gray-700">
                                                    {q.examples.map((ex, i) => (
                                                        <li key={i}>{ex}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                       {/* <p className="mt-4 mb-1 font-medium">💡 Starter Code:</p>
                                        <pre className="bg-gray-900 text-green-400 rounded-lg p-3 overflow-x-auto text-sm">
                      {q.starterCode.trim()}
                    </pre>*/}
                                    </div>
                                )}
                            </li>
                        )
                    })}
                </ul>

                {/* Output */}
                {logs.length > 0 && (
                    <div className="mt-6 border rounded-lg bg-black text-green-400 p-3 font-mono text-sm whitespace-pre-line">
                        {logs.join('\n')}
                    </div>
                )}
            </div>
        </div>
    )
}
