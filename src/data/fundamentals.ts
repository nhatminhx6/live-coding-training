export interface Fundamental {
  id: string
  title: string
  group: 'JavaScript' | 'Data structures' | 'Algorithms' | 'React' | 'React Native' | 'Performance' | 'Architecture' | 'AI Skills'
  summary: string
  theory: string[]
  useCases: string[]
  complexity?: string
  questions?: string[]
  answers?: string[]
  code: string
}

export const fundamentals: Fundamental[] = [
  {
    id: 'js-var-let-const',
    title: 'var, let & const',
    group: 'JavaScript',
    summary: 'Chọn cách khai báo biến dựa trên scope, khả năng gán lại và temporal dead zone.',
    theory: [
      'var có function scope, cho phép khai báo lại và được khởi tạo với undefined khi hoist.',
      'let và const có block scope, không thể truy cập trước dòng khai báo vì nằm trong temporal dead zone.',
      'const chỉ ngăn gán lại binding, không làm object immutable. Ưu tiên const, dùng let khi cần gán lại và tránh var trong code mới.',
    ],
    useCases: ['Khai báo biến an toàn', 'Loop scope', 'Tránh accidental reassignment', 'Đọc code legacy'],
    code: `const user = { name: 'An' }
user.name = 'Bình' // Hợp lệ: object vẫn mutable.
// user = {}       // TypeError: không thể gán lại binding.

if (true) {
  let message = 'block scoped'
  var legacy = 'function scoped'
}

console.log(legacy) // 'function scoped'
// console.log(message) // ReferenceError`,
  },
  {
    id: 'js-hoisting-tdz',
    title: 'Hoisting & TDZ',
    group: 'JavaScript',
    summary: 'Hiểu JavaScript tạo binding trước khi chạy code và vì sao mỗi declaration có hành vi khác nhau.',
    theory: [
      'Declaration được xử lý khi execution context được tạo, nhưng không phải declaration nào cũng được khởi tạo giống nhau.',
      'Function declaration có thể gọi trước vị trí khai báo; var tồn tại với giá trị undefined.',
      'let, const và class đã có binding nhưng chưa initialize; truy cập trong temporal dead zone gây ReferenceError.',
    ],
    useCases: ['Dự đoán output', 'Debug ReferenceError', 'Phân biệt function declaration và expression'],
    code: `greet() // 'hello'
function greet() { console.log('hello') }

console.log(score) // undefined
var score = 10

// console.log(name) // ReferenceError: TDZ
let name = 'An'

// run() // TypeError: run là undefined
var run = function () {}`,
  },
  {
    id: 'js-scope-closure',
    title: 'Scope & Closure',
    group: 'JavaScript',
    summary: 'Nắm lexical scope và cách function giữ quyền truy cập biến ở nơi nó được tạo.',
    theory: [
      'JavaScript dùng lexical scope: nơi viết function quyết định scope chain, không phải nơi gọi function.',
      'Closure là function kèm lexical environment, kể cả khi outer function đã chạy xong.',
      'Closure giúp encapsulate state nhưng cũng có thể giữ object trong bộ nhớ lâu hơn dự kiến.',
    ],
    useCases: ['Private state', 'Factory function', 'Callback', 'Memoization'],
    code: `function createCounter(initial = 0) {
  let count = initial

  return {
    increment() { return ++count },
    current() { return count },
  }
}

const counter = createCounter(5)
counter.increment() // 6
counter.current()   // 6`,
  },
  {
    id: 'js-this-functions',
    title: 'this & Function Types',
    group: 'JavaScript',
    summary: 'Xác định this từ cách function được gọi và hiểu khác biệt của arrow function.',
    theory: [
      'this của function phụ thuộc call site: method, constructor, call/apply/bind hoặc gọi độc lập.',
      'Arrow function không có this riêng; nó capture this từ lexical scope bên ngoài.',
      'Tách method khỏi object làm mất receiver. Dùng bind hoặc wrapper khi cần giữ context.',
    ],
    useCases: ['Object method', 'Event callback', 'Class method', 'call/apply/bind'],
    code: `const account = {
  balance: 100,
  show() { return this.balance },
  later() {
    return () => this.balance
  },
}

account.show() // 100

const safeShow = account.show.bind(account)
safeShow() // 100`,
  },
  {
    id: 'js-equality-coercion',
    title: 'Types, Coercion & Equality',
    group: 'JavaScript',
    summary: 'Hiểu primitive/reference, ép kiểu ngầm và sự khác nhau giữa ==, === và Object.is.',
    theory: [
      'Primitive được so sánh theo giá trị; object và array được so sánh theo reference.',
      '== thực hiện type coercion nên có nhiều trường hợp khó đoán; mặc định nên dùng ===.',
      'Object.is xử lý NaN bằng nhau và phân biệt +0 với -0; Number.isNaN kiểm tra NaN mà không ép kiểu.',
    ],
    useCases: ['So sánh dữ liệu', 'Validate input', 'Debug coercion', 'Kiểm tra NaN'],
    code: `0 == false       // true: có coercion
0 === false      // false: khác type
NaN === NaN      // false
Object.is(NaN, NaN) // true

const first = { id: 1 }
const second = { id: 1 }
first === second  // false: khác reference
first === first   // true`,
  },
  {
    id: 'js-array-methods',
    title: 'Array Methods',
    group: 'JavaScript',
    summary: 'Phân biệt transformation, filtering, aggregation và method có mutate mảng.',
    theory: [
      'map biến đổi từng phần tử, filter chọn phần tử và reduce gộp thành một kết quả.',
      'find trả phần tử đầu tiên; some/every trả boolean; forEach dùng cho side effect và không trả mảng mới.',
      'push, pop, splice, sort và reverse mutate mảng; map, filter, slice và toSorted trả giá trị mới.',
    ],
    useCases: ['Data transformation', 'React rendering', 'Tổng hợp dữ liệu', 'Immutable update'],
    complexity: 'Phần lớn method duyệt mảng có thời gian O(n)',
    code: `const products = [
  { name: 'Book', price: 20, active: true },
  { name: 'Pen', price: 5, active: false },
]

const total = products
  .filter(product => product.active)
  .map(product => product.price)
  .reduce((sum, price) => sum + price, 0)

console.log(total) // 20`,
  },
  {
    id: 'map-set',
    title: 'Map & Set',
    group: 'Data structures',
    summary: 'Tra cứu, đếm tần suất và loại trùng mà không cần quét lại mảng.',
    theory: [
      'Map lưu cặp key–value; Set chỉ lưu các giá trị duy nhất.',
      'Cả hai thường có thao tác thêm, xóa và tìm kiếm trung bình O(1).',
      'Dùng Map thay object khi key không chỉ là string hoặc cần giữ thứ tự chèn rõ ràng.',
    ],
    useCases: ['Two Sum', 'Đếm tần suất', 'Kiểm tra phần tử trùng', 'Nhóm dữ liệu theo khóa'],
    complexity: 'Thời gian O(n) · Bộ nhớ O(n)',
    code: `function countFrequency(values) {
  const frequency = new Map()

  for (const value of values) {
    frequency.set(value, (frequency.get(value) ?? 0) + 1)
  }

  return frequency
}

countFrequency(['a', 'b', 'a']) // Map { a: 2, b: 1 }`,
  },
  {
    id: 'stack-queue',
    title: 'Stack & Queue',
    group: 'Data structures',
    summary: 'Hiểu LIFO và FIFO để chọn đúng cách quản lý thứ tự xử lý.',
    theory: [
      'Stack là LIFO: phần tử thêm sau được lấy ra trước. Array.push/pop là O(1).',
      'Queue là FIFO: phần tử thêm trước được lấy ra trước.',
      'Không nên dùng Array.shift liên tục cho queue lớn vì mỗi lần có thể tốn O(n); dùng con trỏ head.',
    ],
    useCases: ['Valid Parentheses', 'Undo/redo', 'BFS', 'Xử lý tác vụ theo hàng đợi'],
    complexity: 'Push/pop hoặc enqueue/dequeue: O(1)',
    code: `class Queue {
  items = []
  head = 0

  enqueue(value) { this.items.push(value) }
  dequeue() { return this.items[this.head++] }
  get size() { return this.items.length - this.head }
}

const queue = new Queue()
queue.enqueue('first')
queue.enqueue('second')
queue.dequeue() // 'first'`,
  },
  {
    id: 'two-pointers',
    title: 'Two Pointers',
    group: 'Algorithms',
    summary: 'Dùng hai con trỏ để giảm vòng lặp lồng nhau xuống một lần duyệt.',
    theory: [
      'Hai con trỏ có thể đi từ hai đầu vào giữa hoặc cùng đi từ trái sang phải.',
      'Thường cần dữ liệu đã sắp xếp hoặc một điều kiện giúp quyết định con trỏ nào cần di chuyển.',
      'Luôn xác định invariant: phần dữ liệu nào đã được xử lý đúng sau mỗi vòng lặp.',
    ],
    useCases: ['Palindrome', 'Two Sum trên mảng đã sort', 'Move Zeroes', 'Container With Most Water'],
    complexity: 'Thường O(n) thời gian · O(1) bộ nhớ',
    code: `function hasPairWithSum(sortedNumbers, target) {
  let left = 0
  let right = sortedNumbers.length - 1

  while (left < right) {
    const sum = sortedNumbers[left] + sortedNumbers[right]
    if (sum === target) return true
    if (sum < target) left++
    else right--
  }

  return false
}`,
  },
  {
    id: 'sliding-window',
    title: 'Sliding Window',
    group: 'Algorithms',
    summary: 'Duy trì một đoạn liên tiếp thay vì tính lại toàn bộ đoạn ở mỗi vị trí.',
    theory: [
      'Fixed window dùng khi kích thước k cố định; variable window co giãn theo điều kiện.',
      'Khi right mở rộng, cập nhật trạng thái. Khi cửa sổ không hợp lệ, tăng left và loại dữ liệu tương ứng.',
      'Pattern này áp dụng cho substring hoặc subarray liên tiếp, không áp dụng trực tiếp cho subsequence.',
    ],
    useCases: ['Tổng lớn nhất của k phần tử', 'Longest Substring', 'Minimum Window Substring'],
    complexity: 'O(n) vì mỗi con trỏ đi qua mảng tối đa một lần',
    code: `function maxSumOfK(numbers, k) {
  if (k > numbers.length) return null

  let sum = numbers.slice(0, k).reduce((a, b) => a + b, 0)
  let best = sum

  for (let right = k; right < numbers.length; right++) {
    sum += numbers[right] - numbers[right - k]
    best = Math.max(best, sum)
  }

  return best
}`,
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    group: 'Algorithms',
    summary: 'Loại bỏ một nửa không gian tìm kiếm sau mỗi bước.',
    theory: [
      'Điều kiện quan trọng là không gian tìm kiếm có tính đơn điệu.',
      'Chọn rõ interval [left, right] hay [left, right) để tránh lỗi lệch một đơn vị.',
      'Binary search không chỉ tìm giá trị; còn dùng để tìm biên đầu tiên/cuối cùng thỏa điều kiện.',
    ],
    useCases: ['Tìm trong mảng đã sort', 'Lower bound', 'Binary search on answer'],
    complexity: 'O(log n) thời gian · O(1) bộ nhớ',
    code: `function binarySearch(numbers, target) {
  let left = 0
  let right = numbers.length - 1

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2)
    if (numbers[middle] === target) return middle
    if (numbers[middle] < target) left = middle + 1
    else right = middle - 1
  }

  return -1
}`,
  },
  {
    id: 'recursion-dfs',
    title: 'Recursion & DFS',
    group: 'Algorithms',
    summary: 'Chia bài toán thành trạng thái nhỏ hơn và duyệt sâu từng nhánh.',
    theory: [
      'Mỗi hàm đệ quy phải có base case và bước tiến gần hơn tới base case.',
      'Call stack lưu trạng thái của nhánh hiện tại; input quá sâu có thể gây stack overflow.',
      'DFS thường kết hợp visited để tránh lặp vô hạn trên graph.',
    ],
    useCases: ['Duyệt tree/graph', 'Number of Islands', 'Backtracking', 'Sinh tổ hợp'],
    complexity: 'Tùy số trạng thái và số cạnh được duyệt',
    code: `function depthFirstSearch(graph, start) {
  const visited = new Set()

  function visit(node) {
    if (visited.has(node)) return
    visited.add(node)
    for (const neighbor of graph[node] ?? []) visit(neighbor)
  }

  visit(start)
  return [...visited]
}`,
  },
  {
    id: 'immutability',
    title: 'Mutation & Immutability',
    group: 'JavaScript',
    summary: 'Nhận biết reference để tránh vô tình thay đổi input hoặc state dùng chung.',
    theory: [
      'Object và Array được truyền bằng giá trị của reference; hai biến có thể trỏ tới cùng dữ liệu.',
      'Spread chỉ shallow copy. Object lồng nhau vẫn dùng chung reference nếu không copy tầng đó.',
      'Trong React, immutable update tạo reference mới để cơ chế so sánh nhận ra thay đổi.',
    ],
    useCases: ['React state', 'Clone test input', 'Pure function', 'Debug side effect'],
    complexity: 'Copy mảng/object thường tốn O(n)',
    code: `const user = {
  name: 'An',
  settings: { theme: 'light' },
}

const updatedUser = {
  ...user,
  settings: { ...user.settings, theme: 'dark' },
}

console.log(user.settings.theme) // 'light'`,
  },
  {
    id: 'async-event-loop',
    title: 'Promise & Event Loop',
    group: 'JavaScript',
    summary: 'Hiểu thứ tự thực thi synchronous code, microtask và task.',
    theory: [
      'Code đồng bộ chạy hết call stack trước khi callback bất đồng bộ được xử lý.',
      'Promise callbacks thuộc microtask queue và chạy trước task như setTimeout.',
      'await tạm dừng riêng async function; nó không block toàn bộ JavaScript thread.',
    ],
    useCases: ['API calls', 'Chạy nhiều tác vụ song song', 'Xử lý lỗi async', 'Dự đoán thứ tự log'],
    code: `console.log('A')

setTimeout(() => console.log('B'), 0)
Promise.resolve().then(() => console.log('C'))

console.log('D')

// Thứ tự: A, D, C, B`,
  },
  {
    id: 'react-render-model',
    title: 'Render, Reconciliation & State Snapshot',
    group: 'React',
    summary: 'Hiểu render là phép tính snapshot, commit mới thay đổi UI và identity quyết định state được giữ hay reset.',
    theory: [
      'Mỗi render nhận một snapshot state bất biến; event handler giữ snapshot của render đã tạo ra nó.',
      'Render phải pure. React có thể render lại, tạm dừng hoặc bỏ một render trước commit.',
      'Type, position và key tạo identity. Key không ổn định gây reset state và reconciliation sai.',
    ],
    useCases: ['Debug stale state', 'Dynamic form', 'List reorder', 'Concurrent rendering'],
    questions: [
      'Vì sao gọi setCount(count + 1) ba lần trong cùng handler thường chỉ tăng một?',
      'Thiết kế key thế nào khi list hỗ trợ insert, reorder và optimistic item?',
      'Render phase và commit phase khác nhau ra sao; phase nào được phép side effect?',
    ],
    answers: [
      'Mỗi handler đọc snapshot count của render hiện tại, nên cả ba lệnh đều yêu cầu cùng một giá trị count + 1 và React batch chúng. Dùng functional updater setCount(value => value + 1) ba lần để mỗi update nhận kết quả trước đó.',
      'Dùng ID ổn định gắn với identity nghiệp vụ, không dùng index. Optimistic item cần client-generated ID giữ nguyên khi server trả về; nếu phải đổi sang server ID thì cần map identity có chủ đích để tránh remount và mất state.',
      'Render phase gọi component để tính tree mới, phải pure và có thể bị chạy lại hoặc hủy. Commit phase áp thay đổi vào host UI; side effect chạy trong event handler hoặc Effect sau commit, riêng useLayoutEffect chạy đồng bộ sau mutation nhưng trước paint.',
    ],
    code: `function Counter() {
  const [count, setCount] = React.useState(0)

  function increaseThreeTimes() {
    setCount(value => value + 1)
    setCount(value => value + 1)
    setCount(value => value + 1)
  }

  return <Button title={String(count)} onPress={increaseThreeTimes} />
}`,
  },
  {
    id: 'react-state-architecture',
    title: 'State Ownership & Architecture',
    group: 'React',
    summary: 'Phân loại local, server, URL/navigation và global state trước khi chọn công cụ quản lý.',
    theory: [
      'Đặt state ở owner gần nhất; chỉ nâng state lên khi nhiều nhánh thực sự cần cùng source of truth.',
      'Server state có cache, stale time, retry và invalidation khác client state; không nên gom tất cả vào một store.',
      'Context là cơ chế truyền dependency, không tự tối ưu subscription; tách context theo tần suất thay đổi.',
    ],
    useCases: ['Feature boundary', 'Global session', 'Server cache', 'Design system'],
    questions: [
      'Anh sẽ chia state của app commerce lớn thành những lớp nào và vì sao?',
      'Khi nào Context đủ dùng, khi nào cần external store với selector?',
      'Làm sao migrate state architecture mà không big-bang rewrite?',
    ],
    answers: [
      'Tách local UI state, form state, navigation/URL state, server cache, session/global client state và persisted/offline state. Mỗi loại có lifecycle, owner, consistency và invalidation khác nhau nên không nên gom vào một store.',
      'Context đủ khi dữ liệu đổi ít, consumer không quá rộng và rerender chấp nhận được. External store với selector phù hợp khi state đổi thường xuyên, nhiều consumer chỉ đọc lát cắt nhỏ, cần subscription ngoài React hoặc devtools/middleware.',
      'Đặt boundary/adaptor quanh API cũ, chọn từng vertical slice, thêm test hành vi rồi chuyển owner và consumer theo feature. Chạy song song có kiểm soát, đo render/bug, loại state cũ sau khi không còn reader thay vì thay toàn app một lần.',
    ],
    code: `const AuthStateContext = React.createContext(null)
const AuthActionsContext = React.createContext(null)

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null)
  const actions = React.useMemo(() => ({ signOut: () => setUser(null) }), [])

  return (
    <AuthActionsContext.Provider value={actions}>
      <AuthStateContext.Provider value={user}>{children}</AuthStateContext.Provider>
    </AuthActionsContext.Provider>
  )
}`,
  },
  {
    id: 'react-effects-sync',
    title: 'Effects, Synchronization & Race Conditions',
    group: 'React',
    summary: 'Dùng Effect để đồng bộ với hệ thống ngoài, có cleanup đối xứng và chống response về sai thứ tự.',
    theory: [
      'Effect không dành cho derived state hay event logic; nếu tính được trong render thì không lưu thêm state.',
      'Mỗi Effect là một quy trình start/stop độc lập. Cleanup phải đảo ngược setup và chạy trước setup mới.',
      'Request cần abort hoặc ignore kết quả cũ để tránh race condition khi dependency đổi nhanh.',
    ],
    useCases: ['Network request', 'Subscription', 'Native event listener', 'Timer'],
    questions: [
      'Vì sao Effect chạy hai lần trong development Strict Mode và nó phát hiện bug gì?',
      'Phân biệt useEffect, useLayoutEffect và event handler bằng một case đo layout.',
      'Làm sao tránh waterfall và race condition khi nhiều screen cùng fetch?',
    ],
    answers: [
      'Strict Mode development cố ý chạy setup → cleanup → setup để lộ Effect thiếu cleanup, subscription trùng hoặc logic phụ thuộc chỉ chạy một lần. Production không có cycle kiểm tra thêm này.',
      'Event handler dùng cho hành động do người dùng gây ra; useEffect đồng bộ sau paint; useLayoutEffect đo và cập nhật layout trước paint để tránh nháy. Case tooltip cần measure trong useLayoutEffect, còn analytics của click ở handler.',
      'Fetch ở route/data layer hoặc dùng shared server cache để preload và dedupe thay vì mỗi screen chờ screen trước. Abort/ignore request cũ, key cache bằng input, đặt stale policy và dùng Suspense/query orchestration khi phù hợp.',
    ],
    code: `function useUser(userId) {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    const controller = new AbortController()
    fetch('/users/' + userId, { signal: controller.signal })
      .then(response => response.json())
      .then(setUser)
      .catch(error => {
        if (error.name !== 'AbortError') throw error
      })
    return () => controller.abort()
  }, [userId])

  return user
}`,
  },
  {
    id: 'react-concurrency-external-store',
    title: 'Concurrency & External Stores',
    group: 'React',
    summary: 'Ưu tiên update, giữ input responsive và kết nối external store an toàn với concurrent rendering.',
    theory: [
      'startTransition đánh dấu update không khẩn cấp; render có thể bị interrupt và restart.',
      'useDeferredValue trì hoãn một value cho subtree chậm nhưng không thay thế debounce network.',
      'useSyncExternalStore cung cấp snapshot nhất quán và tránh tearing khi đọc store bên ngoài React.',
    ],
    useCases: ['Search UI nặng', 'Large filtering', 'Shared store', 'Online status'],
    questions: [
      'Tearing là gì và vì sao concurrent rendering làm external store khó hơn?',
      'So sánh debounce, useDeferredValue và startTransition.',
      'Suspense boundary nên đặt ở đâu để tránh toàn màn hình nhấp nháy?',
    ],
    answers: [
      'Tearing xảy ra khi hai component trong cùng một UI commit đọc hai snapshot khác nhau của external store. Concurrent render có thể tạm dừng trong lúc store đổi; useSyncExternalStore cung cấp snapshot/subscription contract để React kiểm tra nhất quán.',
      'Debounce trì hoãn việc phát request/callback theo thời gian; useDeferredValue cho subtree chậm dùng value cũ tạm thời; startTransition đánh dấu một state update là không khẩn cấp. Chúng giải quyết ba lớp khác nhau và có thể kết hợp.',
      'Đặt boundary quanh vùng có thể loading độc lập và giữ phần điều hướng/interaction chính ổn định. Tránh một boundary ở root làm trắng toàn màn hình; dùng nested boundaries và transition để giữ content cũ khi refresh.',
    ],
    code: `function Search({ products }) {
  const [query, setQuery] = React.useState('')
  const deferredQuery = React.useDeferredValue(query)
  const visible = React.useMemo(
    () => products.filter(item => item.name.includes(deferredQuery)),
    [products, deferredQuery],
  )

  return <><TextInput value={query} onChangeText={setQuery} /><ProductList data={visible} /></>
}`,
  },
  {
    id: 'rn-rendering-threads',
    title: 'RN Render Pipeline & Threading',
    group: 'React Native',
    summary: 'Theo dõi update qua Render → Commit → Mount và phân biệt trách nhiệm JS thread với UI thread.',
    theory: [
      'React tạo element tree; renderer tạo Shadow Tree, Yoga tính layout, rồi mount thành host views.',
      'JS thread xử lý React và business logic; UI thread thao tác host view. Nghẽn mỗi thread tạo triệu chứng khác nhau.',
      'New Renderer có thể xử lý nhiều tree đang tiến hành và ưu tiên update khẩn cấp.',
    ],
    useCases: ['Diagnose dropped frames', 'Layout measurement', 'Animation', 'Architecture review'],
    questions: [
      'Một animation giật nhưng scroll vẫn mượt cho biết thread nào có thể đang nghẽn?',
      'Từ setState đến pixel trên màn hình đi qua các phase nào?',
      'Tại sao benchmark performance phải chạy release build trên device thật?',
    ],
    answers: [
      'Nghiêng về JS thread bị nghẽn vì native scroll có thể tiếp tục trên UI thread trong khi JS-driven animation bị trễ. Tuy nhiên cần trace cả hai thread vì native animation/layout nặng cũng có thể tạo triệu chứng tương tự.',
      'setState enqueue update; React render và reconcile element tree; RN renderer tạo/clones Shadow Tree; commit chốt tree, Yoga tính layout; mount transaction cập nhật host views trên UI thread; platform compose và hiển thị pixel.',
      'Development thêm warning, profiling hook, source map và logging; simulator không phản ánh CPU/GPU/memory của thiết bị. Release build trên device thật mới gần compiler/runtime, thermal, refresh rate và giới hạn tài nguyên production.',
    ],
    code: `function HeavyScreen({ items }) {
  const [selectedId, setSelectedId] = React.useState(null)

  const rows = React.useMemo(() => normalizeRows(items), [items])

  return (
    <FlatList
      data={rows}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Row item={item} selected={item.id === selectedId} onPress={setSelectedId} />
      )}
    />
  )
}`,
  },
  {
    id: 'rn-new-architecture',
    title: 'New Architecture, JSI, Fabric & TurboModules',
    group: 'React Native',
    summary: 'Hiểu khi nào cần interop native và trade-off của giao tiếp type-safe, trực tiếp qua JSI.',
    theory: [
      'JSI cho JavaScript giữ reference tới object C++ và gọi trực tiếp, tránh chi phí serialize qua bridge cũ.',
      'Fabric là renderer mới; TurboModules là hệ module native mới, lazy-load và dùng Codegen cho contract type-safe.',
      'Bật New Architecture không tự làm app nhanh; phải profile đúng bottleneck và kiểm tra compatibility dependency.',
    ],
    useCases: ['Native SDK', 'Camera/frame processing', 'High-throughput data', 'Library migration'],
    questions: [
      'Bridge cũ, JSI, TurboModule và Fabric giải quyết các lớp vấn đề nào?',
      'Khi nào viết native module, khi nào giữ logic ở JavaScript?',
      'Anh lập kế hoạch migration app lớn sang New Architecture thế nào để rollback an toàn?',
    ],
    answers: [
      'Bridge cũ serialize và gửi batch message JS–native; JSI là lớp giao tiếp trực tiếp với object C++; TurboModules thay hệ native module bằng contract Codegen/lazy loading; Fabric thay renderer/component system và hỗ trợ concurrent features.',
      'Giữ ở JavaScript khi logic thuần, throughput vừa phải và không cần platform API. Viết native khi cần SDK/platform capability, xử lý dữ liệu tần suất cao, latency đồng bộ hoặc reuse native code; luôn tính chi phí maintenance đa nền tảng.',
      'Audit dependency và native module, nâng phiên bản theo bước, bật trong CI/canary, port module nhỏ trước, thêm parity/performance tests và staged rollout. Duy trì flag/nhánh tương thích để tắt nhanh trong cửa sổ migration và theo dõi crash/performance theo architecture cohort.',
    ],
    code: `// NativeLocalStorage.ts — contract dùng cho Codegen
import type { TurboModule } from 'react-native'
import { TurboModuleRegistry } from 'react-native'

export interface Spec extends TurboModule {
  setItem(value: string, key: string): void
  getItem(key: string): string | null
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeLocalStorage')`,
  },
  {
    id: 'rn-list-performance',
    title: 'Lists, Memory & Performance Profiling',
    group: 'Performance',
    summary: 'Đo JS/UI FPS, render count, startup và memory trước khi tối ưu danh sách hoặc component tree.',
    theory: [
      'FlatList virtualize item; window quá lớn tốn memory, quá nhỏ dễ xuất hiện blank area.',
      'Memo chỉ hữu ích khi props ổn định và render thực sự đắt; callback/object mới có thể phá memoization.',
      'Tách urgent interaction khỏi tác vụ nặng, lazy-load feature lớn và luôn đo ở production mode.',
    ],
    useCases: ['Feed lớn', 'Low-end Android', 'Startup time', 'Memory leak'],
    questions: [
      'FPS trong React Native là gì? Vì sao 60 FPS tương ứng khoảng 16.67 ms cho mỗi frame?',
      'JS FPS và UI FPS khác nhau thế nào? Mỗi loại giảm sẽ tạo ra triệu chứng gì trên ứng dụng?',
      'Trường hợp scroll vẫn mượt nhưng nút bấm phản hồi chậm cho thấy thread nào có khả năng đang bị nghẽn?',
      'Trường hợp animation bị giật dù JS thread vẫn ổn thì nên kiểm tra những tác vụ nào trên UI thread?',
      'Vì sao performance đo trong development mode không đáng tin cậy? Anh sẽ thiết lập benchmark production như thế nào?',
      'Một thao tác setState khiến component tree render mất 40 ms. Nó ảnh hưởng FPS ra sao và anh sẽ tìm nguyên nhân bằng cách nào?',
      'Vì sao average FPS có thể đẹp nhưng người dùng vẫn cảm thấy ứng dụng giật? Nên theo dõi p95/p99 frame time, dropped frames và frozen frames thế nào?',
      'Phân biệt JS thread stall, UI thread stall và network latency qua triệu chứng người dùng nhìn thấy.',
      'Khi animation chạy trên UI thread, JS thread bị block có thể ảnh hưởng animation và interaction trong những trường hợp nào?',
      'Vì sao console.log số lượng lớn có thể làm giảm JS FPS, đặc biệt trong development?',
      'Các thuộc tính windowSize, maxToRenderPerBatch và updateCellsBatchingPeriod ảnh hưởng FPS, memory và blank area thế nào?',
      'getItemLayout cải thiện performance trong trường hợp nào? Khi chiều cao row không cố định thì xử lý ra sao?',
      'Vì sao tăng số item render mỗi batch có thể giảm blank area nhưng lại làm interaction kém responsive?',
      'Khi nào React.memo, useMemo và useCallback thực sự giúp tăng FPS? Làm sao chứng minh bằng profiling?',
      'Referential equality của object, array và callback ảnh hưởng việc render lại row trong FlatList thế nào?',
      'Một màn hình feed chỉ giật trên Android cấu hình thấp. Anh sẽ xây quy trình reproduce và profiling ra sao?',
    ],
    answers: [
      'FPS là số frame hiển thị mỗi giây. Màn hình 60 Hz có ngân sách 1000 / 60 ≈ 16.67 ms để xử lý một frame; vượt ngân sách sẽ bỏ frame. Thiết bị 120 Hz chỉ còn khoảng 8.33 ms.',
      'JS FPS phản ánh khả năng JS thread xử lý React, event và business logic; giảm thường làm press, state update và JS-driven animation trễ. UI FPS phản ánh main thread dựng host view; giảm làm scroll, layout hoặc native animation giật.',
      'Khả năng cao JS thread đang nghẽn: native ScrollView vẫn chạy trên UI thread nên còn mượt, còn callback onPress phải chờ JS thread. Cần xác nhận bằng profiler thay vì kết luận chỉ từ triệu chứng.',
      'Kiểm tra layout/draw quá nặng, hierarchy native sâu, image decode/resize, shadow/blur, animation thuộc tính gây layout, quá nhiều view được mount và công việc native chạy trên main thread.',
      'Development có warning, instrumentation, source map, logging và nhiều check bổ sung nên chậm hơn production. Benchmark bằng release build, device thật đại diện, dữ liệu cố định, warm-up, nhiều lần chạy và so p50/p95 trên cùng kịch bản.',
      '40 ms dài hơn ngân sách 16.67 ms nên ít nhất hai frame deadline có thể bị lỡ. Dùng React Profiler tìm commit/component đắt, đo calculation trong render, kiểm tra state đặt quá cao, props không ổn định và list render lại ngoài ý muốn.',
      'Average làm phẳng các spike ngắn nhưng dễ cảm nhận. Theo dõi p95/p99 frame time, tỷ lệ slow frame vượt deadline, frozen frame rất dài và phân đoạn theo screen/device; đặt threshold dựa trên user journey thay vì một average toàn app.',
      'JS stall: press/state/JS animation trễ nhưng native scroll có thể còn mượt. UI stall: scroll/native transition cũng giật. Network latency: loading kéo dài nhưng interaction local vẫn phản hồi; xác nhận bằng JS/UI timeline và network trace.',
      'Animation UI-thread vẫn chạy nếu toàn bộ config đã nằm native/UI. Nó bị ảnh hưởng khi cần JS cung cấp frame/config mới, callback/gesture xử lý ở JS, state update giữa animation hoặc JS giữ logic quyết định bước tiếp theo.',
      'Logging phải format/serialize dữ liệu và chuyển qua debugger/console; log object lớn hoặc trong render/scroll handler làm JS thread bận. Development còn thêm overhead của debugging nên triệu chứng rõ hơn.',
      'windowSize lớn giảm blank area nhưng tăng memory; maxToRenderPerBatch lớn lấp nội dung nhanh nhưng chiếm JS thread lâu; updateCellsBatchingPeriod nhỏ cập nhật thường xuyên nhưng tăng scheduling work. Phải tune cùng nhau trên device yếu.',
      'getItemLayout bỏ bước đo khi item có chiều cao cố định hoặc biết trước. Với row biến đổi, có thể chuẩn hóa layout, cache measurement theo loại item, cung cấp estimated size qua list phù hợp hoặc chấp nhận đo động và tối ưu phần khác.',
      'Batch lớn tạo nhiều React element và mount nhiều native view trong một lượt, giúp viewport ít trắng nhưng block JS lâu hơn nên press và update khẩn cấp phải chờ. Mục tiêu là batch nhỏ nhất vẫn giữ fill rate chấp nhận được.',
      'Chỉ dùng memoization khi profiling cho thấy render/calculation đắt, component render lặp lại và dependencies có thể ổn định. So sánh before/after bằng commit duration, render count, frame metrics và memory; nếu không cải thiện thì bỏ.',
      'Memo dùng shallow equality. Object, array hoặc callback mới ở mỗi render làm props khác reference dù nội dung giống nhau, khiến row render lại. Ổn định data/callback có chủ đích và tránh tạo object style/handler không cần thiết trong renderItem.',
      'Dùng đúng model máy/OS và dữ liệu production-like, chạy release build, ghi lại kịch bản scroll, đo JS/UI frames, CPU và memory. Sau đó cô lập image, row complexity, list config và state updates từng yếu tố; chốt bằng benchmark lặp lại và regression test.',
    ],
    code: `const ITEM_HEIGHT = 72

const Row = React.memo(function Row({ item, onPress }) {
  return <Pressable onPress={() => onPress(item.id)}><Text>{item.title}</Text></Pressable>
})

function Feed({ items }) {
  const openItem = React.useCallback(id => navigate('Detail', { id }), [])
  return <FlatList data={items} renderItem={({ item }) => <Row item={item} onPress={openItem} />}
    keyExtractor={item => item.id}
    getItemLayout={(_, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })} />
}`,
  },
  {
    id: 'rn-tech-lead-performance-drills',
    title: 'Tech Lead Performance Drills',
    group: 'Performance',
    summary: 'Đi từ triệu chứng đến bottleneck, đặt performance budget và ra quyết định rollout dựa trên percentile thay vì cảm giác.',
    theory: [
      'Phân rã pipeline thành JavaScript calculation, reconciliation, Yoga layout, image decoding và native mounting trước khi tối ưu.',
      'Average che giấu trải nghiệm xấu ở nhóm thiết bị yếu; ưu tiên percentile, dropped/frozen frames và phân đoạn theo device, OS, app version.',
      'Performance là quality gate: mỗi user journey cần budget, baseline, regression threshold, staged rollout và điều kiện rollback.',
    ],
    useCases: ['Performance budget', 'Production regression', 'Release gate', 'Capacity planning'],
    questions: [
      'Làm sao xác định bottleneck nằm ở JavaScript calculation, React reconciliation, Yoga layout, image decoding hay native view mounting?',
      'Animation thay đổi width/height khác animation dùng transform thế nào về chi phí layout và FPS?',
      'Khi nào nên dùng native-driven animation hoặc UI-thread worklet thay vì animation chạy qua JavaScript?',
      'Nếu optimization tăng FPS nhưng làm memory tăng mạnh, anh sẽ chọn trade-off dựa trên metric nào?',
      'Startup FPS, navigation transition FPS và scrolling FPS nên được đo thành các scenario riêng như thế nào?',
      'Làm sao thiết lập performance budget cho frame time, TTI, memory và JavaScript bundle size trong CI hoặc release gate?',
      'Sau khi release, metric nào giúp phát hiện regression FPS theo device model, OS và phiên bản ứng dụng?',
      'Một bản release làm p95 frame time tăng nhưng crash rate không đổi. Anh quyết định rollback dựa trên tiêu chí nào?',
    ],
    answers: [
      'Gắn marker cho từng phase và profile từ ngoài vào trong: JS sampling cho calculation, React Profiler cho reconciliation, layout trace cho Yoga, image instrumentation cho decode/cache và native trace cho mount/draw. Thay đổi một biến mỗi lần để chứng minh quan hệ nhân quả.',
      'width/height làm invalidation layout, Yoga tính lại và có thể layout cả subtree; transform thường chỉ thay đổi composition nên rẻ hơn. Dùng transform/opacity cho animation khi hiệu ứng cho phép và xác nhận bằng UI-thread trace.',
      'Dùng native-driven hoặc UI-thread worklet khi animation/gesture phải phản hồi mỗi frame và không thể phụ thuộc độ rảnh của JS thread. Giữ ở JS cho animation đơn giản, tần suất thấp hoặc cần business state JS ở mỗi bước.',
      'Đặt budget theo phân khúc device và user journey: FPS/slow frames, peak và sustained memory, OOM rate, GC pause, battery và thermal. Chọn phương án đạt SLO tổng thể; không đổi vài frame lấy nguy cơ OOM trên device yếu.',
      'Cold start đo từ process start tới màn hình usable; navigation đo từ action tới transition hoàn tất; scrolling đo trong kịch bản velocity/data cố định. Mỗi scenario có marker, dataset, percentile và device matrix riêng để tìm đúng regression.',
      'Lưu baseline theo device tier, chạy benchmark ổn định nhiều lần, dùng median để giảm noise và fail khi regression vượt cả ngưỡng tuyệt đối lẫn phần trăm. CI nên cảnh báo trước; release gate chặn khi metric critical vượt budget có ý nghĩa thống kê.',
      'Theo dõi slow/frozen frame rate và p95/p99 frame time theo screen, device model, OS, app version và rollout cohort. Kết hợp startup/navigation latency, memory/OOM và business conversion để thấy regression vừa kỹ thuật vừa tác động người dùng.',
      'Rollback khi p95 vượt SLO hoặc regression đủ lớn trên cohort/device quan trọng, có tác động đến journey chính và confidence dữ liệu đủ cao. Dùng staged rollout/kill switch, so với control, dừng mở rộng trước rồi rollback nếu không thể giảm thiểu nhanh.',
    ],
    code: `const PERFORMANCE_BUDGET = {
  coldStartP95Ms: 1800,
  navigationP95Ms: 350,
  slowFrameRateMax: 0.05,
  frozenFrameRateMax: 0.001,
  memoryP95Mb: 320,
}

function evaluateRelease(metrics) {
  const failures = Object.entries(PERFORMANCE_BUDGET)
    .filter(([metric, limit]) => metrics[metric] > limit)
    .map(([metric]) => metric)

  return {
    approved: failures.length === 0,
    failures,
    action: failures.length ? 'STOP_ROLLOUT' : 'CONTINUE_ROLLOUT',
  }
}`,
  },
  {
    id: 'rn-navigation-deep-link',
    title: 'Navigation, Deep Links & State Restoration',
    group: 'React Native',
    summary: 'Thiết kế route contract typed, parse input không tin cậy và khôi phục navigation state có version.',
    theory: [
      'Deep link là external input: validate scheme, host, route và params trước khi điều hướng.',
      'Navigation state cần serializable nếu muốn persist; migration/versioning tránh restore schema cũ bị lỗi.',
      'Auth gating phải lưu intent rồi resume sau login, đồng thời chặn route không được phép.',
    ],
    useCases: ['Universal/App Links', 'Push notification', 'Auth flow', 'Restore after process death'],
    questions: [
      'Deep link vào màn hình cần đăng nhập phải đi qua state machine nào?',
      'Làm sao tránh duplicate navigation khi cold start nhận cả initial URL và notification?',
      'Route contract thay đổi giữa hai phiên bản app được migrate ra sao?',
    ],
    answers: [
      'Parse và validate link, lưu pending intent, chuyển tới auth nếu chưa có session, sau login kiểm tra authorization rồi resume đúng một lần. Invalid/expired intent phải rơi về safe route.',
      'Chuẩn hóa mọi nguồn thành một LaunchIntent có deterministic ID, có coordinator sở hữu consumption và lưu trạng thái đã xử lý. Chờ đủ initial sources trong một timeout ngắn, ưu tiên theo policy rồi dedupe trước navigate.',
      'Version payload/link contract, parser hỗ trợ schema cũ trong một cửa sổ tương thích và migrate sang route model hiện tại. Param thiếu/sai phải có default hoặc safe fallback; telemetry theo version giúp biết khi nào xóa compatibility.',
    ],
    code: `const linking = {
  prefixes: ['myapp://', 'https://app.example.com'],
  config: {
    screens: {
      Home: '',
      Product: { path: 'products/:id', parse: { id: value => String(value) } },
    },
  },
}

function Root() {
  return <NavigationContainer linking={linking}><AppNavigator /></NavigationContainer>
}`,
  },
  {
    id: 'rn-offline-data',
    title: 'Offline-first, Cache & Data Consistency',
    group: 'Architecture',
    summary: 'Thiết kế source of truth cục bộ, mutation queue, conflict policy và đồng bộ idempotent.',
    theory: [
      'Offline-first cần phân biệt server truth, local cache và pending mutations; UI đọc một model hợp nhất.',
      'Optimistic update phải có rollback hoặc reconciliation; request retry cần idempotency key.',
      'Conflict resolution là quyết định sản phẩm: last-write-wins, merge theo field hoặc yêu cầu người dùng xử lý.',
    ],
    useCases: ['Poor network', 'Optimistic UI', 'Background sync', 'Collaborative data'],
    questions: [
      'Anh thiết kế mutation queue bảo đảm không gửi trùng sau app crash thế nào?',
      'Xử lý optimistic delete khi server trả conflict ra sao?',
      'Cache invalidation và schema migration trên device cần observability gì?',
    ],
    answers: [
      'Ghi local state và outbox trong cùng transaction, mỗi mutation có ID/idempotency key bền vững. Worker dùng trạng thái pending/in-flight, retry exponential và chỉ xóa sau ack; sau crash có thể gửi lại nhưng server dedupe theo key.',
      'Giữ tombstone/pending state cho tới phản hồi. Với conflict, refetch server truth và áp policy sản phẩm: restore item, merge hoặc báo người dùng; không âm thầm xóa dữ liệu mới hơn. Mutation cần reversible snapshot nếu chọn rollback.',
      'Theo dõi cache hit/stale age, sync latency, queue depth, retry/conflict rate và migration success/failure theo schema/app/device. Migration cần transaction, checkpoint/backup phù hợp, crash recovery và kill switch để tránh corrupt hàng loạt.',
    ],
    code: `async function saveTodo(todo) {
  const mutation = { id: crypto.randomUUID(), type: 'todo.upsert', payload: todo }
  await database.transaction(async tx => {
    await tx.todos.upsert({ ...todo, syncStatus: 'pending' })
    await tx.outbox.insert(mutation)
  })
  scheduleSync()
}

async function flush(mutation) {
  await api.send(mutation.payload, { idempotencyKey: mutation.id })
  await database.outbox.remove(mutation.id)
}`,
  },
  {
    id: 'rn-testing-observability-delivery',
    title: 'Testing, Observability & Delivery',
    group: 'Architecture',
    summary: 'Xây quality gates theo rủi ro, đo production và rollout có thể dừng hoặc rollback.',
    theory: [
      'Test behavior qua public UI; unit test pure logic, integration test feature boundary, E2E giữ cho critical journeys.',
      'Crash-free sessions chưa đủ: cần startup, JS/UI stalls, API latency, device/OS/app version và business metrics.',
      'Release an toàn dùng staged rollout, feature flag, kill switch, source maps và ownership/on-call rõ ràng.',
    ],
    useCases: ['CI quality gate', 'Incident response', 'OTA/native release', 'Tech debt governance'],
    questions: [
      'Anh xây test pyramid cho app thanh toán sao cho nhanh nhưng vẫn đủ tin cậy?',
      'Metric nào chứng minh một refactor performance thành công ngoài average FPS?',
      'Một rollout tăng crash 0.3%: tiêu chí dừng, rollback và postmortem là gì?',
    ],
    answers: [
      'Unit test pure payment rules và idempotency; integration test UI–state–API boundary với server giả; contract test gateway; vài E2E cho pay/retry/3DS/restore critical journey. Risk càng cao thì evidence càng gần production, nhưng E2E phải ít và ổn định.',
      'So p50/p95/p99 latency, slow/frozen frames, render count/commit duration, memory/OOM, startup, battery và metric nghiệp vụ trên cùng device cohort. Kết quả cần baseline, confidence và không đánh đổi regression ở chiều khác.',
      'Dừng rollout khi vượt crash SLO hoặc có severity cao trên journey chính; so cohort/control và rollback/kill switch nếu không giảm thiểu nhanh. Postmortem ghi timeline, detection gap, root cause, contributing factors, action owner và regression guard.',
    ],
    code: `it('retries payment without creating a duplicate charge', async () => {
  server.use(failOnceThenSucceed({ chargeId: 'charge-1' }))
  render(<CheckoutScreen />)

  await user.press(screen.getByRole('button', { name: 'Pay' }))
  await user.press(screen.getByRole('button', { name: 'Retry' }))

  expect(await screen.findByText('Payment successful')).toBeVisible()
  expect(server.chargesForCurrentOrder()).toHaveLength(1)
})`,
  },
  {
    id: 'ai-task-brief',
    title: 'Task Brief & Context Engineering',
    group: 'AI Skills',
    summary: 'Giao việc bằng outcome, context, constraints và success criteria để AI tự chạy đúng hướng ngay từ đầu.',
    theory: [
      'Nêu kết quả cần đạt trước, sau đó cung cấp file/phạm vi liên quan, constraint và bằng chứng hoàn thành.',
      'Context tốt là context có liên quan; dump toàn repository hoặc lặp instruction làm tăng nhiễu và token.',
      'Chỉ định điều AI được tự làm và hành động nào phải dừng xin approval để giảm hỏi lại mà vẫn an toàn.',
    ],
    useCases: ['Implement feature', 'Fix bug', 'Refactor', 'Technical research'],
    questions: [
      'Một task brief tốt cần những trường nào để agent không phải đoán intent?',
      'Khi nào nên đưa log, screenshot, reproduction steps hay architectural constraint vào context?',
      'Làm sao giới hạn scope mà vẫn cho AI đủ quyền tự kiểm tra và hoàn thành task?',
    ],
    answers: [
      'Cần outcome, context/file liên quan, reproduction hoặc input, constraints, non-goals, success criteria, output/evidence mong muốn và autonomy boundary. Với quyết định mở, nêu trade-off được phép thay vì bắt AI đoán.',
      'Đưa reproduction/log khi chẩn đoán runtime; screenshot khi vấn đề thị giác; trace khi timing/performance; architectural constraint khi giải pháp có thể phá boundary. Chỉ đưa dữ liệu trực tiếp giúp phân biệt giả thuyết và loại secret.',
      'Chỉ rõ file/module được sửa, public contract phải giữ và non-goal; đồng thời cho phép đọc code liên quan, chạy test/typecheck/build và sửa lỗi trực tiếp phát sinh trong scope. Yêu cầu approval cho external write, destructive action hoặc mở rộng kiến trúc.',
    ],
    code: `const taskBrief = {
  outcome: 'Fix duplicate payment submission on slow networks',
  context: ['CheckoutScreen.tsx', 'usePayment.ts', 'payment.integration.test.tsx'],
  constraints: ['Keep the public hook API', 'No new dependency', 'Preserve offline retry'],
  success: ['One charge per order', 'Regression test passes', 'Typecheck passes'],
  autonomy: {
    allowed: ['inspect files', 'edit scoped code', 'run tests'],
    approvalRequired: ['change API contract', 'delete data', 'deploy'],
  },
}`,
  },
  {
    id: 'ai-engineering-loop',
    title: 'Inspect → Change → Verify Loop',
    group: 'AI Skills',
    summary: 'Dùng AI theo vòng lặp kỹ thuật có evidence thay vì yêu cầu viết code rồi tin rằng đã đúng.',
    theory: [
      'Bắt đầu bằng inspection: trace call flow, đọc test và tái hiện lỗi trước khi chọn giải pháp.',
      'Mỗi thay đổi nên nhỏ, có giả thuyết rõ và được kiểm tra bằng test gần nhất với rủi ro.',
      'Definition of done phải gồm evidence: test/typecheck/build, diff review và giới hạn chưa kiểm chứng.',
    ],
    useCases: ['Bug fixing', 'Legacy code', 'Risky refactor', 'Production incident'],
    questions: [
      'Anh yêu cầu AI chứng minh root cause thay vì sửa theo triệu chứng như thế nào?',
      'Một verification ladder nên chạy unit, integration, build và manual check theo thứ tự nào?',
      'Khi test đang xanh nhưng implementation vẫn sai, còn loại evidence nào cần xem?',
    ],
    answers: [
      'Yêu cầu trace luồng dữ liệu, reproduction trước/sau, chỉ ra invariant bị vi phạm và liên kết từng thay đổi với root cause. Thêm regression test fail trên code cũ; patch chỉ làm test xanh bằng hardcode chưa chứng minh nguyên nhân.',
      'Chạy targeted unit trước để feedback nhanh, rồi integration cho boundary ảnh hưởng, typecheck/lint, related suite và build. Manual/E2E dùng cho UX/native/integration khó mô phỏng; thứ tự điều chỉnh theo rủi ro và chi phí.',
      'Xem chất lượng assertion và coverage của đường lỗi, final diff, runtime logs/trace, contract với dependency, accessibility/visual behavior, concurrency và dữ liệu production-like. Test xanh chỉ chứng minh các case đã viết.',
    ],
    code: `async function engineeringLoop(agent, task) {
  const evidence = await agent.inspect(task)
  const hypothesis = await agent.explainRootCause(evidence)
  const patch = await agent.makeSmallestChange(hypothesis)
  const verification = await agent.runChecks([
    'targeted regression test',
    'related test suite',
    'typecheck and build',
    'review final diff',
  ])

  if (!verification.every(check => check.passed)) throw new Error('Task is not done')
  return { patch, evidence: verification }
}`,
  },
  {
    id: 'ai-reusable-skills',
    title: 'Reusable Skills & Project Instructions',
    group: 'AI Skills',
    summary: 'Đóng gói quy trình lặp lại thành instruction và skill có trigger, input, validation và output rõ ràng.',
    theory: [
      'Project instruction giữ convention dùng rộng; skill dành cho workflow chuyên biệt có thể tái sử dụng.',
      'Skill tốt mô tả khi nào dùng, từng bước bắt buộc, asset/script có sẵn và điều kiện hoàn thành.',
      'Instruction phải ngắn, không mâu thuẫn và có test case đại diện để tránh workflow bị drift theo thời gian.',
    ],
    useCases: ['PR review', 'Release checklist', 'Generate feature', 'Incident audit'],
    questions: [
      'Thông tin nào nên ở project instruction và thông tin nào nên tách thành skill?',
      'Làm sao thiết kế trigger để skill không chạy sai task hoặc bỏ sót task phù hợp?',
      'Anh version và kiểm thử một AI workflow dùng chung cho cả team như thế nào?',
    ],
    answers: [
      'Project instruction chứa convention và rule áp dụng rộng, ổn định cho repository. Skill chứa workflow chuyên biệt có trigger, trình tự, tool/script/asset và validation riêng; tránh nhét mọi quy trình vào instruction luôn được tải.',
      'Description nêu cả dấu hiệu phải dùng và phạm vi không dùng bằng ngôn ngữ người dùng thường nói. Tạo bộ positive/negative trigger cases, theo dõi false positive/negative và giữ trigger tách biệt với chi tiết workflow.',
      'Lưu skill trong version control, pin dependency/schema, có changelog và owner. Chạy eval set gồm task thật, edge/failure case; so pass rate, diff quality, latency/token và rollout theo team nhỏ trước khi nâng version mặc định.',
    ],
    code: `---
name: react-native-performance-review
description: Review React Native changes that may affect FPS, memory or startup.
---

# Workflow
1. Read the changed render path and existing performance tests.
2. Identify JS-thread, UI-thread, memory and list-virtualization risks.
3. Cite exact files and lines for every finding.
4. Run the smallest relevant benchmark when available.
5. Return findings by severity plus missing evidence.

# Done when
- Every claim has code or benchmark evidence.
- No optimization is recommended without a measurable hypothesis.`,
  },
  {
    id: 'ai-structured-delegation',
    title: 'Structured Output, Tools & Delegation',
    group: 'AI Skills',
    summary: 'Ép contract đầu ra, chọn đúng tool và chỉ song song hóa các phần độc lập để giảm thời gian mà không mất kiểm soát.',
    theory: [
      'Dùng schema/checklist khi output được máy hoặc bước sau tiêu thụ; prose tự do phù hợp với reasoning và review.',
      'Chỉ cấp những tool cần thiết cho task, mô tả input/output/error và giới hạn retry rõ ràng.',
      'Parallel work hiệu quả khi subtasks độc lập; dependency hoặc shared files cần một owner tích hợp và verify cuối.',
    ],
    useCases: ['Repository audit', 'Batch migration', 'Research synthesis', 'Automated review'],
    questions: [
      'Task nào nên giao song song và task nào bắt buộc chạy tuần tự?',
      'Output schema giúp giảm lỗi handoff giữa các agent hoặc pipeline như thế nào?',
      'Khi nhiều agent sửa chung repository, owner cuối phải kiểm tra những xung đột nào?',
    ],
    answers: [
      'Song song hóa research, audit module độc lập hoặc test matrix không dùng chung state. Chạy tuần tự khi output bước trước quyết định bước sau, cùng sửa một boundary/file, có migration order hoặc side effect cần coordination.',
      'Schema biến handoff thành contract kiểm tra được: required field, enum, evidence và error shape rõ ràng. Consumer không phải parse prose tùy ý, có thể validate/fail fast, dedupe và tổng hợp kết quả nhất quán.',
      'Owner kiểm tra textual và semantic conflict, assumption khác nhau, duplicate work, API/type mismatch, migration order và test bị bỏ sót. Sau merge phải đọc final diff và chạy verification ở trạng thái tích hợp, không chỉ tin test từng nhánh.',
    ],
    code: `const findingSchema = {
  type: 'object',
  required: ['severity', 'file', 'evidence', 'recommendation'],
  properties: {
    severity: { enum: ['critical', 'high', 'medium', 'low'] },
    file: { type: 'string' },
    evidence: { type: 'string' },
    recommendation: { type: 'string' },
  },
  additionalProperties: false,
}

const workstreams = ['render performance', 'data consistency', 'test coverage']
const findings = await Promise.all(workstreams.map(scope => audit(scope, findingSchema)))`,
  },
  {
    id: 'ai-evals-review',
    title: 'Evals, Review & Trust Boundaries',
    group: 'AI Skills',
    summary: 'Đánh giá AI bằng bộ case đại diện, review theo rủi ro và không để output chưa kiểm chứng đi thẳng vào production.',
    theory: [
      'Eval dataset phải chứa happy path, edge case và failure từng xảy ra; pass rate cần theo dõi theo phiên bản workflow.',
      'AI review bổ sung chứ không thay thế compiler, test, static analysis, security scan và human approval ở vùng rủi ro cao.',
      'Không đưa secret hoặc dữ liệu nhạy cảm ngoài policy; mọi external write, deploy và destructive action cần boundary rõ.',
    ],
    useCases: ['Prompt regression', 'Code review', 'Security boundary', 'Team adoption'],
    questions: [
      'Làm sao biết prompt mới tốt hơn thay vì chỉ hay hơn trên một ví dụ?',
      'Những thay đổi nào luôn cần human review dù AI đã chạy đủ test?',
      'Anh đo ROI của AI bằng cycle time, escaped defects, review load và chi phí như thế nào?',
    ],
    answers: [
      'Chạy prompt cũ và mới trên cùng eval set đại diện, nhiều lần nếu output biến thiên. So task success, correctness, required evidence, regression theo category, latency và cost; không tối ưu dựa trên một demo đẹp.',
      'Luôn review auth/payment/privacy, destructive data migration, permission/security, public API, dependency/supply chain, native release và thay đổi khó rollback. Test giảm rủi ro nhưng không thay quyền quyết định và accountability.',
      'Đặt baseline trước triển khai rồi so lead/cycle time, first-pass acceptance, escaped defect, review minutes, rework, token/tool cost và developer satisfaction theo loại task. Tính cả thời gian verify/sửa output, tránh chỉ đếm code được sinh.',
    ],
    code: `const evalCases = [
  { name: 'happy path', task: fixFixture('normal'), mustPass: ['tests', 'typecheck'] },
  { name: 'race condition', task: fixFixture('double-submit'), mustPass: ['idempotency-test'] },
  { name: 'scope control', task: fixFixture('unrelated-files'), mustPass: ['no-unrelated-diff'] },
]

const report = await runWorkflowEval(evalCases)
const releaseAllowed =
  report.passRate === 1 &&
  report.securityFindings === 0 &&
  report.unreviewedHighRiskChanges === 0

if (!releaseAllowed) throw new Error('AI workflow regression')`,
  },
]

// Content invariant: không cho phép thêm lesson lý thuyết suông.
for (const lesson of fundamentals) {
  if (!lesson.code.trim()) {
    throw new Error(`Fundamental "${lesson.id}" phải có code sample`)
  }
  if (lesson.questions?.length) {
    if (lesson.answers?.length !== lesson.questions.length) {
      throw new Error(`Fundamental "${lesson.id}" phải có đúng một câu trả lời cho mỗi câu hỏi`)
    }
    if (lesson.answers.some((answer) => !answer.trim())) {
      throw new Error(`Fundamental "${lesson.id}" không được có câu trả lời rỗng`)
    }
  }
}
