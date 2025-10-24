export const hardQuestions = [
    {
        slug: "trapping-rain-water",
        title: "Trapping Rain Water",
        difficulty: "hard",
        description: "Compute how much water can be trapped after raining.",
        examples: ["[0,1,0,2,1,0,1,3,2,1,2,1] → 6"],
        functionSignature: "function trap(height) {}",
        starterCode: `function trap(h){
  let l=0,r=h.length-1,lm=0,rm=0,ans=0;
  while(l<r){
    if(h[l]<h[r]){ lm=Math.max(lm,h[l]); ans+=lm-h[l]; l++; }
    else{ rm=Math.max(rm,h[r]); ans+=rm-h[r]; r--; }
  }
  return ans;
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
        starterCode: `function findMedianSortedArrays(a,b){
  const m=[...a,...b].sort((x,y)=>x-y);
  const n=m.length;
  return n%2? m[Math.floor(n/2)] : (m[n/2-1]+m[n/2])/2;
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
        starterCode: `function mergeKArrays(a){
  const res=[]; for(const arr of a) for(const x of arr) res.push(x);
  res.sort((x,y)=>x-y); return res;
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
        starterCode: `function ladderLength(begin,end,wl){
  const set=new Set(wl); if(!set.has(end)) return 0;
  const q=[[begin,1]];
  while(q.length){
    const [w,d]=q.shift();
    if(w===end) return d;
    for(let i=0;i<w.length;i++){
      for(const c of 'abcdefghijklmnopqrstuvwxyz'){
        const nw = w.slice(0,i)+c+w.slice(i+1);
        if(set.has(nw)){ set.delete(nw); q.push([nw,d+1]); }
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
        starterCode: `function solveNQueens(n){
  const res=[],b=Array(n).fill(0).map(()=>Array(n).fill('.'));
  const c=new Set(),d1=new Set(),d2=new Set();
  function bt(r){
    if(r===n){ res.push(b.map(x=>x.join(''))); return; }
    for(let col=0;col<n;col++){
      if(c.has(col)||d1.has(r-col)||d2.has(r+col)) continue;
      c.add(col); d1.add(r-col); d2.add(r+col); b[r][col]='Q';
      bt(r+1);
      b[r][col]='.'; c.delete(col); d1.delete(r-col); d2.delete(r+col);
    }
  }
  bt(0); return res;
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
        starterCode: `function solveSudoku(b){
  function ok(r,c,ch){
    for(let i=0;i<9;i++){
      if(b[r][i]===ch||b[i][c]===ch||b[Math.floor(r/3)*3+Math.floor(i/3)][Math.floor(c/3)*3+i%3]===ch) return false;
    }
    return true;
  }
  function dfs(){
    for(let r=0;r<9;r++){
      for(let c=0;c<9;c++){
        if(b[r][c]==='.'){
          for(const ch of '123456789'){
            if(ok(r,c,ch)){ b[r][c]=ch; if(dfs()) return true; b[r][c]='.'; }
          }
          return false;
        }
      }
    }
    return true;
  }
  dfs(); return b;
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
        starterCode: `function minDistance(a,b){
  const m=a.length,n=b.length;
  const dp=Array.from({length:m+1},()=>Array(n+1).fill(0));
  for(let i=0;i<=m;i++) dp[i][0]=i;
  for(let j=0;j<=n;j++) dp[0][j]=j;
  for(let i=1;i<=m;i++)
    for(let j=1;j<=n;j++)
      dp[i][j] = a[i-1]===b[j-1] ? dp[i-1][j-1] : 1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
  return dp[m][n];
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
        starterCode: `function isMatch(s,p){
  const m=s.length,n=p.length;
  const dp=Array.from({length:m+1},()=>Array(n+1).fill(false));
  dp[0][0]=true;
  for(let j=2;j<=n;j++) if(p[j-1]==='*') dp[0][j]=dp[0][j-2];
  for(let i=1;i<=m;i++) for(let j=1;j<=n;j++){
    if(p[j-1]!=='*'){
      dp[i][j] = dp[i-1][j-1] && (p[j-1]==='.' || p[j-1]===s[i-1]);
    }else{
      dp[i][j] = dp[i][j-2] || ((p[j-2]==='.' || p[j-2]===s[i-1]) && dp[i-1][j]);
    }
  }
  return dp[m][n];
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
        starterCode: `function maxSlidingWindow(nums,k){
  const dq=[],res=[];
  for(let i=0;i<nums.length;i++){
    while(dq.length && dq[0]<=i-k) dq.shift();
    while(dq.length && nums[dq[dq.length-1]]<=nums[i]) dq.pop();
    dq.push(i);
    if(i>=k-1) res.push(nums[dq[0]]);
  }
  return res;
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
        starterCode: `function maxCoins(nums){
  const a=[1,...nums,1], n=a.length;
  const dp=Array.from({length:n},()=>Array(n).fill(0));
  for(let len=2; len<n; len++){
    for(let l=0; l+len<n; l++){
      const r=l+len;
      for(let k=l+1;k<r;k++){
        dp[l][r]=Math.max(dp[l][r], a[l]*a[k]*a[r]+dp[l][k]+dp[k][r]);
      }
    }
  }
  return dp[0][n-1];
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
        starterCode: `function largestRectangleArea(h){
  const st=[],n=h.length; let max=0;
  for(let i=0;i<=n;i++){
    const cur = i===n ? 0 : h[i];
    while(st.length && cur < h[st[st.length-1]]){
      const height=h[st.pop()];
      const left = st.length ? st[st.length-1]+1 : 0;
      const area = height * (i-left);
      if(area>max) max=area;
    }
    st.push(i);
  }
  return max;
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
        starterCode: `function longestConsecutive(nums){
  const s=new Set(nums); let best=0;
  for(const x of s){
    if(!s.has(x-1)){
      let y=x,len=1;
      while(s.has(y+1)){ y++; len++; }
      best=Math.max(best,len);
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
        starterCode: `function minWindowSubsequence(S,T){
  let start=-1,len=Infinity;
  for(let i=0;i<S.length;i++){
    if(S[i]!==T[0]) continue;
    let s=i,t=0;
    while(s<S.length){ if(S[s]===T[t]) t++; if(t===T.length) break; s++; }
    if(t<T.length) break;
    let e=s;
    while(s>=i){ if(S[s]===T[t-1]) t--; if(t===0) break; s--; }
    if(e-s+1<len){ len=e-s+1; start=s; }
  }
  return start===-1 ? '' : S.slice(start,start+len);
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
        starterCode: `function partition(s){
  const res=[];
  function isP(l,r){ while(l<r) if(s[l++]!==s[r--]) return false; return true; }
  function dfs(i,cur){
    if(i===s.length){ res.push(cur.slice()); return; }
    for(let j=i;j<s.length;j++){
      if(isP(i,j)){ cur.push(s.slice(i,j+1)); dfs(j+1,cur); cur.pop(); }
    }
  }
  dfs(0,[]);
  return res;
}`,
        testCases: [{ input: ["aab"], output: [["a","a","b"],["aa","b"]] }]
    },
];
