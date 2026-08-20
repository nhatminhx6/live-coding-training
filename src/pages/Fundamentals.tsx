import { useMemo, useState } from 'react'
import { fundamentals } from '../data/fundamentals'
import { SyntaxCode } from '../components/SyntaxCode'

type LearningTrack = 'javascript' | 'logic' | 'reactnative' | 'performance' | 'ai'

const trackInfo: Record<LearningTrack, { title: string; description: string }> = {
  javascript: {
    title: 'JavaScript Basics',
    description: 'Scope, hoisting, closure, this, type coercion và những nền tảng ngôn ngữ cần nắm chắc.',
  },
  logic: {
    title: 'Logic & Algorithms',
    description: 'Cấu trúc dữ liệu, tư duy giải thuật và các patterns để phân tích bài toán.',
  },
  reactnative: {
    title: 'React & React Native',
    description: 'React internals, kiến trúc React Native, native interop và tư duy Tech Lead.',
  },
  performance: {
    title: 'FPS & Performance',
    description: 'JS/UI FPS, dropped frames, FlatList, profiling, performance budget và quyết định rollout.',
  },
  ai: {
    title: 'AI Work Skills',
    description: 'Giao việc, context, verification, reusable skills, delegation và eval để làm việc với AI hiệu quả.',
  },
}

function belongsToTrack(group: string, track: LearningTrack) {
  if (track === 'javascript') return group === 'JavaScript'
  if (track === 'performance') return group === 'Performance'
  if (track === 'ai') return group === 'AI Skills'
  if (track === 'reactnative') return group === 'React' || group === 'React Native' || group === 'Architecture'
  return group === 'Data structures' || group === 'Algorithms'
}

export default function Fundamentals() {
  const [track, setTrack] = useState<LearningTrack>('javascript')
  const [activeId, setActiveId] = useState(fundamentals[0].id)
  const [expandedAnswers, setExpandedAnswers] = useState<Set<string>>(() => new Set())
  const lessons = useMemo(
    () => fundamentals.filter((item) => belongsToTrack(item.group, track)),
    [track],
  )
  const active = useMemo(
    () => lessons.find((item) => item.id === activeId) ?? lessons[0],
    [activeId, lessons],
  )

  const selectTrack = (nextTrack: LearningTrack) => {
    const firstLesson = fundamentals.find((item) => belongsToTrack(item.group, nextTrack))
    setTrack(nextTrack)
    if (firstLesson) setActiveId(firstLesson.id)
  }

  const toggleAnswer = (answerId: string) => {
    setExpandedAnswers((current) => {
      const next = new Set(current)
      if (next.has(answerId)) next.delete(answerId)
      else next.add(answerId)
      return next
    })
  }

  return (
    <main className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
      <section className="mb-6 rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6 dark:border-indigo-900/60 dark:from-indigo-950/70 dark:to-slate-900 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">Học bản chất trước</p>
        <h1 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">Nền tảng & patterns</h1>
        <p className="mt-2 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">
          Ôn cách hoạt động, dấu hiệu nhận biết và trade-off của từng kỹ thuật. Sau đó hãy tự giải lại bài tập mà không nhìn code mẫu.
        </p>
      </section>

      <section className="mb-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5" aria-label="Chọn nhóm lý thuyết">
        {(Object.keys(trackInfo) as LearningTrack[]).map((item) => {
          const isActive = track === item
          const lessonCount = fundamentals.filter((lesson) => belongsToTrack(lesson.group, item)).length
          return (
            <button
              key={item}
              type="button"
              onClick={() => selectTrack(item)}
              aria-pressed={isActive}
              className={`rounded-2xl border p-5 text-left transition ${isActive ? 'border-indigo-500 bg-indigo-600 text-white shadow-lg shadow-indigo-100 dark:shadow-none' : 'border-slate-200 bg-white text-slate-900 hover:border-indigo-200 hover:bg-indigo-50/40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-indigo-700 dark:hover:bg-slate-800'}`}
            >
              <span className="flex items-center justify-between gap-3">
                <strong className="text-lg">{trackInfo[item].title}</strong>
                <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${isActive ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}>{lessonCount} bài</span>
              </span>
              <span className={`mt-2 block text-sm leading-6 ${isActive ? 'text-indigo-100' : 'text-slate-500 dark:text-slate-400'}`}>{trackInfo[item].description}</span>
            </button>
          )
        })}
      </section>

      <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
        <nav className="h-fit rounded-2xl border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-700 dark:bg-slate-900" aria-label={`Danh sách bài ${trackInfo[track].title}`}>
          <div className="px-3 pb-2 pt-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{trackInfo[track].title}</div>
          {lessons.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={`w-full rounded-xl px-4 py-3 text-left transition ${activeId === item.id ? 'bg-slate-900 text-white dark:bg-indigo-600' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`}
            >
              <span className="flex items-center justify-between gap-2">
                <span className={`text-[11px] font-bold uppercase tracking-wider ${activeId === item.id ? 'text-indigo-300 dark:text-amber-200' : 'text-indigo-600 dark:text-amber-300'}`}>{item.group}</span>
                <span className={`rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide ${activeId === item.id ? 'bg-emerald-400/15 text-emerald-300' : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'}`}>Code</span>
              </span>
              <span className="mt-0.5 block font-semibold">{item.title}</span>
            </button>
          ))}
        </nav>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="p-6 sm:p-8">
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">{active.group}</span>
            <h2 className="mt-4 text-2xl font-bold text-slate-950 dark:text-white">{active.title}</h2>
            <p className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-300">{active.summary}</p>

            <div className="mt-7 grid gap-7 md:grid-cols-2">
              <section>
                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Cốt lõi cần nhớ</h3>
                <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {active.theory.map((point) => <li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />{point}</li>)}
                </ul>
              </section>
              <section>
                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Khi nào dùng</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.useCases.map((useCase) => <span key={useCase} className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">{useCase}</span>)}
                </div>
                {active.complexity && <div className="mt-5 rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-sm font-semibold text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300">{active.complexity}</div>}
              </section>
            </div>

            {active.questions?.length ? (
              <section className="mt-7 rounded-2xl border border-cyan-200 bg-cyan-50/70 p-5 dark:border-cyan-800/70 dark:bg-slate-900/80">
                <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-800 dark:text-cyan-300">Câu hỏi level Tech Lead</h3>
                <ol className="mt-3 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-200">
                  {active.questions.map((question, index) => {
                    const answer = active.answers?.[index]
                    const answerId = `${active.id}-${index}`
                    const isExpanded = expandedAnswers.has(answerId)

                    return (
                      <li key={question} className="rounded-xl border border-cyan-200/80 bg-white/70 p-4 dark:border-slate-700 dark:bg-slate-950/55">
                        <div className="flex gap-3">
                          <span className="font-bold text-cyan-700 dark:text-cyan-300">{index + 1}.</span>
                          <div className="min-w-0 flex-1">
                            <p>{question}</p>
                            {answer ? (
                              <>
                                <button
                                  type="button"
                                  onClick={() => toggleAnswer(answerId)}
                                  aria-expanded={isExpanded}
                                  className="mt-3 rounded-lg border border-cyan-300 px-3 py-1.5 text-xs font-bold text-cyan-800 transition hover:bg-cyan-100 dark:border-cyan-700 dark:text-cyan-300 dark:hover:bg-cyan-950/60"
                                >
                                  {isExpanded ? 'Đóng câu trả lời' : 'Xem câu trả lời'}
                                </button>
                                {isExpanded ? (
                                  <div className="mt-3 border-l-2 border-emerald-500 pl-4 text-slate-700 dark:text-slate-200">
                                    <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">Câu trả lời mẫu</span>
                                    {answer}
                                  </div>
                                ) : null}
                              </>
                            ) : null}
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ol>
              </section>
            ) : null}
          </div>

          <section className="border-t border-slate-200 bg-slate-950 p-5 dark:border-slate-700 sm:p-7">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Code sample bắt buộc</h3>
              <span className="text-xs text-slate-500">JavaScript / TypeScript</span>
            </div>
            <SyntaxCode code={active.code} language="javascript" className="!p-0" />
          </section>
        </article>
      </div>
    </main>
  )
}
