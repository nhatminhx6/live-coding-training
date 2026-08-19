export interface Fundamental {
  id: string
  title: string
  group: 'JavaScript' | 'Data structures' | 'Algorithms' | 'SwiftUI'
  summary: string
  theory: string[]
  useCases: string[]
  complexity?: string
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
    id: 'swiftui-state-binding',
    title: '@State & @Binding',
    group: 'SwiftUI',
    summary: 'Quản lý source of truth cục bộ và cho view con quyền đọc/ghi state của view cha.',
    theory: [
      '@State dành cho dữ liệu value type do chính view sở hữu; SwiftUI giữ storage bên ngoài giá trị View.',
      '@Binding không sở hữu dữ liệu. Nó là kết nối hai chiều tới source of truth nằm ở nơi khác.',
      'Khai báo state ở ancestor chung gần nhất và truyền binding xuống, tránh tạo nhiều source of truth cho cùng một dữ liệu.',
    ],
    useCases: ['Toggle UI', 'Form input', 'Sheet presentation', 'Component con chỉnh dữ liệu của cha'],
    complexity: 'State thay đổi làm SwiftUI đánh giá lại body của các view phụ thuộc',
    code: `struct CounterView: View {
    @State private var count = 0

    var body: some View {
        VStack {
            Text("Count: \\(count)")
            CounterButton(count: $count)
        }
    }
}

struct CounterButton: View {
    @Binding var count: Int

    var body: some View {
        Button("Increase") { count += 1 }
    }
}`,
  },
  {
    id: 'swiftui-observation',
    title: '@Observable & ObservableObject',
    group: 'SwiftUI',
    summary: 'Đặt business state vào reference type để nhiều view cùng quan sát thay đổi.',
    theory: [
      '@Observable thuộc Observation framework (iOS 17+); view chỉ theo dõi những property thực sự được đọc trong body.',
      'Với @Observable, owner thường dùng @State; view con nhận model trực tiếp. Dùng @Bindable khi cần tạo Binding tới property.',
      'ObservableObject là API cũ hơn: kết hợp @Published với @StateObject cho owner và @ObservedObject cho borrower.',
    ],
    useCases: ['Feature model', 'Shared screen state', 'Loading/error state', 'Business logic có reference identity'],
    code: `import Observation
import SwiftUI

@Observable
final class ProfileModel {
    var name = "An"
    var isEditing = false
}

struct ProfileView: View {
    @State private var model = ProfileModel()

    var body: some View {
        ProfileForm(model: model)
    }
}

struct ProfileForm: View {
    @Bindable var model: ProfileModel

    var body: some View {
        TextField("Name", text: $model.name)
    }
}`,
  },
  {
    id: 'swiftui-environment',
    title: 'Environment & Dependency Injection',
    group: 'SwiftUI',
    summary: 'Truyền dependency hoặc giá trị dùng chung xuyên qua view tree mà không phải prop drilling.',
    theory: [
      '@Environment đọc giá trị từ environment hiện tại; ancestor gần nhất cung cấp giá trị sẽ thắng.',
      'Environment phù hợp với dependency dùng rộng như session, theme hoặc locale; dependency chỉ dùng một nơi nên truyền trực tiếp.',
      'Thiếu Observable model bắt buộc trong environment có thể crash; preview và test cần inject dependency rõ ràng.',
    ],
    useCases: ['Session hiện tại', 'Theme/locale', 'Dismiss action', 'Feature dependency dùng nhiều tầng'],
    code: `@Observable
final class Session {
    var username: String?
}

@main
struct PracticesApp: App {
    @State private var session = Session()

    var body: some Scene {
        WindowGroup {
            HomeView().environment(session)
        }
    }
}

struct HomeView: View {
    @Environment(Session.self) private var session

    var body: some View {
        Text(session.username ?? "Guest")
    }
}`,
  },
  {
    id: 'swiftui-identity-lifecycle',
    title: 'View Identity & Lifecycle',
    group: 'SwiftUI',
    summary: 'Hiểu View là mô tả dạng value, còn identity quyết định state được giữ hay bị tạo lại.',
    theory: [
      'SwiftUI View là struct nhẹ và có thể được tạo lại thường xuyên; body không phải lifecycle method kiểu UIKit.',
      'Structural identity đến từ vị trí/type trong cây view; explicit identity đến từ id hoặc Identifiable.',
      'Đổi identity sẽ reset @State. Không khởi tạo object hoặc chạy side effect nặng trực tiếp trong body.',
    ],
    useCases: ['Giữ state ổn định', 'List row identity', 'Reset màn hình có chủ đích', 'Debug animation/state bị mất'],
    code: `struct User: Identifiable {
    let id: UUID
    let name: String
}

struct UserList: View {
    let users: [User]

    var body: some View {
        List(users) { user in
            // Stable id giúp SwiftUI giữ đúng identity của row.
            Text(user.name)
        }
        .onAppear { print("List appeared") }
    }
}`,
  },
  {
    id: 'swiftui-layout-composition',
    title: 'Layout & View Composition',
    group: 'SwiftUI',
    summary: 'Xây UI từ container, modifier và quy trình parent đề xuất size—child chọn size.',
    theory: [
      'HStack, VStack và ZStack sắp xếp child; Spacer nhận phần không gian linh hoạt còn lại.',
      'Thứ tự modifier có ý nghĩa vì mỗi modifier bọc view trước đó và tạo ra một view mới.',
      'Tách view theo trách nhiệm và data dependency; tránh AnyView vì làm mất type information nếu không thực sự cần type erasure.',
    ],
    useCases: ['Reusable component', 'Adaptive layout', 'Design system', 'Modifier order debugging'],
    code: `struct InfoCard: View {
    let title: String
    let detail: String

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(title).font(.headline)
            Text(detail).foregroundStyle(.secondary)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding()
        .background(.background) // background sau padding
        .clipShape(.rect(cornerRadius: 16))
        .shadow(color: .black.opacity(0.08), radius: 8)
    }
}`,
  },
  {
    id: 'swiftui-navigation',
    title: 'Navigation & Data Flow',
    group: 'SwiftUI',
    summary: 'Dùng NavigationStack và value-based navigation để state điều hướng có thể kiểm soát, test và deep link.',
    theory: [
      'NavigationStack thay NavigationView và hỗ trợ navigationDestination theo kiểu dữ liệu.',
      'NavigationPath hoặc array route là state; thay đổi path sẽ thay đổi stack hiển thị.',
      'Sheet nên nhận item khi nội dung phụ thuộc dữ liệu, giúp presentation và selected data cùng một source of truth.',
    ],
    useCases: ['Push detail', 'Deep link', 'Coordinator/router', 'Sheet theo selected item'],
    code: `enum Route: Hashable {
    case detail(id: UUID)
    case settings
}

struct RootView: View {
    @State private var path: [Route] = []

    var body: some View {
        NavigationStack(path: $path) {
            Button("Open settings") { path.append(.settings) }
                .navigationDestination(for: Route.self) { route in
                    switch route {
                    case .detail(let id): Text("Detail \\(id)")
                    case .settings: Text("Settings")
                    }
                }
        }
    }
}`,
  },
  {
    id: 'swiftui-concurrency',
    title: 'async/await, Task & MainActor',
    group: 'SwiftUI',
    summary: 'Chạy công việc bất đồng bộ theo structured concurrency, cập nhật UI đúng actor và hỗ trợ cancellation.',
    theory: [
      'async đánh dấu hàm có thể suspend; await nhường thread trong lúc chờ chứ không block thread.',
      '.task gắn lifetime của Task với view và tự cancel khi view biến mất hoặc task id thay đổi.',
      'UI state nên được cô lập trên @MainActor. Luôn xử lý cancellation và tránh Task.detached nếu không cần tách actor context.',
    ],
    useCases: ['Fetch API', 'Search có debounce', 'Load theo screen lifecycle', 'Chạy song song bằng async let'],
    code: `@MainActor
@Observable
final class ProductsModel {
    var products: [Product] = []
    var isLoading = false

    func load() async {
        isLoading = true
        defer { isLoading = false }

        do {
            products = try await api.fetchProducts()
        } catch is CancellationError {
            // View đã biến mất: không cần báo lỗi.
        } catch {
            // Chuyển error thành UI state phù hợp.
        }
    }
}

struct ProductsView: View {
    @State private var model = ProductsModel()

    var body: some View {
        List(model.products) { Text($0.name) }
            .task { await model.load() }
    }
}`,
  },
  {
    id: 'swiftui-performance',
    title: 'List, Lazy Containers & Performance',
    group: 'SwiftUI',
    summary: 'Giữ identity ổn định, giảm dependency và dùng lazy container khi render collection lớn.',
    theory: [
      'List và LazyVStack chỉ tạo nội dung khi cần; VStack tạo toàn bộ child ngay lập tức.',
      'Không dùng index hoặc UUID() tạo tại body làm identity nếu collection có thể reorder hoặc update.',
      'Đo performance trước khi tối ưu; tách view nhỏ giúp thu hẹp dependency nhưng không cần lạm dụng EquatableView.',
    ],
    useCases: ['Danh sách lớn', 'Infinite scrolling', 'Ảnh bất đồng bộ', 'Row update chính xác'],
    code: `struct Product: Identifiable {
    let id: UUID
    let name: String
}

struct ProductsList: View {
    let products: [Product]

    var body: some View {
        ScrollView {
            LazyVStack {
                ForEach(products) { product in
                    Text(product.name)
                        .frame(maxWidth: .infinity, alignment: .leading)
                }
            }
            .padding()
        }
    }
}`,
  },
]

// Content invariant: không cho phép thêm lesson lý thuyết suông.
for (const lesson of fundamentals) {
  if (!lesson.code.trim()) {
    throw new Error(`Fundamental "${lesson.id}" phải có code sample`)
  }
}
