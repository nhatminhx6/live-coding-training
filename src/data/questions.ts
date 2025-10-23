
import type { Question } from '../types'

export const questions: Question[] = [
  {
    id: 'reverse-string',
    title: 'Reverse a String',
    slug: 'reverse-string',
    statement: `Write a function that takes a string s and returns the string reversed.

    Constraints:
    - 0 <= s.length <= 10^5
    - s may contain spaces and unicode characters.`,
    functionSignature: 'function reverseString(s: string): string',
    tags: ['string', 'two-pointers'],
    difficulty: 'easy',
    starterCode: `export function reverseString(s: string): string {
  // TODO: implement using two pointers
  let arr = [...s]; // spread handles unicode surrogate pairs better than split('')
  let i = 0, j = arr.length - 1;
  while (i < j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    i++; j--;
  }
  return arr.join('');
}`,
    testCases: [
      { input: ['hello'], output: 'olleh' },
      { input: [''], output: '' },
      { input: ['a'], output: 'a' },
      { input: ['ab'], output: 'ba' }
    ],
    hints: ['Try two pointers from both ends', 'Be careful with unicode'],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'is-anagram',
    title: 'Valid Anagram',
    slug: 'valid-anagram',
    statement: `Given two strings s and t, return true if t is an anagram of s, and false otherwise.
    You may assume the strings contain only lowercase English letters.`,
    functionSignature: 'function isAnagram(s: string, t: string): boolean',
    tags: ['hashmap', 'string'],
    difficulty: 'easy',
    starterCode: `export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const count = new Map<string, number>();
  for (const ch of s) count.set(ch, (count.get(ch) ?? 0) + 1);
  for (const ch of t) {
    const c = (count.get(ch) ?? 0) - 1;
    if (c < 0) return false;
    count.set(ch, c);
  }
  return true;
}`,
    testCases: [
      { input: ['anagram','nagaram'], output: true },
      { input: ['rat','car'], output: false },
    ],
    hints: ['Use a frequency map', 'Early exit when a count drops below 0'],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'spiral-matrix',
    title: 'Spiral Matrix Traversal',
    slug: 'spiral-matrix',
    statement: `Given an m x n matrix, return all elements of the matrix in spiral order.`,
    functionSignature: 'function spiralOrder(matrix: number[][]): number[]',
    tags: ['matrix', 'simulation'],
    difficulty: 'medium',
    starterCode: `export function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = [];
  if (matrix.length === 0) return res;
  let top = 0, bottom = matrix.length - 1;
  let left = 0, right = matrix[0].length - 1;
  while (top <= bottom && left <= right) {
    for (let j = left; j <= right; j++) res.push(matrix[top][j]);
    top++;
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
    right--;
    if (top <= bottom) {
      for (let j = right; j >= left; j--) res.push(matrix[bottom][j]);
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
      left++;
    }
  }
  return res;
}`,
    testCases: [
      { input: [[[1,2,3],[4,5,6],[7,8,9]]], output: [1,2,3,6,9,8,7,4,5] },
      { input: [[[1,2],[3,4]]], output: [1,2,4,3] },
    ],
    hints: ['Use four boundaries: top, right, bottom, left', 'Shrink boundaries after each layer'],
    createdAt: new Date().toISOString(),
  }
]

export type Questions = typeof questions;
