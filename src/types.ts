
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface TestCase {
  input: unknown[];
  output: unknown;
  explanation?: string;
}

interface Question {
    slug: string
    title: string
    difficulty: string
    description: string
    examples: string[]
    functionSignature: string
    starterCode: string
    testCases: { input: any[]; output: any }[]
}