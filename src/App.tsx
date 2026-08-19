import { useEffect, useState } from 'react'
import Fundamentals from './pages/Fundamentals'
import QuestionList from './pages/QuestionList'

type Section = 'fundamentals' | 'practices'
type Theme = 'light' | 'dark'

const THEME_KEY = 'js-practices.theme'

function loadTheme(): Theme {
  return localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light'
}

export default function App() {
  const [section, setSection] = useState<Section>('fundamentals')
  const [theme, setTheme] = useState<Theme>(loadTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-5 sm:px-6">
        <button type="button" onClick={() => setSection('fundamentals')} className="font-bold tracking-tight text-slate-950 dark:text-white">
          JS Practices
        </button>
        <div className="flex items-center gap-2">
          <nav className="flex rounded-xl bg-slate-200/70 p-1 dark:bg-slate-800" aria-label="Khu vực học tập">
            <button type="button" onClick={() => setSection('fundamentals')} className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${section === 'fundamentals' ? 'bg-white text-indigo-700 shadow-sm dark:bg-slate-700 dark:text-indigo-300' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}>Nền tảng</button>
            <button type="button" onClick={() => setSection('practices')} className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${section === 'practices' ? 'bg-white text-indigo-700 shadow-sm dark:bg-slate-700 dark:text-indigo-300' : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}>Bài tập</button>
          </nav>
          <button
            type="button"
            onClick={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
            aria-label={theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-lg shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
      {section === 'fundamentals' ? <Fundamentals /> : <QuestionList />}
    </div>
  )
}
