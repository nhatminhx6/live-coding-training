import type { Fundamental } from './fundamentals'

export const advancedReactNativeFundamentals: Fundamental[] = [
  {
    id: 'react-fiber-lanes-scheduling',
    title: 'Fiber, Lanes & Scheduling',
    group: 'React',
    summary: 'Hiểu React biểu diễn work bằng Fiber, gán priority bằng lanes và vì sao render có thể bị ngắt nhưng commit thì không.',
    plainTheory: [
      'Mỗi component đang mounted có một Fiber chứa type, props, state, child/sibling và liên kết với Fiber của lần render trước. Fiber là đơn vị công việc giúp React duyệt cây theo từng phần thay vì phải xử lý toàn bộ trong một lần.',
      'Khi có update, React gán update đó vào một lane thể hiện mức ưu tiên. Thao tác trực tiếp như nhập liệu cần được xử lý trước transition; nhiều update tương thích có thể được batch vào cùng một lượt render.',
      'Render phase tạo cây work-in-progress và có thể bị tạm dừng, làm lại hoặc bỏ. Vì thế component và updater phải pure. Commit phase áp thay đổi lên DOM/native host, chạy layout effects và không được để lộ một cây UI cập nhật dở dang.',
      'Priority không làm thuật toán nặng nhanh hơn. Nó chỉ cho React quyền ưu tiên phản hồi gấp. Nếu một component tự chạy vòng lặp 100 ms trong JavaScript thì scheduler vẫn không thể chen vào giữa function đó.',
      'Khi debug, cần phân biệt “update được schedule chậm” với “render calculation chậm” và “commit native chậm”. Ba lỗi này có cùng triệu chứng lag nhưng cách sửa hoàn toàn khác nhau.',
    ],
    theory: [
      'Fiber là cấu trúc persistent kép current/work-in-progress. beginWork quyết định cập nhật hoặc bailout; completeWork tổng hợp host work và effect flags trước commit.',
      'Lanes cho phép nhiều update priority khác nhau cùng tồn tại. Entanglement giữ các update liên quan không commit thành trạng thái nghiệp vụ nửa vời.',
      'Render có thể interrupt/restart; commit là atomic đối với tree được chọn và gồm mutation, layout cùng passive-effect scheduling.',
      'Scheduler chỉ yield giữa các đơn vị work mà React kiểm soát; synchronous user code dài vẫn block event loop.',
    ],
    useCases: ['Debug concurrent rendering', 'Input bị lag', 'Transition', 'Profiler trace'],
    questions: [
      'Vì sao concurrent rendering không đồng nghĩa React chạy render trên nhiều CPU?',
      'Một transition bị pending lâu có thể do những bottleneck nào?',
      'Tại sao side effect trong render nguy hiểm hơn khi React có thể restart work?',
    ],
    answers: [
      'React vẫn thực thi JavaScript component trên JS thread. Concurrent rendering là khả năng chia, ưu tiên, tạm dừng và bỏ render work trước commit; nó không tự biến function JavaScript thành parallel work.',
      'Có thể do calculation đồng bộ dài không yield, subtree quá lớn, external store update liên tục, Suspense chờ data hoặc commit/native layout đắt. Cần đo render duration, commit duration, JS task và network thay vì quy hết cho scheduler.',
      'Một render chưa commit có thể chạy nhiều lần hoặc bị bỏ. Gọi API, mutate singleton hay ghi storage trong đó sẽ tạo side effect dù UI tương ứng chưa bao giờ commit, dẫn đến duplicate và state bên ngoài sai.',
    ],
    code: `function SearchScreen({ products }) {
  const [query, setQuery] = React.useState('');
  const [visibleQuery, setVisibleQuery] = React.useState('');
  const [isPending, startTransition] = React.useTransition();

  function handleChange(nextQuery) {
    setQuery(nextQuery);

    startTransition(() => {
      setVisibleQuery(nextQuery);
    });
  }

  const filteredProducts = filterProducts(products, visibleQuery);

  return <>
    <SearchInput value={query} onChangeText={handleChange} />
    {isPending ? <LoadingIndicator /> : null}
    <ProductList products={filteredProducts} />
  </>;
}`,
  },
  {
    id: 'react-bailout-referential-identity',
    title: 'Bailout, Referential Identity & Memoization',
    group: 'React',
    summary: 'Tối ưu đúng chỗ bằng cách hiểu React.memo, Object.is, identity của props và chi phí thật của memoization.',
    plainTheory: [
      'React.memo chỉ có cơ hội bỏ qua việc gọi lại component khi props mới được Object.is với props cũ. Object, array và function tạo mới trong render có identity mới dù nội dung giống nhau.',
      'useMemo lưu kết quả tính toán; useCallback lưu identity của function. Chúng không ngăn component hiện tại render và không nên phủ khắp code như một thói quen.',
      'Memo có chi phí giữ bộ nhớ, so sánh dependency/props và làm code khó đọc. Nó đáng dùng khi profiler cho thấy subtree render đắt và props có thể giữ ổn định.',
      'Custom comparator phải so mọi prop ảnh hưởng output, gồm function vì function capture state. Bỏ sót function có thể giữ callback cũ và tạo bug khó thấy.',
      'Thiết kế component tốt thường hiệu quả hơn memo: giữ state gần nơi dùng, nhận children thay vì truyền config lớn và tránh Effect cập nhật state không cần thiết.',
    ],
    theory: ['Bailout giảm render work nhưng update lane trong child hoặc context change vẫn có thể buộc React đi vào subtree.', 'Referential stability là contract; giữ reference của object đã mutate còn nguy hiểm hơn tạo object mới vì consumer có thể bỏ qua update thật.', 'Comparator sâu thường có chi phí tương đương hoặc lớn hơn render và có thể đóng băng UI nếu data structure thay đổi kích thước.'],
    useCases: ['Large subtree', 'Stable list item', 'Expensive calculation', 'Context optimization'],
    questions: [
      'Khi nào React.memo không giúp dù props nhìn có vẻ giống nhau?',
      'Vì sao comparator chỉ so data nhưng bỏ qua callback có thể tạo stale closure?',
      'Anh chứng minh memoization có lợi bằng cách nào?',
    ],
    answers: [
      'Khi parent luôn tạo object/function mới, component tự có state update, context nó đọc đổi, render vốn rất rẻ hoặc comparison cost gần bằng render cost. Memo không chặn update phát sinh bên trong component.',
      'Callback là một prop mang theo lexical state của render tạo ra nó. Nếu comparator tuyên bố hai callback khác nhau là bằng nhau, child có thể tiếp tục gọi function cũ và đọc state/props cũ.',
      'Dùng React Profiler đo actual duration, render count và interaction trước/sau trên production build cùng workload. Chỉ giữ memo khi giảm tổng thời gian/độ trễ mà không tăng memory hoặc complexity quá mức.',
    ],
    code: `const ProductRow = React.memo(function ProductRow({ product, onSelect }) {
  return <Pressable onPress={() => onSelect(product.id)}>
    <Text>{product.name}</Text>
  </Pressable>;
});

function ProductList({ products, navigateToProduct }) {
  const handleSelect = React.useCallback((productId) => {
    navigateToProduct(productId);
  }, [navigateToProduct]);

  return products.map(product => (
    <ProductRow key={product.id} product={product} onSelect={handleSelect} />
  ));
}`,
  },
  {
    id: 'react-closures-event-handlers',
    title: 'Stale Closures, Events & Async State',
    group: 'React',
    summary: 'Kiểm soát snapshot bị capture trong timer, callback, subscription và request bất đồng bộ.',
    plainTheory: [
      'Mỗi lần render tạo một scope mới. Event handler, timer hay Promise callback giữ props/state của đúng render đã tạo nó; đây là closure bình thường chứ không phải React cập nhật biến sai.',
      'Nếu update dựa trên state trước, dùng functional updater. Nếu callback sống lâu cần đọc giá trị mới nhất mà không resubscribe, có thể đồng bộ giá trị vào ref và đọc ref trong callback.',
      'Ref là mutable escape hatch và thay đổi ref không render UI. Không dùng ref thay toàn bộ state; dùng khi dữ liệu không trực tiếp quyết định giao diện hoặc cần bridge giữa lifecycle.',
      'Request async phải gắn với identity của request hoặc abort signal. Chỉ kiểm tra component còn mounted chưa đủ nếu request A và B cùng thuộc một component nhưng trả kết quả ngược thứ tự.',
      'Dependency đúng giúp subscription luôn dùng closure đúng; nếu việc resubscribe quá đắt, tách phần reactive khỏi phần event thay vì nói dối dependency array.',
    ],
    theory: ['Closure capture binding của từng render; React state không được mutate tại chỗ sau setState.', 'Functional updater được React đưa pending state mới nhất trong queue và phải pure.', 'Latest-ref pattern giải quyết freshness nhưng có thể che data-flow lỗi; chỉ dùng ở imperative boundary có chủ đích.'],
    useCases: ['Timer', 'WebSocket', 'Native event', 'Request race'],
    questions: ['Vì sao setInterval thường đọc count mãi bằng 0?', 'Khi nào dùng ref để đọc latest value và khi nào phải resubscribe?', 'Request ID giải quyết race khác AbortController thế nào?'],
    answers: [
      'Effect tạo interval với dependency rỗng nên callback capture count của render đầu. Dùng functional updater nếu chỉ cần tăng; nếu cần đọc latest value cho logic khác thì resubscribe đúng dependency hoặc dùng latest ref có chủ đích.',
      'Dùng ref khi subscription ngoài React cần ổn định nhưng handler phải đọc dữ liệu mới. Phải resubscribe khi chính dependency quyết định resource đang kết nối, ví dụ roomId đổi thì cần rời room cũ và kết nối room mới.',
      'AbortController cố hủy công việc và tiết kiệm tài nguyên nếu transport hỗ trợ. Request ID còn bảo vệ commit kết quả: response chỉ được áp dụng nếu ID vẫn là request hiện hành, kể cả khi cancellation đến muộn hoặc không được hỗ trợ.',
    ],
    code: `function useLatestRequest(loadUser) {
  const requestIdRef = React.useRef(0);
  const [user, setUser] = React.useState(null);

  async function refresh(userId) {
    requestIdRef.current++;
    const requestId = requestIdRef.current;
    const nextUser = await loadUser(userId);

    if (requestId !== requestIdRef.current) {
      return;
    }

    setUser(nextUser);
  }

  return { user, refresh };
}`,
  },
  {
    id: 'react-suspense-errors-recovery',
    title: 'Suspense, Error Boundaries & Recovery',
    group: 'React',
    summary: 'Thiết kế loading, error và retry boundary sao cho một vùng lỗi không kéo sập toàn bộ trải nghiệm.',
    plainTheory: [
      'Suspense xử lý trạng thái một subtree chưa sẵn sàng và hiển thị fallback gần nhất. Nó không tự fetch data; data source hoặc framework phải hỗ trợ cơ chế suspend.',
      'Error Boundary bắt lỗi khi render/lifecycle của descendants nhưng không tự bắt lỗi trong event handler, callback async hoặc chính boundary đó.',
      'Boundary nên theo UX domain: lỗi widget gợi ý không được che checkout. Boundary quá cao làm mất cả screen; quá nhỏ tạo loading/error UI vụn và khó phối hợp.',
      'Retry cần reset cả error state lẫn resource gây lỗi. Đổi key có thể remount boundary/subtree, nhưng phải hiểu state nào sẽ mất trước khi dùng.',
      'Khi refresh dữ liệu cũ, transition giúp giữ nội dung đã có thay vì thay ngay bằng fallback. Loading lần đầu và refresh nền nên có trải nghiệm khác nhau.',
    ],
    theory: ['Suspense boundary phối hợp reveal; rejected thenable/error đi tới Error Boundary phù hợp.', 'Boundary placement là reliability architecture, không chỉ là UI spinner.', 'Recovery phải idempotent, observable và tránh retry storm khi backend đang lỗi.'],
    useCases: ['Route loading', 'Widget isolation', 'Retry flow', 'Partial failure'],
    questions: ['Suspense khác Error Boundary ở contract nào?', 'Đặt boundary cho dashboard nhiều widget thế nào?', 'Tại sao đổi key để retry có thể gây mất dữ liệu người dùng?'],
    answers: [
      'Suspense nhận trạng thái pending từ resource tích hợp và hiển thị fallback; Error Boundary nhận exception khi render tree và hiển thị error UI. Production thường cần cả hai quanh cùng một UX domain.',
      'Giữ shell/navigation sống, mỗi nhóm widget có cùng lifecycle và mức criticality dùng một boundary. Widget không quan trọng lỗi vẫn không che KPI chính; error telemetry phải gắn widget, request và retry count.',
      'Key mới làm React xem subtree là identity mới và reset toàn bộ local state bên dưới. Nếu form draft nằm trong subtree thì retry có thể xóa input; cần đưa draft lên owner bền hơn hoặc reset resource riêng.',
    ],
    code: `function AccountPanel({ accountId }) {
  const [retryKey, setRetryKey] = React.useState(0);

  return <AccountErrorBoundary
    resetKey={retryKey}
    onRetry={() => setRetryKey(value => value + 1)}
  >
    <React.Suspense fallback={<AccountSkeleton />}>
      <AccountDetails key={retryKey} accountId={accountId} />
    </React.Suspense>
  </AccountErrorBoundary>;
}`,
  },
  {
    id: 'rn-event-pipeline-backpressure',
    title: 'Events, Backpressure & Cross-runtime Cost',
    group: 'React Native',
    summary: 'Phân tích đường đi của touch/native event và ngăn event tần suất cao làm nghẽn JavaScript.',
    plainTheory: [
      'Touch bắt đầu ở platform, qua hệ thống input/gesture và có thể phát event về JavaScript. Nếu mỗi pixel scroll đều kéo logic nặng hoặc state update lớn, JS queue tích tụ dù UI thread vẫn đang vẽ.',
      'New Architecture bỏ JSON bridge kiểu cũ nhưng không làm giao tiếp native–JS miễn phí. Chuyển object lớn, gọi sync dày đặc và tạo nhiều allocation vẫn gây latency và GC.',
      'Coalescing giữ event mới nhất khi event cũ không còn giá trị, phù hợp với move/scroll. Throttle giới hạn tần suất; backpressure định nghĩa producer phải làm gì khi consumer xử lý không kịp.',
      'Gesture/animation cần phản hồi từng frame nên giữ phép tính cần thiết trên UI runtime/native path. JavaScript chỉ nhận semantic event như gesture kết thúc hoặc checkpoint cần nghiệp vụ.',
      'Metric cần gồm queue delay, handler duration, event rate và dropped/coalesced count; chỉ đo thời gian function không thấy thời gian event đã chờ trong queue.',
    ],
    theory: ['JSI là interface gọi trực tiếp giữa runtime và C++, không phải bảo đảm zero-copy hay zero-cost.', 'Sync native call giữ caller chờ và có thể tạo priority inversion/deadlock nếu boundary gọi ngược thiếu kỷ luật.', 'High-frequency producer cần batching/coalescing và payload nhỏ, không stream raw samples qua JS nếu UI runtime xử lý được.'],
    useCases: ['Scroll telemetry', 'Gesture', 'Sensor stream', 'Native events'],
    questions: ['Vì sao bỏ bridge vẫn có thể lag khi gửi event native sang JS?', 'Scroll mượt nhưng analytics press đến chậm cho thấy điều gì?', 'Khi nào được dùng synchronous JSI call?'],
    answers: [
      'Vẫn có scheduling, runtime transition, host-object access, conversion/allocation và JavaScript handler work. Event rate cao có thể làm queue dồn; kiến trúc mới giảm một lớp overhead chứ không xóa giới hạn CPU/thread.',
      'UI/gesture path có thể chạy độc lập nhưng JS thread hoặc JS event queue đang nghẽn, nên semantic callback chậm. Profile long JS tasks, render storm và event queue delay thay vì chỉ nhìn UI FPS.',
      'Chỉ cho thao tác nhỏ, xác định, không I/O, không lock dài và thật sự cần kết quả tức thì. API phải có thread-affinity contract và benchmark; phần lớn I/O hoặc work không chắc thời gian nên async.',
    ],
    code: `function ScrollAnalytics() {
  const latestOffsetRef = React.useRef(0);
  const scheduledRef = React.useRef(false);

  function handleScroll(event) {
    latestOffsetRef.current = event.nativeEvent.contentOffset.y;

    if (scheduledRef.current) {
      return;
    }

    scheduledRef.current = true;

    requestAnimationFrame(() => {
      analytics.recordScrollOffset(latestOffsetRef.current);
      scheduledRef.current = false;
    });
  }

  return <ScrollView onScroll={handleScroll} scrollEventThrottle={16} />;
}`,
  },
  {
    id: 'rn-fabric-layout-commit',
    title: 'Fabric Layout, Commit & View Flattening',
    group: 'React Native',
    summary: 'Đi sâu vào Shadow Tree, Yoga layout, commit contention và lý do một React render rẻ vẫn có thể tạo frame chậm.',
    plainTheory: [
      'React tạo element tree; renderer xây Shadow Tree để tính props/layout trước khi mount thay đổi lên native view hierarchy. Yoga giải flex layout trên shadow representation, không phải trực tiếp trên UIView/View.',
      'React render time và native commit/mount time là hai phép đo khác nhau. Một update ít JavaScript nhưng đổi layout của subtree lớn vẫn có thể làm UI thread quá budget.',
      'View flattening có thể bỏ native view chỉ dùng để bố cục, giảm hierarchy và mount cost. Thêm background, opacity, transform, event hoặc accessibility semantics có thể khiến view phải materialize.',
      'Đo layout trong vòng lặp rồi set state có thể tạo feedback loop. Layout-dependent animation nên tránh ping-pong nhiều lần giữa measurement, JavaScript state và native commit.',
      'Khi animation và React commit cùng sửa transform/layout, phải có owner rõ. Hai nguồn cập nhật cạnh tranh có thể gây flicker, lost update hoặc commit retry.',
    ],
    theory: ['Fabric giữ immutable Shadow Tree revisions và commit một revision hợp lệ trước mounting.', 'Layout invalidation có thể lan lên/xuống tree tùy constraint; độ sâu native hierarchy ảnh hưởng traversal và mount.', 'Synchronous layout read/write loop là dấu hiệu architecture, không chỉ là chỗ cần memo.'],
    useCases: ['Layout jank', 'Large screen commit', 'Animation conflict', 'Native hierarchy'],
    questions: ['Vì sao React Profiler nhanh nhưng UI vẫn drop frame?', 'View flattening thay đổi ra sao khi wrapper có accessibility role?', 'Anh điều tra commit contention giữa animation và React update thế nào?'],
    answers: [
      'Profiler chủ yếu cho thấy React render/commit phía React. Chi phí Yoga, mounting, platform layout/draw, image decode hoặc UI-thread animation có thể nằm ngoài phần nổi bật; cần native trace và slow-frame correlation.',
      'Wrapper có semantic/accessibility behavior có thể cần tồn tại như native node để platform xây accessibility tree đúng. Không nên bỏ semantics chỉ để flatten; đo rồi tối ưu cấu trúc khác.',
      'Ghi trace theo timeline của JS update, Shadow Tree commit, mount và animation frame; xác định property có nhiều owner. Gom update, tránh layout property mỗi frame, giữ animation trên UI runtime và tách state nghiệp vụ khỏi giá trị animation liên tục.',
    ],
    code: `function ExpandableCard({ expanded }) {
  const progress = useSharedValue(expanded ? 1 : 0);

  React.useEffect(() => {
    progress.value = withTiming(expanded ? 1 : 0, {
      duration: 220
    });
  }, [expanded, progress]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scaleY: 0.96 + progress.value * 0.04 }],
    opacity: progress.value
  }));

  return <Animated.View style={animatedStyle}>
    <CardContent />
  </Animated.View>;
}`,
  },
  {
    id: 'rn-turbomodule-lifecycle-threading',
    title: 'TurboModule Contracts, Lifecycle & Thread Safety',
    group: 'React Native',
    summary: 'Thiết kế native boundary có schema, ownership, cancellation và thread-affinity rõ thay vì chỉ “gọi được native”.',
    plainTheory: [
      'Codegen tạo contract giữa JavaScript và native từ spec. Contract cần biểu diễn nullability, error và lifecycle rõ; type compile-time không thay validation cho dữ liệu đến từ OS hoặc SDK bên thứ ba.',
      'TurboModule có thể được tạo lazy. Không giả định module tồn tại từ startup hoặc singleton sẽ sống mãi; listener, observer và resource phải được mở/đóng theo lifecycle.',
      'Mỗi API cần nói rõ chạy trên thread nào, callback trả về thread nào và có được gọi đồng thời không. Native mutable state thiếu synchronization sẽ tạo race mà JavaScript test khó tái hiện.',
      'Promise rejection cần error code ổn định để JavaScript quyết định retry, permission flow hay báo lỗi. Chỉ trả một message tự do khiến client phải parse text và contract dễ vỡ.',
      'Operation dài cần cancellation và ownership khi screen unmount hoặc app background. Nếu không, camera/location/network work tiếp tục giữ resource và callback vào consumer đã biến mất.',
    ],
    theory: ['Spec/codegen bảo vệ ABI shape nhưng semantic contract vẫn cần versioning và tests hai phía.', 'HostObject getter có thể chạy thường xuyên; không đặt I/O hoặc lock không giới hạn trong property access.', 'Listener API cần reference count hoặc subscription token để nhiều JS consumers không vô tình dừng resource của nhau.'],
    useCases: ['Native SDK', 'Camera/location', 'Codegen API', 'Shared resource'],
    questions: ['Một TurboModule production-ready cần contract gì ngoài method signature?', 'Tại sao singleton native module vẫn có lifecycle bug?', 'Thiết kế cancellation xuyên JS–native như thế nào?'],
    answers: [
      'Cần nullability, error taxonomy, thread affinity, ordering, concurrency, ownership, cancellation, permission, resource limits, version compatibility, observability và test contract trên cả iOS/Android.',
      'Singleton không tự quản lý listener, Activity/ViewController reference, app background hoặc nhiều JS consumer. Nó có thể leak context, giữ resource quá lâu hoặc remove observer khi một consumer đóng dù consumer khác còn dùng.',
      'Trả operationId hoặc subscription object; cancel phải idempotent và propagate tới SDK/native task. Native chặn callback sau cancel, giải phóng resource, còn JS cleanup luôn gọi cancel và bỏ qua completion đến muộn như lớp bảo vệ cuối.',
    ],
    code: `type NativeOperation = {
  operationId: string;
};

async function loadSecureDocument(documentId) {
  const operation = await SecureDocuments.startLoad(documentId);
  let cancelled = false;

  const promise = SecureDocuments.result(operation.operationId).then(result => {
    if (cancelled) {
      throw new Error('Operation was cancelled');
    }

    return result;
  });

  return {
    promise,
    cancel() {
      cancelled = true;
      SecureDocuments.cancel(operation.operationId);
    }
  };
}`,
  },
  {
    id: 'rn-startup-bundle-hermes',
    title: 'Startup, Bundles & Hermes',
    group: 'Performance',
    summary: 'Tách native launch, JS runtime, bundle evaluation và first meaningful paint để tối ưu startup bằng dữ liệu.',
    plainTheory: [
      'Startup không phải một con số duy nhất. Cold start gồm process launch, native initialization, JavaScript runtime/bundle load, React render, native mount và thời điểm nội dung có ích đầu tiên xuất hiện.',
      'Warm start và resume dùng đường khác cold start, vì process/runtime có thể còn sống. Trộn chúng vào average làm mất regression chỉ xảy ra khi mở app lần đầu.',
      'Hermes dùng bytecode để giảm parse/compile lúc chạy, nhưng module top-level vẫn có thể thực thi nặng. Import một module không có nghĩa chỉ trả chi phí khi gọi function nếu module làm work ngay lúc evaluate.',
      'Lazy loading chỉ có ích khi hoãn được code và work khỏi critical path. Tách bundle nhưng ngay lập tức preload mọi chunk vẫn không cải thiện first meaningful paint.',
      'Startup dashboard phải chia theo app version, OS, device tier và cold/warm. p95/p99 phản ánh nhóm người dùng chậm mà median không nhìn thấy.',
    ],
    theory: ['TTI cần định nghĩa theo interaction thật; splash biến mất chưa chắc screen đã usable.', 'Top-level side effect làm module evaluation khó hoãn và khó đo.', 'Startup optimization phải có performance mark xuyên native và JS với cùng clock/timeline khi có thể.'],
    useCases: ['Cold start', 'Bundle split', 'Hermes profiling', 'Low-end Android'],
    questions: ['Anh chia startup timeline thành những mốc nào?', 'Bundle nhỏ hơn nhưng startup không nhanh hơn vì sao?', 'Lazy screen có thể làm UX xấu hơn trong trường hợp nào?'],
    answers: [
      'Process/native start, root view creation, runtime ready, bundle load/evaluate, first React render, first native commit, first contentful/meaningful paint và interaction ready. Gắn trace ID để nối native spans với JS marks.',
      'Bottleneck có thể là native SDK init, synchronous storage, module top-level work, React render, image/font load hoặc native layout. Kích thước transfer chỉ là một phần; phải profile CPU/evaluation và critical path.',
      'Nếu user đi ngay tới screen nhưng chunk/resource chưa preload, họ nhận loading trễ sau thao tác. Cần preload theo xác suất/idle/network, giữ fallback ổn định và không lazy phần luôn cần cho first journey.',
    ],
    code: `function AppRoot() {
  React.useEffect(() => {
    performance.mark('react-root-committed');

    requestAnimationFrame(() => {
      performance.mark('first-frame-after-root');
      performance.measure(
        'root-commit-to-frame',
        'react-root-committed',
        'first-frame-after-root'
      );
    });
  }, []);

  return <RootNavigator />;
}`,
  },
  {
    id: 'rn-memory-leaks-gc',
    title: 'Memory, Retention Paths & GC Pauses',
    group: 'Performance',
    summary: 'Tìm retention path xuyên JavaScript/native, phân biệt leak với peak memory và xử lý GC churn.',
    plainTheory: [
      'Leak là object không còn cần nhưng vẫn reachable từ một root như global, listener, timer, cache hoặc native reference. Memory cao tạm thời khi mở ảnh lớn chưa chắc là leak nếu nó giảm sau khi đóng và GC.',
      'Closure có thể giữ cả object graph dù callback chỉ dùng một field. Listener quên unsubscribe thường giữ screen, props, image metadata và store subscription lâu hơn dự kiến.',
      'Native image/bitmap memory không phải lúc nào hiện đầy đủ trong JavaScript heap snapshot. Phải xem cả JS heap, native heap, graphics và process RSS.',
      'Allocation churn tạo nhiều object ngắn hạn khiến GC chạy thường xuyên và gây frame spike dù heap cuối cùng không tăng. Ví dụ map/filter/config object mới trong handler chạy mỗi frame.',
      'Cache phải có size/TTL/eviction và phản ứng với memory pressure. Map không giới hạn trong singleton là leak theo chính sách dù mọi entry vẫn technically reachable.',
    ],
    theory: ['Dominator tree và retaining path trả lời ai đang giữ object, không chỉ object nào lớn.', 'Cross-runtime reference cycle cần lifecycle explicit vì GC ở hai runtime không nhất thiết hiểu toàn bộ ownership graph.', 'So heap snapshot ở cùng checkpoint sau GC; snapshot khác phase dễ tạo kết luận sai.'],
    useCases: ['Long session', 'Image-heavy feed', 'Navigation leak', 'OOM'],
    questions: ['Phân biệt leak với legitimate cache thế nào?', 'JS heap ổn nhưng app vẫn OOM cần kiểm tra gì?', 'Vì sao unsubscribe trong cleanup vẫn có thể chưa đủ?'],
    answers: [
      'Cache có owner, budget, eviction và hit-rate value; sau memory pressure hoặc hết TTL nó giảm. Leak tăng qua mỗi chu kỳ mở/đóng cùng flow và có retaining path không còn giá trị nghiệp vụ.',
      'Kiểm tra native heap, bitmap/graphics, mapped bundle, WebView/video, thread stack và OS memory report. Correlate theo screen/action; JS snapshot không nhìn thấy toàn bộ allocation do platform/SDK giữ.',
      'Callback đã được copy vào native pending work hoặc emitter khác, cleanup dùng sai function identity, subscription được tạo nhiều lần hoặc request completion vẫn capture screen. Cần cancellation idempotent và contract ownership xuyên boundary.',
    ],
    code: `function useBoundedImageCache(maxEntries) {
  const cacheRef = React.useRef(new Map());

  const put = React.useCallback((key, image) => {
    const cache = cacheRef.current;

    if (cache.has(key)) {
      cache.delete(key);
    }

    cache.set(key, image);

    while (cache.size > maxEntries) {
      const oldestKey = cache.keys().next().value;
      cache.delete(oldestKey);
    }
  }, [maxEntries]);

  React.useEffect(() => {
    return () => cacheRef.current.clear();
  }, []);

  return { cache: cacheRef.current, put };
}`,
  },
  {
    id: 'rn-security-mobile-boundaries',
    title: 'Mobile Security & Trust Boundaries',
    group: 'Architecture',
    summary: 'Thiết kế auth, deep link, storage và native boundary dựa trên threat model thay vì tin dữ liệu từ device.',
    plainTheory: [
      'Mọi dữ liệu trên client đều có thể bị sửa: AsyncStorage, deep-link params, persisted Redux state và response bị proxy. Server phải thực thi authorization; ẩn nút trên UI không phải security control.',
      'Token nhạy cảm cần storage phù hợp với platform và threat model. Secure storage giảm rủi ro đọc trực tiếp nhưng không biến device compromised thành môi trường đáng tin.',
      'Deep link là input bên ngoài. Phải allowlist route/action, validate type/range và không cho URL tự quyết định chuyển tiền, đổi email hoặc bypass bước xác nhận.',
      'Log, analytics, crash breadcrumb và screenshot có thể làm lộ token/PII. Redaction phải ở boundary chung thay vì hy vọng từng developer nhớ xóa field.',
      'Native module mở thêm attack surface: validate input ở native, giới hạn capability và không expose generic file/shell/network primitive nếu JavaScript chỉ cần một nghiệp vụ hẹp.',
    ],
    theory: ['Threat model xác định asset, actor, entry point và impact trước khi chọn control.', 'Authentication chứng minh identity; authorization kiểm tra quyền trên từng resource/action.', 'Certificate pinning có operational trade-off và không thay server auth, input validation hay secure storage.'],
    useCases: ['Authentication', 'Deep links', 'Sensitive storage', 'Native SDK'],
    questions: ['Tại sao JWT trong secure storage vẫn không đủ bảo vệ tài khoản?', 'Deep link thanh toán phải có những lớp kiểm tra nào?', 'Anh review một native module mới theo least privilege thế nào?'],
    answers: [
      'Token có thể bị lạm dụng khi session policy yếu, device compromised, log lộ, backend thiếu authorization hoặc refresh/revocation sai. Cần short-lived access token, rotation/revocation, server-side permission và anomaly controls theo rủi ro.',
      'Parse bằng allowlist, validate schema và resource ID, yêu cầu authenticated session, server authorization, hiển thị confirmation từ server truth và idempotency. URL chỉ mở flow, không phải bằng chứng cho phép giao dịch.',
      'Liệt kê đúng capability feature cần, expose API nghiệp vụ nhỏ, validate mọi input/output, quy định permission/thread/lifecycle, không trả secret thừa, audit dependency và thêm abuse/failure tests cùng telemetry không chứa PII.',
    ],
    code: `const allowedRoutes = new Set(['product', 'order']);

function handleDeepLink(url) {
  const parsed = new URL(url);
  const route = parsed.hostname;
  const resourceId = parsed.searchParams.get('id');

  if (!allowedRoutes.has(route)) {
    return { accepted: false, reason: 'unsupported-route' };
  }

  if (!resourceId || !/^[a-zA-Z0-9-]{1,64}$/.test(resourceId)) {
    return { accepted: false, reason: 'invalid-id' };
  }

  return {
    accepted: true,
    destination: { route, resourceId }
  };
}`,
  },
  {
    id: 'react-usestate-interview',
    title: 'useState: Interview Deep Dive',
    group: 'React',
    summary: 'Nắm state snapshot, lazy initialization, batching, functional updater và cách React quyết định có render lại hay không.',
    plainTheory: [
      'useState trả về state của lần render hiện tại và một hàm yêu cầu React render lại. Gọi setter không sửa ngay biến đang cầm trong event handler; biến đó vẫn là snapshot cũ cho đến lần render tiếp theo.',
      'Khi state mới được tính từ state trước, dùng functional updater như setCount(value => value + 1). React đưa lần lượt pending state mới nhất qua hàng đợi updater, nên nhiều update trong cùng event không ghi đè nhau.',
      'Nếu giá trị ban đầu tốn công tính, truyền function vào useState: useState(createInitialState). React chỉ dùng function đó trong lần khởi tạo thay vì gọi lại mỗi render.',
      'React dùng Object.is để so state mới với state hiện tại. Mutate object rồi truyền lại chính reference cũ có thể khiến React bỏ qua update; phải tạo object hoặc array mới cho phần đã thay đổi.',
      'State được gắn với identity của component tại một vị trí trong tree. Đổi key hoặc type sẽ tạo identity mới và reset state; đây có thể là chủ đích khi reset form.',
      'Không lưu derived state nếu có thể tính trực tiếp từ props và state. Lưu cả firstName, lastName và fullName tạo nhiều nguồn sự thật và buộc phải đồng bộ bằng Effect.',
    ],
    theory: [
      'Setter enqueue update vào Fiber update queue; automatic batching có thể gom nhiều update trước một render.',
      'Updater function phải pure vì React có thể gọi lại trong development để phát hiện impurity.',
      'State object không được merge tự động như class setState; setter thay toàn bộ giá trị của hook đó.',
    ],
    useCases: ['Local UI state', 'Form input', 'Toggle/modal', 'State interview questions'],
    questions: [
      'Gọi setCount(count + 1) ba lần khác gì gọi setCount(value => value + 1) ba lần?',
      'useState(expensiveFunction()) khác useState(expensiveFunction) thế nào?',
      'Tại sao sửa user.name rồi gọi setUser(user) có thể không render lại?',
      'Khi nào state bị reset dù component nhìn vẫn nằm cùng một chỗ?',
      'Có nên lưu filteredItems bằng useState rồi cập nhật trong useEffect không?',
    ],
    answers: [
      'Ba lệnh setCount(count + 1) cùng đọc một snapshot count nên đều yêu cầu cùng một giá trị. Ba functional updater được chạy tuần tự trên pending state, vì vậy kết quả tăng đủ ba.',
      'Cách có dấu ngoặc gọi expensiveFunction ở mọi render rồi chỉ bỏ kết quả sau lần đầu. Truyền function reference là lazy initializer, React chỉ dùng nó khi khởi tạo state của component identity đó.',
      'Object bị mutate nhưng reference không đổi. React so bằng Object.is và có thể bailout. Hãy tạo object mới: setUser(current => ({ ...current, name: nextName })).',
      'State gắn với type, vị trí và key. Đổi type, thay key, chuyển component sang vị trí khác hoặc unmount rồi mount lại đều tạo identity mới và reset state.',
      'Thường không. filteredItems là dữ liệu dẫn xuất nên tính trong render; chỉ dùng useMemo nếu phép lọc thật sự đắt. State cộng Effect tạo thêm render và nguy cơ dữ liệu lệch.',
    ],
    code: `function QuantityPicker({ initialQuantity = 1 }) {
  const [quantity, setQuantity] = React.useState(() => {
    return Math.max(1, initialQuantity);
  });

  function increaseThreeTimes() {
    setQuantity(value => value + 1);
    setQuantity(value => value + 1);
    setQuantity(value => value + 1);
  }

  function decrease() {
    setQuantity(value => Math.max(1, value - 1));
  }

  return <View>
    <Text>{quantity}</Text>
    <Button title="Giảm" onPress={decrease} />
    <Button title="Tăng 3" onPress={increaseThreeTimes} />
  </View>;
}`,
  },
  {
    id: 'react-useref-interview',
    title: 'useRef: Values, DOM/Native Handles & Previous State',
    group: 'React',
    summary: 'Phân biệt ref với state, hiểu lifecycle của ref và dùng ref đúng tại imperative boundary.',
    plainTheory: [
      'useRef trả cùng một object qua các lần render. Anh có thể thay đổi ref.current nhưng React không render lại vì ref không thuộc render output contract như state.',
      'Dùng ref cho dữ liệu cần sống qua render nhưng không trực tiếp quyết định UI: timer ID, request ID, previous value, cache nhỏ hoặc cờ chống callback đến trễ.',
      'Ref còn giữ handle đến DOM/native component để focus, scroll, measure hoặc gọi imperative API. Chỉ gọi khi node đã commit, thường trong event handler hoặc Effect.',
      'Không đọc hoặc ghi ref.current trong render để quyết định JSX, ngoại trừ khởi tạo ổn định có điều kiện chặt. Concurrent rendering có thể làm thao tác mutable trong render tạo kết quả không nhất quán.',
      'forwardRef chuyển ref qua component wrapper; useImperativeHandle giới hạn API mà parent được gọi. API nhỏ như focus() tốt hơn expose toàn bộ child internals.',
      'useRef không thay useState. Nếu thay đổi phải hiện ra màn hình thì dùng state; nếu chỉ cần ghi nhớ giá trị cho logic imperative thì ref phù hợp hơn.',
    ],
    theory: [
      'Ref object giữ identity ổn định và mutation không schedule update.',
      'React gán host instance vào ref trong commit và đặt lại null khi unmount.',
      'Imperative handle cần dependency đúng để không expose method capture props/state cũ.',
    ],
    useCases: ['Focus input', 'Timer ID', 'Latest request', 'Previous value'],
    questions: [
      'useRef và useState khác nhau quan trọng nhất ở điểm nào?',
      'Thay ref.current có làm component render lại không?',
      'Tại sao không nên dùng let timerId ở thân component?',
      'Khi nào dùng forwardRef và useImperativeHandle?',
      'Có nên dùng ref để tránh dependency của useEffect không?',
    ],
    answers: [
      'Cả hai giữ dữ liệu qua render, nhưng setState schedule render và mỗi render nhận snapshot; ref là object mutable ổn định, thay current không render lại. Dữ liệu ảnh hưởng UI phải là state.',
      'Không. React không theo dõi mutation của current. UI chỉ vô tình thấy giá trị mới khi một nguyên nhân khác làm component render lại, nên dùng ref cho dữ liệu hiển thị là bug design.',
      'Mỗi render chạy lại component và tạo biến local mới, nên timerId cũ bị mất khỏi scope mới. Ref giữ ID ổn định để callback hoặc cleanup của các render sau vẫn clear đúng timer.',
      'Dùng khi wrapper cần cho parent truy cập một imperative capability như focus hoặc scroll. useImperativeHandle nên expose API tối thiểu, tránh cho parent phụ thuộc cấu trúc DOM/native bên trong.',
      'Không dùng ref để che dependency reactive. Ref chỉ hợp lý khi callback cần latest value nhưng resource subscription không nên khởi động lại; nếu dependency xác định resource như roomId thì Effect phải phụ thuộc nó.',
    ],
    code: `const SearchInput = React.forwardRef(function SearchInput(props, ref) {
  const inputRef = React.useRef(null);

  React.useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current?.focus();
    },
    clear() {
      inputRef.current?.clear();
    }
  }), []);

  return <TextInput ref={inputRef} {...props} />;
});

function SearchScreen() {
  const searchInputRef = React.useRef(null);

  return <>
    <SearchInput ref={searchInputRef} placeholder="Tìm kiếm" />
    <Button title="Focus" onPress={() => searchInputRef.current?.focus()} />
  </>;
}`,
  },
  {
    id: 'react-effect-interview',
    title: 'useEffect: Dependencies, Cleanup & Strict Mode',
    group: 'React',
    summary: 'Trả lời chính xác các câu hỏi phỏng vấn về thời điểm chạy Effect, cleanup, dependency và race condition.',
    plainTheory: [
      'Không có dependency array: Effect chạy sau mỗi commit. Array rỗng: setup sau mount và cleanup khi unmount, nhưng development Strict Mode có thêm một chu kỳ setup–cleanup–setup để kiểm tra code.',
      'Có dependency: React dùng Object.is so từng dependency; khi một giá trị đổi, cleanup với closure cũ chạy trước rồi setup mới chạy với closure mới.',
      'Effect dành cho đồng bộ với hệ thống ngoài. Tính tổng, lọc list, format text hoặc xử lý một cú click không cần Effect.',
      'Dependency array không phải danh sách tùy chọn để điều khiển lịch chạy. Mọi props, state và function khai báo trong component mà Effect đọc đều là reactive values cần được xử lý đúng.',
      'Cleanup không chỉ chạy khi unmount; nó chạy trước lần setup tiếp theo. Nhờ vậy listener của room A được tháo trước khi listener room B được gắn.',
      'Async Effect callback không được trực tiếp khai báo async vì Effect cần nhận undefined hoặc cleanup function, không phải Promise. Tạo async function bên trong rồi gọi nó.',
    ],
    theory: [
      'Passive effects chạy sau commit; browser paint timing có thể khác theo loại interaction và renderer.',
      'Strict Mode stress-test tính đối xứng và idempotency, không phải production chạy hai Effect.',
      'Race prevention cần cancellation hoặc request identity; cleanup mounted flag chỉ giải quyết một phần.',
    ],
    useCases: ['Subscription', 'Fetch lifecycle', 'Timer cleanup', 'Interview output questions'],
    questions: [
      'useEffect chạy vào thời điểm nào và cleanup chạy khi nào?',
      'Vì sao Effect chạy hai lần trong development?',
      'Tại sao không viết useEffect(async () => {...})?',
      'Object trong dependency khiến Effect chạy liên tục thì sửa thế nào?',
      'Khi nào hoàn toàn không cần useEffect?',
    ],
    answers: [
      'Effect chạy sau component commit. Cleanup chạy trước setup kế tiếp khi dependency đổi và khi unmount; development Strict Mode còn chạy một cycle kiểm tra thêm ngay sau mount.',
      'Strict Mode cố ý setup–cleanup–setup để phát hiện listener, connection, timer hoặc mutation thiếu cleanup. Sửa bằng cleanup đối xứng và setup idempotent, không dùng ref để chặn lần chạy kiểm tra.',
      'Async function luôn trả Promise nhưng React chỉ chấp nhận cleanup function hoặc undefined. Khai báo async function bên trong Effect, gọi nó và trả cleanup đồng bộ để cancel/ignore công việc.',
      'Tạo object bên trong Effect nếu chỉ Effect cần nó, đưa primitive thực sự cần vào dependency hoặc memo hóa object khi nó là contract chia sẻ. Không xóa dependency để né rerun.',
      'Không cần Effect khi dữ liệu có thể derive trong render, logic xảy ra do event cụ thể, reset state bằng key, hoặc có thể khởi tạo bằng lazy initializer. Effect chỉ cần để synchronize external system.',
    ],
    code: `function useChatRoom(roomId) {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    const connection = createConnection(roomId);

    function handleMessage(message) {
      setMessages(current => [...current, message]);
    }

    connection.on('message', handleMessage);
    connection.connect();

    return () => {
      connection.off('message', handleMessage);
      connection.disconnect();
    };
  }, [roomId]);

  return messages;
}`,
  },
  {
    id: 'react-memo-hooks-interview',
    title: 'useMemo, useCallback & React.memo',
    group: 'React',
    summary: 'Phân biệt ba công cụ thường bị nhầm và biết khi nào memoization làm app chậm hoặc sai hơn.',
    plainTheory: [
      'useMemo cache một giá trị tính toán giữa các render; useCallback cache function reference; React.memo cho component có thể bỏ qua render khi props không đổi theo Object.is.',
      'useCallback(fn, deps) gần tương đương useMemo(() => fn, deps). Nó hữu ích khi function được truyền cho child đã memo hoặc là dependency của hook khác cần identity ổn định.',
      'React.memo không ngăn component render khi state nội bộ hoặc Context nó đọc thay đổi. Nó chỉ xử lý props từ parent.',
      'useMemo là performance optimization, không phải correctness guarantee. Code phải vẫn đúng nếu React bỏ cache; không dùng useMemo như nơi chạy side effect.',
      'Memo hóa mọi thứ làm tăng comparison, retained memory và dependency maintenance. Primitive calculation rẻ hoặc child chưa memo thường không hưởng lợi từ useCallback.',
      'Tối ưu đúng bắt đầu từ profiler: xác định interaction chậm, component render nhiều và calculation nào chiếm thời gian rồi mới chọn memo, virtualization hoặc thay state boundary.',
    ],
    theory: [
      'Memo cache theo dependency identity và có thể bị invalidated vì các lý do runtime/development.',
      'Stable callback vẫn có thể capture stale values nếu dependency thiếu.',
      'Custom equality của React.memo phải so mọi input ảnh hưởng output và không được chậm hơn render.',
    ],
    useCases: ['Expensive calculation', 'Memoized child', 'Stable hook dependency', 'Profiler optimization'],
    questions: [
      'useMemo và useCallback khác nhau thế nào?',
      'React.memo có chặn render do Context thay đổi không?',
      'Khi nào useCallback hoàn toàn vô ích?',
      'Có được dùng useMemo để gọi API không?',
      'Dependency thiếu có thể biến optimization thành bug ra sao?',
    ],
    answers: [
      'useMemo trả lại giá trị do callback tính; useCallback trả lại chính function. Cả hai giữ identity cho tới khi dependency đổi và đều chỉ nên dùng khi có lý do performance/identity rõ.',
      'Không. Consumer đọc Context sẽ render khi provider value liên quan đổi dù props của nó không đổi và component được bọc React.memo.',
      'Khi callback không truyền vào memoized child, không làm dependency của hook khác hoặc chi phí tạo function không đáng kể. Child bình thường vẫn render theo parent nên stable callback không giúp.',
      'Không. useMemo chạy trong render và phải pure; React có thể gọi lại hoặc bỏ cache. API call thuộc event handler, data layer hoặc Effect tùy nguyên nhân.',
      'Function/value memoized giữ closure cũ và đọc props/state cũ. UI có thể trông đúng nhưng callback gửi dữ liệu cũ; exhaustive-deps giúp phát hiện loại lỗi này.',
    ],
    code: `const ResultList = React.memo(function ResultList({ items, onSelect }) {
  return items.map(item => (
    <ResultRow key={item.id} item={item} onSelect={onSelect} />
  ));
});

function SearchResults({ items, query, navigate }) {
  const visibleItems = React.useMemo(() => {
    return items.filter(item => item.name.includes(query));
  }, [items, query]);

  const handleSelect = React.useCallback((itemId) => {
    navigate('Detail', { itemId });
  }, [navigate]);

  return <ResultList items={visibleItems} onSelect={handleSelect} />;
}`,
  },
  {
    id: 'react-reducer-context-custom-hooks-interview',
    title: 'useReducer, Context & Custom Hooks',
    group: 'React',
    summary: 'Thiết kế state transition phức tạp, Context boundary và custom hook có contract dễ test.',
    plainTheory: [
      'useReducer phù hợp khi nhiều field đổi cùng nhau, transition có tên nghiệp vụ hoặc next state phụ thuộc event hiện tại. Reducer nhận state và action rồi trả state mới; nó phải pure.',
      'Reducer không tự làm app nhanh hơn useState. Giá trị chính là gom transition và invariant vào một nơi, giúp test bằng input/output mà không cần render component.',
      'Context giải quyết truyền dữ liệu xuyên nhiều tầng, không phải state-management hoàn chỉnh. Khi provider value đổi, consumer đọc context có thể render lại.',
      'Tách StateContext và DispatchContext giúp component chỉ dispatch action không phải đọc state. Dispatch của useReducer có identity ổn định nên provider action ít thay đổi hơn.',
      'Custom hook tái sử dụng stateful logic, không chia sẻ cùng state instance. Hai component gọi cùng một hook vẫn có state riêng trừ khi hook kết nối external store/context chung.',
      'Rules of Hooks yêu cầu gọi hook ở top level và cùng thứ tự giữa các render. Không gọi trong condition, loop, callback thường hoặc sau early return thay đổi theo render.',
    ],
    theory: [
      'Reducer action là domain event, nên mô tả điều đã xảy ra thay vì setter chung chung.',
      'Context boundary nên chia theo domain và update frequency; god context khuếch đại rerender và coupling.',
      'Custom hook contract cần ownership, cleanup, loading/error semantics và stable public surface.',
    ],
    useCases: ['Complex form', 'State machine', 'Shared feature state', 'Reusable behavior'],
    questions: [
      'Khi nào chọn useReducer thay useState?',
      'Context có làm tránh prop drilling mà không gây render lại không?',
      'Hai component gọi cùng custom hook có dùng chung state không?',
      'Vì sao không được gọi Hook trong if?',
      'Reducer có được gọi API hoặc sửa state cũ trực tiếp không?',
    ],
    answers: [
      'Chọn reducer khi transition phức tạp, nhiều field phải giữ invariant, nhiều event cùng tác động state hoặc cần test transition độc lập. State đơn giản, độc lập vẫn rõ hơn với useState.',
      'Context tránh truyền prop qua component không dùng nó, nhưng consumer vẫn nhận update khi provider value đổi. Chia context, ổn định value, đặt provider gần domain và dùng external store selector nếu update rất rộng/tần suất cao.',
      'Không. Custom hook chia sẻ code, mỗi invocation nhận hook state riêng. Muốn cùng state phải đọc chung Context, external store hoặc resource bên ngoài.',
      'React ánh xạ hook state theo thứ tự gọi. Condition thay đổi thứ tự hoặc số hook giữa hai render làm React gắn state của hook này vào vị trí hook khác.',
      'Không. Reducer phải pure, không mutate state và không side effect. API chạy ở event/effect/data layer; kết quả được dispatch thành action mới để reducer cập nhật state bất biến.',
    ],
    code: `function checkoutReducer(state, action) {
  switch (action.type) {
    case 'submissionStarted':
      return { ...state, status: 'submitting', error: null };

    case 'submissionSucceeded':
      return { ...state, status: 'success', orderId: action.orderId };

    case 'submissionFailed':
      return { ...state, status: 'error', error: action.error };

    default:
      return state;
  }
}

function useCheckout() {
  const [state, dispatch] = React.useReducer(checkoutReducer, {
    status: 'idle',
    orderId: null,
    error: null
  });

  return { state, dispatch };
}`,
  },
]
