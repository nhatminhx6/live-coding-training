
import { useEffect, useMemo, useState } from 'react'

export interface SearchBarProps {
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchBar({ onChange, placeholder = 'Search questions, tags...' }: SearchBarProps) {
  const [value, setValue] = useState('')
  const [debounced, setDebounced] = useState('')

  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), 200)
    return () => clearTimeout(t)
  }, [value])

  useMemo(() => onChange(debounced), [debounced, onChange])

  return (
    <input
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
    />
  )
}
