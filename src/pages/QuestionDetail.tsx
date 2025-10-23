
import { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { questions } from '../data/questions'
import { loadProgress, saveProgress, type Progress } from '../lib/storage'

export default function QuestionDetail() {
  const { slug } = useParams()
  const q = useMemo(() => questions.find(it => it.slug === slug), [slug])
  const [code, setCode] = useState<string>(() => (q?.starterCode ?? ''))
  const [result, setResult] = useState<string>('')

  if (!q) {
    return (
      <div className="mx-auto max-w-3xl p-4">
        <div className="mb-4">
          <Link to="/" className="text-indigo-600">&larr; Back</Link>
        </div>
        <div>Question not found.</div>
      </div>
    )
  }

  const runTests = () => {
    try {
      // Unsafe eval for demo purposes; in real interview tools you would sandbox.
      // eslint-disable-next-line no-new-func
      const mod = new Function(code + '; return {fn: (globalThis as any)}')()
      // Try to discover exported function name by scanning "export function NAME("
      const match = code.match(/export\s+function\s+(\w+)\s*\(/)
      if (!match) throw new Error('Please export a function (e.g., export function foo(...){...})')
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const fn = (mod.fn as any)[match[1]]
      if (typeof fn !== 'function') throw new Error('Exported function not found')
      let passed = 0
      const logs: string[] = []
      for (const [idx, tc] of q.testCases.entries()) {
        const got = fn(...tc.input)
        const ok = deepEqual(got, tc.output)
        passed += ok ? 1 : 0
        logs.push(`#${idx+1} ${ok ? '✅' : '❌'} expected ${JSON.stringify(tc.output)} got ${JSON.stringify(got)}`)
      }
      setResult(`Passed ${passed}/${q.testCases.length}\n` + logs.join('\n'))
      // store as attempted / solved
      const prog: Progress = loadProgress()
      prog[q.id] = { state: passed === q.testCases.length ? 'solved' : 'attempted', lastCode: code }
      saveProgress(prog)
    } catch (e: any) {
      setResult('Error: ' + (e?.message ?? String(e)))
    }
  }

  return (
    <div className="mx-auto max-w-5xl p-4">
      <div className="mb-4 flex items-center gap-3">
        <Link to="/" className="text-indigo-600">&larr; Back</Link>
        <h1 className="text-2xl font-bold">{q.title}</h1>
        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{q.difficulty}</span>
      </div>
      <p className="whitespace-pre-wrap text-gray-700">{q.statement}</p>
      {q.functionSignature && (
        <div className="mt-2 text-sm text-gray-600"><strong>Signature:</strong> <code>{q.functionSignature}</code></div>
      )}
      {!!q.hints?.length && (
        <details className="mt-3">
          <summary className="cursor-pointer text-sm text-gray-600">Hints</summary>
          <ul className="list-disc ml-6 text-sm text-gray-700">
            {q.hints.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </details>
      )}
      <div className="mt-6 grid gap-3">
        <label className="text-sm font-medium">Your solution (TypeScript)</label>
        <textarea
          value={code}
          onChange={e => setCode(e.target.value)}
          spellCheck={false}
          className="min-h-[260px] w-full rounded-xl border p-3 font-mono text-sm"
        />
        <div className="flex gap-2">
          <button onClick={runTests} className="rounded-xl border px-4 py-2 hover:bg-gray-50">Run Tests</button>
          <button onClick={() => setCode(q.starterCode ?? '')} className="rounded-xl border px-4 py-2 hover:bg-gray-50">Reset</button>
        </div>
        <pre className="rounded-xl bg-gray-900 text-gray-100 p-3 text-sm overflow-auto">{result || 'Test results will appear here'}</pre>
        <div className="text-xs text-gray-500">Note: Tests run in-page. Avoid heavy computations.</div>
      </div>
      <div className="mt-8">
        <h2 className="font-semibold mb-2">Sample Test Cases</h2>
        <ul className="list-disc ml-6 text-sm text-gray-700">
          {q.testCases.map((tc, i) => (
            <li key={i}><code>input={JSON.stringify(tc.input)}</code> → <code>{JSON.stringify(tc.output)}</code></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// shallow-ish deep equal for primitives / arrays / objects
function deepEqual(a: any, b: any): boolean {
  if (Object.is(a, b)) return true
  if (typeof a !== typeof b) return false
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false
    for (let i = 0; i < a.length; i++) if (!deepEqual(a[i], b[i])) return false
    return true
  }
  if (a && b && typeof a === 'object') {
    const ka = Object.keys(a), kb = Object.keys(b)
    if (ka.length !== kb.length) return false
    for (const k of ka) if (!deepEqual(a[k], b[k])) return false
    return true
  }
  return a === b
}
