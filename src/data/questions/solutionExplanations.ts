export type SolutionExplanation = {
  pattern: string
  recognition: string
  mechanics: string[]
  approach: string
  invariant: string
  complexity: string
  pitfalls: string[]
  walkthrough: string[]
  codeNotes: string[]
}

type Strategy = {
  pattern: keyof typeof patternGuides
  approach: string
  invariant: string
  complexity: string
  pitfalls: string[]
}

const patternGuides = {
  scan: {
    name: 'Duyệt tuyến tính',
    recognition: 'Cần tổng hợp một đáp án từ trái sang phải và mỗi phần tử chỉ cần xử lý một lần.',
    mechanics: ['Khởi tạo trạng thái đại diện cho phần dữ liệu đã duyệt.', 'Đọc từng phần tử, cập nhật trạng thái rồi giữ lại đáp án tốt nhất.', 'Sau vòng lặp, trạng thái phải đủ để trả lời mà không cần quét lại dữ liệu.'],
  },
  hash: {
    name: 'Hash Map / Set',
    recognition: 'Bài cần kiểm tra đã gặp, đếm tần suất, ánh xạ hoặc tra cứu nhanh theo khóa.',
    mechanics: ['Biến dữ liệu đã duyệt thành bảng tra cứu thay vì quét lại mảng.', 'Chọn Set nếu chỉ cần biết có hay không; chọn Map nếu cần lưu thêm count, index hoặc quan hệ.', 'Đổi thêm bộ nhớ O(n) để thao tác tra cứu trung bình còn O(1).'],
  },
  twoPointers: {
    name: 'Two Pointers',
    recognition: 'Dữ liệu có thứ tự, cần so sánh hai đầu hoặc duy trì một vùng hợp lệ mà không cần thử mọi cặp.',
    mechanics: ['Đặt hai con trỏ ở hai đầu hoặc tại vị trí đọc/ghi.', 'Sau mỗi lần so sánh, chỉ di chuyển con trỏ chắc chắn không thể tạo đáp án tốt hơn.', 'Chứng minh phần bị bỏ qua không còn cần xét; đó là lý do thuật toán giảm từ hai vòng lặp xuống một lượt.'],
  },
  slidingWindow: {
    name: 'Sliding Window',
    recognition: 'Đề hỏi đoạn con liên tiếp và điều kiện của đoạn có thể cập nhật khi thêm/bớt một phần tử.',
    mechanics: ['right mở rộng cửa sổ và cập nhật dữ liệu của phần tử mới.', 'Khi cửa sổ vi phạm hoặc đã đủ điều kiện, left co lại trong vòng while.', 'Chỉ cập nhật đáp án ở trạng thái phù hợp: cửa sổ hợp lệ dài nhất hoặc cửa sổ đủ điều kiện ngắn nhất.'],
  },
  stack: {
    name: 'Stack / Monotonic Stack',
    recognition: 'Cần ghép cặp theo thứ tự lồng nhau hoặc tìm phần tử gần nhất còn chưa được xử lý.',
    mechanics: ['Stack giữ những phần tử đang chờ một đối tượng tương ứng ở tương lai.', 'Khi phần tử mới giải quyết được phần tử trên đỉnh, pop và tính kết quả ngay.', 'Với monotonic stack, mỗi phần tử chỉ push và pop tối đa một lần nên toàn bộ vẫn O(n).'],
  },
  binarySearch: {
    name: 'Binary Search',
    recognition: 'Không gian tìm kiếm có tính đơn điệu: biết một điểm đúng/sai cho phép loại bỏ chắc chắn một nửa.',
    mechanics: ['Định nghĩa rõ miền [left, right] và ý nghĩa của predicate.', 'Tính mid an toàn, kiểm tra rồi chỉ giữ lại nửa vẫn có thể chứa đáp án.', 'Điều kiện dừng và cách cập nhật biên phải cùng một quy ước để tránh bỏ sót hoặc lặp vô hạn.'],
  },
  dynamicProgramming: {
    name: 'Dynamic Programming',
    recognition: 'Bài có subproblem lặp lại và đáp án lớn có thể xây từ các đáp án nhỏ hơn.',
    mechanics: ['Định nghĩa dp[state] bằng một câu đầy đủ trước khi viết code.', 'Xác định base case, công thức chuyển và thứ tự duyệt để dependency đã được tính.', 'Có thể nén bộ nhớ nếu trạng thái hiện tại chỉ phụ thuộc một vài lớp trước.'],
  },
  backtracking: {
    name: 'Backtracking',
    recognition: 'Cần liệt kê cấu hình hợp lệ và mỗi bước phải thử nhiều lựa chọn rồi quay lui.',
    mechanics: ['Chọn một khả năng, ghi nó vào state hiện tại rồi đi sâu.', 'Nếu vi phạm constraint thì dừng nhánh càng sớm càng tốt.', 'Sau khi recursion trở về phải hoàn tác chính xác để nhánh kế tiếp nhìn thấy state sạch.'],
  },
  graph: {
    name: 'Graph Traversal',
    recognition: 'Dữ liệu mô tả node và quan hệ; cần tìm connected component, cycle hoặc đường đi.',
    mechanics: ['Xây adjacency hoặc suy ra neighbor trực tiếp từ dữ liệu.', 'Đánh dấu visited đúng thời điểm để một node không bị đưa vào frontier nhiều lần.', 'Dùng BFS cho đường ngắn nhất không trọng số; DFS phù hợp cho flood-fill, cycle và duyệt component.'],
  },
  heap: {
    name: 'Heap / Priority Queue',
    recognition: 'Liên tục cần lấy phần tử nhỏ nhất/lớn nhất hiện tại nhưng không cần sắp xếp toàn bộ sau mỗi update.',
    mechanics: ['Heap giữ phần tử ưu tiên ở root với push/pop O(log n).', 'Chỉ giữ k phần tử nếu bài hỏi top k để giảm bộ nhớ và thời gian.', 'Với k nguồn đã sort, heap chỉ cần chứa phần tử đầu chưa dùng của mỗi nguồn.'],
  },
  matrix: {
    name: 'Matrix Boundary / Transformation',
    recognition: 'Bài thao tác theo hàng, cột, lớp hoặc cần biến đổi tọa độ trong ma trận.',
    mechanics: ['Định nghĩa rõ row/column hoặc bốn biên top, bottom, left, right.', 'Mỗi lượt xử lý một lớp hay một hướng rồi thu hẹp miền chưa xử lý.', 'Kiểm tra ma trận chữ nhật, rỗng và điều kiện biên trước khi truy cập.'],
  },
  interval: {
    name: 'Sorting / Intervals',
    recognition: 'Quan hệ chỉ trở nên cục bộ sau khi sắp xếp theo start, end hoặc một khóa có ý nghĩa.',
    mechanics: ['Sắp xếp để phần tử liên quan xuất hiện cạnh nhau.', 'Duyệt một lần và giữ trạng thái của nhóm/interval đang mở.', 'Xử lý rõ trường hợp hai khoảng chạm nhau có được xem là overlap hay không.'],
  },
  intervalDP: {
    name: 'Interval Dynamic Programming',
    recognition: 'Đáp án của một đoạn [left, right] phụ thuộc việc chọn một điểm chia hoặc phần tử cuối cùng bên trong đoạn.',
    mechanics: ['Tính đoạn ngắn trước để mọi đoạn con cần thiết đã có đáp án.', 'Thử từng điểm chia/điểm cuối và kết hợp hai phía độc lập.', 'Viết rõ ý nghĩa dp[left][right] và giá trị ở ngoài biên để công thức không mơ hồ.'],
  },
} as const

const strategies: Record<string, Strategy> = {
  'two-sum': { pattern: 'hash', approach: 'Với mỗi nums[i], tính phần bù target - nums[i]. Nếu phần bù đã có trong Map thì trả hai index; nếu chưa, lưu số hiện tại sau khi kiểm tra để không dùng cùng một phần tử hai lần.', invariant: 'Map chỉ chứa giá trị và index nằm trước i.', complexity: 'O(n) thời gian, O(n) bộ nhớ.', pitfalls: ['Lưu trước khi kiểm tra có thể dùng cùng index hai lần.', 'Trả value thay vì index.'] },
  'reverse-string': { pattern: 'twoPointers', approach: 'Chuyển chuỗi thành mảng ký tự, đổi chỗ ký tự ở left và right rồi đưa hai con trỏ vào giữa.', invariant: 'Phần nằm ngoài [left, right] đã ở đúng vị trí đảo ngược.', complexity: 'O(n) thời gian, O(n) bộ nhớ do string immutable.', pitfalls: ['Quên JavaScript string không sửa trực tiếp được.', 'Chạy tới hết mảng làm swap hai lần.'] },
  'valid-anagram': { pattern: 'hash', approach: 'Đếm từng ký tự của chuỗi đầu, sau đó trừ bằng ký tự của chuỗi thứ hai. Count thiếu hoặc còn dư nghĩa là không phải anagram.', invariant: 'Sau khi xử lý i ký tự của t, Map phản ánh chính xác số ký tự còn có thể dùng từ s.', complexity: 'O(n) thời gian, O(k) bộ nhớ với k ký tự khác nhau.', pitfalls: ['Không kiểm tra độ dài trước.', 'Chỉ kiểm tra ký tự tồn tại mà bỏ qua tần suất.'] },
  'palindrome': { pattern: 'twoPointers', approach: 'So sánh ký tự ở hai đầu và tiến dần vào giữa; chỉ một cặp khác nhau là có thể kết luận false.', invariant: 'Mọi cặp nằm ngoài hai con trỏ đã đối xứng.', complexity: 'O(n) thời gian, O(1) bộ nhớ.', pitfalls: ['Không chuẩn hóa input nếu đề cho phép dấu cách/chữ hoa.', 'So sánh quá nửa chuỗi.'] },
  'fizz-buzz': { pattern: 'scan', approach: 'Duyệt 1..n và kiểm tra bội của 15 trước, sau đó 3, 5 rồi mới dùng số thường.', invariant: 'result đã chứa đáp án đúng cho toàn bộ số từ 1 đến i - 1.', complexity: 'O(n) thời gian, O(n) bộ nhớ output.', pitfalls: ['Kiểm tra 3 trước 15 làm mất FizzBuzz.', 'Trả number thay vì string ở nhánh thường.'] },
  'max-number': { pattern: 'scan', approach: 'Khởi tạo max bằng phần tử đầu rồi cập nhật khi gặp giá trị lớn hơn.', invariant: 'Sau index i, max là giá trị lớn nhất của nums[0..i].', complexity: 'O(n) thời gian, O(1) bộ nhớ.', pitfalls: ['Khởi tạo 0 sẽ sai với mảng toàn số âm.', 'Không xử lý contract mảng rỗng.'] },
  'contains-duplicate': { pattern: 'hash', approach: 'Duyệt mảng; nếu Set đã chứa value thì trả true, nếu chưa thì thêm vào.', invariant: 'Set chứa đúng mọi giá trị đã xuất hiện trước vị trí hiện tại.', complexity: 'O(n) thời gian trung bình, O(n) bộ nhớ.', pitfalls: ['Sort làm thay đổi input nếu dùng sort trực tiếp.', 'Dùng indexOf trong loop thành O(n²).'] },
  'move-zeroes': { pattern: 'twoPointers', approach: 'write chỉ vị trí dành cho số khác 0 tiếp theo. Duyệt read, ghi các số khác 0 theo thứ tự rồi lấp phần còn lại bằng 0.', invariant: 'nums[0..write-1] là toàn bộ số khác 0 đã đọc, đúng thứ tự ban đầu.', complexity: 'O(n) thời gian, O(1) bộ nhớ.', pitfalls: ['Làm thay đổi thứ tự số khác 0.', 'Dùng splice nhiều lần thành O(n²).'] },
  'plus-one': { pattern: 'scan', approach: 'Duyệt chữ số từ phải sang trái. Nếu nhỏ hơn 9 thì tăng và kết thúc; nếu bằng 9 thì đặt 0 và tiếp tục carry. Hết mảng vẫn carry thì thêm 1 đầu mảng.', invariant: 'Các chữ số bên phải i đã chứa kết quả đúng sau khi truyền carry.', complexity: 'O(n) thời gian worst case, O(1) bộ nhớ ngoài output.', pitfalls: ['Chuyển cả mảng thành Number gây overflow.', 'Quên case toàn số 9.'] },
  'binary-search': { pattern: 'binarySearch', approach: 'So nums[mid] với target; nhỏ hơn thì bỏ nửa trái kể cả mid, lớn hơn thì bỏ nửa phải.', invariant: 'Nếu target tồn tại thì luôn nằm trong [left, right].', complexity: 'O(log n) thời gian, O(1) bộ nhớ.', pitfalls: ['Cập nhật left = mid gây vòng lặp.', 'Áp dụng khi mảng chưa sort.'] },
  'first-unique-char': { pattern: 'hash', approach: 'Lượt một đếm frequency; lượt hai đi theo thứ tự gốc và trả index đầu tiên có count bằng 1.', invariant: 'Frequency hoàn chỉnh trước khi quyết định ký tự nào xuất hiện đầu tiên.', complexity: 'O(n) thời gian, O(k) bộ nhớ.', pitfalls: ['Duyệt Map để tìm đầu tiên có thể làm mất ý nghĩa thứ tự tùy cách xây.', 'Chỉ lưu ký tự trùng mà không đếm.'] },
  'valid-parentheses': { pattern: 'stack', approach: 'Push dấu mở. Với dấu đóng, pop dấu mở gần nhất và kiểm tra đúng loại; cuối cùng stack phải rỗng.', invariant: 'Stack chứa các dấu mở chưa được đóng theo đúng thứ tự lồng nhau.', complexity: 'O(n) thời gian, O(n) bộ nhớ.', pitfalls: ['Chỉ đếm số lượng mà bỏ qua thứ tự.', 'Không kiểm tra stack rỗng khi gặp dấu đóng.'] },
  'ransom-note': { pattern: 'hash', approach: 'Đếm số lần mỗi ký tự có trong magazine, sau đó tiêu thụ count cho từng ký tự ransom.', invariant: 'Count là lượng ký tự magazine chưa dùng.', complexity: 'O(m+n) thời gian, O(k) bộ nhớ.', pitfalls: ['Một ký tự magazine bị dùng nhiều lần.', 'Dùng includes lặp lại nhưng không loại ký tự đã dùng.'] },
  'merge-two-sorted-arrays': { pattern: 'twoPointers', approach: 'So phần tử hiện tại của hai mảng, lấy phần nhỏ hơn vào result và tăng đúng con trỏ; khi một mảng hết thì chép phần còn lại.', invariant: 'result luôn sorted và chứa đúng mọi phần tử đã đi qua.', complexity: 'O(m+n) thời gian, O(m+n) bộ nhớ.', pitfalls: ['Quên phần đuôi của mảng chưa hết.', 'Nhét điều kiện hết mảng vào một biểu thức khó đọc.'] },
  'remove-duplicates-sorted': { pattern: 'twoPointers', approach: 'read duyệt mảng sorted; write chỉ vị trí unique tiếp theo. Chỉ ghi khi value khác unique cuối cùng.', invariant: 'Prefix nums[0..write-1] chứa mỗi giá trị đã gặp đúng một lần.', complexity: 'O(n) thời gian, O(1) bộ nhớ.', pitfalls: ['Pattern phụ thuộc mảng đã sort.', 'Trả mảng thay vì độ dài theo contract.'] },
  'best-time-buy-sell': { pattern: 'scan', approach: 'Giữ minPrice trước ngày hiện tại và tính profit nếu bán hôm nay; cập nhật maxProfit sau mỗi ngày.', invariant: 'Trước khi xét bán ở ngày i, minPrice là giá mua thấp nhất trong các ngày 0..i.', complexity: 'O(n) thời gian, O(1) bộ nhớ.', pitfalls: ['Cho phép bán trước khi mua.', 'Tìm min và max độc lập nên sai thứ tự thời gian.'] },
  'intersection-two-arrays-ii': { pattern: 'hash', approach: 'Đếm mảng thứ nhất; duyệt mảng thứ hai, chỉ thêm value nếu count còn dương rồi giảm count.', invariant: 'Count lưu số bản sao chưa được ghép của mảng đầu.', complexity: 'O(m+n) thời gian, O(min(m,n)) bộ nhớ nếu đếm mảng ngắn hơn.', pitfalls: ['Dùng Set làm mất duplicate.', 'Không giảm count sau khi match.'] },
  'isomorphic-strings': { pattern: 'hash', approach: 'Duy trì mapping hai chiều s→t và t→s; mỗi cặp ký tự phải nhất quán ở cả hai hướng.', invariant: 'Mapping của toàn bộ prefix đã xử lý là song ánh.', complexity: 'O(n) thời gian, O(k) bộ nhớ.', pitfalls: ['Chỉ map một chiều nên hai ký tự nguồn có thể cùng trỏ một ký tự đích.', 'Không kiểm tra độ dài.'] },
  'climbing-stairs': { pattern: 'dynamicProgramming', approach: 'Số cách tới bậc i bằng số cách từ i-1 cộng i-2; chỉ cần giữ hai trạng thái gần nhất.', invariant: 'prevOne và prevTwo là đáp án đúng của hai bậc ngay trước bậc đang tính.', complexity: 'O(n) thời gian, O(1) bộ nhớ.', pitfalls: ['Sai base case n=1/n=2.', 'Recursion thuần lặp subproblem theo cấp số nhân.'] },
  'majority-element': { pattern: 'scan', approach: 'Boyer–Moore giữ candidate và balance: cùng candidate thì tăng, khác thì giảm; balance về 0 thì chọn candidate mới.', invariant: 'Các cặp giá trị khác nhau trong prefix có thể triệt tiêu mà không làm mất majority thật.', complexity: 'O(n) thời gian, O(1) bộ nhớ.', pitfalls: ['Thuật toán cần guarantee majority hoặc thêm lượt verify.', 'Hiểu balance là frequency thật.'] },
  '3sum': { pattern: 'twoPointers', approach: 'Sort mảng; cố định i rồi dùng left/right tìm hai số có tổng bằng -nums[i], đồng thời bỏ duplicate ở cả ba vị trí.', invariant: 'Với i cố định, mọi cặp ngoài [left,right] đã được loại bằng tính đơn điệu của mảng sorted.', complexity: 'O(n²) thời gian, O(1) bộ nhớ ngoài output.', pitfalls: ['Không sort nhưng vẫn di chuyển pointer theo tổng.', 'Không skip duplicate nên trả kết quả lặp.'] },
  'longest-substring': { pattern: 'slidingWindow', approach: 'right thêm ký tự; Map lưu index mới nhất. Khi gặp ký tự trùng trong cửa sổ, nhảy left qua vị trí cũ rồi cập nhật độ dài lớn nhất.', invariant: 'Substring s[left..right] không chứa ký tự lặp.', complexity: 'O(n) thời gian, O(k) bộ nhớ.', pitfalls: ['Cho left lùi ngược khi duplicate nằm ngoài window.', 'Nhầm substring liên tiếp với subsequence.'] },
  'group-anagrams': { pattern: 'hash', approach: 'Chuẩn hóa mỗi word thành key bằng ký tự đã sort hoặc vector tần suất; các word cùng key được push vào cùng group.', invariant: 'Hai từ là anagram khi và chỉ khi canonical key bằng nhau.', complexity: 'O(n·k log k) với key sort, O(n·k) với count cố định.', pitfalls: ['Dùng object/array làm Map key nhưng tạo reference khác.', 'Không tính duplicate character.'] },
  'top-k-frequent': { pattern: 'heap', approach: 'Đếm frequency rồi giữ min-heap tối đa k entry; frequency lớn hơn sẽ đẩy entry nhỏ nhất ra.', invariant: 'Sau mỗi entry, heap chứa tối đa k frequency lớn nhất đã xét.', complexity: 'O(n log k) thời gian, O(n) bộ nhớ count.', pitfalls: ['Sort toàn bộ vẫn đúng nhưng O(n log n).', 'Nhầm min-heap với max-heap khi chỉ giữ k phần tử.'] },
  'product-except-self': { pattern: 'scan', approach: 'Lượt trái ghi prefix product trước i vào result; lượt phải nhân thêm suffix product sau i.', invariant: 'Sau lượt đầu result[i] là tích bên trái; khi quét ngược suffix là tích bên phải chưa gồm i.', complexity: 'O(n) thời gian, O(1) extra space ngoài output.', pitfalls: ['Dùng division sai constraint và case zero.', 'Nhân chính nums[i] vào prefix/suffix quá sớm.'] },
  'rotate-image': { pattern: 'matrix', approach: 'Transpose ma trận qua đường chéo chính rồi reverse từng row để được quay 90° theo chiều kim đồng hồ.', invariant: 'Transpose đổi (row,col) thành (col,row); reverse hoàn tất ánh xạ sang (col,n-1-row).', complexity: 'O(n²) thời gian, O(1) bộ nhớ.', pitfalls: ['Swap cả hai nửa làm hoàn tác transpose.', 'Dùng ma trận mới khi đề yêu cầu in-place.'] },
  'set-matrix-zeroes': { pattern: 'matrix', approach: 'Dùng row đầu và column đầu làm marker; hai cờ riêng giữ việc row/column đầu ban đầu có zero hay không.', invariant: 'Sau lượt đánh dấu, marker mô tả chính xác hàng/cột phải zero mà chưa phá dữ liệu cần đọc.', complexity: 'O(mn) thời gian, O(1) bộ nhớ.', pitfalls: ['Zero ngay khi phát hiện làm lan zero giả.', 'Quên xử lý riêng hàng/cột dùng làm marker.'] },
  'spiral-matrix': { pattern: 'matrix', approach: 'Giữ bốn biên và đọc lần lượt top row, right column, bottom row ngược, left column ngược; sau mỗi cạnh thu biên.', invariant: 'Mọi ô ngoài bốn biên đã được thêm đúng một lần.', complexity: 'O(mn) thời gian, O(1) extra space.', pitfalls: ['Không kiểm tra biên trước cạnh dưới/trái nên đọc lặp ở một hàng/cột.', 'Sai hướng vòng lặp ngược.'] },
  'word-break': { pattern: 'dynamicProgramming', approach: 'dp[i] cho biết prefix s[0..i) tách được. Thử vị trí j trước i; nếu dp[j] và s[j..i) có trong dictionary thì dp[i] đúng.', invariant: 'Khi tính dp[i], mọi prefix ngắn hơn đã có đáp án chính xác.', complexity: 'O(n²) phép kiểm tra substring, O(n) bộ nhớ.', pitfalls: ['Greedy chọn word dài nhất không luôn đúng.', 'Quên dp[0]=true cho prefix rỗng.'] },
  'coin-change': { pattern: 'dynamicProgramming', approach: 'dp[x] là số coin ít nhất tạo amount x. Với mỗi x, thử từng coin và lấy 1 + dp[x-coin].', invariant: 'Khi tính amount tăng dần, dp[x-coin] đã là tối ưu.', complexity: 'O(amount·coins) thời gian, O(amount) bộ nhớ.', pitfalls: ['Khởi tạo unreachable bằng 0.', 'Greedy coin lớn nhất không đúng với mọi bộ denomination.'] },
  'combination-sum': { pattern: 'backtracking', approach: 'Ở mỗi level thử candidate từ startIndex; giữ nguyên index khi được dùng lại và tăng index để tránh permutation trùng.', invariant: 'path có tổng target - remaining và index không giảm nên mỗi combination có một thứ tự canonical.', complexity: 'Exponential theo số tổ hợp, O(target/minCandidate) stack.', pitfalls: ['Reset index về 0 tạo permutation lặp.', 'Không dừng khi remaining âm.'] },
  'longest-pal-substring': { pattern: 'twoPointers', approach: 'Xem mỗi vị trí và khe giữa hai vị trí là tâm; mở rộng hai phía khi ký tự bằng nhau rồi giữ đoạn dài nhất.', invariant: 'Trong mỗi lần expand, s[left+1..right-1] đã là palindrome.', complexity: 'O(n²) thời gian, O(1) bộ nhớ.', pitfalls: ['Chỉ xét tâm lẻ mà bỏ palindrome chẵn.', 'Sai chỉ số khi lấy substring với right exclusive.'] },
  'container-most-water': { pattern: 'twoPointers', approach: 'Đặt hai pointer ở hai đầu, tính area rồi bỏ phía thấp hơn vì giữ chiều cao thấp mà giảm width không thể tốt hơn.', invariant: 'Mọi cặp bị loại cùng pointer thấp đã có area không vượt candidate vừa xét.', complexity: 'O(n) thời gian, O(1) bộ nhớ.', pitfalls: ['Di chuyển phía cao hơn làm mất chứng minh.', 'Dùng khoảng cách right-left+1.'] },
  'meeting-rooms-ii': { pattern: 'interval', approach: 'Sort start và end riêng; nếu start kế tiếp trước end sớm nhất thì cần thêm room, ngược lại giải phóng room rồi tiến end.', invariant: 'rooms là số cuộc họp đang hoạt động tại thời điểm start đang xét.', complexity: 'O(n log n) thời gian, O(n) bộ nhớ.', pitfalls: ['Dùng <= khi meeting kết thúc đúng lúc meeting khác bắt đầu.', 'Chỉ merge interval nên không đếm overlap tối đa.'] },
  'kth-largest': { pattern: 'heap', approach: 'Giữ min-heap size k; sau khi duyệt hết, root là phần tử lớn thứ k.', invariant: 'Heap chứa k giá trị lớn nhất của prefix đã đọc.', complexity: 'O(n log k) thời gian, O(k) bộ nhớ.', pitfalls: ['Dùng Set làm mất duplicate.', 'Trả root trước khi heap đủ k.'] },
  'course-schedule': { pattern: 'graph', approach: 'Xây graph prerequisite và indegree; Kahn BFS bắt đầu bằng course indegree 0, giảm indegree neighbor khi hoàn thành.', invariant: 'Queue chỉ chứa course đã thỏa toàn bộ prerequisite; processed đếm node có thể học.', complexity: 'O(V+E) thời gian, O(V+E) bộ nhớ.', pitfalls: ['Đảo chiều edge nhưng tính indegree không tương ứng.', 'Chỉ kiểm tra từng cặp mà không phát hiện cycle dài.'] },
  'number-of-islands': { pattern: 'graph', approach: 'Duyệt từng cell; gặp land chưa thăm thì tăng count và DFS/BFS đánh dấu toàn bộ land nối liền.', invariant: 'Sau flood-fill, component vừa phát hiện sẽ không được đếm lại.', complexity: 'O(rows·cols) thời gian, O(rows·cols) worst-case stack/queue.', pitfalls: ['Tính diagonal là connected khi đề chỉ cho bốn hướng.', 'Đánh dấu visited quá muộn gây lặp.'] },
  'min-window-substring': { pattern: 'slidingWindow', approach: 'Đếm requirement của t; right mở rộng và tăng formed khi một ký tự đạt đủ count. Khi formed đủ, co left để lấy window ngắn nhất.', invariant: 'formed đếm số loại ký tự đã đạt đúng yêu cầu, không phải tổng ký tự match.', complexity: 'O(|s|+|t|) thời gian, O(k) bộ nhớ.', pitfalls: ['Chỉ dùng Set nên sai khi t có duplicate.', 'Cập nhật đáp án khi window chưa đủ.'] },
  'decode-ways': { pattern: 'dynamicProgramming', approach: 'dp[i] đếm cách decode prefix dài i; cộng dp[i-1] nếu một chữ số hợp lệ và dp[i-2] nếu cặp 10..26 hợp lệ.', invariant: 'Mỗi cách decode prefix i kết thúc bằng đúng một chữ số hoặc một cặp chữ số.', complexity: 'O(n) thời gian, O(1) bộ nhớ khi nén.', pitfalls: ['Cho "0" đứng riêng.', 'Chấp nhận cặp bắt đầu bằng 0.'] },
  'trapping-rain-water': { pattern: 'twoPointers', approach: 'Giữ leftMax/rightMax. Phía có max nhỏ hơn quyết định lượng nước chắc chắn tại pointer đó, sau đó di chuyển phía ấy.', invariant: 'Ở phía được xử lý, biên đối diện đủ cao nên nước chỉ phụ thuộc max của chính phía đó.', complexity: 'O(n) thời gian, O(1) bộ nhớ.', pitfalls: ['Dùng height hiện tại thay vì max biên.', 'Cộng lượng nước âm.'] },
  'median-two-arrays': { pattern: 'binarySearch', approach: 'Binary search vị trí partition trên mảng ngắn; partition còn lại được suy ra để nửa trái có đúng số phần tử và maxLeft <= minRight.', invariant: 'Tổng kích thước hai nửa cố định; mỗi lần so biên biết phải dịch partition trái hay phải.', complexity: 'O(log min(m,n)) thời gian, O(1) bộ nhớ.', pitfalls: ['Không search mảng ngắn hơn.', 'Sai sentinel ở partition 0 hoặc cuối mảng.'] },
  'merge-k-sorted-arrays': { pattern: 'heap', approach: 'Push phần tử đầu của mỗi mảng cùng arrayIndex/valueIndex; mỗi lần pop min thì push phần tử kế tiếp cùng mảng.', invariant: 'Heap chứa phần tử chưa dùng nhỏ nhất của mỗi nguồn còn dữ liệu.', complexity: 'O(N log k) thời gian, O(k) bộ nhớ.', pitfalls: ['Push toàn bộ N phần tử làm heap quá lớn.', 'Không lưu nguồn nên không biết phần tử kế tiếp.'] },
  'word-ladder': { pattern: 'graph', approach: 'Mỗi word là node; BFS tạo neighbor bằng thay từng ký tự. Đánh dấu khi enqueue để tầng đầu chạm end là đường ngắn nhất.', invariant: 'Queue xử lý theo số bước tăng dần; word visited đã có đường ngắn nhất.', complexity: 'O(N·L·alphabet) thời gian, O(N) bộ nhớ.', pitfalls: ['DFS không đảm bảo ngắn nhất.', 'Đánh dấu khi dequeue làm enqueue trùng rất nhiều.'] },
  'n-queens': { pattern: 'backtracking', approach: 'Đặt một queen cho từng row; Set lưu column, diagonal row-col và anti-diagonal row+col đang bị chiếm.', invariant: 'Trước row hiện tại, board là cấu hình hợp lệ với đúng một queen mỗi row.', complexity: 'Khoảng O(n!) thời gian, O(n) state ngoài output.', pitfalls: ['Quên hoàn tác cả ba Set.', 'Quét lại board để kiểm tra khiến mỗi lựa chọn đắt hơn.'] },
  'sudoku-solver': { pattern: 'backtracking', approach: 'Chọn ô trống, thử digit không có trong row/column/box; ghi digit, recurse và xóa lại nếu nhánh thất bại.', invariant: 'Mọi ô đã điền tạm thời luôn thỏa ba constraint Sudoku.', complexity: 'Exponential worst case, O(số ô trống) stack.', pitfalls: ['Không hoàn tác board/Set khi backtrack.', 'Tính sai box index.'] },
  'edit-distance': { pattern: 'dynamicProgramming', approach: 'dp[i][j] là số phép đổi prefix a dài i thành prefix b dài j. Ký tự cuối giống thì lấy đường chéo; khác thì 1 + min(delete, insert, replace).', invariant: 'Mỗi transition xử lý thao tác cuối cùng nên các prefix nhỏ hơn đã tối ưu.', complexity: 'O(mn) thời gian, O(mn) bộ nhớ; có thể nén O(n).', pitfalls: ['Nhầm insert/delete indices.', 'Quên base case đổi với chuỗi rỗng.'] },
  'regex-matching': { pattern: 'dynamicProgramming', approach: 'dp[i][j] match prefix. Với *, hoặc bỏ cặp x* bằng dp[i][j-2], hoặc nếu x match ký tự hiện tại thì dùng dp[i-1][j].', invariant: 'Mỗi state mô tả full match của hai prefix, không phải contains match.', complexity: 'O(mn) thời gian, O(mn) bộ nhớ.', pitfalls: ['Hiểu * như wildcard độc lập.', 'Không initialize pattern như a*b* match chuỗi rỗng.'] },
  'sliding-window-maximum': { pattern: 'stack', approach: 'Deque giữ index có value giảm dần. Bỏ index hết window ở đầu và bỏ value nhỏ hơn ở cuối trước khi thêm index mới.', invariant: 'Đầu deque luôn là max của window; mọi index trong deque còn hợp lệ và value giảm dần.', complexity: 'O(n) thời gian, O(k) bộ nhớ.', pitfalls: ['Lưu value nên khó biết đã ra khỏi window.', 'Dùng shift thường xuyên trên Array lớn có thể tốn chi phí.'] },
  'burst-balloons': { pattern: 'intervalDP', approach: 'Đảo góc nhìn: chọn balloon k bị nổ cuối trong đoạn, khi đó hai neighbor là biên cố định; kết hợp tối ưu đoạn trái, reward k và đoạn phải.', invariant: 'dp[left][right] là coin tối đa khi chỉ các balloon bên trong đoạn còn cần xử lý.', complexity: 'O(n³) thời gian, O(n²) bộ nhớ.', pitfalls: ['Chọn balloon nổ đầu khiến neighbor thay đổi khó biểu diễn.', 'Sai padding 1 ở hai biên.'] },
  'largest-rectangle-histogram': { pattern: 'stack', approach: 'Monotonic stack giữ index cột tăng dần. Khi gặp cột thấp hơn, pop cột cao và dùng vị trí hiện tại làm biên phải, đỉnh mới làm biên trái.', invariant: 'Các index trong stack có height tăng và chưa tìm thấy cột thấp hơn bên phải.', complexity: 'O(n) thời gian, O(n) bộ nhớ.', pitfalls: ['Tính width sai sau pop.', 'Không thêm sentinel hoặc flush stack cuối vòng.'] },
  'longest-consecutive': { pattern: 'hash', approach: 'Đưa mọi số vào Set; chỉ bắt đầu đếm từ x khi x-1 không tồn tại, rồi đi lên x+1 cho tới khi chuỗi kết thúc.', invariant: 'Mỗi consecutive run chỉ được mở từ phần tử nhỏ nhất của run.', complexity: 'O(n) thời gian trung bình, O(n) bộ nhớ.', pitfalls: ['Bắt đầu từ mọi số thành O(n²) ở run dài.', 'Sort làm mất mục tiêu O(n).'] },
  'min-window-subsequence': { pattern: 'dynamicProgramming', approach: 'Quét tiến để tìm nơi T khớp hết theo thứ tự, sau đó quét lùi để co về start nhỏ nhất của window đó; tiếp tục từ start kế tiếp.', invariant: 'Forward bảo đảm T là subsequence; backward tìm start sát nhất cho đúng endpoint.', complexity: 'O(|S|·|T|) worst case, O(1) extra space cho cách quét.', pitfalls: ['Nhầm với minimum window substring dùng frequency.', 'Reset vị trí tiếp theo sai làm bỏ window overlap.'] },
  'palindrome-partitioning': { pattern: 'backtracking', approach: 'Từ start, thử mọi end; chỉ chọn substring palindrome rồi recurse từ end, khi tới cuối chuỗi thì copy path vào result.', invariant: 'Mọi phần trong path đều là palindrome và ghép lại đúng prefix đã đi qua.', complexity: 'O(n·2^n) thời gian gồm tạo output, O(n) stack/path.', pitfalls: ['Push path reference mà không copy.', 'Quên pop sau recursion.'] },
}

const detailedWalkthroughs: Record<string, { walkthrough: string[]; codeNotes: string[] }> = {
  'longest-substring': {
    walkthrough: [
      'Với s = "abcabcbb", bắt đầu left = 0, maxLength = 0 và Set rỗng.',
      'right gặp a, b rồi c. Cả ba chưa có trong Set nên cửa sổ lần lượt là "a", "ab", "abc"; maxLength tăng thành 3.',
      'right tiếp tục gặp a. Set đang là {a, b, c}, nên a mới bị trùng với a ở đầu cửa sổ.',
      'Vòng while xóa s[left] là a khỏi Set rồi tăng left từ 0 lên 1. Lúc này a không còn trùng, nên thêm a mới vào Set; cửa sổ trở thành "bca".',
      'Các ký tự b và c tiếp theo được xử lý tương tự. Khi gặp b cuối chuỗi, có lúc phải tiếp tục xóa từ trái cho tới khi b cũ không còn trong cửa sổ.',
      'Không có cửa sổ hợp lệ nào dài hơn 3, nên hàm trả về 3. Đáp án có thể là "abc", "bca" hoặc "cab", nhưng đề chỉ yêu cầu độ dài.',
    ],
    codeNotes: [
      'right luôn tiến sang phải đúng một lần trong vòng for; nó chịu trách nhiệm mở rộng cửa sổ.',
      'while (window.has(s[right])) phải là while, không phải if: ký tự trùng có thể nằm sâu trong cửa sổ nên phải xóa nhiều ký tự từ trái mới loại được bản cũ.',
      'window.delete(s[left]) phải chạy trước left++ để xóa đúng ký tự đang rời cửa sổ.',
      'Chỉ thêm s[right] sau khi vòng while kết thúc, nhờ vậy Set luôn chứa các ký tự duy nhất.',
      'Độ dài cửa sổ inclusive là right - left + 1; thiếu +1 sẽ sai một đơn vị.',
    ],
  },
}

export const solutionExplanations: Record<string, SolutionExplanation> = Object.fromEntries(
  Object.entries(strategies).map(([slug, strategy]) => {
    const pattern = patternGuides[strategy.pattern]

    return [slug, {
      pattern: pattern.name,
      recognition: pattern.recognition,
      mechanics: [...pattern.mechanics],
      approach: strategy.approach,
      invariant: strategy.invariant,
      complexity: strategy.complexity,
      pitfalls: strategy.pitfalls,
      walkthrough: detailedWalkthroughs[slug]?.walkthrough ?? [
        `Bắt đầu từ input ví dụ, khởi tạo toàn bộ state mà pattern ${pattern.name} cần dùng.`,
        pattern.mechanics[0],
        strategy.approach,
        `Sau mỗi bước, tự kiểm tra invariant: ${strategy.invariant}`,
        `Khi không còn dữ liệu cần xử lý, lấy state đáp án và đối chiếu với output của ví dụ.`,
      ],
      codeNotes: detailedWalkthroughs[slug]?.codeNotes ?? [
        `Các biến trạng thái trong code được chọn để duy trì invariant: ${strategy.invariant}`,
        `Mỗi lần lặp phải thực hiện đúng thứ tự cập nhật của ${pattern.name}; đổi thứ tự có thể làm state phản ánh sai phần dữ liệu đã xử lý.`,
        `Điều kiện dừng bảo đảm thuật toán không bỏ sót dữ liệu và đạt ${strategy.complexity}`,
      ],
    }]
  }),
)
