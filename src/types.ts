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
  starterCode: string
  testCases: TestCase[]
}

export type TestResult = {
  index: number
  passed: boolean
  expected: unknown
  received?: unknown
  error?: string
}
