export const easyQuestions = [
    {
        slug: "two-sum",
        title: "Two Sum",
        difficulty: "easy",
        description: "Given an array nums and an integer target, return indices of two numbers that add up to target.",
        examples: ["nums=[2,7,11,15], target=9 → [0,1]"],
        functionSignature: "function twoSum(nums, target) {}",
        starterCode: `function twoSum(nums, target) {
  const indexByNumber = new Map();

  for (let index = 0; index < nums.length; index++) {
    const neededNumber = target - nums[index];

    if (indexByNumber.has(neededNumber)) {
      return [indexByNumber.get(neededNumber), index];
    }
    indexByNumber.set(nums[index], index);
  }

  return [];
}`,
        testCases: [{ input: [[2,7,11,15], 9], output: [0,1] }]
        //testCases: [{ input: [[11,15,2,3,7,4], 9], output: [0,1] }]
    },
    {
        slug: "reverse-string",
        title: "Reverse a String",
        difficulty: "easy",
        description: "Return the reversed string.",
        examples: [`"hello" → "olleh"`],
        functionSignature: "function reverseString(s) {}",
        starterCode: `function reverseString(text) {
  let result = '';

  for (let index = text.length - 1; index >= 0; index--) {
    result += text[index];
  }

  return result;
}`,
        arrayFunctionCode: `function reverseString(text) {
  const characters = text.split('');
  const reversedItems = characters.reverse();

  return reversedItems.join('');
}`,
        testCases: [{ input: ["hello"], output: "olleh" }]
    },
    {
        slug: "valid-anagram",
        title: "Valid Anagram",
        difficulty: "easy",
        description: "Return true if t is an anagram of s.",
        examples: [`"anagram","nagaram" → true`],
        functionSignature: "function isAnagram(s,t) {}",
        starterCode: `function isAnagram(firstText, secondText) {
  if (firstText.length !== secondText.length) {
    return false;
  }

  const characterCounts = {};

  for (const char of firstText) {
    characterCounts[char] = (characterCounts[char] || 0) + 1;
  }

  for (const char of secondText) {
    if (!characterCounts[char]) {
      return false;
    }
    characterCounts[char]--;
  }

  return true;
}`,
        arrayFunctionCode: `function isAnagram(firstText, secondText) {
  const characters = firstText.split('');
  const sortedItems = characters.sort();
  const characters2 = secondText.split('');
  const sortedItems2 = characters2.sort();

  return sortedItems.join('') === sortedItems2.join('');
}`,
        testCases: [{ input: ["anagram","nagaram"], output: true }]
    },
    {
        slug: "palindrome",
        title: "Palindrome String",
        difficulty: "easy",
        description: "Return true if s reads the same forward and backward.",
        examples: [`"racecar" → true`],
        functionSignature: "function isPalindrome(s) {}",
        starterCode: `function isPalindrome(text) {
  let left = 0;
  let right = text.length - 1;

  while (left < right) {
    if (text[left] !== text[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}`,
        arrayFunctionCode: `function isPalindrome(text) {
  const characters = text.split('');
  const reversedItems = characters.reverse();

  return text === reversedItems.join('');
}`,
        testCases: [{ input: ["racecar"], output: true }]
    },
    {
        slug: "fizz-buzz",
        title: "Fizz Buzz",
        difficulty: "easy",
        description: "Return array 1..n with Fizz/Buzz/FizzBuzz rules.",
        examples: [`5 → ["1","2","Fizz","4","Buzz"]`],
        functionSignature: "function fizzBuzz(n) {}",
        starterCode: `function fizzBuzz(limit) {
  const result = [];

  for (let index = 1; index <= limit; index++) {
    if (index % 15 === 0) {
      result.push('FizzBuzz');
    } else if (index % 3 === 0) {
      result.push('Fizz');
    } else if (index % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(String(index));
    }
  }

  return result;
}`,
        testCases: [{ input: [5], output: ["1","2","Fizz","4","Buzz"] }]
    },
    {
        slug: "max-number",
        title: "Maximum Number",
        difficulty: "easy",
        description: "Return the maximum of the array.",
        examples: ["[1,5,3] → 5"],
        functionSignature: "function findMax(nums) {}",
        starterCode: `function findMax(nums) {
  let max = nums[0];

  for (let index = 1; index < nums.length; index++) {
    if (nums[index] > max) {
      max = nums[index];
    }
  }

  return max;
}`,
        arrayFunctionCode: `function findMax(nums) {
  return Math.max(...nums);
}`,
        testCases: [{ input: [[1,5,3]], output: 5 }]
    },
    {
        slug: "contains-duplicate",
        title: "Contains Duplicate",
        difficulty: "easy",
        description: "Return true if any value appears at least twice.",
        examples: ["[1,2,3,1] → true"],
        functionSignature: "function containsDuplicate(nums) {}",
        starterCode: `function containsDuplicate(nums) {
  const seen = new Set();

  for (const number of nums) {
    if (seen.has(number)) {
      return true;
    }
    seen.add(number);
  }

  return false;
}`,
        arrayFunctionCode: `function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}`,
        testCases: [{ input: [[1,2,3,1]], output: true }]
    },
    {
        slug: "move-zeroes",
        title: "Move Zeroes",
        difficulty: "easy",
        description: "Move all zeros to end keeping relative order.",
        examples: ["[0,1,0,3,12] → [1,3,12,0,0]"],
        functionSignature: "function moveZeroes(nums) {}",
        starterCode: `function moveZeroes(nums) {
  let nextIndex = 0;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== 0) {
      [nums[index], nums[nextIndex]] = [nums[nextIndex], nums[index]];
      nextIndex++;
    }
  }

  return nums;
}`,
        testCases: [{ input: [[0,1,0,3,12]], output: [1,3,12,0,0] }]
    },
    {
        slug: "plus-one",
        title: "Plus One",
        difficulty: "easy",
        description: "Given digits representing an integer, return digits + 1.",
        examples: ["[1,2,3] → [1,2,4]"],
        functionSignature: "function plusOne(digits) {}",
        starterCode: `function plusOne(d) {
  for (let index = d.length - 1; index >= 0; index--) {
    if (d[index] < 9) {
      d[index]++;

      return d;
    }
    d[index] = 0;
  }
  d.unshift(1);

  return d;
}`,
        testCases: [{ input: [[1,2,3]], output: [1,2,4] }]
    },
    {
        slug: "binary-search",
        title: "Binary Search",
        difficulty: "easy",
        description: "Return index of target in sorted array or -1.",
        examples: ["([-1,0,3,5,9,12], 9) → 4"],
        functionSignature: "function search(nums,target) {}",
        starterCode: `function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = left + right >> 1;

    if (nums[middle] === target) {
      return middle;
    }

    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}`,
        testCases: [{ input: [[-1,0,3,5,9,12],9], output: 4 }]
    },
    {
        slug: "first-unique-char",
        title: "First Unique Character",
        difficulty: "easy",
        description: "Return index of first non-repeating char, else -1.",
        examples: [`"leetcode" → 0`],
        functionSignature: "function firstUniqChar(s) {}",
        starterCode: `function firstUniqChar(text) {
  const counts = {};

  for (const character of text) {
    counts[character] = (counts[character] || 0) + 1;
  }

  for (let index = 0; index < text.length; index++) {
    if (counts[text[index]] === 1) {
      return index;
    }
  }

  return -1;
}`,
        testCases: [{ input: ["leetcode"], output: 0 }]
    },
    {
        slug: "valid-parentheses",
        title: "Valid Parentheses",
        difficulty: "easy",
        description: "Check if a bracket string is valid.",
        examples: [`"()[]{}" → true`],
        functionSignature: "function isValid(s) {}",
        starterCode: `function isValid(text) {
  const openingBrackets = [];
  const matchingOpeningBracket = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (const character of text) {
    if (character in matchingOpeningBracket) {
      if (openingBrackets.pop() !== matchingOpeningBracket[character]) {
        return false;
      }
    } else {
      openingBrackets.push(character);
    }
  }

  return openingBrackets.length === 0;
}`,
        testCases: [{ input: ["()[]{}"], output: true }]
    },
    {
        slug: "ransom-note",
        title: "Ransom Note",
        difficulty: "easy",
        description: "Return true if ransom can be constructed from magazine letters.",
        examples: [`"aa","aab" → true`],
        functionSignature: "function canConstruct(ransom,mag) {}",
        starterCode: `function canConstruct(ransom, mag) {
  const counts = {};

  for (const character of mag) {
    counts[character] = (counts[character] || 0) + 1;
  }

  for (const character of ransom) {
    if (!counts[character]) {
      return false;
    }
    counts[character]--;
  }

  return true;
}`,
        testCases: [{ input: ["aa","aab"], output: true }]
    },
    {
        slug: "merge-two-sorted-arrays",
        title: "Merge Two Sorted Arrays",
        difficulty: "easy",
        description: "Merge two sorted arrays and return a new sorted array.",
        examples: ["[1,2,4] & [1,3,4] → [1,1,2,3,4,4]"],
        functionSignature: "function mergeTwoSorted(arr1, arr2) {}",
        starterCode: `function mergeTwoSorted(arr1, arr2) {
  const result = [];
  let index = 0;
  let nextIndex = 0;

  while (index < arr1.length && nextIndex < arr2.length) {
    if (arr1[index] <= arr2[nextIndex]) {
      result.push(arr1[index]);
      index++;
    } else {
      result.push(arr2[nextIndex]);
      nextIndex++;
    }
  }

  while (index < arr1.length) {
    result.push(arr1[index]);
    index++;
  }

  while (nextIndex < arr2.length) {
    result.push(arr2[nextIndex]);
    nextIndex++;
  }

  return result;
}`,
        testCases: [{ input: [[1,2,4],[1,3,4]], output: [1,1,2,3,4,4] }]
    },
    {
        slug: "remove-duplicates-sorted",
        title: "Remove Duplicates from Sorted Array",
        difficulty: "easy",
        description: "Remove duplicates in-place, return new length.",
        examples: ["[1,1,2] → 2"],
        functionSignature: "function removeDuplicates(nums) {}",
        starterCode: `function removeDuplicates(nums) {
  let index = 0;

  for (const n of nums) {
    if (index === 0 || n !== nums[index - 1]) {
      nums[index] = n;
      index++;
    }
  }

  return index;
}`,
        testCases: [{ input: [[1,1,2]], output: 2 }]
    },
    {
        slug: "best-time-buy-sell",
        title: "Best Time to Buy and Sell Stock",
        difficulty: "easy",
        description: "Max profit from one transaction.",
        examples: ["[7,1,5,3,6,4] → 5"],
        functionSignature: "function maxProfit(prices) {}",
        starterCode: `function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let index = 1; index < prices.length; index++) {
    minPrice = Math.min(minPrice, prices[index]);
    const profit = prices[index] - minPrice;
    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}`,
        testCases: [{ input: [[7,1,5,3,6,4]], output: 5 }]
    },
    {
        slug: "intersection-two-arrays-ii",
        title: "Intersection of Two Arrays II",
        difficulty: "easy",
        description: "Return intersection allowing duplicates.",
        examples: ["[1,2,2,1] & [2,2] → [2,2]"],
        functionSignature: "function intersect(a,b) {}",
        starterCode: `function intersect(firstArray, secondArray) {
  const counts = {};
  const result = [];

  for (const value of firstArray) {
    counts[value] = (counts[value] || 0) + 1;
  }

  for (const value of secondArray) {
    if (counts[value] > 0) {
      result.push(value);
      counts[value]--;
    }
  }

  return result;
}`,
        testCases: [{ input: [[1,2,2,1],[2,2]], output: [2,2] }]
    },
    {
        slug: "isomorphic-strings",
        title: "Isomorphic Strings",
        difficulty: "easy",
        description: "Return true if s and t are isomorphic.",
        examples: [`"egg","add" → true`],
        functionSignature: "function isIsomorphic(s,t) {}",
        starterCode: `function isIsomorphic(firstText, secondText) {
  const forwardMap = {};
  const reverseMap = {};

  for (let index = 0; index < firstText.length; index++) {
    const sourceCharacter = firstText[index];
    const targetCharacter = secondText[index];

    if (forwardMap[sourceCharacter] && forwardMap[sourceCharacter] !== targetCharacter || reverseMap[targetCharacter] && reverseMap[targetCharacter] !== sourceCharacter) {
      return false;
    }
    forwardMap[sourceCharacter] = targetCharacter;
    reverseMap[targetCharacter] = sourceCharacter;
  }

  return true;
}`,
        testCases: [{ input: ["egg","add"], output: true }]
    },
    {
        slug: "climbing-stairs",
        title: "Climbing Stairs",
        difficulty: "easy",
        description: "Distinct ways to climb to the top (1 or 2 steps).",
        examples: ["n=3 → 3"],
        functionSignature: "function climbStairs(n) {}",
        starterCode: `function climbStairs(steps) {
  let previousTwo = 1;
  let previousOne = 1;

  for (let index = 2; index <= steps; index++) {
    [previousTwo, previousOne] = [previousTwo + previousOne, previousTwo];
  }

  return previousTwo;
}`,
        testCases: [{ input: [3], output: 3 }]
    },
    {
        slug: "majority-element",
        title: "Majority Element",
        difficulty: "easy",
        description: "Return element that appears more than n/2 times.",
        examples: ["[3,2,3] → 3"],
        functionSignature: "function majorityElement(nums) {}",
        starterCode: `function majorityElement(nums) {
  let candidate = 0;
  let cand = null;

  for (const value of nums) {
    if (candidate === 0) {
      cand = value;
    }

    if (value === cand) {
      candidate++;
    } else {
      candidate--;
    }
  }

  return cand;
}`,
        testCases: [{ input: [[3,2,3]], output: 3 }]
    },
];
