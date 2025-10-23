export const questions = [
    // ========================== EASY ==========================
    {
        slug: 'reverse-string',
        title: 'Reverse a String',
        difficulty: 'easy',
        description: 'Given a string s, return the string reversed.',
        examples: [
            'Input: "hello" → Output: "olleh"',
            'Input: "ab" → Output: "ba"',
            'Input: "" → Output: ""',
        ],
        functionSignature: 'function reverseString(s) {}',
        starterCode: `function reverseString(s) {
  return s.split('').reverse().join('');
}`,
        testCases: [
            { input: ['hello'], output: 'olleh' },
            { input: ['ab'], output: 'ba' },
            { input: [''], output: '' },
        ],
    },
    {
        slug: 'valid-anagram',
        title: 'Valid Anagram',
        difficulty: 'easy',
        description:
            'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
        examples: [
            'Input: s = "anagram", t = "nagaram" → Output: true',
            'Input: s = "rat", t = "car" → Output: false',
        ],
        functionSignature: 'function isAnagram(s, t) {}',
        starterCode: `function isAnagram(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}`,
        testCases: [
            { input: ['anagram', 'nagaram'], output: true },
            { input: ['rat', 'car'], output: false },
        ],
    },
    {
        slug: 'palindrome',
        title: 'Palindrome String',
        difficulty: 'easy',
        description:
            'Given a string s, return true if it reads the same backward as forward, otherwise false.',
        examples: [
            'Input: "madam" → Output: true',
            'Input: "racecar" → Output: true',
            'Input: "hello" → Output: false',
        ],
        functionSignature: 'function isPalindrome(s) {}',
        starterCode: `function isPalindrome(s) {
  const reversed = s.split('').reverse().join('');
  return s === reversed;
}`,
        testCases: [
            { input: ['madam'], output: true },
            { input: ['racecar'], output: true },
            { input: ['hello'], output: false },
        ],
    },
    {
        slug: 'two-sum',
        title: 'Two Sum',
        difficulty: 'easy',
        description:
            'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
        examples: [
            'Input: nums = [2,7,11,15], target = 9 → Output: [0,1]',
            'Input: nums = [3,2,4], target = 6 → Output: [1,2]',
        ],
        functionSignature: 'function twoSum(nums, target) {}',
        starterCode: `function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) return [map[complement], i];
    map[nums[i]] = i;
  }
}`,
        testCases: [
            { input: [[2, 7, 11, 15], 9], output: [0, 1] },
            { input: [[3, 2, 4], 6], output: [1, 2] },
        ],
    },
    {
        slug: 'fizz-buzz',
        title: 'Fizz Buzz',
        difficulty: 'easy',
        description:
            'Given an integer n, return an array of strings representing the numbers from 1 to n. For multiples of three, output "Fizz" instead of the number; for multiples of five, output "Buzz". For numbers which are multiples of both three and five, output "FizzBuzz".',
        examples: [
            'Input: n = 3 → Output: ["1","2","Fizz"]',
            'Input: n = 5 → Output: ["1","2","Fizz","4","Buzz"]',
        ],
        functionSignature: 'function fizzBuzz(n) {}',
        starterCode: `function fizzBuzz(n) {
  const res = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) res.push('FizzBuzz');
    else if (i % 3 === 0) res.push('Fizz');
    else if (i % 5 === 0) res.push('Buzz');
    else res.push(String(i));
  }
  return res;
}`,
        testCases: [
            { input: [3], output: ['1', '2', 'Fizz'] },
            { input: [5], output: ['1', '2', 'Fizz', '4', 'Buzz'] },
        ],
    },
    {
        slug: 'max-number',
        title: 'Maximum Number in Array',
        difficulty: 'easy',
        description: 'Given an array of numbers, return the maximum number.',
        examples: [
            'Input: [1,2,3,4,5] → Output: 5',
            'Input: [10, -5, 0, 7] → Output: 10',
        ],
        functionSignature: 'function findMax(nums) {}',
        starterCode: `function findMax(nums) {
  return Math.max(...nums);
}`,
        testCases: [
            { input: [[1, 2, 3, 4, 5]], output: 5 },
            { input: [[10, -5, 0, 7]], output: 10 },
        ],
    },

    // ========================== MEDIUM ==========================
    {
        slug: 'longest-substring',
        title: 'Longest Substring Without Repeating Characters',
        difficulty: 'medium',
        description:
            'Given a string s, find the length of the longest substring without repeating characters.',
        examples: [
            'Input: "abcabcbb" → Output: 3',
            'Input: "bbbbb" → Output: 1',
            'Input: "pwwkew" → Output: 3',
        ],
        functionSignature: 'function lengthOfLongestSubstring(s) {}',
        starterCode: `function lengthOfLongestSubstring(s) {
  const set = new Set();
  let l = 0, max = 0;
  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l++]);
    }
    set.add(s[r]);
    max = Math.max(max, r - l + 1);
  }
  return max;
}`,
        testCases: [
            { input: ['abcabcbb'], output: 3 },
            { input: ['bbbbb'], output: 1 },
            { input: ['pwwkew'], output: 3 },
        ],
    },
    {
        slug: 'move-zeroes',
        title: 'Move Zeroes',
        difficulty: 'medium',
        description:
            'Given an integer array nums, move all 0s to the end while maintaining the relative order of the non-zero elements.',
        examples: [
            'Input: [0,1,0,3,12] → Output: [1,3,12,0,0]',
            'Input: [0] → Output: [0]',
        ],
        functionSignature: 'function moveZeroes(nums) {}',
        starterCode: `function moveZeroes(nums) {
  let last = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[last], nums[i]] = [nums[i], nums[last]];
      last++;
    }
  }
  return nums;
}`,
        testCases: [
            { input: [[0, 1, 0, 3, 12]], output: [1, 3, 12, 0, 0] },
            { input: [[0]], output: [0] },
        ],
    },
    {
        slug: 'merge-intervals',
        title: 'Merge Intervals',
        difficulty: 'medium',
        description:
            'Given an array of intervals, merge all overlapping intervals and return an array of non-overlapping intervals.',
        examples: [
            'Input: [[1,3],[2,6],[8,10],[15,18]] → Output: [[1,6],[8,10],[15,18]]',
            'Input: [[1,4],[4,5]] → Output: [[1,5]]',
        ],
        functionSignature: 'function merge(intervals) {}',
        starterCode: `function merge(intervals) {
  intervals.sort((a,b) => a[0]-b[0]);
  const res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const last = res[res.length - 1];
    if (intervals[i][0] <= last[1]) last[1] = Math.max(last[1], intervals[i][1]);
    else res.push(intervals[i]);
  }
  return res;
}`,
        testCases: [
            { input: [[[1, 3], [2, 6], [8, 10], [15, 18]]], output: [[1, 6], [8, 10], [15, 18]] },
            { input: [[[1, 4], [4, 5]]], output: [[1, 5]] },
        ],
    },
    {
        slug: 'missing-number',
        title: 'Missing Number',
        difficulty: 'medium',
        description:
            'Given an array nums containing n distinct numbers in the range [0, n], return the only number missing from the range.',
        examples: [
            'Input: [3,0,1] → Output: 2',
            'Input: [0,1] → Output: 2',
        ],
        functionSignature: 'function missingNumber(nums) {}',
        starterCode: `function missingNumber(nums) {
  const n = nums.length;
  const expected = (n*(n+1))/2;
  const sum = nums.reduce((a,b)=>a+b,0);
  return expected - sum;
}`,
        testCases: [
            { input: [[3, 0, 1]], output: 2 },
            { input: [[0, 1]], output: 2 },
        ],
    },
    {
        slug: 'majority-element',
        title: 'Majority Element',
        difficulty: 'medium',
        description:
            'Given an array nums, return the element that appears more than ⌊n / 2⌋ times.',
        examples: [
            'Input: [3,2,3] → Output: 3',
            'Input: [2,2,1,1,1,2,2] → Output: 2',
        ],
        functionSignature: 'function majorityElement(nums) {}',
        starterCode: `function majorityElement(nums) {
  let count = 0, candidate = null;
  for (const num of nums) {
    if (count === 0) candidate = num;
    count += (num === candidate ? 1 : -1);
  }
  return candidate;
}`,
        testCases: [
            { input: [[3, 2, 3]], output: 3 },
            { input: [[2, 2, 1, 1, 1, 2, 2]], output: 2 },
        ],
    },
    {
        slug: 'group-anagrams',
        title: 'Group Anagrams',
        difficulty: 'medium',
        description:
            'Given an array of strings strs, group the anagrams together. You can return the answer in any order.',
        examples: [
            'Input: ["eat","tea","tan","ate","nat","bat"] → Output: [["eat","tea","ate"],["tan","nat"],["bat"]]',
        ],
        functionSignature: 'function groupAnagrams(strs) {}',
        starterCode: `function groupAnagrams(strs) {
  const map = new Map();
  for (const s of strs) {
    const key = s.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(s);
  }
  return Array.from(map.values());
}`,
        testCases: [
            {
                input: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']],
                output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']],
            },
        ],
    },

    // ========================== HARD ==========================
    {
        slug: 'trapping-rain-water',
        title: 'Trapping Rain Water',
        difficulty: 'hard',
        description:
            'Given n non-negative integers representing elevation map, compute how much water it can trap after raining.',
        examples: [
            'Input: [0,1,0,2,1,0,1,3,2,1,2,1] → Output: 6',
            'Input: [4,2,0,3,2,5] → Output: 9',
        ],
        functionSignature: 'function trap(height) {}',
        starterCode: `function trap(height) {
  let l = 0, r = height.length - 1, leftMax = 0, rightMax = 0, res = 0;
  while (l < r) {
    if (height[l] < height[r]) {
      height[l] >= leftMax ? (leftMax = height[l]) : (res += leftMax - height[l]);
      l++;
    } else {
      height[r] >= rightMax ? (rightMax = height[r]) : (res += rightMax - height[r]);
      r--;
    }
  }
  return res;
}`,
        testCases: [
            { input: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]], output: 6 },
            { input: [[4, 2, 0, 3, 2, 5]], output: 9 },
        ],
    },
    {
        slug: 'median-two-arrays',
        title: 'Median of Two Sorted Arrays',
        difficulty: 'hard',
        description:
            'Given two sorted arrays nums1 and nums2, return the median of the two sorted arrays.',
        examples: [
            'Input: nums1 = [1,3], nums2 = [2] → Output: 2.0',
            'Input: nums1 = [1,2], nums2 = [3,4] → Output: 2.5',
        ],
        functionSignature: 'function findMedianSortedArrays(nums1, nums2) {}',
        starterCode: `function findMedianSortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a,b)=>a-b);
  const n = merged.length;
  return n % 2 ? merged[Math.floor(n/2)] : (merged[n/2 - 1] + merged[n/2]) / 2;
}`,
        testCases: [
            { input: [[1, 3], [2]], output: 2 },
            { input: [[1, 2], [3, 4]], output: 2.5 },
        ],
    },
    {
        slug: 'longest-valid-parentheses',
        title: 'Longest Valid Parentheses',
        difficulty: 'hard',
        description:
            'Given a string containing just the characters "(" and ")", find the length of the longest valid parentheses substring.',
        examples: [
            'Input: "(()" → Output: 2',
            'Input: ")()())" → Output: 4',
        ],
        functionSignature: 'function longestValidParentheses(s) {}',
        starterCode: `function longestValidParentheses(s) {
  const stack = [-1];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(i);
    else {
      stack.pop();
      if (stack.length === 0) stack.push(i);
      else max = Math.max(max, i - stack[stack.length - 1]);
    }
  }
  return max;
}`,
        testCases: [
            { input: ['(()'], output: 2 },
            { input: [')()())'], output: 4 },
        ],
    },
    {
        slug: 'word-ladder',
        title: 'Word Ladder',
        difficulty: 'hard',
        description:
            'Given two words (beginWord and endWord), and a dictionary wordList, find the length of the shortest transformation sequence from beginWord to endWord.',
        examples: [
            'Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"] → Output: 5',
        ],
        functionSignature: 'function ladderLength(beginWord, endWord, wordList) {}',
        starterCode: `function ladderLength(beginWord, endWord, wordList) {
  const set = new Set(wordList);
  const q = [[beginWord, 1]];
  while (q.length) {
    const [word, len] = q.shift();
    if (word === endWord) return len;
    for (let i = 0; i < word.length; i++) {
      for (let c of 'abcdefghijklmnopqrstuvwxyz') {
        const next = word.slice(0, i) + c + word.slice(i + 1);
        if (set.has(next)) {
          set.delete(next);
          q.push([next, len + 1]);
        }
      }
    }
  }
  return 0;
}`,
        testCases: [
            {
                input: ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']],
                output: 5,
            },
        ],
    },
    {
        slug: 'n-queens',
        title: 'N Queens',
        difficulty: 'hard',
        description:
            'The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.',
        examples: [
            'Input: n = 4 → Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
        ],
        functionSignature: 'function solveNQueens(n) {}',
        starterCode: `function solveNQueens(n) {
  const res = [];
  const board = Array(n).fill().map(()=>Array(n).fill('.'));
  const cols = new Set(), diag1 = new Set(), diag2 = new Set();

  const backtrack = (r) => {
    if (r === n) {
      res.push(board.map(row => row.join('')));
      return;
    }
    for (let c = 0; c < n; c++) {
      if (cols.has(c) || diag1.has(r-c) || diag2.has(r+c)) continue;
      cols.add(c); diag1.add(r-c); diag2.add(r+c);
      board[r][c] = 'Q';
      backtrack(r+1);
      board[r][c] = '.';
      cols.delete(c); diag1.delete(r-c); diag2.delete(r+c);
    }
  };

  backtrack(0);
  return res;
}`,
        testCases: [
            {
                input: [4],
                output: [
                    ['.Q..', '...Q', 'Q...', '..Q.'],
                    ['..Q.', 'Q...', '...Q', '.Q..'],
                ],
            },
        ],
    },
    {
        slug: 'sudoku-solver',
        title: 'Sudoku Solver',
        difficulty: 'hard',
        description:
            'Write a program to solve a Sudoku puzzle by filling the empty cells.',
        examples: [
            'Input: partially filled 9x9 board → Output: solved Sudoku board',
        ],
        functionSignature: 'function solveSudoku(board) {}',
        starterCode: `function solveSudoku(board) {
  const isValid = (r,c,ch) => {
    for (let i=0;i<9;i++){
      if (board[i][c]===ch||board[r][i]===ch||board[Math.floor(r/3)*3+Math.floor(i/3)][Math.floor(c/3)*3+i%3]===ch)
        return false;
    }
    return true;
  }
  const dfs = () => {
    for (let r=0;r<9;r++){
      for (let c=0;c<9;c++){
        if (board[r][c]==='.') {
          for (let ch of '123456789'){
            if (isValid(r,c,ch)){
              board[r][c]=ch;
              if (dfs()) return true;
              board[r][c]='.';
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  dfs();
  return board;
}`,
        testCases: [
            { input: [[['5', '3', '.', '.', '7', '.', '.', '.', '.']]], output: 'solved board' },
        ],
    },
];
