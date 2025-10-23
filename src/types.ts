
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface TestCase {
  input: unknown[];
  output: unknown;
  explanation?: string;
}

export interface Question {
  id: string;
  title: string;
  slug: string;
  statement: string;
  functionSignature?: string;
  tags: string[];
  difficulty: Difficulty;
  starterCode?: string;
  testCases: TestCase[];
  hints?: string[];
  createdAt: string;
  updatedAt?: string;
}
