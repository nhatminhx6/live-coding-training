// Cách 2 cho các bài không có arrayFunctionCode ngay trong dữ liệu câu hỏi.
// Các cách này chủ ý dùng một hướng tiếp cận khác để người học so sánh trade-off.
export const alternativeSolutions: Record<string, string> = {
  'two-sum': `function twoSum(nums, target) {
  for (let index = 0; index < nums.length; index++) {
    for (let nextIndex = index + 1; nextIndex < nums.length; nextIndex++) {
      if (nums[index] + nums[nextIndex] === target) {
        return [index, nextIndex];
      }
    }
  }

  return [];
}`,
  'fizz-buzz': `function fizzBuzz(limit) {
  return Array.from({
    length: limit
  }, (_, index) => {
    const number = index + 1;

    if (number % 15 === 0) {
      return 'FizzBuzz';
    }

    if (number % 3 === 0) {
      return 'Fizz';
    }

    if (number % 5 === 0) {
      return 'Buzz';
    }

    return String(number);
  });
}`,
  'move-zeroes': `function moveZeroes(nums) {
  const nonZeroNumbers = nums.filter((number) => {
    return number !== 0;
  });

  const zeroCount = nums.length - nonZeroNumbers.length;
  const zeroes = Array(zeroCount).fill(0);
  const result = nonZeroNumbers.concat(zeroes);

  return result;
}`,
  'plus-one': `function plusOne(digits) {
  const digitText = digits.join('');
  const number = BigInt(digitText);
  const nextNumber = number + 1n;
  const nextText = String(nextNumber);
  const characters = nextText.split('');
  const result = characters.map((character) => {
    return Number(character);
  });

  return result;
}`,
  'binary-search': `function search(nums, target) {
  return nums.indexOf(target);
}`,
  'first-unique-char': `function firstUniqChar(text) {
  return [...text].findIndex(char => {
    return text.indexOf(char) === text.lastIndexOf(char);
  });
}`,
  'valid-parentheses': `function isValid(text) {
  let previous;
  do {
    previous = text;
    const updatedText2 = text.replace('()', '');
    const updatedText = updatedText2.replace('[]', '');
    text = updatedText.replace('{}', '');
  } while (text !== previous);

  return text.length === 0;
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
  return [...arr1, ...arr2].sort((first, second) => {
    return first - second;
  });
}`,
  'remove-duplicates-sorted': `function removeDuplicates(nums) {
  const unique = [...new Set(nums)];
  unique.forEach((value, index) => {
    nums[index] = value;

    return nums[index];
  });

  return unique.length;
}`,
  'best-time-buy-sell': `function maxProfit(prices) {
  let maxProfit = 0;

  for (let buyDay = 0; buyDay < prices.length; buyDay++) {
    for (let sellDay = buyDay + 1; sellDay < prices.length; sellDay++) {
      const profit = prices[sellDay] - prices[buyDay];
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}`,
  'intersection-two-arrays-ii': `function intersect(firstArray, secondArray) {
  return firstArray.filter(value => {
    const index = secondArray.indexOf(value);

    if (index < 0) {
      return false;
    }
    secondArray.splice(index, 1);

    return true;
  });
}`,
  'isomorphic-strings': `function isIsomorphic(firstText, secondText) {
  function getPattern(text) {
    const characters = Array.from(text);
    const firstPositions = characters.map((character) => {
      return text.indexOf(character);
    });
    return firstPositions.join(',');
  }

  const firstPattern = getPattern(firstText);
  const secondPattern = getPattern(secondText);
  return firstPattern === secondPattern;
}`,
  'climbing-stairs': `function climbStairs(steps, memo = {}) {
  if (steps <= 2) {
    return steps;
  }

  if (memo[steps]) {
    return memo[steps];
  }
  memo[steps] = climbStairs(steps - 1, memo) + climbStairs(steps - 2, memo);

  return memo[steps];
}`,
  'majority-element': `function majorityElement(nums) {
  return nums.sort((first, second) => {
    return first - second;
  })[Math.floor(nums.length / 2)];
}`,
  '3sum': `function threeSum(nums) {
  const found = new Map();

  for (let index = 0; index < nums.length; index++) {
    for (let nextIndex = index + 1; nextIndex < nums.length; nextIndex++) {
      for (let k = nextIndex + 1; k < nums.length; k++) {
        if (nums[index] + nums[nextIndex] + nums[k] === 0) {
          const triplet = [nums[index], nums[nextIndex], nums[k]].sort((first, second) => {
            return first - second;
          });
          found.set(triplet.join(','), triplet);
        }
      }
    }
  }

  return [...found.values()];
}`,
  'longest-substring': `function lengthOfLongestSubstring(text) {
  let best = 0;

  for (let index = 0; index < text.length; index++) {
    for (let nextIndex = index + 1; nextIndex <= text.length; nextIndex++) {
      const part = text.slice(index, nextIndex);

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
    const sortedItems = [...word].sort();
    const key = sortedItems.join('');
    (groups[key] ??= []).push(word);
  });

  return Object.values(groups);
}`,
  'top-k-frequent': `function topKFrequent(nums, k) {
  const frequencyMap = new Map();

  for (const num of nums) {
    const currentFrequency = frequencyMap.get(num) || 0;
    const newFrequency = currentFrequency + 1;
    frequencyMap.set(num, newFrequency);
  }

  const frequencyArray = Array.from(frequencyMap.entries());

  frequencyArray.sort((firstItem, secondItem) => {
    const firstFrequency = firstItem[1];
    const secondFrequency = secondItem[1];
    return secondFrequency - firstFrequency;
  });

  const topKItems = frequencyArray.slice(0, k);
  const result = topKItems.map((item) => {
    const number = item[0];
    return number;
  });

  return result;
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
  return matrix[0].map((_, column) => {
    const mappedItems = matrix.map(row => {
      return row[column];
    });

    return mappedItems.reverse();
  });
}`,
  'set-matrix-zeroes': `function setZeroes(matrix) {
  const flattenedItems = matrix.flatMap((row, rowIndex) => {
    return row.map((value, columnIndex) => {
      return value === 0 ? [rowIndex, columnIndex] : null;
    });
  });
  const zeroes = flattenedItems.filter(Boolean);

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
    matrix = matrix[0]?.map((_, index) => {
      return matrix.map(row => {
        return row[row.length - 1 - index];
      });
    }) || [];
  }

  return result;
}`,
  'word-break': `function wordBreak(text, words, memo = {}) {
  if (!text) {
    return true;
  }

  if (text in memo) {
    return memo[text];
  }
  memo[text] = words.some(word => {
    return text.startsWith(word) && wordBreak(text.slice(word.length), words, memo);
  });

  return memo[text];
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

    for (let index = start; index < candidates.length; index++) {
      if (candidates[index] <= rest) {
        build(index, rest - candidates[index], [...chosen, candidates[index]]);
      }
    }
  }
  build(0, target, []);

  return result;
}`,
  'longest-pal-substring': `function longestPalindrome(text) {
  const parts = [...text].flatMap((_, index) => {
    return [...text.slice(index)].map((_, nextIndex) => {
      return text.slice(index, index + nextIndex + 1);
    });
  });

  return parts.filter(part => {
    const reversedItems = [...part].reverse();

    return part === reversedItems.join('');
  }).sort((first, second) => {
    return second.length - first.length;
  })[0] || '';
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
  const flattenedItems = intervals.flatMap(([start, end]) => {
    return [[start, 1], [end, -1]];
  });
  const events = flattenedItems.sort((first, second) => {
    return first[0] - second[0] || first[1] - second[1];
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
    let partitionIndex = left;

    for (let index = left; index < right; index++) {
      if (nums[index] <= pivot) {
        [nums[index], nums[partitionIndex]] = [nums[partitionIndex], nums[index]];
        partitionIndex++;
      }
    }
    [nums[partitionIndex], nums[right]] = [nums[right], nums[partitionIndex]];

    if (partitionIndex === target) {
      return nums[partitionIndex];
    }

    if (partitionIndex < target) {
      return select(partitionIndex + 1, right);
    }

    return select(left, partitionIndex - 1);
  }

  return select(0, nums.length - 1);
}`,
  'course-schedule': `function canFinish(courseCount, prerequisites) {
  const graph = Array.from({
    length: courseCount
  }, () => {
    return [];
  });
  const values = Array(courseCount);
  const state = values.fill(0);
  prerequisites.forEach(([course, prerequisite]) => {
    return graph[course].push(prerequisite);
  });
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

  return !graph.some((_, course) => {
    return hasCycle(course);
  });
}`,
  'number-of-islands': `function numIslands(grid) {
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] === '1') {
        count++;
        const queue = [[row, column]];
        grid[row][column] = '0';

        while (queue.length) {
          const [currentRow, currentColumn] = queue.shift();

          for (const [rowOffset, columnOffset] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            if (grid[currentRow + rowOffset]?.[currentColumn + columnOffset] === '1') {
              grid[currentRow + rowOffset][currentColumn + columnOffset] = '0';
              queue.push([currentRow + rowOffset, currentColumn + columnOffset]);
            }
          }
        }
      }
    }
  }

  return count;
}`,
  'min-window-substring': `function minWindow(text, target) {
  const valid = part => {
    return [...target].every(char => {
      const countInPart = [...part].filter(value => {
        return value === char;
      }).length;
      const countInTarget = [...target].filter(value => {
        return value === char;
      }).length;

      return countInPart >= countInTarget;
    });
  };

  for (let size = target.length; size <= text.length; size++) {
    for (let index = 0; index + size <= text.length; index++) {
      if (valid(text.slice(index, index + size))) {
        return text.slice(index, index + size);
      }
    }
  }

  return '';
}`,
  'decode-ways': `function numDecodings(text, memo = {}) {
  if (!text.length) {
    return 1;
  }

  if (text[0] === '0') {
    return 0;
  }

  if (text in memo) {
    return memo[text];
  }

  let ways = numDecodings(text.slice(1), memo);

  if (+text.slice(0, 2) <= 26) {
    ways += numDecodings(text.slice(2), memo);
  }
  memo[text] = ways;

  return memo[text];
}`,
  'trapping-rain-water': `function trap(height) {
  return height.reduce((water, currentHeight, index) => {
    const left = Math.max(...height.slice(0, index + 1));
    const right = Math.max(...height.slice(index));

    return water + Math.min(left, right) - currentHeight;
  }, 0);
}`,
  'median-two-arrays': `function findMedianSortedArrays(firstArray, secondArray) {
  const values = [...firstArray, ...secondArray].sort((value, y) => {
    return value - y;
  });
  const middle = Math.floor(values.length / 2);

  return values.length % 2 ? values[middle] : (values[middle - 1] + values[middle]) / 2;
}`,
  'merge-k-sorted-arrays': `function mergeKArrays(arrays) {
  const flattenedItems = arrays.flat();

  return flattenedItems.sort((first, second) => {
    return first - second;
  });
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

      for (let index = 0; index < word.length; index++) {
        differences += word[index] !== next[index];
      }

      if (differences === 1) {
        set.delete(next);
        queue.push([next, steps + 1]);
      }
    }
  }

  return 0;
}`,
  'n-queens': `function solveNQueens(boardSize) {
  const result = [];
  function place(row, columns) {
    if (row === boardSize) {
      return result.push(columns.map(column => {
        return '.'.repeat(column) + 'Q' + '.'.repeat(boardSize - column - 1);
      }));
    }

    for (let column = 0; column < boardSize; column++) {
      if (columns.every((old, previousRow) => {
        return old !== column && Math.abs(old - column) !== row - previousRow;
      })) {
        place(row + 1, [...columns, column]);
      }
    }
  }
  place(0, []);

  return result;
}`,
  'sudoku-solver': `function solveSudoku(board) {
  const flattenedItems = board.flatMap((row, rowIndex) => {
    return row.map((value, columnIndex) => {
      return value === '.' ? [rowIndex, columnIndex] : null;
    });
  });
  const empty = flattenedItems.filter(Boolean);
  function solve(index) {
    if (index === empty.length) {
      return true;
    }

    const [rowIndex, columnIndex] = empty[index];

    for (const value of '123456789') {
      if (!board[rowIndex].includes(value) && !board.some(row => {
        return row[columnIndex] === value;
      }) && !board.slice(rowIndex - rowIndex % 3, rowIndex - rowIndex % 3 + 3).some(row => {
        const selectedItems = row.slice(columnIndex - columnIndex % 3, columnIndex - columnIndex % 3 + 3);

        return selectedItems.includes(value);
      })) {
        board[rowIndex][columnIndex] = value;

        if (solve(index + 1)) {
          return true;
        }
        board[rowIndex][columnIndex] = '.';
      }
    }

    return false;
  }
  solve(0);

  return board;
}`,
  'edit-distance': `function minDistance(firstText, secondText, memo = {}) {
  const key = firstText + '|' + secondText;

  if (!firstText.length || !secondText.length) {
    return Math.max(firstText.length, secondText.length);
  }

  if (key in memo) {
    return memo[key];
  }

  if (firstText[0] === secondText[0]) {
    return minDistance(firstText.slice(1), secondText.slice(1), memo);
  }

  const deleteCost = minDistance(firstText.slice(1), secondText, memo);
  const insertCost = minDistance(firstText, secondText.slice(1), memo);
  const replaceCost = minDistance(firstText.slice(1), secondText.slice(1), memo);
  memo[key] = 1 + Math.min(deleteCost, insertCost, replaceCost);

  return memo[key];
}`,
  'regex-matching': `function isMatch(text, pattern, memo = {}) {
  const key = text + '|' + pattern;

  if (key in memo) {
    return memo[key];
  }

  if (!pattern) {
    return !text;
  }

  const first = !!text && (pattern[0] === '.' || pattern[0] === text[0]);

  if (pattern[1] === '*') {
    const skipPattern = isMatch(text, pattern.slice(2), memo);
    const useCharacter = first && isMatch(text.slice(1), pattern, memo);
    memo[key] = skipPattern || useCharacter;
  } else {
    memo[key] = first && isMatch(text.slice(1), pattern.slice(1), memo);
  }

  return memo[key];
}`,
  'sliding-window-maximum': `function maxSlidingWindow(nums, k) {
  const selectedItems = nums.slice(0, nums.length - k + 1);

  return selectedItems.map((_, index) => {
    return Math.max(...nums.slice(index, index + k));
  });
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
    const remaining = nums.filter((_, itemIndex) => {
      return itemIndex !== index;
    });
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
  const sorted = [...new Set(nums)].sort((first, second) => {
    return first - second;
  });
  let current = sorted.length ? 1 : 0;
  let best = current;

  for (let index = 1; index < sorted.length; index++) {
    current = sorted[index] === sorted[index - 1] + 1 ? current + 1 : 1;
    best = Math.max(best, current);
  }

  return best;
}`,
  'min-window-subsequence': `function minWindowSubsequence(text, target) {
  for (let size = target.length; size <= text.length; size++) {
    for (let index = 0; index + size <= text.length; index++) {
      const part = text.slice(index, index + size);
      let targetIndex = 0;

      for (const char of part) {
        if (char === target[targetIndex]) {
          targetIndex++;
        }
      }

      if (targetIndex === target.length) {
        return part;
      }
    }
  }

  return '';
}`,
  'palindrome-partitioning': `function partition(text) {
  if (!text) {
    return [[]];
  }

  return [...text].flatMap((_, index) => {
    const head = text.slice(0, index + 1);

    if (head !== [...head].reverse().join('')) {
      return [];
    }

    const values = partition(text.slice(index + 1));

    return values.map(rest => {
      return [head, ...rest];
    });
  });
}`,
}
