export const easyQuestions = [
    {
        slug: "two-sum",
        title: "Two Sum",
        difficulty: "easy",
        description: "Given an array nums and an integer target, return indices of two numbers that add up to target.",
        examples: ["nums=[2,7,11,15], target=9 → [0,1]"],
        functionSignature: "function twoSum(nums, target) {}",
        starterCode: `function twoSum(nums, target){
  const map = new Map();
  for(let i=0;i<nums.length;i++){
    const need = target - nums[i];
    if(map.has(need)) return [map.get(need), i];
    map.set(nums[i], i);
  }
  return [];
}`,
        testCases: [{ input: [[2,7,11,15], 9], output: [0,1] }]
    },
    {
        slug: "reverse-string",
        title: "Reverse a String",
        difficulty: "easy",
        description: "Return the reversed string.",
        examples: [`"hello" → "olleh"`],
        functionSignature: "function reverseString(s) {}",
        starterCode: `function reverseString(s){
  return s.split('').reverse().join('');
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
        starterCode: `function isAnagram(s,t){
  return s.split('').sort().join('') === t.split('').sort().join('');
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
        starterCode: `function isPalindrome(s){
  return s === s.split('').reverse().join('');
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
        starterCode: `function fizzBuzz(n){
  const res=[];
  for(let i=1;i<=n;i++){
    if(i%15===0) res.push('FizzBuzz');
    else if(i%3===0) res.push('Fizz');
    else if(i%5===0) res.push('Buzz');
    else res.push(String(i));
  }
  return res;
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
        starterCode: `function findMax(nums){
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
        starterCode: `function containsDuplicate(nums){
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
        starterCode: `function moveZeroes(nums){
  let j=0;
  for(let i=0;i<nums.length;i++){
    if(nums[i]!==0){ [nums[i],nums[j]]=[nums[j],nums[i]]; j++; }
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
        starterCode: `function plusOne(d){
  for(let i=d.length-1;i>=0;i--){
    if(d[i]<9){ d[i]++; return d; }
    d[i]=0;
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
        starterCode: `function search(nums,target){
  let l=0,r=nums.length-1;
  while(l<=r){
    const m=(l+r>>1);
    if(nums[m]===target) return m;
    (nums[m]<target)? l=m+1 : r=m-1;
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
        starterCode: `function firstUniqChar(s){
  const c={};
  for(const ch of s) c[ch]=(c[ch]||0)+1;
  for(let i=0;i<s.length;i++) if(c[s[i]]===1) return i;
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
        starterCode: `function isValid(s){
  const st=[]; const m={')':'(',']':'[','}':'{'};
  for(const c of s){
    if(c in m){
      if(st.pop()!==m[c]) return false;
    }else st.push(c);
  }
  return st.length===0;
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
        starterCode: `function canConstruct(ransom,mag){
  const m={};
  for(const c of mag) m[c]=(m[c]||0)+1;
  for(const c of ransom){ if(!m[c]) return false; m[c]--; }
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
        functionSignature: "function mergeTwoSorted(a,b) {}",
        starterCode: `function mergeTwoSorted(a,b){
  let i=0,j=0,res=[];
  while(i<a.length || j<b.length){
    if(j===b.length || (i<a.length && a[i]<=b[j])) res.push(a[i++]);
    else res.push(b[j++]);
  }
  return res;
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
        starterCode: `function removeDuplicates(nums){
  let i=0;
  for(const n of nums){
    if(i===0 || n!==nums[i-1]) nums[i++]=n;
  }
  return i;
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
        starterCode: `function maxProfit(prices){
  let min=Infinity,ans=0;
  for(const p of prices){
    min=Math.min(min,p);
    ans=Math.max(ans,p-min);
  }
  return ans;
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
        starterCode: `function intersect(a,b){
  const m={}; const res=[];
  for(const x of a) m[x]=(m[x]||0)+1;
  for(const y of b){ if(m[y]>0){ res.push(y); m[y]--; } }
  return res;
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
        starterCode: `function isIsomorphic(s,t){
  const m1={}, m2={};
  for(let i=0;i<s.length;i++){
    const a=s[i], b=t[i];
    if((m1[a]&&m1[a]!==b) || (m2[b]&&m2[b]!==a)) return false;
    m1[a]=b; m2[b]=a;
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
        starterCode: `function climbStairs(n){
  let a=1,b=1;
  for(let i=2;i<=n;i++){ [a,b]=[a+b,a]; }
  return a;
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
        starterCode: `function majorityElement(nums){
  let c=0, cand=null;
  for(const x of nums){
    if(c===0) cand=x;
    c += (x===cand)?1:-1;
  }
  return cand;
}`,
        testCases: [{ input: [[3,2,3]], output: 3 }]
    },
];
