import type { ReactNode } from 'react'

interface SyntaxCodeProps {
  code: string
  language?: 'javascript' | 'swift'
  className?: string
}

const tokenPattern = /(?<comment>\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(?<string>`(?:\\.|[^`\\])*`|'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")|(?<number>\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b)|(?<keyword>\b(?:async|await|break|case|catch|class|const|continue|default|defer|do|else|enum|export|extends|false|final|for|from|func|function|guard|if|import|in|init|instanceof|let|new|null|private|protocol|return|static|struct|super|switch|throw|throws|true|try|typealias|typeof|undefined|var|where|while)\b)|(?<property>@(?:State|Binding|Observable|Bindable|Environment|MainActor|Published|StateObject|ObservedObject)\b)|(?<function>\b[A-Za-z_$][\w$]*(?=\s*\())|(?<type>\b[A-Z][A-Za-z0-9_$]*\b)|(?<operator>===|!==|==|!=|=>|\?\?|\?\.|\+\+|--|&&|\|\||<=|>=|\.\.\.|[{}()[\];,.?:+\-*/%=<>!&|])/gi

const colors: Record<string, string> = {
  comment: 'text-slate-500 italic',
  string: 'text-amber-300',
  number: 'text-fuchsia-300',
  keyword: 'text-violet-300 font-medium',
  property: 'text-rose-300',
  function: 'text-sky-300',
  type: 'text-cyan-300',
  operator: 'text-slate-300',
}

function highlight(code: string): ReactNode[] {
  const output: ReactNode[] = []
  let cursor = 0

  for (const match of code.matchAll(tokenPattern)) {
    const index = match.index ?? 0
    if (index > cursor) output.push(code.slice(cursor, index))

    const group = Object.entries(match.groups ?? {}).find(([, value]) => value !== undefined)?.[0] ?? 'operator'
    output.push(<span key={`${index}-${group}`} className={colors[group]}>{match[0]}</span>)
    cursor = index + match[0].length
  }

  if (cursor < code.length) output.push(code.slice(cursor))
  return output
}

export function SyntaxCode({ code, className = '' }: SyntaxCodeProps) {
  return (
    <pre className={`overflow-x-auto bg-slate-950 p-4 font-mono text-sm leading-6 text-slate-200 ${className}`}>
      <code>{highlight(code)}</code>
    </pre>
  )
}
