export const mediumQuestions = [
    {
        slug: "3sum",
        title: "3Sum",
        difficulty: "medium",
        description: "Return all unique triplets that sum to zero.",
        examples: ["[-1,0,1,2,-1,-4] → [[-1,-1,2],[-1,0,1]]"],
        functionSignature: "function threeSum(nums) {}",
        starterCode: `function threeSum(nums){
  nums.sort((a,b)=>a-b);
  const res=[];
  for(let i=0;i<nums.length-2;i++){
    if(i && nums[i]===nums[i-1]) continue;
    let l=i+1, r=nums.length-1;
    while(l<r){
      const s=nums[i]+nums[l]+nums[r];
      if(s===0){
        res.push([nums[i],nums[l],nums[r]]);
        while(l<r && nums[l]===nums[l+1]) l++;
        while(l<r && nums[r]===nums[r-1]) r--;
        l++; r--;
      }else if(s<0) l++; else r--;
    }
  }
  return res;
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
        starterCode: `function lengthOfLongestSubstring(s){
  const seen=new Map(); let st=0, ans=0;
  for(let i=0;i<s.length;i++){
    if(seen.has(s[i]) && seen.get(s[i])>=st) st=seen.get(s[i])+1;
    seen.set(s[i],i);
    ans=Math.max(ans, i-st+1);
  }
  return ans;
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
        starterCode: `function groupAnagrams(strs){
  const m=new Map();
  for(const s of strs){
    const k=s.split('').sort().join('');
    if(!m.has(k)) m.set(k,[]);
    m.get(k).push(s);
  }
  return Array.from(m.values());
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
        starterCode: `function topKFrequent(nums,k){
  const m=new Map();
  for(const x of nums) m.set(x,(m.get(x)||0)+1);
  return Array.from(m.entries()).sort((a,b)=>b[1]-a[1]).slice(0,k).map(x=>x[0]);
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
        starterCode: `function productExceptSelf(nums){
  const res=Array(nums.length).fill(1);
  let pre=1, suf=1;
  for(let i=0;i<nums.length;i++){ res[i]*=pre; pre*=nums[i]; }
  for(let i=nums.length-1;i>=0;i--){ res[i]*=suf; suf*=nums[i]; }
  return res;
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
        starterCode: `function rotate(matrix){
  const n=matrix.length;
  for(let i=0;i<n;i++) for(let j=i;j<n;j++)
    [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];
  for(let i=0;i<n;i++) matrix[i].reverse();
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
        starterCode: `function setZeroes(matrix){
  const R=new Set(), C=new Set();
  for(let i=0;i<matrix.length;i++)
    for(let j=0;j<matrix[0].length;j++)
      if(matrix[i][j]===0){ R.add(i); C.add(j); }
  for(const r of R) matrix[r].fill(0);
  for(const c of C) for(let r=0;r<matrix.length;r++) matrix[r][c]=0;
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
        starterCode: `function spiralOrder(matrix){
  const out=[]; let t=0,b=matrix.length-1,l=0,r=matrix[0].length-1;
  while(t<=b && l<=r){
    for(let i=l;i<=r;i++) out.push(matrix[t][i]); t++;
    for(let i=t;i<=b;i++) out.push(matrix[i][r]); r--;
    if(t<=b){ for(let i=r;i>=l;i--) out.push(matrix[b][i]); b--; }
    if(l<=r){ for(let i=b;i>=t;i--) out.push(matrix[i][l]); l++; }
  }
  return out;
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
        starterCode: `function wordBreak(s,d){
  const set=new Set(d);
  const dp=Array(s.length+1).fill(false); dp[0]=true;
  for(let i=1;i<=s.length;i++){
    for(let j=0;j<i;j++){
      if(dp[j] && set.has(s.slice(j,i))){ dp[i]=true; break; }
    }
  }
  return dp[s.length];
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
        starterCode: `function coinChange(coins,amount){
  const dp=Array(amount+1).fill(Infinity); dp[0]=0;
  for(let a=1;a<=amount;a++){
    for(const c of coins){
      if(a-c>=0) dp[a] = Math.min(dp[a], dp[a-c]+1);
    }
  }
  return dp[amount]===Infinity ? -1 : dp[amount];
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
        starterCode: `function combinationSum(c,t){
  const res=[]; c.sort((a,b)=>a-b);
  function dfs(i,cur,sum){
    if(sum===t){ res.push(cur.slice()); return; }
    if(sum>t || i===c.length) return;
    cur.push(c[i]); dfs(i,cur,sum+c[i]); cur.pop();
    dfs(i+1,cur,sum);
  }
  dfs(0,[],0);
  return res;
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
        starterCode: `function longestPalindrome(s){
  let res='';
  function ex(l,r){
    while(l>=0&&r<s.length&&s[l]===s[r]){
      if(r-l+1>res.length) res=s.slice(l,r+1);
      l--; r++;
    }
  }
  for(let i=0;i<s.length;i++){ ex(i,i); ex(i,i+1); }
  return res;
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
        starterCode: `function maxArea(h){
  let l=0,r=h.length-1,ans=0;
  while(l<r){
    ans=Math.max(ans, Math.min(h[l],h[r])*(r-l));
    h[l]<h[r]? l++ : r--;
  }
  return ans;
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
        starterCode: `function minMeetingRooms(intervals){
  const s=intervals.map(i=>i[0]).sort((a,b)=>a-b);
  const e=intervals.map(i=>i[1]).sort((a,b)=>a-b);
  let i=0,j=0,rooms=0,maxR=0;
  while(i<s.length){
    if(s[i]<e[j]){ rooms++; i++; maxR=Math.max(maxR,rooms); }
    else { rooms--; j++; }
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
        starterCode: `function findKthLargest(nums,k){
  nums.sort((a,b)=>b-a);
  return nums[k-1];
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
        starterCode: `function canFinish(n,pr){
  const g=Array.from({length:n},()=>[]), deg=Array(n).fill(0);
  for(const [a,b] of pr){ g[b].push(a); deg[a]++; }
  const q=[]; for(let i=0;i<n;i++) if(deg[i]===0) q.push(i);
  let cnt=0;
  while(q.length){
    const u=q.shift(); cnt++;
    for(const v of g[u]) if(--deg[v]===0) q.push(v);
  }
  return cnt===n;
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
        starterCode: `function numIslands(g){
  if(!g.length) return 0;
  const m=g.length, n=g[0].length; let c=0;
  function dfs(i,j){
    if(i<0||j<0||i>=m||j>=n||g[i][j]!=='1') return;
    g[i][j]='0'; dfs(i+1,j); dfs(i-1,j); dfs(i,j+1); dfs(i,j-1);
  }
  for(let i=0;i<m;i++) for(let j=0;j<n;j++)
    if(g[i][j]==='1'){ c++; dfs(i,j); }
  return c;
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
        starterCode: `function minWindow(s,t){
  const need={}; let needCnt=0;
  for(const c of t){ need[c]=(need[c]||0)+1; needCnt++; }
  let l=0,res="",best=Infinity;
  for(let r=0;r<s.length;r++){
    const c=s[r]; if(need[c]>0) needCnt--; need[c]=(need[c]||0)-1;
    while(needCnt===0){
      if(r-l+1<best){ best=r-l+1; res=s.slice(l,r+1); }
      const lc=s[l]; need[lc]++; if(need[lc]>0) needCnt++; l++;
    }
  }
  return res;
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
        starterCode: `function numDecodings(s){
  if(!s || s[0]==='0') return 0;
  let a=1,b=1;
  for(let i=1;i<s.length;i++){
    let c=0;
    if(s[i]!=='0') c+=b;
    const two=+(s[i-1]+s[i]);
    if(two>=10 && two<=26) c+=a;
    a=b; b=c;
  }
  return b;
}`,
        testCases: [{ input: ["12"], output: 2 }]
    },
];
