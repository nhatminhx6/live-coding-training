import type { ReactNode } from 'react'

interface SyntaxCodeProps {
  code: string
  language?: 'javascript' | 'swift'
  className?: string
}

const tokenPattern = /(?<comment>\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(?<string>`(?:\\.|[^`\\])*`|'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")|(?<number>\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b)|(?<keyword>\b(?:async|await|break|case|catch|class|const|continue|default|defer|do|else|enum|export|extends|false|final|for|of|from|func|function|guard|if|import|in|init|instanceof|let|new|null|private|protocol|return|static|struct|super|switch|throw|throws|true|try|typealias|typeof|undefined|var|where|while)\b)|(?<property>@(?:State|Binding|Observable|Bindable|Environment|MainActor|Published|StateObject|ObservedObject)\b)|(?<method>(?<=\.)[A-Za-z_$][\w$]*)|(?<identifier>\b[A-Za-z_$][\w$]*\b)|(?<operator>===|!==|==|!=|=>|\?\?|\?\.|\+\+|--|&&|\|\||<=|>=|\.\.\.|[{}()[\];,.?:+\-*/%=<>!&|])/gi

const colors: Record<string, string> = {
  comment: 'text-[#b4b4b4]',
  string: 'text-[#e99564]',
  number: 'text-[#e99564]',
  keyword: 'text-[#df91b4]',
  property: 'text-[#df91b4]',
  identifier: 'text-[#b899ef]',
  method: 'text-[#e3e3e3]',
  operator: 'text-[#df91b4]',
  punctuation: 'text-[#e3e3e3]',
}

function highlight(code: string): ReactNode[] {
  const output: ReactNode[] = []
  let cursor = 0

  for (const match of code.matchAll(tokenPattern)) {
    const index = match.index ?? 0
    if (index > cursor) output.push(code.slice(cursor, index))

    let group = Object.entries(match.groups ?? {}).find(([, value]) => value !== undefined)?.[0] ?? 'operator'
    if (group === 'operator' && /^(?:[{}()[\];,.?:]|=>|\.\.\.)$/.test(match[0])) group = 'punctuation'
    output.push(<span key={`${index}-${group}`} className={colors[group]}>{match[0]}</span>)
    cursor = index + match[0].length
  }

  if (cursor < code.length) output.push(code.slice(cursor))
  return output
}

export function SyntaxCode({ code, className = '' }: SyntaxCodeProps) {
  return (
    <pre className={`overflow-x-auto bg-[#212121] p-4 font-mono text-sm leading-6 text-[#e3e3e3] ${className}`}>
      <code>{highlight(code)}</code>
    </pre>
  )
}
