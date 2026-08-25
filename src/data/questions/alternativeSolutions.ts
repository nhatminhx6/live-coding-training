// Cách 2 cho các bài không có arrayFunctionCode ngay trong dữ liệu câu hỏi.
// Các cách này chủ ý dùng một hướng tiếp cận khác để người học so sánh trade-off.
export const alternativeSolutions: Record<string, string> = {
  'two-sum': `function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}`,
  'fizz-buzz': `function fizzBuzz(n) {
  return Array.from({
    length: n
  }, (_, i) => {
    const x = i + 1;
    if (x % 15 === 0) {
      return 'FizzBuzz';
    }
    if (x % 3 === 0) {
      return 'Fizz';
    }
    if (x % 5 === 0) {
      return 'Buzz';
    }
    return String(x);
  });
}`,
  'move-zeroes': `function moveZeroes(nums) {
  const values = nums.filter(number => number !== 0);
  return values.concat(Array(nums.length - values.length).fill(0));
}`,
  'plus-one': `function plusOne(digits) {
  return String(BigInt(digits.join('')) + 1n).split('').map(Number);
}`,
  'binary-search': `function search(nums, target) {
  return nums.indexOf(target);
}`,
  'first-unique-char': `function firstUniqChar(s) {
  return [...s].findIndex(char => s.indexOf(char) === s.lastIndexOf(char));
}`,
  'valid-parentheses': `function isValid(s) {
  let previous;
  do {
    previous = s;
    s = s.replace('()', '').replace('[]', '').replace('{}', '');
  } while (s !== previous);
  return s.length === 0;
}`,
  'ransom-note': `function canConstruct(ransom, magazine) {
  return [...ransom].every(char => {
    const index = magazine.indexOf(char);
    if (index < 0) {
      return false;
    }
    magazine = magazine.slice(0, index) + magazine.slice(index + 1);
    return true;
  });
}`,
  'merge-two-sorted-arrays': `function mergeTwoSorted(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}`,
  'remove-duplicates-sorted': `function removeDuplicates(nums) {
  const unique = [...new Set(nums)];
  unique.forEach((value, index) => nums[index] = value);
  return unique.length;
}`,
  'best-time-buy-sell': `function maxProfit(prices) {
  return prices.reduce((best, sell, i) => Math.max(best, sell - Math.min(...prices.slice(0, i + 1))), 0);
}`,
  'intersection-two-arrays-ii': `function intersect(a, b) {
  return a.filter(value => {
    const index = b.indexOf(value);
    if (index < 0) {
      return false;
    }
    b.splice(index, 1);
    return true;
  });
}`,
  'isomorphic-strings': `function isIsomorphic(s, t) {
  const pattern = value => [...value].map((char, i) => value.indexOf(char)).join(',');
  return pattern(s) === pattern(t);
}`,
  'climbing-stairs': `function climbStairs(n, memo = {}) {
  if (n <= 2) {
    return n;
  }
  if (memo[n]) {
    return memo[n];
  }
  return memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
}`,
  'majority-element': `function majorityElement(nums) {
  return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
}`,
  '3sum': `function threeSum(nums) {
  const found = new Map();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          found.set(triplet.join(','), triplet);
        }
      }
    }
  }
  return [...found.values()];
}`,
  'longest-substring': `function lengthOfLongestSubstring(s) {
  let best = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const part = s.slice(i, j);
      if (new Set(part).size === part.length) {
        best = Math.max(best, part.length);
      }
    }
  }
  return best;
}`,
  'group-anagrams': `function groupAnagrams(words) {
  const groups = {};
  words.forEach(word => {
    const key = [...word].sort().join('');
    (groups[key] ??= []).push(word);
  });
  return Object.values(groups);
}`,
  'top-k-frequent': `function topKFrequent(nums, k) {
  const count = nums.reduce((map, n) => map.set(n, (map.get(n) || 0) + 1), new Map());
  return [...count].sort((a, b) => b[1] - a[1]).slice(0, k).map(([number]) => number);
}`,
  'product-except-self': `function productExceptSelf(nums) {
  return nums.map((_, skippedIndex) => {
    return nums.reduce((product, number, index) => {
      if (index === skippedIndex) {
        return product;
      }

      return product * number;
    }, 1);
  });
}`,
  'rotate-image': `function rotate(matrix) {
  return matrix[0].map((_, column) => matrix.map(row => row[column]).reverse());
}`,
  'set-matrix-zeroes': `function setZeroes(matrix) {
  const zeroes = matrix
    .flatMap((row, rowIndex) => {
      return row.map((value, columnIndex) => {
        return value === 0 ? [rowIndex, columnIndex] : null;
      });
    })
    .filter(Boolean);

  return matrix.map((row, rowIndex) => {
    return row.map((value, columnIndex) => {
      const mustBeZero = zeroes.some(([zeroRow, zeroColumn]) => {
        return zeroRow === rowIndex || zeroColumn === columnIndex;
      });

      return mustBeZero ? 0 : value;
    });
  });
}`,
  'spiral-matrix': `function spiralOrder(matrix) {
  const result = [];
  while (matrix.length) {
    result.push(...matrix.shift());
    matrix = matrix[0]?.map((_, i) => matrix.map(row => row[row.length - 1 - i])) || [];
  }
  return result;
}`,
  'word-break': `function wordBreak(s, words, memo = {}) {
  if (!s) {
    return true;
  }
  if (s in memo) {
    return memo[s];
  }
  return memo[s] = words.some(word => s.startsWith(word) && wordBreak(s.slice(word.length), words, memo));
}`,
  'coin-change': `function coinChange(coins, amount) {
  const queue = [[0, 0]];
  const seen = new Set([0]);
  while (queue.length) {
    const [sum, count] = queue.shift();
    if (sum === amount) {
      return count;
    }
    for (const coin of coins) {
      if (sum + coin <= amount && !seen.has(sum + coin)) {
        seen.add(sum + coin);
        queue.push([sum + coin, count + 1]);
      }
    }
  }
  return -1;
}`,
  'combination-sum': `function combinationSum(candidates, target) {
  const result = [];
  function build(start, rest, chosen) {
    if (rest === 0) {
      return result.push(chosen);
    }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] <= rest) {
        build(i, rest - candidates[i], [...chosen, candidates[i]]);
      }
    }
  }
  build(0, target, []);
  return result;
}`,
  'longest-pal-substring': `function longestPalindrome(s) {
  const parts = [...s].flatMap((_, i) => [...s.slice(i)].map((_, j) => s.slice(i, i + j + 1)));
  return parts.filter(part => part === [...part].reverse().join('')).sort((a, b) => b.length - a.length)[0] || '';
}`,
  'container-most-water': `function maxArea(height) {
  let best = 0;
  for (let left = 0; left < height.length; left++) {
    for (let right = left + 1; right < height.length; right++) {
      best = Math.max(best, Math.min(height[left], height[right]) * (right - left));
    }
  }
  return best;
}`,
  'meeting-rooms-ii': `function minMeetingRooms(intervals) {
  const events = intervals
    .flatMap(([start, end]) => {
      return [[start, 1], [end, -1]];
    })
    .sort((a, b) => {
      return a[0] - b[0] || a[1] - b[1];
    });

  let rooms = 0;
  let best = 0;
  events.forEach(([, change]) => {
    rooms += change;
    best = Math.max(best, rooms);
  });
  return best;
}`,
  'kth-largest': `function findKthLargest(nums, k) {
  const target = nums.length - k;
  function select(left, right) {
    const pivot = nums[right];
    let p = left;
    for (let i = left; i < right; i++) {
      if (nums[i] <= pivot) {
        [nums[i], nums[p]] = [nums[p], nums[i]];
        p++;
      }
    }
    [nums[p], nums[right]] = [nums[right], nums[p]];
    return p === target ? nums[p] : p < target ? select(p + 1, right) : select(left, p - 1);
  }
  return select(0, nums.length - 1);
}`,
  'course-schedule': `function canFinish(n, prerequisites) {
  const graph = Array.from({
    length: n
  }, () => []);
  const state = Array(n).fill(0);
  prerequisites.forEach(([course, pre]) => graph[course].push(pre));
  function hasCycle(course) {
    if (state[course] === 1) {
      return true;
    }
    if (state[course] === 2) {
      return false;
    }
    state[course] = 1;
    if (graph[course].some(hasCycle)) {
      return true;
    }
    state[course] = 2;
    return false;
  }
  return !graph.some((_, course) => hasCycle(course));
}`,
  'number-of-islands': `function numIslands(grid) {
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === '1') {
        count++;
        const queue = [[r, c]];
        grid[r][c] = '0';
        while (queue.length) {
          const [x, y] = queue.shift();
          for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            if (grid[x + dx]?.[y + dy] === '1') {
              grid[x + dx][y + dy] = '0';
              queue.push([x + dx, y + dy]);
            }
          }
        }
      }
    }
  }
  return count;
}`,
  'min-window-substring': `function minWindow(s, t) {
  const valid = part => {
    return [...t].every(char => {
      const countInPart = [...part].filter(value => value === char).length;
      const countInTarget = [...t].filter(value => value === char).length;

      return countInPart >= countInTarget;
    });
  };
  for (let size = t.length; size <= s.length; size++) {
    for (let i = 0; i + size <= s.length; i++) {
      if (valid(s.slice(i, i + size))) {
        return s.slice(i, i + size);
      }
    }
  }
  return '';
}`,
  'decode-ways': `function numDecodings(s, memo = {}) {
  if (!s.length) {
    return 1;
  }
  if (s[0] === '0') {
    return 0;
  }
  if (s in memo) {
    return memo[s];
  }
  let ways = numDecodings(s.slice(1), memo);
  if (+s.slice(0, 2) <= 26) {
    ways += numDecodings(s.slice(2), memo);
  }
  return memo[s] = ways;
}`,
  'trapping-rain-water': `function trap(height) {
  return height.reduce((water, h, i) => {
    const left = Math.max(...height.slice(0, i + 1));
    const right = Math.max(...height.slice(i));
    return water + Math.min(left, right) - h;
  }, 0);
}`,
  'median-two-arrays': `function findMedianSortedArrays(a, b) {
  const values = [...a, ...b].sort((x, y) => x - y);
  const middle = Math.floor(values.length / 2);
  return values.length % 2 ? values[middle] : (values[middle - 1] + values[middle]) / 2;
}`,
  'merge-k-sorted-arrays': `function mergeKArrays(arrays) {
  return arrays.flat().sort((a, b) => a - b);
}`,
  'word-ladder': `function ladderLength(begin, end, words) {
  const set = new Set(words);
  const queue = [[begin, 1]];
  while (queue.length) {
    const [word, steps] = queue.shift();
    if (word === end) {
      return steps;
    }
    for (const next of [...set]) {
      let differences = 0;
      for (let i = 0; i < word.length; i++) {
        differences += word[i] !== next[i];
      }
      if (differences === 1) {
        set.delete(next);
        queue.push([next, steps + 1]);
      }
    }
  }
  return 0;
}`,
  'n-queens': `function solveNQueens(n) {
  const result = [];
  function place(row, columns) {
    if (row === n) {
      return result.push(columns.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
    }
    for (let c = 0; c < n; c++) {
      if (columns.every((old, r) => old !== c && Math.abs(old - c) !== row - r)) {
        place(row + 1, [...columns, c]);
      }
    }
  }
  place(0, []);
  return result;
}`,
  'sudoku-solver': `function solveSudoku(board) {
  const empty = board.flatMap((row, r) => row.map((v, c) => v === '.' ? [r, c] : null)).filter(Boolean);
  function solve(i) {
    if (i === empty.length) {
      return true;
    }
    const [r, c] = empty[i];
    for (const value of '123456789') {
      if (!board[r].includes(value) && !board.some(row => row[c] === value) && !board.slice(r - r % 3, r - r % 3 + 3).some(row => row.slice(c - c % 3, c - c % 3 + 3).includes(value))) {
        board[r][c] = value;
        if (solve(i + 1)) {
          return true;
        }
        board[r][c] = '.';
      }
    }
    return false;
  }
  solve(0);
  return board;
}`,
  'edit-distance': `function minDistance(a, b, memo = {}) {
  const key = a + '|' + b;
  if (!a.length || !b.length) {
    return Math.max(a.length, b.length);
  }
  if (key in memo) {
    return memo[key];
  }
  if (a[0] === b[0]) {
    return minDistance(a.slice(1), b.slice(1), memo);
  }
  const deleteCost = minDistance(a.slice(1), b, memo);
  const insertCost = minDistance(a, b.slice(1), memo);
  const replaceCost = minDistance(a.slice(1), b.slice(1), memo);

  memo[key] = 1 + Math.min(deleteCost, insertCost, replaceCost);
  return memo[key];
}`,
  'regex-matching': `function isMatch(s, p, memo = {}) {
  const key = s + '|' + p;
  if (key in memo) {
    return memo[key];
  }
  if (!p) {
    return !s;
  }
  const first = !!s && (p[0] === '.' || p[0] === s[0]);
  if (p[1] === '*') {
    const skipPattern = isMatch(s, p.slice(2), memo);
    const useCharacter = first && isMatch(s.slice(1), p, memo);
    memo[key] = skipPattern || useCharacter;
  } else {
    memo[key] = first && isMatch(s.slice(1), p.slice(1), memo);
  }

  return memo[key];
}`,
  'sliding-window-maximum': `function maxSlidingWindow(nums, k) {
  return nums.slice(0, nums.length - k + 1).map((_, i) => Math.max(...nums.slice(i, i + k)));
}`,
  'burst-balloons': `function maxCoins(nums, memo = new Map()) {
  const key = nums.join(',');
  if (memo.has(key)) {
    return memo.get(key);
  }
  let best = 0;
  nums.forEach((value, index) => {
    const leftValue = nums[index - 1] || 1;
    const rightValue = nums[index + 1] || 1;
    const remaining = nums.filter((_, itemIndex) => itemIndex !== index);
    const coins = leftValue * value * rightValue + maxCoins(remaining, memo);

    best = Math.max(best, coins);
  });
  memo.set(key, best);
  return best;
}`,
  'largest-rectangle-histogram': `function largestRectangleArea(heights) {
  let best = 0;
  for (let left = 0; left < heights.length; left++) {
    let min = Infinity;
    for (let right = left; right < heights.length; right++) {
      min = Math.min(min, heights[right]);
      best = Math.max(best, min * (right - left + 1));
    }
  }
  return best;
}`,
  'longest-consecutive': `function longestConsecutive(nums) {
  const sorted = [...new Set(nums)].sort((a, b) => a - b);
  let current = sorted.length ? 1 : 0;
  let best = current;
  for (let i = 1; i < sorted.length; i++) {
    current = sorted[i] === sorted[i - 1] + 1 ? current + 1 : 1;
    best = Math.max(best, current);
  }
  return best;
}`,
  'min-window-subsequence': `function minWindowSubsequence(s, t) {
  for (let size = t.length; size <= s.length; size++) {
    for (let i = 0; i + size <= s.length; i++) {
      const part = s.slice(i, i + size);
      let at = 0;
      for (const char of part) {
        if (char === t[at]) {
          at++;
        }
      }
      if (at === t.length) {
        return part;
      }
    }
  }
  return '';
}`,
  'palindrome-partitioning': `function partition(s) {
  if (!s) {
    return [[]];
  }
  return [...s].flatMap((_, i) => {
    const head = s.slice(0, i + 1);
    if (head !== [...head].reverse().join('')) {
      return [];
    }
    return partition(s.slice(i + 1)).map(rest => [head, ...rest]);
  });
}`,
}
