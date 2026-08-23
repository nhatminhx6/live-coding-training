export type Difficulty = 'easy' | 'medium' | 'hard'

export interface TestCase {
  input: unknown[]
  output: unknown
  explanation?: string
}

export interface Question {
  slug: string
  title: string
  difficulty: Difficulty
  description: string
  examples: string[]
  functionSignature: string
  /** Cách giải chính: ưu tiên trình bày giải thuật để luyện tư duy. */
  starterCode: string
  /** Cách 2: ưu tiên Array/String functions, nếu không thì dùng một giải thuật khác. */
  arrayFunctionCode?: string
  testCases: TestCase[]
}

export type TestResult = {
  index: number
  passed: boolean
  expected: unknown
  received?: unknown
  error?: string
}
