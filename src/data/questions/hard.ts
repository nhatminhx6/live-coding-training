export const hardQuestions = [
    {
        slug: "trapping-rain-water",
        title: "Trapping Rain Water",
        difficulty: "hard",
        description: "Compute how much water can be trapped after raining.",
        examples: ["[0,1,0,2,1,0,1,3,2,1,2,1] → 6"],
        functionSignature: "function trap(height) {}",
        starterCode: `function trap(heights) {
  let left = 0;
  let right = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let trappedWater = 0;

  while (left < right) {
    if (heights[left] < heights[right]) {
      leftMax = Math.max(leftMax, heights[left]);
      trappedWater += leftMax - heights[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, heights[right]);
      trappedWater += rightMax - heights[right];
      right--;
    }
  }

  return trappedWater;
}`,
        testCases: [{ input: [[0,1,0,2,1,0,1,3,2,1,2,1]], output: 6 }]
    },
    {
        slug: "median-two-arrays",
        title: "Median of Two Sorted Arrays",
        difficulty: "hard",
        description: "Return the median of two sorted arrays.",
        examples: ["[1,3] & [2] → 2"],
        functionSignature: "function findMedianSortedArrays(a,b) {}",
        starterCode: `function findMedianSortedArrays(firstArray, secondArray) {
  if (firstArray.length > secondArray.length) {
    return findMedianSortedArrays(secondArray, firstArray);
  }

  const total = firstArray.length + secondArray.length;
  const half = Math.floor((total + 1) / 2);
  let left = 0;
  let right = firstArray.length;

  while (left <= right) {
    const index = Math.floor((left + right) / 2);
    const nextIndex = half - index;
    const firstLeft = index === 0 ? -Infinity : firstArray[index - 1];
    const firstRight = index === firstArray.length ? Infinity : firstArray[index];
    const secondLeft = nextIndex === 0 ? -Infinity : secondArray[nextIndex - 1];
    const secondRight = nextIndex === secondArray.length ? Infinity : secondArray[nextIndex];

    if (firstLeft <= secondRight && secondLeft <= firstRight) {
      if (total % 2) {
        return Math.max(firstLeft, secondLeft);
      }

      return (Math.max(firstLeft, secondLeft) + Math.min(firstRight, secondRight)) / 2;
    }

    if (firstLeft > secondRight) {
      right = index - 1;
    } else {
      left = index + 1;
    }
  }
}`,
        testCases: [{ input: [[1,3],[2]], output: 2 }]
    },
    {
        slug: "merge-k-sorted-arrays",
        title: "Merge k Sorted Arrays",
        difficulty: "hard",
        description: "Merge k sorted arrays into one sorted array.",
        examples: ["[[1,4,5],[1,3,4],[2,6]] → [1,1,2,3,4,4,5,6]"],
        functionSignature: "function mergeKArrays(arrs) {}",
        starterCode: `function mergeKArrays(first) {
  function merge(left, right) {
    const result = [];
    let index = 0;
    let nextIndex = 0;

    while (index < left.length || nextIndex < right.length) {
      if (nextIndex === right.length || index < left.length && left[index] <= right[nextIndex]) {
        result.push(left[index]);
        index++;
      } else {
        result.push(right[nextIndex]);
        nextIndex++;
      }
    }

    return result;
  }

  while (first.length > 1) {
    const next = [];

    for (let index = 0; index < first.length; index += 2) {
      next.push(index + 1 < first.length ? merge(first[index], first[index + 1]) : first[index]);
    }
    first = next;
  }

  return first[0] || [];
}`,
        testCases: [{ input: [[[1,4,5],[1,3,4],[2,6]]], output: [1,1,2,3,4,4,5,6] }]
    },
    {
        slug: "word-ladder",
        title: "Word Ladder",
        difficulty: "hard",
        description: "Length of shortest transformation from beginWord to endWord.",
        examples: [`"hit","cog",["hot","dot","dog","lot","log","cog"] → 5`],
        functionSignature: "function ladderLength(begin,end,wordList) {}",
        starterCode: `function ladderLength(beginWord, endWord, wordList) {
  const availableWords = new Set(wordList);

  if (!availableWords.has(endWord)) {
    return 0;
  }

  const queue = [[beginWord, 1]];

  while (queue.length) {
    const [w, d] = queue.shift();

    if (w === endWord) {
      return d;
    }

    for (let index = 0; index < w.length; index++) {
      for (const character of 'abcdefghijklmnopqrstuvwxyz') {
        const nextWord = w.slice(0, index) + character + w.slice(index + 1);

        if (availableWords.has(nextWord)) {
          availableWords.delete(nextWord);
          queue.push([nextWord, d + 1]);
        }
      }
    }
  }

  return 0;
}`,
        testCases: [{ input: ["hit","cog",["hot","dot","dog","lot","log","cog"]], output: 5 }]
    },
    {
        slug: "n-queens",
        title: "N Queens",
        difficulty: "hard",
        description: "Return all distinct solutions to the n-queens puzzle.",
        examples: ["n=4 → 2 solutions"],
        functionSignature: "function solveNQueens(n) {}",
        starterCode: `function solveNQueens(boardSize) {
  const result = [];
  const values = Array(boardSize);
  const items = values.fill(0);
  const board = items.map(() => {
    const values = Array(boardSize);

    return values.fill('.');
  });
  const columns = new Set();
  const diagonals = new Set();
  const antiDiagonals = new Set();
  function bt(row) {
    if (row === boardSize) {
      result.push(board.map(value => {
        return value.join('');
      }));

      return;
    }

    for (let column = 0; column < boardSize; column++) {
      if (columns.has(column) || diagonals.has(row - column) || antiDiagonals.has(row + column)) {
        continue;
      }
      columns.add(column);
      diagonals.add(row - column);
      antiDiagonals.add(row + column);
      board[row][column] = 'Q';
      bt(row + 1);
      board[row][column] = '.';
      columns.delete(column);
      diagonals.delete(row - column);
      antiDiagonals.delete(row + column);
    }
  }
  bt(0);

  return result;
}`,
        testCases: [{ input: [4], output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]] }]
    },
    {
        slug: "sudoku-solver",
        title: "Sudoku Solver",
        difficulty: "hard",
        description: "Solve a 9x9 Sudoku board.",
        examples: ["Return solved board"],
        functionSignature: "function solveSudoku(board) {}",
        starterCode: `function solveSudoku(board) {
  function ok(row, column, digit) {
    for (let index = 0; index < 9; index++) {
      const rowHasValue = board[row][index] === digit;
      const columnHasValue = board[index][column] === digit;
      const boxRow = Math.floor(row / 3) * 3 + Math.floor(index / 3);
      const boxColumn = Math.floor(column / 3) * 3 + index % 3;
      const boxHasValue = board[boxRow][boxColumn] === digit;

      if (rowHasValue || columnHasValue || boxHasValue) {
        return false;
      }
    }

    return true;
  }
  function dfs() {
    for (let row = 0; row < 9; row++) {
      for (let column = 0; column < 9; column++) {
        if (board[row][column] === '.') {
          for (const digit of '123456789') {
            if (ok(row, column, digit)) {
              board[row][column] = digit;

              if (dfs()) {
                return true;
              }
              board[row][column] = '.';
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
        testCases: [{ input: [[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]], output: "solved" }]
    },
    {
        slug: "edit-distance",
        title: "Edit Distance",
        difficulty: "hard",
        description: "Minimum edit distance between two strings.",
        examples: [`"horse","ros" → 3`],
        functionSignature: "function minDistance(a,b) {}",
        starterCode: `function minDistance(firstWord, secondWord) {
  const firstLength = firstWord.length;
  const secondLength = secondWord.length;
  const dp = Array.from({
    length: firstLength + 1
  }, () => {
    const values = Array(secondLength + 1);

    return values.fill(0);
  });

  for (let index = 0; index <= firstLength; index++) {
    dp[index][0] = index;
  }

  for (let nextIndex = 0; nextIndex <= secondLength; nextIndex++) {
    dp[0][nextIndex] = nextIndex;
  }

  for (let index = 1; index <= firstLength; index++) {
    for (let nextIndex = 1; nextIndex <= secondLength; nextIndex++) {
      if (firstWord[index - 1] === secondWord[nextIndex - 1]) {
        dp[index][nextIndex] = dp[index - 1][nextIndex - 1];
      } else {
        const deleteCost = dp[index - 1][nextIndex];
        const insertCost = dp[index][nextIndex - 1];
        const replaceCost = dp[index - 1][nextIndex - 1];
        dp[index][nextIndex] = 1 + Math.min(deleteCost, insertCost, replaceCost);
      }
    }
  }

  return dp[firstLength][secondLength];
}`,
        testCases: [{ input: ["horse","ros"], output: 3 }]
    },
    {
        slug: "regex-matching",
        title: "Regular Expression Matching",
        difficulty: "hard",
        description: "Implement regex matching with '.' and '*'.",
        examples: [`"aa","a*" → true`],
        functionSignature: "function isMatch(s,p) {}",
        starterCode: `function isMatch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;
  const dp = Array.from({
    length: textLength + 1
  }, () => {
    const values = Array(patternLength + 1);

    return values.fill(false);
  });
  dp[0][0] = true;

  for (let nextIndex = 2; nextIndex <= patternLength; nextIndex++) {
    if (pattern[nextIndex - 1] === '*') {
      dp[0][nextIndex] = dp[0][nextIndex - 2];
    }
  }

  for (let index = 1; index <= textLength; index++) {
    for (let nextIndex = 1; nextIndex <= patternLength; nextIndex++) {
      if (pattern[nextIndex - 1] !== '*') {
        dp[index][nextIndex] = dp[index - 1][nextIndex - 1] && (pattern[nextIndex - 1] === '.' || pattern[nextIndex - 1] === text[index - 1]);
      } else {
        dp[index][nextIndex] = dp[index][nextIndex - 2] || (pattern[nextIndex - 2] === '.' || pattern[nextIndex - 2] === text[index - 1]) && dp[index - 1][nextIndex];
      }
    }
  }

  return dp[textLength][patternLength];
}`,
        testCases: [{ input: ["aa","a*"], output: true }]
    },
    {
        slug: "sliding-window-maximum",
        title: "Sliding Window Maximum",
        difficulty: "hard",
        description: "Return max sliding window of size k.",
        examples: ["[1,3,-1,-3,5,3,6,7], k=3 → [3,3,5,5,6,7]"],
        functionSignature: "function maxSlidingWindow(nums,k) {}",
        starterCode: `function maxSlidingWindow(nums, k) {
  const deque = [];
  const result = [];

  for (let index = 0; index < nums.length; index++) {
    while (deque.length && deque[0] <= index - k) {
      deque.shift();
    }

    while (deque.length && nums[deque[deque.length - 1]] <= nums[index]) {
      deque.pop();
    }
    deque.push(index);

    if (index >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}`,
        testCases: [{ input: [[1,3,-1,-3,5,3,6,7],3], output: [3,3,5,5,6,7] }]
    },
    {
        slug: "burst-balloons",
        title: "Burst Balloons",
        difficulty: "hard",
        description: "Max coins by bursting balloons in optimal order.",
        examples: ["[3,1,5,8] → 167"],
        functionSignature: "function maxCoins(nums) {}",
        starterCode: `function maxCoins(nums) {
  const balloons = [1, ...nums, 1];
  const n = balloons.length;
  const dp = Array.from({
    length: n
  }, () => {
    const values = Array(n);

    return values.fill(0);
  });

  for (let length = 2; length < n; length++) {
    for (let left = 0; left + length < n; left++) {
      const right = left + length;

      for (let last = left + 1; last < right; last++) {
        dp[left][right] = Math.max(dp[left][right], balloons[left] * balloons[last] * balloons[right] + dp[left][last] + dp[last][right]);
      }
    }
  }

  return dp[0][n - 1];
}`,
        testCases: [{ input: [[3,1,5,8]], output: 167 }]
    },
    {
        slug: "largest-rectangle-histogram",
        title: "Largest Rectangle in Histogram",
        difficulty: "hard",
        description: "Find area of largest rectangle in histogram.",
        examples: ["[2,1,5,6,2,3] → 10"],
        functionSignature: "function largestRectangleArea(heights) {}",
        starterCode: `function largestRectangleArea(heights) {
  const increasingIndices = [];
  let maxArea = 0;

  for (let rightBoundary = 0; rightBoundary <= heights.length; rightBoundary++) {
    const currentHeight = rightBoundary === heights.length ? 0 : heights[rightBoundary];

    while (increasingIndices.length > 0 && currentHeight < heights[increasingIndices[increasingIndices.length - 1]]) {
      const rectangleHeight = heights[increasingIndices.pop()];
      const leftBoundary = increasingIndices.length > 0 ? increasingIndices[increasingIndices.length - 1] + 1 : 0;
      const rectangleWidth = rightBoundary - leftBoundary;
      const currentArea = rectangleHeight * rectangleWidth;

      if (currentArea > maxArea) {
        maxArea = currentArea;
      }
    }
    increasingIndices.push(rightBoundary);
  }

  return maxArea;
}`,
        testCases: [{ input: [[2,1,5,6,2,3]], output: 10 }]
    },
    {
        slug: "longest-consecutive",
        title: "Longest Consecutive Sequence",
        difficulty: "hard",
        description: "Return length of longest consecutive sequence.",
        examples: ["[100,4,200,1,3,2] → 4"],
        functionSignature: "function longestConsecutive(nums) {}",
        starterCode: `function longestConsecutive(nums) {
  const values = new Set(nums);
  let best = 0;

  for (const value of values) {
    if (!values.has(value - 1)) {
      let nextValue = value;
      let length = 1;

      while (values.has(nextValue + 1)) {
        nextValue++;
        length++;
      }
      best = Math.max(best, length);
    }
  }

  return best;
}`,
        testCases: [{ input: [[100,4,200,1,3,2]], output: 4 }]
    },
    {
        slug: "min-window-subsequence",
        title: "Minimum Window Subsequence",
        difficulty: "hard",
        description: "Minimum window in S which contains T as a subsequence.",
        examples: [`"abcdebdde","bde" → "bcde"`],
        functionSignature: "function minWindowSubsequence(S,T) {}",
        starterCode: `function minWindowSubsequence(S, T) {
  let start = -1;
  let windowLength = Infinity;

  for (let index = 0; index < S.length; index++) {
    if (S[index] !== T[0]) {
      continue;
    }

    let source = index;
    let target = 0;

    while (source < S.length) {
      if (S[source] === T[target]) {
        target++;
      }

      if (target === T.length) {
        break;
      }
      source++;
    }

    if (target < T.length) {
      break;
    }

    let end = source;

    while (source >= index) {
      if (S[source] === T[target - 1]) {
        target--;
      }

      if (target === 0) {
        break;
      }
      source--;
    }

    if (end - source + 1 < windowLength) {
      windowLength = end - source + 1;
      start = source;
    }
  }

  return start === -1 ? '' : S.slice(start, start + windowLength);
}`,
        testCases: [{ input: ["abcdebdde","bde"], output: "bcde" }]
    },
    {
        slug: "palindrome-partitioning",
        title: "Palindrome Partitioning",
        difficulty: "hard",
        description: "Return all possible palindrome partitionings.",
        examples: [`"aab" → [["a","a","b"],["aa","b"]]`],
        functionSignature: "function partition(s) {}",
        starterCode: `function partition(text) {
  const result = [];
  function isP(left, right) {
    while (left < right) {
      if (text[left] !== text[right]) {
        return false;
      }
      left++;
      right--;
    }

    return true;
  }
  function dfs(index, current) {
    if (index === text.length) {
      result.push(current.slice());

      return;
    }

    for (let nextIndex = index; nextIndex < text.length; nextIndex++) {
      if (isP(index, nextIndex)) {
        current.push(text.slice(index, nextIndex + 1));
        dfs(nextIndex + 1, current);
        current.pop();
      }
    }
  }
  dfs(0, []);

  return result;
}`,
        testCases: [{ input: ["aab"], output: [["a","a","b"],["aa","b"]] }]
    },
];
