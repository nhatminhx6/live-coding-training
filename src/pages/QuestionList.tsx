import { useCallback, useMemo, useState } from 'react'
import { SearchBar } from '../components/SearchBar'
import { SyntaxCode } from '../components/SyntaxCode'
import { questions } from '../data/questions'
import { alternativeSolutions } from '../data/questions/alternativeSolutions'
import { questionGuides } from '../data/questions/guides'
import type { Difficulty, Question, TestResult } from '../types'

type QuestionFilter = Difficulty | 'all' | 'classic'
type PracticeModule = { default: (...args: unknown[]) => unknown | Promise<unknown> }

const practiceModules = import.meta.glob<PracticeModule>('../practice/*.ts')
const filters: QuestionFilter[] = ['all', 'classic', 'easy', 'medium', 'hard']

// Các pattern kinh điển thường xuất hiện trong phỏng vấn kỹ thuật.
const classicQuestionSlugs = new Set([
  'two-sum',
  'valid-anagram',
  'palindrome',
  'binary-search',
  'valid-parentheses',
  'merge-two-sorted-arrays',
  'best-time-buy-sell',
  'climbing-stairs',
  '3sum',
  'longest-substring',
  'group-anagrams',
  'product-except-self',
  'spiral-matrix',
  'word-break',
  'coin-change',
  'container-most-water',
  'course-schedule',
  'number-of-islands',
  'trapping-rain-water',
  'median-two-arrays',
  'n-queens',
  'edit-distance',
  'sliding-window-maximum',
  'largest-rectangle-histogram',
])

const difficultyStyles: Record<Difficulty, string> = {
  easy: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-950 dark:text-emerald-300',
  medium: 'bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-950 dark:text-amber-300',
  hard: 'bg-rose-50 text-rose-700 ring-rose-600/20 dark:bg-rose-950 dark:text-rose-300',
}

function cloneInputs(input: unknown[]): unknown[] {
  return typeof structuredClone === 'function'
    ? structuredClone(input)
    : JSON.parse(JSON.stringify(input))
}

function isEqual(received: unknown, expected: unknown): boolean {
  if (Object.is(received, expected)) return true
  if (Array.isArray(received) && Array.isArray(expected)) {
    return received.length === expected.length && received.every((item, index) => isEqual(item, expected[index]))
  }
  if (received && expected && typeof received === 'object' && typeof expected === 'object') {
    const left = Object.keys(received as object)
    const right = Object.keys(expected as object)
    return left.length === right.length && left.every((key) =>
      Object.prototype.hasOwnProperty.call(expected, key)
      && isEqual((received as Record<string, unknown>)[key], (expected as Record<string, unknown>)[key]),
    )
  }
  return false
}

function formatValue(value: unknown) {
  if (typeof value === 'string') return `"${value}"`
  const serialized = JSON.stringify(value)
  return serialized === undefined ? String(value) : serialized
}

function getParameterNames(signature: string): string[] {
  return signature.match(/\(([^)]*)\)/)?.[1].split(',').map((name) => name.trim()).filter(Boolean) ?? []
}

export default function QuestionList() {
  const [activeFilter, setActiveFilter] = useState<QuestionFilter>('all')
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState<string | null>(null)
  const [openSolutions, setOpenSolutions] = useState<Record<string, boolean>>({})
  const [running, setRunning] = useState<string | null>(null)
  const [results, setResults] = useState<Record<string, TestResult[]>>({})

  const counts = useMemo(() => ({
    all: questions.length,
    classic: questions.filter((q) => classicQuestionSlugs.has(q.slug)).length,
    easy: questions.filter((q) => q.difficulty === 'easy').length,
    medium: questions.filter((q) => q.difficulty === 'medium').length,
    hard: questions.filter((q) => q.difficulty === 'hard').length,
  }), [])

  const filtered = useMemo(() => {
    const keyword = query.trim().toLocaleLowerCase()
    return questions.filter((question) => {
      const matchesFilter = activeFilter === 'all'
        || (activeFilter === 'classic' ? classicQuestionSlugs.has(question.slug) : question.difficulty === activeFilter)
      const haystack = `${question.title} ${question.slug} ${question.description}`.toLocaleLowerCase()
      return matchesFilter && (!keyword || haystack.includes(keyword))
    })
  }, [activeFilter, query])

  const runPractice = async (question: Question) => {
    setRunning(question.slug)
    const nextResults: TestResult[] = []
    try {
      const loader = practiceModules[`../practice/${question.slug}.ts`]
      if (!loader) throw new Error('Không tìm thấy file lời giải')
      const solution = (await loader()).default

      for (const [index, testCase] of question.testCases.entries()) {
        try {
          const received = await solution(...cloneInputs(testCase.input))
          nextResults.push({ index, passed: isEqual(received, testCase.output), expected: testCase.output, received })
        } catch (error) {
          nextResults.push({
            index,
            passed: false,
            expected: testCase.output,
            error: error instanceof Error ? error.message : String(error),
          })
        }
      }
    } catch (error) {
      nextResults.push({
        index: 0,
        passed: false,
        expected: undefined,
        error: error instanceof Error ? error.message : String(error),
      })
    } finally {
      setResults((current) => ({ ...current, [question.slug]: nextResults }))
      setRunning(null)
    }
  }

  const handleSearch = useCallback((value: string) => setQuery(value), [])
  const toggleSolution = (slug: string) => {
    setOpenSolutions((current) => ({ ...current, [slug]: !current[slug] }))
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-14">
      <header className="mb-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-indigo-600">Live coding workspace</p>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">JavaScript Practices</h1>
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">Chọn bài, mở đề và chạy test trực tiếp với lời giải trong thư mục practice.</p>
          </div>
          <div className="shrink-0 rounded-2xl border border-indigo-100 bg-indigo-50 px-5 py-3 text-center dark:border-indigo-900 dark:bg-indigo-950/60">
            <strong className="block text-2xl text-indigo-700 dark:text-indigo-300">{questions.length}</strong>
            <span className="text-xs font-medium uppercase tracking-wide text-indigo-600">câu hỏi</span>
          </div>
        </div>
      </header>

      <section className="mb-7 grid gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:grid-cols-[1fr_auto]">
        <SearchBar value={query} onChange={handleSearch} />
        <div className="flex flex-wrap gap-2" aria-label="Lọc theo độ khó">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-xl px-3.5 py-2 text-sm font-semibold transition ${
                activeFilter === filter ? 'bg-slate-900 text-white shadow-sm dark:bg-indigo-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {filter === 'all' ? 'Tất cả' : filter === 'classic' ? 'Kinh điển' : filter} <span className="ml-1 opacity-60">{counts[filter]}</span>
            </button>
          ))}
        </div>
      </section>

      <div className="mb-4 flex items-center justify-between text-sm text-slate-500">
        <span>Hiển thị {filtered.length} kết quả</span>
        {query && <button type="button" className="font-medium text-indigo-600 hover:text-indigo-800" onClick={() => setQuery('')}>Xóa tìm kiếm</button>}
      </div>

      <ul className="grid gap-4">
        {filtered.map((question, index) => {
          const isOpen = expanded === question.slug
          const isSolutionOpen = openSolutions[question.slug] ?? false
          const questionResults = results[question.slug]
          const passed = questionResults?.filter((result) => result.passed).length ?? 0
          const secondSolution = question.arrayFunctionCode ?? alternativeSolutions[question.slug]
          const guide = questionGuides[question.slug]
          const example = question.testCases[0]
          const parameterNames = getParameterNames(question.functionSignature)
          return (
            <li key={question.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-slate-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600">
              <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                <button type="button" className="flex min-w-0 flex-1 items-start gap-4 text-left" onClick={() => setExpanded(isOpen ? null : question.slug)} aria-expanded={isOpen}>
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">{String(index + 1).padStart(2, '0')}</span>
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-slate-100">{question.title}</span>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-semibold capitalize ring-1 ring-inset ${difficultyStyles[question.difficulty]}`}>{question.difficulty}</span>
                    </span>
                    <span className="mt-1 block truncate text-sm text-slate-500">{question.description}</span>
                  </span>
                </button>
                <div className="flex items-center gap-2 pl-13 sm:pl-0">
                  {questionResults && <span className={`text-xs font-bold ${passed === questionResults.length ? 'text-emerald-600' : 'text-rose-600'}`}>{passed}/{questionResults.length} passed</span>}
                  <button type="button" onClick={() => runPractice(question)} disabled={running === question.slug} className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-wait disabled:opacity-60">
                    {running === question.slug ? 'Đang chạy…' : 'Chạy test'}
                  </button>
                  <button type="button" onClick={() => setExpanded(isOpen ? null : question.slug)} className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">{isOpen ? 'Thu gọn' : 'Mở đề'}</button>
                </div>
              </div>

              {isOpen && (
                <div className="border-t border-slate-100 bg-slate-50/70 p-5 dark:border-slate-700 dark:bg-slate-950/50 sm:pl-[5.25rem]">
                  <div>
                    <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Problem</h2>
                    <p className="whitespace-pre-wrap text-sm leading-6 text-slate-700 dark:text-slate-300">{guide?.problem ?? question.description}</p>
                  </div>
                  {example && <div className="mt-4"><h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Example</h2><div className="space-y-2 rounded-xl bg-white p-4 text-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700"><p><strong className="text-slate-900 dark:text-slate-100">Input:</strong> <code className="text-indigo-600 dark:text-indigo-300">{example.input.map((value, inputIndex) => `${parameterNames[inputIndex] || `arg${inputIndex + 1}`} = ${formatValue(value)}`).join(', ')}</code></p><p><strong className="text-slate-900 dark:text-slate-100">Output:</strong> <code className="text-emerald-600 dark:text-emerald-300">{formatValue(example.output)}</code></p><p className="leading-6 text-slate-600 dark:text-slate-300"><strong className="text-slate-900 dark:text-slate-100">Explanation:</strong> {example.explanation ?? guide?.explanation ?? 'The output follows directly from the conditions in the problem.'}</p></div></div>}
                  <div className="mt-4"><h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Function signature</h2><SyntaxCode code={question.functionSignature} className="rounded-xl" /></div>
                  <div className="mt-4 overflow-hidden rounded-xl border border-indigo-200 bg-white dark:border-indigo-900 dark:bg-slate-900">
                    <button
                      type="button"
                      onClick={() => toggleSolution(question.slug)}
                      aria-expanded={isSolutionOpen}
                      aria-controls={`solution-${question.slug}`}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-bold text-indigo-700 transition hover:bg-indigo-50 dark:text-indigo-300 dark:hover:bg-indigo-950/40"
                    >
                      <span>{isSolutionOpen ? 'Ẩn bài giải' : 'Xem bài giải'}</span>
                      <span className={`text-base transition-transform ${isSolutionOpen ? 'rotate-180' : ''}`} aria-hidden="true">⌄</span>
                    </button>
                    {isSolutionOpen && (
                      <div id={`solution-${question.slug}`} className="border-t border-indigo-100 dark:border-indigo-900">
                        <div className="flex items-center justify-between bg-slate-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                          <span>Cách 1 · Giải thuật</span>
                          <span>JavaScript</span>
                        </div>
                        <SyntaxCode code={question.starterCode.trim()} />
                        {secondSolution && (
                          <>
                            <div className="flex items-center justify-between border-t border-slate-700 bg-slate-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                              <span>Cách 2 · {question.arrayFunctionCode ? 'Array/String functions' : 'Giải pháp khác'}</span>
                              <span>Tham khảo</span>
                            </div>
                            <SyntaxCode code={secondSolution.trim()} />
                          </>
                        )}
                      </div>
                    )}
                  </div>
                  {questionResults && <div className="mt-4 space-y-2">{questionResults.map((result) => <div key={result.index} className={`rounded-xl border p-3 text-sm ${result.passed ? 'border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/60' : 'border-rose-200 bg-rose-50 dark:border-rose-900 dark:bg-rose-950/60'}`}><strong className={result.passed ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'}>Test {result.index + 1}: {result.passed ? 'PASS' : 'FAIL'}</strong>{result.error ? <p className="mt-1 font-mono text-xs text-rose-700 dark:text-rose-300">{result.error}</p> : <p className="mt-1 break-all font-mono text-xs text-slate-600 dark:text-slate-300">Expected: {formatValue(result.expected)} · Received: {formatValue(result.received)}</p>}</div>)}</div>}
                </div>
              )}
            </li>
          )
        })}
      </ul>

      {filtered.length === 0 && <div className="rounded-3xl border border-dashed border-slate-300 py-16 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">Không tìm thấy câu hỏi phù hợp.</div>}
    </main>
  )
}
