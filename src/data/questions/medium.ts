export const mediumQuestions = [
    {
        slug: "3sum",
        title: "3Sum",
        difficulty: "medium",
        description: "Return all unique triplets that sum to zero.",
        examples: ["[-1,0,1,2,-1,-4] → [[-1,-1,2],[-1,0,1]]"],
        functionSignature: "function threeSum(nums) {}",
        starterCode: `function threeSum(nums) {
  nums.sort((first, second) => {
    return first - second;
  });
  const result = [];

  for (let index = 0; index < nums.length - 2; index++) {
    if (index && nums[index] === nums[index - 1]) {
      continue;
    }

    let left = index + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[index] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[index], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}`,
        testCases: [{ input: [[-1,0,1,2,-1,-4]], output: [[-1,-1,2],[-1,0,1]] }]
    },
    {
        slug: "longest-substring",
        title: "Longest Substring Without Repeating",
        difficulty: "medium",
        description: "Length of the longest substring without repeating characters.",
        examples: [`"abcabcbb" → 3`],
        functionSignature: "function lengthOfLongestSubstring(s) {}",
        starterCode: `function lengthOfLongestSubstring(text) {
  const window = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < text.length; right++) {
    while (window.has(text[right])) {
      window.delete(text[left]);
      left++;
    }
    window.add(text[right]);
    const currentLength = right - left + 1;
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}`,
        testCases: [{ input: ["abcabcbb"], output: 3 }]
    },
    {
        slug: "group-anagrams",
        title: "Group Anagrams",
        difficulty: "medium",
        description: "Group strings that are anagrams.",
        examples: [`["eat","tea","tan","ate","nat","bat"] → [["eat","tea","ate"],["tan","nat"],["bat"]]`],
        functionSignature: "function groupAnagrams(strs) {}",
        starterCode: `function groupAnagrams(strs) {
  const groups = new Map();

  for (const word of strs) {
    const values = Array(26);
    const count = values.fill(0);

    for (const char of word) {
      count[char.charCodeAt(0) - 97]++;
    }

    const key = count.join('#');

    if (!groups.has(key)) {
      groups.set(key, []);
    }

    const items = groups.get(key);
    items.push(word);
  }

  return Array.from(groups.values());
}`,
        testCases: [{ input: [["eat","tea","tan","ate","nat","bat"]], output: [["eat","tea","ate"],["tan","nat"],["bat"]] }]
    },
    {
        slug: "top-k-frequent",
        title: "Top K Frequent Elements",
        difficulty: "medium",
        description: "Return the k most frequent elements.",
        examples: ["[1,1,1,2,2,3], k=2 → [1,2]"],
        functionSignature: "function topKFrequent(nums,k) {}",
        starterCode: `function topKFrequent(nums, k) {
  const frequencyMap = new Map();

  for (const num of nums) {
    const currentFrequency = frequencyMap.get(num) || 0;
    const newFrequency = currentFrequency + 1;
    frequencyMap.set(num, newFrequency);
  }

  const bucketCount = nums.length + 1;
  const frequencyBuckets = Array.from({ length: bucketCount }, () => {
    return [];
  });

  for (const [number, frequency] of frequencyMap) {
    const bucket = frequencyBuckets[frequency];
    bucket.push(number);
  }

  const result = [];
  const highestFrequency = frequencyBuckets.length - 1;

  for (let frequency = highestFrequency; frequency >= 0; frequency--) {
    if (result.length >= k) {
      break;
    }

    const numbers = frequencyBuckets[frequency];

    for (const number of numbers) {
      result.push(number);

      if (result.length === k) {
        break;
      }
    }
  }

  return result;
}`,
        testCases: [{ input: [[1,1,1,2,2,3],2], output: [1,2] }]
    },
    {
        slug: "product-except-self",
        title: "Product of Array Except Self",
        difficulty: "medium",
        description: "answer[i] = product of all elements except nums[i].",
        examples: ["[1,2,3,4] → [24,12,8,6]"],
        functionSignature: "function productExceptSelf(nums) {}",
        starterCode: `function productExceptSelf(nums) {
  const values = Array(nums.length);
  const result = values.fill(1);
  let prefix = 1;
  let suffix = 1;

  for (let index = 0; index < nums.length; index++) {
    result[index] *= prefix;
    prefix *= nums[index];
  }

  for (let index = nums.length - 1; index >= 0; index--) {
    result[index] *= suffix;
    suffix *= nums[index];
  }

  return result;
}`,
        testCases: [{ input: [[1,2,3,4]], output: [24,12,8,6] }]
    },
    {
        slug: "rotate-image",
        title: "Rotate Image",
        difficulty: "medium",
        description: "Rotate n×n matrix by 90 degrees clockwise in-place.",
        examples: ["[[1,2,3],[4,5,6],[7,8,9]] → [[7,4,1],[8,5,2],[9,6,3]]"],
        functionSignature: "function rotate(matrix) {}",
        starterCode: `function rotate(matrix) {
  const n = matrix.length;

  for (let index = 0; index < n; index++) {
    for (let nextIndex = index; nextIndex < n; nextIndex++) {
      [matrix[index][nextIndex], matrix[nextIndex][index]] = [matrix[nextIndex][index], matrix[index][nextIndex]];
    }
  }

  for (let index = 0; index < n; index++) {
    matrix[index].reverse();
  }

  return matrix;
}`,
        testCases: [{ input: [[[1,2,3],[4,5,6],[7,8,9]]], output: [[7,4,1],[8,5,2],[9,6,3]] }]
    },
    {
        slug: "set-matrix-zeroes",
        title: "Set Matrix Zeroes",
        difficulty: "medium",
        description: "If an element is 0, set its row and column to 0.",
        examples: ["[[1,1,1],[1,0,1],[1,1,1]] → [[1,0,1],[0,0,0],[1,0,1]]"],
        functionSignature: "function setZeroes(matrix) {}",
        starterCode: `function setZeroes(matrix) {
  const zeroRows = new Set();
  const zeroColumns = new Set();

  for (let index = 0; index < matrix.length; index++) {
    for (let nextIndex = 0; nextIndex < matrix[0].length; nextIndex++) {
      if (matrix[index][nextIndex] === 0) {
        zeroRows.add(index);
        zeroColumns.add(nextIndex);
      }
    }
  }

  for (const row of zeroRows) {
    matrix[row].fill(0);
  }

  for (const column of zeroColumns) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][column] = 0;
    }
  }

  return matrix;
}`,
        testCases: [{ input: [[[1,1,1],[1,0,1],[1,1,1]]], output: [[1,0,1],[0,0,0],[1,0,1]] }]
    },
    {
        slug: "spiral-matrix",
        title: "Spiral Matrix",
        difficulty: "medium",
        description: "Return all elements in spiral order.",
        examples: ["[[1,2,3],[4,5,6],[7,8,9]] → [1,2,3,6,9,8,7,4,5]"],
        functionSignature: "function spiralOrder(matrix) {}",
        starterCode: `function spiralOrder(matrix) {
  const result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let index = left; index <= right; index++) {
      result.push(matrix[top][index]);
    }
    top++;

    for (let index = top; index <= bottom; index++) {
      result.push(matrix[index][right]);
    }
    right--;

    if (top <= bottom) {
      for (let index = right; index >= left; index--) {
        result.push(matrix[bottom][index]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let index = bottom; index >= top; index--) {
        result.push(matrix[index][left]);
      }
      left++;
    }
  }

  return result;
}`,
        testCases: [{ input: [[[1,2,3],[4,5,6],[7,8,9]]], output: [1,2,3,6,9,8,7,4,5] }]
    },
    {
        slug: "word-break",
        title: "Word Break",
        difficulty: "medium",
        description: "Return true if s can be segmented into words from dict.",
        examples: [`"leetcode", ["leet","code"] → true`],
        functionSignature: "function wordBreak(s,wordDict) {}",
        starterCode: `function wordBreak(text, dictionary) {
  const set = new Set(dictionary);
  const values = Array(text.length + 1);
  const dp = values.fill(false);
  dp[0] = true;

  for (let index = 1; index <= text.length; index++) {
    for (let nextIndex = 0; nextIndex < index; nextIndex++) {
      if (dp[nextIndex] && set.has(text.slice(nextIndex, index))) {
        dp[index] = true;
        break;
      }
    }
  }

  return dp[text.length];
}`,
        testCases: [{ input: ["leetcode",["leet","code"]], output: true }]
    },
    {
        slug: "coin-change",
        title: "Coin Change",
        difficulty: "medium",
        description: "Fewest coins to make up amount; return -1 if not possible.",
        examples: ["[1,2,5], amount=11 → 3"],
        functionSignature: "function coinChange(coins,amount) {}",
        starterCode: `function coinChange(coins, amount) {
  const values = Array(amount + 1);
  const dp = values.fill(Infinity);
  dp[0] = 0;

  for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
    for (const coin of coins) {
      if (currentAmount - coin >= 0) {
        dp[currentAmount] = Math.min(dp[currentAmount], dp[currentAmount - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}`,
        testCases: [{ input: [[1,2,5],11], output: 3 }]
    },
    {
        slug: "combination-sum",
        title: "Combination Sum",
        difficulty: "medium",
        description: "Return all unique combinations where candidates sum to target.",
        examples: ["[2,3,6,7], 7 → [[2,2,3],[7]]"],
        functionSignature: "function combinationSum(candidates,target) {}",
        starterCode: `function combinationSum(candidates, target) {
  const result = [];
  candidates.sort((first, second) => {
    return first - second;
  });
  function dfs(index, combination, currentSum) {
    if (currentSum === target) {
      result.push(combination.slice());

      return;
    }

    if (currentSum > target || index === candidates.length) {
      return;
    }
    combination.push(candidates[index]);
    dfs(index, combination, currentSum + candidates[index]);
    combination.pop();
    dfs(index + 1, combination, currentSum);
  }
  dfs(0, [], 0);

  return result;
}`,
        testCases: [{ input: [[2,3,6,7],7], output: [[2,2,3],[7]] }]
    },
    {
        slug: "longest-pal-substring",
        title: "Longest Palindromic Substring",
        difficulty: "medium",
        description: "Return the longest palindromic substring.",
        examples: [`"babad" → "bab" (or "aba")`],
        functionSignature: "function longestPalindrome(s) {}",
        starterCode: `function longestPalindrome(text) {
  let result = '';
  function ex(left, right) {
    while (left >= 0 && right < text.length && text[left] === text[right]) {
      if (right - left + 1 > result.length) {
        result = text.slice(left, right + 1);
      }
      left--;
      right++;
    }
  }

  for (let index = 0; index < text.length; index++) {
    ex(index, index);
    ex(index, index + 1);
  }

  return result;
}`,
        testCases: [{ input: ["babad"], output: "bab" }]
    },
    {
        slug: "container-most-water",
        title: "Container With Most Water",
        difficulty: "medium",
        description: "Find max area formed by two lines.",
        examples: ["[1,8,6,2,5,4,8,3,7] → 49"],
        functionSignature: "function maxArea(height) {}",
        starterCode: `function maxArea(heights) {
  let left = 0;
  let right = heights.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const containerHeight = Math.min(heights[left], heights[right]);
    const currentArea = width * containerHeight;
    maxArea = Math.max(maxArea, currentArea);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}`,
        testCases: [{ input: [[1,8,6,2,5,4,8,3,7]], output: 49 }]
    },
    {
        slug: "meeting-rooms-ii",
        title: "Meeting Rooms II",
        difficulty: "medium",
        description: "Return minimum number of rooms required.",
        examples: ["[[0,30],[5,10],[15,20]] → 2"],
        functionSignature: "function minMeetingRooms(intervals) {}",
        starterCode: `function minMeetingRooms(intervals) {
  const mappedItems = intervals.map(i => {
    return i[0];
  });
  const starts = mappedItems.sort((first, second) => {
    return first - second;
  });
  const mappedItems2 = intervals.map(i => {
    return i[1];
  });
  const ends = mappedItems2.sort((first, second) => {
    return first - second;
  });
  let index = 0;
  let nextIndex = 0;
  let rooms = 0;
  let maxR = 0;

  while (index < starts.length) {
    if (starts[index] < ends[nextIndex]) {
      rooms++;
      index++;
      maxR = Math.max(maxR, rooms);
    } else {
      rooms--;
      nextIndex++;
    }
  }

  return maxR;
}`,
        testCases: [{ input: [[[0,30],[5,10],[15,20]]], output: 2 }]
    },
    {
        slug: "kth-largest",
        title: "Kth Largest Element in an Array",
        difficulty: "medium",
        description: "Find the kth largest element.",
        examples: ["[3,2,1,5,6,4], k=2 → 5"],
        functionSignature: "function findKthLargest(nums,k) {}",
        starterCode: `function findKthLargest(nums, k) {
  const target = nums.length - k;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const pivot = nums[right];
    let position = left;

    for (let index = left; index < right; index++) {
      if (nums[index] <= pivot) {
        [nums[index], nums[position]] = [nums[position], nums[index]];
        position++;
      }
    }
    [nums[position], nums[right]] = [nums[right], nums[position]];

    if (position === target) {
      return nums[position];
    }

    if (position < target) {
      left = position + 1;
    } else {
      right = position - 1;
    }
  }
}`,
        testCases: [{ input: [[3,2,1,5,6,4],2], output: 5 }]
    },
    {
        slug: "course-schedule",
        title: "Course Schedule",
        difficulty: "medium",
        description: "Return true if you can finish all courses.",
        examples: ["n=2, [[1,0]] → true"],
        functionSignature: "function canFinish(n,prereq) {}",
        starterCode: `function canFinish(courseCount, prerequisites) {
  const graph = Array.from({
    length: courseCount
  }, () => {
    return [];
  });
  const values = Array(courseCount);
  const inDegree = values.fill(0);

  for (const [first, second] of prerequisites) {
    graph[second].push(first);
    inDegree[first]++;
  }

  const queue = [];

  for (let index = 0; index < courseCount; index++) {
    if (inDegree[index] === 0) {
      queue.push(index);
    }
  }

  let completedCount = 0;

  while (queue.length) {
    const course = queue.shift();
    completedCount++;

    for (const nextCourse of graph[course]) {
      inDegree[nextCourse]--;

      if (inDegree[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }

  return completedCount === courseCount;
}`,
        testCases: [{ input: [2,[[1,0]]], output: true }]
    },
    {
        slug: "number-of-islands",
        title: "Number of Islands",
        difficulty: "medium",
        description: "Count islands of '1's in a grid.",
        examples: ["typical grid → 3"],
        functionSignature: "function numIslands(grid) {}",
        starterCode: `function numIslands(grid) {
  if (!grid.length) {
    return 0;
  }

  const rowCount = grid.length;
  const columnCount = grid[0].length;
  let islandCount = 0;
  function dfs(index, nextIndex) {
    if (index < 0 || nextIndex < 0 || index >= rowCount || nextIndex >= columnCount || grid[index][nextIndex] !== '1') {
      return;
    }
    grid[index][nextIndex] = '0';
    dfs(index + 1, nextIndex);
    dfs(index - 1, nextIndex);
    dfs(index, nextIndex + 1);
    dfs(index, nextIndex - 1);
  }

  for (let index = 0; index < rowCount; index++) {
    for (let nextIndex = 0; nextIndex < columnCount; nextIndex++) {
      if (grid[index][nextIndex] === '1') {
        islandCount++;
        dfs(index, nextIndex);
      }
    }
  }

  return islandCount;
}`,
        testCases: [{ input: [[['1','1','0'],['0','1','0'],['1','0','1']]], output: 3 }]
    },
    {
        slug: "min-window-substring",
        title: "Minimum Window Substring",
        difficulty: "medium",
        description: "Return minimum window in s containing all chars of t.",
        examples: [`"ADOBECODEBANC","ABC" → "BANC"`],
        functionSignature: "function minWindow(s,t) {}",
        starterCode: `function minWindow(text, target) {
  const need = {};
  let needCnt = 0;

  for (const character of target) {
    need[character] = (need[character] || 0) + 1;
    needCnt++;
  }

  let left = 0;
  let result = "";
  let best = Infinity;

  for (let right = 0; right < text.length; right++) {
    const character = text[right];

    if (need[character] > 0) {
      needCnt--;
    }
    need[character] = (need[character] || 0) - 1;

    while (needCnt === 0) {
      if (right - left + 1 < best) {
        best = right - left + 1;
        result = text.slice(left, right + 1);
      }

      const leftCharacter = text[left];
      need[leftCharacter]++;

      if (need[leftCharacter] > 0) {
        needCnt++;
      }
      left++;
    }
  }

  return result;
}`,
        testCases: [{ input: ["ADOBECODEBANC","ABC"], output: "BANC" }]
    },
    {
        slug: "decode-ways",
        title: "Decode Ways",
        difficulty: "medium",
        description: "Given string digits, return number of ways to decode.",
        examples: [`"12" → 2`],
        functionSignature: "function numDecodings(s) {}",
        starterCode: `function numDecodings(text) {
  if (!text || text[0] === '0') {
    return 0;
  }

  let previousTwo = 1;
  let previousOne = 1;

  for (let index = 1; index < text.length; index++) {
    let currentWays = 0;

    if (text[index] !== '0') {
      currentWays += previousOne;
    }

    const twoDigitValue = +(text[index - 1] + text[index]);

    if (twoDigitValue >= 10 && twoDigitValue <= 26) {
      currentWays += previousTwo;
    }
    previousTwo = previousOne;
    previousOne = currentWays;
  }

  return previousOne;
}`,
        testCases: [{ input: ["12"], output: 2 }]
    },
];
