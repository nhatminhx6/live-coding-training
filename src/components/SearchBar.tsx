import { useEffect, useState } from 'react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchBar({
  value,
  onChange,
  placeholder = 'Tìm theo tên, mô tả hoặc slug…',
}: SearchBarProps) {
  const [draft, setDraft] = useState(value)

  useEffect(() => setDraft(value), [value])

  useEffect(() => {
    const timeout = window.setTimeout(() => onChange(draft), 200)
    return () => window.clearTimeout(timeout)
  }, [draft, onChange])

  return (
    <label className="relative block">
      <span className="sr-only">Tìm câu hỏi</span>
      <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-neutral-400">⌕</span>
      <input
        type="search"
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-neutral-200 bg-white py-3 pl-11 pr-4 text-sm text-neutral-900 shadow-sm outline-none transition placeholder:text-neutral-400 focus:border-plum-400 focus:ring-4 focus:ring-plum-100 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-100 dark:focus:ring-plum-950"
      />
    </label>
  )
}
