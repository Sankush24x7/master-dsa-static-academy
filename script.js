const STORAGE_KEYS = {
  theme: "dsa_theme",
  completed: "dsa_completed",
  bookmarks: "dsa_bookmarks",
  current: "dsa_current_chapter",
  notes: "dsa_notes",
  streak: "dsa_streak",
  goal: "dsa_goal",
  phases: "dsa_phase_state",
  trackMode: "dsa_track_mode"
};

const roadmapPhasesByTrack = {
  fresher: [
    {
      id: "Beginner",
      duration: "4 Weeks",
      topics: "Complexity basics, arrays, strings, recursion, searching, sorting",
      goal: "Build mental models for brute force vs optimized solutions",
      practice: "80 foundational problems"
    },
    {
      id: "Intermediate",
      duration: "4 Weeks",
      topics: "Linked structures, trees, heaps, greedy, backtracking",
      goal: "Design data structures and reason with invariants",
      practice: "90 mixed-pattern problems"
    },
    {
      id: "Advanced",
      duration: "4 Weeks",
      topics: "Graphs, dynamic programming, union-find, segment tree",
      goal: "Handle high-constraint optimization and graph modeling",
      practice: "100 advanced interview problems"
    },
    {
      id: "Interview Mastery",
      duration: "4 Weeks",
      topics: "Pattern drilling, mock rounds, OA strategy, resume positioning",
      goal: "Execute under pressure with communication and speed",
      practice: "Top 100 list + 8 mock interviews"
    }
  ],
  experienced: [
    {
      id: "Intermediate",
      duration: "2 Weeks",
      topics: "Linked list, stack/queue, trees/BST, heap, greedy recap",
      goal: "Refresh implementation speed and core invariants",
      practice: "70 pattern-focused problems"
    },
    {
      id: "Advanced",
      duration: "3 Weeks",
      topics: "Graphs, DP, trie, segment tree, union-find, shortest path",
      goal: "Rebuild depth for high-constraint and optimization questions",
      practice: "110 advanced problems"
    },
    {
      id: "Interview Mastery",
      duration: "3 Weeks",
      topics: "Top interview sets, OA simulations, mock rounds, storytelling",
      goal: "Deliver optimized solutions with clear communication under pressure",
      practice: "Top 150 drills + 10 mocks"
    }
  ]
};

const TRACK_HINTS = {
  fresher: "Fresher Path: start from fundamentals with a guided 16-week progression.",
  experienced: "Experienced Fast-Track: compress fundamentals and focus on advanced interview execution."
};

const ROLE_PATHS = [
  {
    id: "fresher-campus",
    title: "Fresher Campus Placement Path",
    mode: "fresher",
    startChapter: 1,
    duration: "16 Weeks",
    points: [
      "Start with foundations and chapter-by-chapter progression.",
      "Solve daily beginner/intermediate pattern sets.",
      "Finish with OA simulation and mock interview practice."
    ]
  },
  {
    id: "fresher-internship",
    title: "Fresher Internship Fast Start",
    mode: "fresher",
    startChapter: 8,
    duration: "10 Weeks",
    points: [
      "Prioritize arrays, strings, binary search, and hashing.",
      "Build confidence with 40-60 frequently asked problems.",
      "Use mock rounds to improve communication and speed."
    ]
  },
  {
    id: "experienced-refresh",
    title: "Experienced DSA Refresh Path",
    mode: "experienced",
    startChapter: 14,
    duration: "8 Weeks",
    points: [
      "Skip basic onboarding and refresh high-impact patterns.",
      "Focus on graph, DP, and optimization-heavy rounds.",
      "Use interview mastery chapters for final polishing."
    ]
  },
  {
    id: "experienced-system-design-bridge",
    title: "Experienced + System Design Bridge",
    mode: "experienced",
    startChapter: 21,
    duration: "8-10 Weeks",
    points: [
      "Pair advanced DSA with architecture trade-off thinking.",
      "Practice shortest path, DSU, and advanced DP reasoning.",
      "Convert algorithm decisions into scalable design narratives."
    ]
  }
];

const chapters = [
  {
    id: 1,
    phase: "Beginner",
    title: "Introduction to DSA",
    why: "DSA helps you convert ideas into scalable solutions and explain trade-offs in interviews.",
    theory: "A data structure organizes data, and an algorithm transforms it. Strong engineers choose the right structure first, then optimize operations based on constraints.",
    diagram: ["Input", "Data Structure", "Algorithm", "Output"],
    useCase: "Designing a feed system where you need fast inserts, lookup, and ranking.",
    complexity: [["Lookup in array", "O(n)", "O(1)"], ["Lookup in hash map", "O(1) avg", "O(n)"]],
    csharp: "var nums = new List<int> {2, 4, 6};\nConsole.WriteLine(nums.Contains(4)); // True",
    python: "nums = [2, 4, 6]\nprint(4 in nums)  # True",
    mistakes: ["Memorizing code without understanding operations", "Ignoring constraints before coding"],
    tips: ["Always ask: read-heavy or write-heavy?", "Explain brute force before optimized approach"],
    practice: ["Compare array vs hash map for 3 use-cases", "Solve: Two Sum"],
    summary: "DSA is about choosing efficient organization + logic, not just writing code faster.",
    quiz: { q: "What is the first step in solving most DSA problems?", options: ["Choose a language", "Understand constraints and operations", "Write recursion first"], answer: 1, explain: "Constraints guide data structure choice." }
  },
  {
    id: 2,
    phase: "Beginner",
    title: "Time Complexity",
    why: "Time complexity predicts growth when input size increases.",
    theory: "Big-O expresses upper-bound growth. Focus on dominant operations in loops, recursion trees, and nested calls.",
    diagram: ["n", "n log n", "n^2"],
    useCase: "Choosing merge sort over bubble sort for large transaction logs.",
    complexity: [["Single loop", "O(n)", "O(1)"], ["Nested loop", "O(n^2)", "O(1)"]],
    csharp: "for (int i = 0; i < n; i++)\n{\n    total += arr[i];\n} // O(n)",
    python: "for x in arr:\n    total += x  # O(n)",
    mistakes: ["Counting constants as complexity", "Confusing best case with worst case"],
    tips: ["State complexity after each solution", "Discuss input limits with interviewer"],
    practice: ["Classify 10 snippets by Big-O", "Solve: Contains Duplicate"],
    summary: "Time complexity is a language to justify optimization choices.",
    quiz: { q: "Which grows faster for large n?", options: ["O(n)", "O(n log n)", "O(log n)"], answer: 1, explain: "n log n dominates n." }
  },
  {
    id: 3,
    phase: "Beginner",
    title: "Space Complexity",
    why: "Memory limits matter in coding rounds and production systems.",
    theory: "Space complexity includes auxiliary data structures, recursion stack, and temporary copies.",
    diagram: ["Input", "Aux Space", "Stack", "Total"],
    useCase: "Optimizing a mobile app feature with low memory budget.",
    complexity: [["In-place reverse", "O(n)", "O(1)"], ["Copy array", "O(n)", "O(n)"]],
    csharp: "Array.Reverse(arr); // In-place, O(1) extra space",
    python: "arr.reverse()  # In-place, O(1) extra space",
    mistakes: ["Ignoring recursion stack cost", "Creating unnecessary copied arrays"],
    tips: ["Mention in-place alternatives", "Clarify if input modification is allowed"],
    practice: ["Rewrite a solution to O(1) extra space", "Solve: Move Zeroes"],
    summary: "Good solutions balance both runtime and memory usage.",
    quiz: { q: "What extra space does iterative binary search use?", options: ["O(1)", "O(log n)", "O(n)"], answer: 0, explain: "It uses only a few pointers." }
  },
  {
    id: 4,
    phase: "Beginner",
    title: "Arrays",
    why: "Arrays are the base for most interview patterns.",
    theory: "Arrays provide contiguous memory and O(1) index access. They are excellent for scan, prefix, and pointer techniques.",
    diagram: ["a[0]", "a[1]", "a[2]", "a[3]"],
    useCase: "Analyzing hourly sensor values in sequence order.",
    complexity: [["Read by index", "O(1)", "O(1)"], ["Insert at middle", "O(n)", "O(1)"]],
    csharp: "int[] arr = {1, 3, 5};\nConsole.WriteLine(arr[1]); // 3",
    python: "arr = [1, 3, 5]\nprint(arr[1])  # 3",
    mistakes: ["Index out-of-range errors", "Using nested loops unnecessarily"],
    tips: ["Track left/right boundaries carefully", "Use dry-run tables for pointer movement"],
    practice: ["Best Time to Buy and Sell Stock", "Product of Array Except Self"],
    summary: "Mastering arrays unlocks many higher-level patterns.",
    quiz: { q: "Array index access complexity is:", options: ["O(1)", "O(log n)", "O(n)"], answer: 0, explain: "Contiguous storage enables direct addressing." }
  },
  {
    id: 5,
    phase: "Beginner",
    title: "Strings",
    why: "String processing appears in OAs and system features like search and validation.",
    theory: "Strings are character arrays with immutability in many languages. Use two pointers, hashing, and frequency maps.",
    diagram: ["h", "e", "l", "l", "o"],
    useCase: "Building username validation and typo detection.",
    complexity: [["Concatenate in loop", "O(n^2)", "O(n)"], ["Builder pattern", "O(n)", "O(n)"]],
    csharp: "string s = \"racecar\";\nbool isPal = s.SequenceEqual(s.Reverse());",
    python: "s = 'racecar'\nis_pal = s == s[::-1]",
    mistakes: ["Repeated string concatenation in loops", "Case-sensitivity bugs"],
    tips: ["Clarify Unicode assumptions", "Use hashmap for anagram/frequency problems"],
    practice: ["Valid Anagram", "Longest Substring Without Repeating Characters"],
    summary: "Strings are solved faster when you think in windows and frequency counts.",
    quiz: { q: "Best structure for character frequency?", options: ["Stack", "Hash map", "Queue"], answer: 1, explain: "Key-value counting is natural with a map." }
  },
  {
    id: 6,
    phase: "Beginner",
    title: "Recursion",
    why: "Recursion simplifies divide-and-conquer and tree traversal logic.",
    theory: "Each recursive function needs base case, progress toward base, and clear return combination.",
    diagram: ["f(4)", "f(3)", "f(2)", "f(1)"],
    useCase: "Generating file-system tree listing.",
    complexity: [["Factorial", "O(n)", "O(n) stack"], ["Binary recursion", "O(2^n)", "O(n) stack"]],
    csharp: "int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);",
    python: "def fact(n):\n    return 1 if n <= 1 else n * fact(n - 1)",
    mistakes: ["Missing base case", "Mutating shared state carelessly"],
    tips: ["Write recursive tree on paper", "Convert to iterative when stack risk is high"],
    practice: ["Climbing Stairs", "Subsets"],
    summary: "Recursion is elegant when call-state and termination are explicit.",
    quiz: { q: "What prevents infinite recursion?", options: ["Loop", "Base case", "Hash map"], answer: 1, explain: "Base case is mandatory termination." }
  },
  {
    id: 7,
    phase: "Beginner",
    title: "Sorting Basics",
    why: "Sorting is foundational for binary search, interval merging, and greedy approaches.",
    theory: "Understand stable vs unstable sorts, comparison-based lower bound O(n log n), and trade-offs of in-place methods.",
    diagram: ["5", "2", "4", "1", "3"],
    useCase: "Ranking candidates by score before shortlisting.",
    complexity: [["Merge Sort", "O(n log n)", "O(n)"], ["Quick Sort (avg)", "O(n log n)", "O(log n)"]],
    csharp: "Array.Sort(arr); // Introspective sort in .NET",
    python: "arr.sort()  # Timsort",
    mistakes: ["Forgetting custom comparator rules", "Using O(n^2) sorts on large input"],
    tips: ["Sort once, reuse ordering for multiple queries", "Know stable sort benefits"],
    practice: ["Sort Colors", "Merge Intervals"],
    summary: "Sorting often transforms hard problems into linear scans.",
    quiz: { q: "Comparison-based sorting lower bound is:", options: ["O(n)", "O(n log n)", "O(log n)"], answer: 1, explain: "Decision tree proof gives n log n lower bound." }
  },
  {
    id: 8,
    phase: "Beginner",
    title: "Binary Search",
    why: "Binary search is a high-frequency pattern for ordered spaces and answer search.",
    theory: "Maintain invariant on left/right boundaries and eliminate half search space each step.",
    diagram: ["L", "mid", "R"],
    useCase: "Finding minimum capacity to ship packages within D days.",
    complexity: [["Sorted array search", "O(log n)", "O(1)"], ["Answer-space search", "O(log range)", "O(1)"]],
    csharp: "while (l <= r) { int m = l + (r - l) / 2; }",
    python: "while l <= r:\n    m = l + (r - l) // 2",
    mistakes: ["Overflow in mid calculation", "Wrong boundary updates causing infinite loop"],
    tips: ["Define monotonic condition clearly", "Prefer closed/open interval consciously"],
    practice: ["Search in Rotated Sorted Array", "Koko Eating Bananas"],
    summary: "Binary search solves more than search; it solves optimization with monotonicity.",
    quiz: { q: "Binary search requires:", options: ["Hash map", "Monotonic/ordered space", "Recursion only"], answer: 1, explain: "Without order, halving is invalid." }
  },
  {
    id: 9,
    phase: "Beginner",
    title: "Hashing",
    why: "Hashing gives average O(1) lookup and is core to many optimal solutions.",
    theory: "Hash maps map keys to buckets. Collision handling and load factor affect performance.",
    diagram: ["key", "hash()", "bucket", "value"],
    useCase: "Caching user session tokens for instant validation.",
    complexity: [["Insert", "O(1) avg", "O(n) worst"], ["Lookup", "O(1) avg", "O(n) worst"]],
    csharp: "var map = new Dictionary<int, int>();\nmap[7] = 1;",
    python: "freq = {}\nfreq[7] = freq.get(7, 0) + 1",
    mistakes: ["Assuming always O(1)", "Using mutable objects as keys incorrectly"],
    tips: ["Mention average vs worst-case", "Use set when only membership matters"],
    practice: ["Two Sum", "Group Anagrams"],
    summary: "Hashing turns repeated scans into direct access.",
    quiz: { q: "Best for duplicate detection in O(n)?", options: ["Set", "Queue", "Stack"], answer: 0, explain: "Set membership is O(1) average." }
  },
  {
    id: 10,
    phase: "Beginner",
    title: "Two Pointer",
    why: "Two pointers reduce quadratic scans to linear time in ordered or constrained traversals.",
    theory: "Maintain two indices moving by rules tied to objective: sum, partition, window, or reverse traversal.",
    diagram: ["L", "1", "2", "3", "R"],
    useCase: "Finding pairs summing to target in sorted list.",
    complexity: [["Pair sum sorted", "O(n)", "O(1)"], ["Palindrome check", "O(n)", "O(1)"]],
    csharp: "while (l < r) { int sum = arr[l] + arr[r]; }",
    python: "while l < r:\n    s = arr[l] + arr[r]",
    mistakes: ["Moving wrong pointer", "Not proving why movement is valid"],
    tips: ["State invariant before coding", "Use sorted property to justify pointer move"],
    practice: ["Valid Palindrome", "Container With Most Water"],
    summary: "Two-pointer method is a deterministic way to shrink search space.",
    quiz: { q: "Two pointers are strongest when:", options: ["Data is sorted or directional", "Graph is disconnected", "Tree is balanced"], answer: 0, explain: "Order enables justified pointer movement." }
  },
  {
    id: 11,
    phase: "Intermediate",
    title: "Linked List",
    why: "Linked lists teach pointer manipulation and memory-efficient insert/delete operations.",
    theory: "Nodes store value + next pointer. You lose O(1) indexing but gain flexible structural updates.",
    diagram: ["Head", "Node", "Node", "Null"],
    useCase: "Implementing LRU cache with doubly linked list + hash map.",
    complexity: [["Insert at head", "O(1)", "O(1)"], ["Find node", "O(n)", "O(1)"]],
    csharp: "var node = new ListNode(5) { next = head };\nhead = node;",
    python: "node = ListNode(5, head)\nhead = node",
    mistakes: ["Losing next pointer during rewiring", "Ignoring dummy node simplification"],
    tips: ["Use dummy head for edge cases", "Draw pointer transitions stepwise"],
    practice: ["Reverse Linked List", "Merge Two Sorted Lists"],
    summary: "Pointer safety and edge-case discipline are key in linked-list questions.",
    quiz: { q: "Fast/slow pointer is used for:", options: ["Cycle detection", "Heapify", "Topological sort"], answer: 0, explain: "Floyd algorithm uses two speeds." }
  },
  {
    id: 12,
    phase: "Intermediate",
    title: "Stack",
    why: "Stacks model LIFO behavior and simplify nested structure problems.",
    theory: "Push/pop at one end enables O(1) operations; useful for parsing, monotonic patterns, and DFS simulation.",
    diagram: ["Top", "[3]", "[2]", "[1]"],
    useCase: "Undo/redo history in text editor.",
    complexity: [["Push", "O(1)", "O(1)"], ["Pop", "O(1)", "O(1)"]],
    csharp: "var st = new Stack<int>();\nst.Push(10);\nint x = st.Pop();",
    python: "st = []\nst.append(10)\nx = st.pop()",
    mistakes: ["Using recursion when explicit stack is clearer", "Forgetting empty-stack checks"],
    tips: ["Track what each stack element represents", "Use monotonic stack for next greater/smaller"],
    practice: ["Valid Parentheses", "Daily Temperatures"],
    summary: "Stacks convert nested dependencies into linear processing.",
    quiz: { q: "Stack order is:", options: ["FIFO", "LIFO", "Random"], answer: 1, explain: "Last in, first out." }
  },
  {
    id: 13,
    phase: "Intermediate",
    title: "Queue",
    why: "Queues model FIFO workflows and are central in BFS and scheduling.",
    theory: "Enqueue at rear, dequeue at front. Deque extends queue for both-end operations.",
    diagram: ["Front", "[1]", "[2]", "[3]", "Rear"],
    useCase: "Job processing in order of arrival.",
    complexity: [["Enqueue", "O(1)", "O(1)"], ["Dequeue", "O(1)", "O(1)"]],
    csharp: "var q = new Queue<int>();\nq.Enqueue(1);\nint v = q.Dequeue();",
    python: "from collections import deque\nq = deque([1])\nv = q.popleft()",
    mistakes: ["Using list pop(0) in Python causing O(n)", "Mixing queue and stack semantics"],
    tips: ["Use deque for efficient ends", "In BFS, mark visited before enqueue"],
    practice: ["Number of Islands (BFS)", "Implement Queue using Stacks"],
    summary: "Queue thinking is about fair order and layer-by-layer exploration.",
    quiz: { q: "Which algorithm relies on queue heavily?", options: ["BFS", "Binary search", "Merge sort"], answer: 0, explain: "BFS explores nodes level by level." }
  },
  {
    id: 14,
    phase: "Intermediate",
    title: "Sliding Window",
    why: "Sliding window solves contiguous subarray/substring optimization efficiently.",
    theory: "Expand right boundary to include candidates, shrink left boundary to maintain constraints.",
    diagram: ["L", "[window]", "R"],
    useCase: "Longest segment with at most K errors in monitoring stream.",
    complexity: [["Variable window", "O(n)", "O(1)-O(k)"], ["Fixed window", "O(n)", "O(1)"]],
    csharp: "for (int r = 0; r < n; r++) {\n  sum += arr[r];\n  while (sum > k) sum -= arr[l++];\n}",
    python: "for r in range(n):\n    total += arr[r]\n    while total > k:\n        total -= arr[l]; l += 1",
    mistakes: ["Resetting window too often", "Not updating answer at correct time"],
    tips: ["Define invalid condition clearly", "Use frequency map for string windows"],
    practice: ["Minimum Size Subarray Sum", "Longest Repeating Character Replacement"],
    summary: "Sliding window transforms nested scans into single-pass logic.",
    quiz: { q: "Sliding window is best for:", options: ["Contiguous segments", "Tree traversals", "Graph coloring"], answer: 0, explain: "It exploits contiguous range updates." }
  },
  {
    id: 15,
    phase: "Intermediate",
    title: "Prefix Sum",
    why: "Prefix sums answer repeated range queries quickly.",
    theory: "Prefix[i] stores sum up to i. Range sum L..R = prefix[R] - prefix[L-1].",
    diagram: ["a", "prefix1", "prefix2", "prefix3"],
    useCase: "Fast analytics for daily revenue segments.",
    complexity: [["Precompute", "O(n)", "O(n)"], ["Range query", "O(1)", "O(1)"]],
    csharp: "prefix[i] = prefix[i - 1] + arr[i];",
    python: "prefix[i] = prefix[i-1] + arr[i]",
    mistakes: ["Off-by-one with 0-based indices", "Forgetting initial prefix[0] base"],
    tips: ["Use length n+1 prefix to simplify math", "Combine with hashmap for subarray-sum problems"],
    practice: ["Range Sum Query", "Subarray Sum Equals K"],
    summary: "Prefix arrays trade one-time precompute for instant range answers.",
    quiz: { q: "Range sum [l..r] uses:", options: ["prefix[r] + prefix[l]", "prefix[r] - prefix[l-1]", "prefix[l] - prefix[r]"], answer: 1, explain: "Subtract cumulative before l." }
  },
  {
    id: 16,
    phase: "Intermediate",
    title: "Trees",
    why: "Trees model hierarchical data and recursive decomposition.",
    theory: "Each node has children; binary tree has at most two. Traversals reveal structure systematically.",
    diagram: ["Root", "Left", "Right"],
    useCase: "Rendering nested comments in social platforms.",
    complexity: [["DFS traversal", "O(n)", "O(h)"], ["Level order", "O(n)", "O(w)"]],
    csharp: "void InOrder(TreeNode n){ if(n==null) return; InOrder(n.left); Console.Write(n.val); InOrder(n.right);}",
    python: "def inorder(n):\n    if not n: return\n    inorder(n.left); print(n.val); inorder(n.right)",
    mistakes: ["Confusing preorder/inorder/postorder", "Not handling null children"],
    tips: ["Write traversal order before coding", "Use queue for level-order problems"],
    practice: ["Maximum Depth of Binary Tree", "Binary Tree Level Order Traversal"],
    summary: "Tree problems are easiest when broken by subtree contracts.",
    quiz: { q: "Inorder on BST yields:", options: ["Random order", "Sorted order", "Reverse level order"], answer: 1, explain: "BST property guarantees sorted inorder." }
  },
  {
    id: 17,
    phase: "Intermediate",
    title: "BST",
    why: "BST enables ordered operations like predecessor/successor queries.",
    theory: "Left subtree values < node < right subtree values. Balanced BST keeps operations near O(log n).",
    diagram: ["8", "3", "10", "1", "6"],
    useCase: "Maintaining sorted leaderboard snapshots with dynamic updates.",
    complexity: [["Search avg", "O(log n)", "O(1)"], ["Search skewed", "O(n)", "O(1)"]],
    csharp: "TreeNode Search(TreeNode r, int x) => r==null || r.val==x ? r : x<r.val ? Search(r.left,x) : Search(r.right,x);",
    python: "def search(r, x):\n    if not r or r.val == x: return r\n    return search(r.left, x) if x < r.val else search(r.right, x)",
    mistakes: ["Assuming always balanced", "Incorrect delete-case handling"],
    tips: ["Explain 3 delete cases", "Use inorder successor for replacement"],
    practice: ["Validate BST", "Lowest Common Ancestor in BST"],
    summary: "BST is powerful when ordering is continuously needed.",
    quiz: { q: "BST left subtree values are:", options: ["<= root", "< root", "> root"], answer: 1, explain: "Strict BST condition uses smaller values." }
  },
  {
    id: 18,
    phase: "Intermediate",
    title: "Heap",
    why: "Heaps are ideal for top-k and priority-driven processing.",
    theory: "Binary heap keeps parent ordered against children; root gives min/max quickly.",
    diagram: ["Root", "Child", "Child", "Leaf"],
    useCase: "Scheduling highest-priority tasks first.",
    complexity: [["Insert", "O(log n)", "O(1)"], ["Peek", "O(1)", "O(1)"]],
    csharp: "var pq = new PriorityQueue<string,int>();\npq.Enqueue(\"task\", 1);",
    python: "import heapq\nh = []\nheapq.heappush(h, 5)",
    mistakes: ["Confusing heap with sorted array", "Using max-heap tricks incorrectly in Python"],
    tips: ["For top-k smallest, keep max-heap of size k", "Know push-pop combined operations"],
    practice: ["Kth Largest Element", "Top K Frequent Elements"],
    summary: "Heap gives partial ordering with efficient priority access.",
    quiz: { q: "Heap root gives:", options: ["Median", "Min/Max depending heap type", "Random node"], answer: 1, explain: "Heap property guarantees root extreme." }
  },
  {
    id: 19,
    phase: "Intermediate",
    title: "Greedy",
    why: "Greedy algorithms give optimal solutions when local choices compose globally.",
    theory: "Choose best immediate action under a proven exchange argument or matroid-like property.",
    diagram: ["Choices", "Best Local", "Repeat", "Optimal"],
    useCase: "Minimum number of intervals to remove for non-overlap.",
    complexity: [["Sorted greedy scan", "O(n log n)", "O(1)"], ["Selection loop", "O(n)", "O(1)"]],
    csharp: "intervals.Sort((a,b) => a[1].CompareTo(b[1]));",
    python: "intervals.sort(key=lambda x: x[1])",
    mistakes: ["Applying greedy without proof", "Confusing greedy with DP"],
    tips: ["State why local choice remains safe", "Sort by the correct key first"],
    practice: ["Non-overlapping Intervals", "Jump Game"],
    summary: "Greedy works when you can prove no better future decision is blocked.",
    quiz: { q: "Greedy validity needs:", options: ["Exchange/safety proof", "Only fast runtime", "Recursion depth"], answer: 0, explain: "Correctness proof is essential." }
  },
  {
    id: 20,
    phase: "Intermediate",
    title: "Backtracking",
    why: "Backtracking explores decision trees for combination/permutation constraint problems.",
    theory: "Build partial solution, prune invalid branches, and undo choice to try alternatives.",
    diagram: ["Start", "Choice A", "Choice B", "Backtrack"],
    useCase: "Generating valid schedules under constraints.",
    complexity: [["Subsets", "O(2^n)", "O(n) stack"], ["Permutations", "O(n!)", "O(n) stack"]],
    csharp: "void Dfs(int start){\n  ans.Add(new List<int>(path));\n  for(int i=start;i<n;i++){ path.Add(nums[i]); Dfs(i+1); path.RemoveAt(path.Count-1);} }",
    python: "def dfs(start):\n    ans.append(path[:])\n    for i in range(start, n):\n        path.append(nums[i]); dfs(i+1); path.pop()",
    mistakes: ["Forgetting to undo state", "Missing pruning condition"],
    tips: ["Name recursive state clearly", "Prune early to reduce branching"],
    practice: ["Combination Sum", "N-Queens"],
    summary: "Backtracking is controlled exhaustive search with pruning.",
    quiz: { q: "Backtracking requires:", options: ["State undo", "Heapify", "Binary lifting"], answer: 0, explain: "Without undo, branches corrupt each other." }
  },
  {
    id: 21,
    phase: "Advanced",
    title: "Graphs",
    why: "Real-world problems often model as nodes and edges.",
    theory: "Represent graphs using adjacency list/matrix and solve reachability, connectivity, and shortest paths.",
    diagram: ["A", "B", "C", "D"],
    useCase: "Modeling city routes and recommendation networks.",
    complexity: [["Adj list traversal", "O(V+E)", "O(V+E)"], ["Adj matrix scan", "O(V^2)", "O(V^2)"]],
    csharp: "var g = new List<int>[n];\nfor (int i = 0; i < n; i++) g[i] = new List<int>();",
    python: "g = [[] for _ in range(n)]",
    mistakes: ["Using matrix for sparse graph unnecessarily", "Forgetting directed vs undirected handling"],
    tips: ["Clarify graph type first", "Track visited to avoid cycles"],
    practice: ["Number of Provinces", "Clone Graph"],
    summary: "Graph modeling choice often determines solution complexity.",
    quiz: { q: "Sparse graph is best stored as:", options: ["Adjacency list", "Adjacency matrix", "Stack"], answer: 0, explain: "List uses space proportional to edges." }
  },
  {
    id: 22,
    phase: "Advanced",
    title: "DFS",
    why: "DFS is essential for exploration, cycle checks, and topological logic.",
    theory: "Go deep before backtracking. Can be recursive or iterative with stack.",
    diagram: ["Start", "Deep", "Deeper", "Back"],
    useCase: "Dependency expansion in package graph.",
    complexity: [["DFS traversal", "O(V+E)", "O(V)"], ["Rec stack", "O(V)", "O(V)"]],
    csharp: "void Dfs(int u){ vis[u]=true; foreach(var v in g[u]) if(!vis[v]) Dfs(v);}",
    python: "def dfs(u):\n    vis[u] = True\n    for v in g[u]:\n        if not vis[v]: dfs(v)",
    mistakes: ["Stack overflow on deep graph", "Not separating visited and pathVisited for cycle detection"],
    tips: ["For directed cycle, track recursion stack", "Use iterative stack when depth is huge"],
    practice: ["Course Schedule", "Path Sum (tree DFS)"],
    summary: "DFS shines when solution depends on full branch exploration.",
    quiz: { q: "DFS uses which DS implicitly?", options: ["Queue", "Stack", "Heap"], answer: 1, explain: "Recursion call stack behaves like stack." }
  },
  {
    id: 23,
    phase: "Advanced",
    title: "BFS",
    why: "BFS finds shortest path in unweighted graphs and level-based traversals.",
    theory: "Expand frontier layer by layer using queue. First time reaching node gives shortest edge count.",
    diagram: ["Level0", "Level1", "Level2", "Level3"],
    useCase: "Minimum moves in puzzle grids.",
    complexity: [["BFS traversal", "O(V+E)", "O(V)"], ["Grid BFS", "O(mn)", "O(mn)"]],
    csharp: "var q = new Queue<int>(); q.Enqueue(src);",
    python: "from collections import deque\nq = deque([src])",
    mistakes: ["Marking visited too late", "Mixing BFS with weighted edges"],
    tips: ["Use queue size loop for level counting", "Use multi-source BFS when needed"],
    practice: ["Rotting Oranges", "Word Ladder"],
    summary: "BFS is the default for minimum steps in unweighted state spaces.",
    quiz: { q: "Unweighted shortest path uses:", options: ["DFS", "BFS", "Greedy"], answer: 1, explain: "BFS guarantees shortest by levels." }
  },
  {
    id: 24,
    phase: "Advanced",
    title: "Dynamic Programming",
    why: "DP optimizes overlapping subproblems by reusing computed states.",
    theory: "Define state, transition, base cases, and evaluation order (top-down memo or bottom-up tabulation).",
    diagram: ["State", "Transition", "Memo", "Answer"],
    useCase: "Maximize profit from constrained daily trading decisions.",
    complexity: [["Memoized recursion", "State count dependent", "O(states)"], ["Tabulation", "O(states * transitions)", "O(states)"]],
    csharp: "dp[i] = Math.Max(dp[i - 1], dp[i - 2] + nums[i]);",
    python: "dp[i] = max(dp[i-1], dp[i-2] + nums[i])",
    mistakes: ["Wrong state definition", "Ignoring transition dependencies"],
    tips: ["Start from brute force recursion tree", "Compress dimensions when possible"],
    practice: ["House Robber", "Coin Change"],
    summary: "DP is structured optimization through state reuse.",
    quiz: { q: "DP is useful when subproblems are:", options: ["Independent only", "Overlapping", "Random"], answer: 1, explain: "Overlap allows reuse and speedup." }
  },
  {
    id: 25,
    phase: "Advanced",
    title: "Trie",
    why: "Trie supports efficient prefix queries and auto-complete features.",
    theory: "Each edge represents a character; root-to-node path encodes prefix.",
    diagram: ["root", "c", "ca", "cat"],
    useCase: "Search suggestions in e-commerce query box.",
    complexity: [["Insert word length L", "O(L)", "O(L)"], ["Prefix query", "O(L)", "O(1)"]],
    csharp: "class TrieNode { public Dictionary<char, TrieNode> Next = new(); public bool End; }",
    python: "class Node:\n    def __init__(self):\n        self.next = {}\n        self.end = False",
    mistakes: ["Forgetting end-of-word marker", "High memory overhead without need"],
    tips: ["Use array children for lowercase-only optimization", "Store prefix counts for ranking"],
    practice: ["Implement Trie", "Word Search II"],
    summary: "Trie trades memory for fast prefix operations.",
    quiz: { q: "Trie is strongest for:", options: ["Prefix search", "Range sum", "Topological order"], answer: 0, explain: "Prefix traversal is trie's core advantage." }
  },
  {
    id: 26,
    phase: "Advanced",
    title: "Segment Tree",
    why: "Segment trees support range queries and updates faster than naive scans.",
    theory: "Binary tree over intervals where each node stores aggregate info for a segment.",
    diagram: ["[0,7]", "[0,3]", "[4,7]", "Leaf"],
    useCase: "Real-time leaderboard score range maximum query.",
    complexity: [["Build", "O(n)", "O(n)"], ["Query/Update", "O(log n)", "O(log n)"]],
    csharp: "void Update(int idx, int val, int node, int l, int r) { /* segment update */ }",
    python: "def query(node, l, r, ql, qr):\n    # range query in O(log n)",
    mistakes: ["Incorrect interval split", "Not handling partial overlap correctly"],
    tips: ["Write full overlap/no overlap/partial cases", "Use iterative tree for performance"],
    practice: ["Range Sum Query Mutable", "Count of Smaller Numbers After Self"],
    summary: "Segment tree gives predictable logarithmic range operations.",
    quiz: { q: "Segment tree point update complexity:", options: ["O(1)", "O(log n)", "O(n)"], answer: 1, explain: "Update touches root-to-leaf path." }
  },
  {
    id: 27,
    phase: "Advanced",
    title: "Union Find",
    why: "Union-Find quickly tracks connectivity in dynamic graphs.",
    theory: "Disjoint Set Union supports find representative and union sets with path compression + union by rank.",
    diagram: ["1", "2", "3", "root"],
    useCase: "Detecting cycle when adding edges in network.",
    complexity: [["Find/Union amortized", "~O(alpha(n))", "O(n)"], ["Connected query", "~O(alpha(n))", "O(1)"]],
    csharp: "int Find(int x){ if(parent[x]!=x) parent[x]=Find(parent[x]); return parent[x]; }",
    python: "def find(x):\n    if p[x] != x: p[x] = find(p[x])\n    return p[x]",
    mistakes: ["Skipping path compression", "Forgetting initialization parent[i]=i"],
    tips: ["Use DSU for connectivity not shortest path", "Union by size improves performance"],
    practice: ["Redundant Connection", "Number of Connected Components"],
    summary: "DSU is the fastest way to merge and query components.",
    quiz: { q: "Union Find is ideal for:", options: ["Connectivity", "String matching", "Binary search"], answer: 0, explain: "It tracks connected components." }
  },
  {
    id: 28,
    phase: "Advanced",
    title: "Bit Manipulation",
    why: "Bit tricks optimize memory and runtime in low-level operations.",
    theory: "Use AND, OR, XOR, shifts to test/set/toggle bits and represent subsets compactly.",
    diagram: ["1010", "AND", "1100", "1000"],
    useCase: "Permission flag handling in systems.",
    complexity: [["Bit test/set", "O(1)", "O(1)"], ["Subset DP mask", "O(2^n n)", "O(2^n)"]],
    csharp: "bool isSet = (mask & (1 << k)) != 0;",
    python: "is_set = (mask & (1 << k)) != 0",
    mistakes: ["Operator precedence bugs", "Using signed shifts carelessly"],
    tips: ["Write binary for clarity", "Use XOR for toggling and uniqueness"],
    practice: ["Single Number", "Counting Bits"],
    summary: "Bit operations provide concise and fast state handling.",
    quiz: { q: "XOR of same numbers gives:", options: ["1", "0", "number itself"], answer: 1, explain: "a ^ a = 0." }
  },
  {
    id: 29,
    phase: "Advanced",
    title: "Advanced DP",
    why: "Advanced DP handles multidimensional constraints and sequence relationships.",
    theory: "Patterns include LIS, interval DP, digit DP, and DP on trees. State modeling quality decides success.",
    diagram: ["2D state", "Transition", "Optimize", "Result"],
    useCase: "Scheduling tasks with cooldown and category constraints.",
    complexity: [["2D DP", "O(nm)", "O(nm)"], ["Optimized rolling DP", "O(nm)", "O(m)"]],
    csharp: "for(int i=1;i<=n;i++) for(int j=1;j<=m;j++) dp[i,j]=Math.Max(dp[i-1,j], dp[i,j-1]);",
    python: "for i in range(1, n+1):\n    for j in range(1, m+1):\n        dp[i][j] = max(dp[i-1][j], dp[i][j-1])",
    mistakes: ["State explosion without pruning", "Wrong iteration order"],
    tips: ["Start with small constraints and generalize", "Look for monotonicity/convexity optimizations"],
    practice: ["Longest Increasing Subsequence", "Burst Balloons"],
    summary: "Advanced DP is manageable when state dimensions are intentional.",
    quiz: { q: "First step in hard DP is:", options: ["Memorize formula", "Define state clearly", "Use recursion blindly"], answer: 1, explain: "State definition drives all transitions." }
  },
  {
    id: 30,
    phase: "Advanced",
    title: "Shortest Path",
    why: "Shortest path appears in routing, networking, and game pathfinding.",
    theory: "Use BFS for unweighted, Dijkstra for non-negative weights, Bellman-Ford for negative edges.",
    diagram: ["Source", "Edge", "Relax", "MinDist"],
    useCase: "Navigation ETA engine with weighted roads.",
    complexity: [["Dijkstra (heap)", "O((V+E) log V)", "O(V)"], ["Bellman-Ford", "O(VE)", "O(V)"]],
    csharp: "var pq = new PriorityQueue<int,int>();\npq.Enqueue(src, 0);",
    python: "import heapq\nheap = [(0, src)]",
    mistakes: ["Using Dijkstra with negative weights", "Not checking stale heap entries"],
    tips: ["Pick algorithm based on edge weights", "Explain relaxation clearly"],
    practice: ["Network Delay Time", "Cheapest Flights Within K Stops"],
    summary: "Shortest path is an algorithm selection problem before coding.",
    quiz: { q: "Negative edges require caution with:", options: ["BFS", "Dijkstra", "Bellman-Ford"], answer: 1, explain: "Dijkstra assumes non-negative edges." }
  },
  {
    id: 31,
    phase: "Interview Mastery",
    title: "Patterns",
    why: "Pattern recognition speeds up problem-solving under interview time pressure.",
    theory: "Most problems map to a core template: two pointers, window, DFS/BFS, DP, heap, union-find.",
    diagram: ["Problem", "Pattern", "Template", "Optimize"],
    useCase: "Classifying unseen OA question in under 2 minutes.",
    complexity: [["Pattern identification", "O(1) mental", "-"], ["Implementation", "Depends on pattern", "Depends"]],
    csharp: "// Template mindset: choose invariant first, then loop structure",
    python: "# Map problem -> known template before coding",
    mistakes: ["Pattern forcing without validation", "Jumping to code before test examples"],
    tips: ["Maintain a pattern notebook", "Practice category-wise sets"],
    practice: ["Blind 75 pattern mapping", "Explain 5 patterns aloud"],
    summary: "Interview speed comes from pattern recall plus constraint checks.",
    quiz: { q: "Best way to improve pattern recognition:", options: ["Random solving only", "Curated category practice", "Avoid review"], answer: 1, explain: "Category practice builds retrieval speed." }
  },
  {
    id: 32,
    phase: "Interview Mastery",
    title: "Top 100 LeetCode",
    why: "A focused top-100 list gives strong coverage of interview archetypes.",
    theory: "Select balanced set across arrays, trees, graphs, DP, and design. Track revision cycles.",
    diagram: ["Set", "Solve", "Review", "Retest"],
    useCase: "Preparing for campus placement coding rounds.",
    complexity: [["First solve", "30-60 min", "-"], ["Revision solve", "10-20 min", "-"]],
    csharp: "// Keep solution notes: approach, complexity, pitfalls",
    python: "# Re-solve after 3 days and 10 days for retention",
    mistakes: ["Only reading editorial", "Not revisiting failed problems"],
    tips: ["Tag each problem by pattern", "Track attempts and confidence"],
    practice: ["Complete 100-problem tracker", "Weekly mixed mock set"],
    summary: "Consistency and revision matter more than raw count.",
    quiz: { q: "Most effective Top 100 strategy:", options: ["One-pass only", "Solve + spaced revision", "Copy solutions"], answer: 1, explain: "Revision cements transferable skills." }
  },
  {
    id: 33,
    phase: "Interview Mastery",
    title: "Mock Interviews",
    why: "Mocks simulate pressure and expose communication gaps.",
    theory: "Practice structured flow: clarify, propose brute force, optimize, code, test, discuss complexity.",
    diagram: ["Clarify", "Plan", "Code", "Test"],
    useCase: "Improving performance in real interviewer-led rounds.",
    complexity: [["Single mock", "45-60 min", "-"], ["Debrief", "15 min", "-"]],
    csharp: "// Speak invariants while writing loops",
    python: "# Narrate edge-case checks before final answer",
    mistakes: ["Silent coding", "Skipping manual test cases"],
    tips: ["Record and review your mocks", "Practice time-boxing each stage"],
    practice: ["8 full mocks with peer", "2 whiteboard-only sessions"],
    summary: "Interview success requires communication quality, not just correct code.",
    quiz: { q: "After coding, next best step is:", options: ["Stop immediately", "Run test cases aloud", "Rewrite solution"], answer: 1, explain: "Verification shows engineering maturity." }
  },
  {
    id: 34,
    phase: "Interview Mastery",
    title: "Resume Tips",
    why: "A strong resume converts preparation into interview opportunities.",
    theory: "Use impact bullets with metrics, action verbs, and concrete ownership. Highlight DSA + projects.",
    diagram: ["Skill", "Project", "Impact", "Result"],
    useCase: "Improving shortlist rate for fresher applications.",
    complexity: [["Bullet rewrite", "15 min per project", "-"], ["ATS optimization", "1 pass", "-"]],
    csharp: "// Example bullet: Improved API response by 38% using caching",
    python: "# Keep each bullet: action + tool + measurable result",
    mistakes: ["Generic statements without impact", "Too many unrelated technologies"],
    tips: ["Tailor resume to JD keywords", "Keep one-page clean format"],
    practice: ["Rewrite all bullets with metrics", "Prepare project deep-dive answers"],
    summary: "Resume quality is a gateway multiplier for interview calls.",
    quiz: { q: "Best resume bullet style:", options: ["Responsibilities only", "Action + impact metric", "Buzzwords list"], answer: 1, explain: "Impact-focused bullets stand out." }
  },
  {
    id: 35,
    phase: "Interview Mastery",
    title: "OA Preparation",
    why: "Online assessments demand speed, accuracy, and stress control.",
    theory: "Train with timed sets, prioritize easy/medium first, and reserve final minutes for edge-case verification.",
    diagram: ["Read", "Prioritize", "Solve", "Verify"],
    useCase: "Clearing large-campus hiring coding screens.",
    complexity: [["Problem triage", "2-3 min", "-"], ["Final verification", "5-10 min", "-"]],
    csharp: "// Build input parser and helper templates beforehand",
    python: "# Keep snippets for BFS, DSU, binary search ready",
    mistakes: ["Spending too long on first hard problem", "No final test-run review"],
    tips: ["Use checkpoint timing strategy", "Avoid panic by sticking to process"],
    practice: ["15 timed OA simulations", "Post-test error log review"],
    summary: "OA performance is an execution skill built through simulation.",
    quiz: { q: "In OA, first action after reading all problems:", options: ["Pick hardest first", "Prioritize quick wins", "Start random"], answer: 1, explain: "Secure points early and build confidence." }
  }
];

const refs = {
  body: document.body,
  nav: document.getElementById("chapterNav"),
  phaseControls: document.getElementById("phaseControls"),
  chapterContent: document.getElementById("chapterContent"),
  chapterSearch: document.getElementById("chapterSearch"),
  themeToggle: document.getElementById("themeToggle"),
  mobileNavToggle: document.getElementById("mobileNavToggle"),
  sidebar: document.getElementById("sidebar"),
  readingProgressBar: document.getElementById("readingProgressBar"),
  completedMetric: document.getElementById("completedMetric"),
  progressMetric: document.getElementById("progressMetric"),
  timeMetric: document.getElementById("timeMetric"),
  phaseMetric: document.getElementById("phaseMetric"),
  sidebarMeta: document.getElementById("sidebarMeta"),
  streakValue: document.getElementById("streakValue"),
  bookmarkList: document.getElementById("bookmarkList"),
  roadmapGrid: document.getElementById("roadmapGrid"),
  roadmapTimeline: document.getElementById("roadmapTimeline"),
  durationStat: document.getElementById("durationStat"),
  trackModeToggle: document.getElementById("trackModeToggle"),
  trackHint: document.getElementById("trackHint"),
  rolePathGrid: document.getElementById("rolePathGrid"),
  rolePathStatus: document.getElementById("rolePathStatus"),
  notesArea: document.getElementById("notesArea"),
  notesStatus: document.getElementById("notesStatus"),
  saveNotesBtn: document.getElementById("saveNotesBtn"),
  clearNotesBtn: document.getElementById("clearNotesBtn"),
  totalChaptersStat: document.getElementById("totalChaptersStat"),
  randomChapterBtn: document.getElementById("randomChapterBtn"),
  saveGoalBtn: document.getElementById("saveGoalBtn"),
  dailyGoalInput: document.getElementById("dailyGoalInput"),
  solvedTodayText: document.getElementById("solvedTodayText"),
  plusSolvedBtn: document.getElementById("plusSolvedBtn"),
  minusSolvedBtn: document.getElementById("minusSolvedBtn")
};

let state = {
  theme: localStorage.getItem(STORAGE_KEYS.theme) || "light",
  completed: readJson(STORAGE_KEYS.completed, []),
  bookmarks: readJson(STORAGE_KEYS.bookmarks, []),
  currentChapter: Number(localStorage.getItem(STORAGE_KEYS.current)) || 1,
  notes: readJson(STORAGE_KEYS.notes, {}),
  phaseState: readJson(STORAGE_KEYS.phases, {
    Beginner: true,
    Intermediate: false,
    Advanced: false,
    "Interview Mastery": false
  }),
  trackMode: localStorage.getItem(STORAGE_KEYS.trackMode) || "fresher",
  goal: readJson(STORAGE_KEYS.goal, { date: todayKey(), target: 2, solved: 0 }),
  streak: readJson(STORAGE_KEYS.streak, { lastDate: todayKey(), count: 1 })
};

if (!["fresher", "experienced"].includes(state.trackMode)) {
  state.trackMode = "fresher";
}

// Normalize phase defaults so fresh users see only Beginner expanded.
state.phaseState = {
  Beginner: state.phaseState.Beginner ?? true,
  Intermediate: state.phaseState.Intermediate ?? false,
  Advanced: state.phaseState.Advanced ?? false,
  "Interview Mastery": state.phaseState["Interview Mastery"] ?? false
};
enforceSingleExpandedPhase();

function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function applyTheme() {
  refs.body.classList.toggle("dark", state.theme === "dark");
  refs.themeToggle.textContent = state.theme === "dark" ? "\u2600" : "\u263D";
}

function initStreak() {
  const today = todayKey();
  const last = state.streak.lastDate;
  const diff = dayDiff(last, today);
  if (diff === 1) {
    state.streak.count += 1;
  } else if (diff > 1 || diff < 0) {
    state.streak.count = 1;
  }
  state.streak.lastDate = today;
  saveJson(STORAGE_KEYS.streak, state.streak);
}

function dayDiff(from, to) {
  const a = new Date(from + "T00:00:00");
  const b = new Date(to + "T00:00:00");
  return Math.round((b - a) / (1000 * 60 * 60 * 24));
}

function initGoal() {
  const today = todayKey();
  if (state.goal.date !== today) {
    state.goal.date = today;
    state.goal.solved = 0;
  }
  if (!state.goal.target || state.goal.target < 1) state.goal.target = 2;
  refs.dailyGoalInput.value = state.goal.target;
  syncGoalText();
  saveJson(STORAGE_KEYS.goal, state.goal);
}

function syncGoalText() {
  refs.solvedTodayText.textContent = `Solved today: ${state.goal.solved} / ${state.goal.target}`;
}

function getActiveRoadmapPhases() {
  return roadmapPhasesByTrack[state.trackMode] || roadmapPhasesByTrack.fresher;
}

function getTrackDurationLabel() {
  return state.trackMode === "experienced" ? "8 Weeks" : "16 Weeks";
}

function renderTimeline() {
  const phases = getActiveRoadmapPhases();
  let cursor = 1;
  refs.roadmapTimeline.innerHTML = phases
    .map((phase) => {
      const weeks = Number(phase.duration.split(" ")[0]) || 1;
      const from = cursor;
      const to = cursor + weeks - 1;
      cursor += weeks;
      return `<li><span>Weeks ${from}-${to}</span> ${phase.id}</li>`;
    })
    .join("");
}

function renderTrackModeUI() {
  if (!refs.trackModeToggle) return;
  refs.trackModeToggle.querySelectorAll("[data-track-mode]").forEach((button) => {
    const isActive = button.getAttribute("data-track-mode") === state.trackMode;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  refs.trackHint.textContent = TRACK_HINTS[state.trackMode];
  refs.durationStat.textContent = getTrackDurationLabel();
}

function setTrackMode(mode) {
  if (!["fresher", "experienced"].includes(mode)) return;
  if (mode === state.trackMode) return;
  state.trackMode = mode;
  localStorage.setItem(STORAGE_KEYS.trackMode, mode);
  renderRoadmap();
  updateDashboard();
}

function renderRolePaths() {
  if (!refs.rolePathGrid) return;
  refs.rolePathGrid.innerHTML = ROLE_PATHS.map(
    (path) => `
      <article class="role-path-card fade-in">
        <h3>${path.title}</h3>
        <p class="role-path-meta">Mode: ${path.mode === "fresher" ? "Fresher" : "Experienced"} • Duration: ${path.duration}</p>
        <ul>
          ${path.points.map((point) => `<li>${point}</li>`).join("")}
        </ul>
        <div class="role-path-actions">
          <button class="btn btn-primary small" data-role-path="${path.id}" data-action="activate">Activate Path</button>
          <button class="btn btn-ghost small" data-role-path="${path.id}" data-action="start">Go To Start Chapter</button>
        </div>
      </article>`
  ).join("");
  if (refs.rolePathStatus && !refs.rolePathStatus.textContent) {
    refs.rolePathStatus.textContent = "Tip: choose a path to auto-set track mode and jump to the recommended starting chapter.";
  }
}

function activateRolePath(pathId, action = "activate") {
  const selected = ROLE_PATHS.find((p) => p.id === pathId);
  if (!selected) return;
  setTrackMode(selected.mode);
  if (action === "activate" || action === "start") {
    renderChapter(selected.startChapter);
    document.getElementById("chapters")?.scrollIntoView({ behavior: "smooth" });
  }
  if (refs.rolePathStatus) {
    refs.rolePathStatus.textContent = `Active path: ${selected.title} • Track: ${selected.mode === "fresher" ? "Fresher" : "Experienced"} • Start Chapter: ${selected.startChapter}`;
  }
}

function renderRoadmap() {
  const phases = getActiveRoadmapPhases();
  refs.roadmapGrid.innerHTML = phases
    .map(
      (phase) => `
      <article class="phase-card fade-in">
        <h3>${phase.id}</h3>
        <p class="phase-meta">Duration: ${phase.duration}</p>
        <p><strong>Goal:</strong> ${phase.goal}</p>
        <ul>
          <li><strong>Topics:</strong> ${phase.topics}</li>
          <li><strong>Practice Target:</strong> ${phase.practice}</li>
        </ul>
      </article>`
    )
    .join("");
  renderTimeline();
  renderTrackModeUI();
  refs.sidebarMeta.textContent = `35 Chapters • ~${state.trackMode === "experienced" ? "120" : "180"} Hours`;
}

function groupByPhase() {
  return chapters.reduce((acc, chapter) => {
    if (!acc[chapter.phase]) acc[chapter.phase] = [];
    acc[chapter.phase].push(chapter);
    return acc;
  }, {});
}

function renderPhaseControls() {
  const grouped = groupByPhase();
  refs.phaseControls.innerHTML = Object.keys(grouped)
    .map(
      (phase) => `
      <button class="phase-btn" data-phase-toggle="${phase}" aria-expanded="${String(state.phaseState[phase])}">
        <span>${phase}</span>
        <span>${state.phaseState[phase] ? "-" : "+"}</span>
      </button>`
    )
    .join("");
}

function renderNav(filter = "") {
  const grouped = groupByPhase();
  const q = filter.trim().toLowerCase();

  refs.nav.innerHTML = Object.entries(grouped)
    .map(([phase, list]) => {
      const visible = list.filter((c) => `${c.title} ${c.phase}`.toLowerCase().includes(q));
      if (!visible.length) return "";
      const hidden = !state.phaseState[phase] && !q;

      return `
      <section class="chapter-group" data-phase="${phase}" style="display:${hidden ? "none" : "block"};">
        <ul class="chapter-list">
          ${visible
            .map(
              (ch) => `
            <li>
              <button class="chapter-link ${state.currentChapter === ch.id ? "active" : ""} ${state.completed.includes(ch.id) ? "done" : ""}" data-chapter-id="${ch.id}">
                <span>${ch.id}. ${ch.title}</span>
                <span>${state.completed.includes(ch.id) ? "OK" : "."}</span>
              </button>
            </li>`
            )
            .join("")}
        </ul>
      </section>`;
    })
    .join("");
}

function formatList(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderDiagram(items) {
  const parts = [];
  items.forEach((item, idx) => {
    parts.push(`<div class="node">${item}</div>`);
    if (idx < items.length - 1) parts.push('<div class="arrow">-></div>');
  });
  return `<div class="diagram"><div class="diagram-row">${parts.join("")}</div></div>`;
}

function renderComplexity(rows) {
  return `
    <table class="complexity-table">
      <thead><tr><th>Operation</th><th>Time</th><th>Space</th></tr></thead>
      <tbody>
        ${rows.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("")}
      </tbody>
    </table>`;
}

const SOURCE_META = [
  { key: "w3schools", name: "W3Schools", icon: "&#128216;", color: "#0891b2" },
  { key: "leetcode", name: "LeetCode", icon: "&#129513;", color: "#f59e0b" },
  { key: "gfg", name: "GeeksforGeeks", icon: "&#128215;", color: "#15803d" },
  { key: "programiz", name: "Programiz", icon: "&#128161;", color: "#7c3aed" },
  { key: "tutorialspoint", name: "TutorialsPoint", icon: "&#128217;", color: "#dc2626" },
  { key: "wikipedia", name: "Wikipedia", icon: "&#128218;", color: "#475569" },
  { key: "cpalgo", name: "CP-Algorithms", icon: "&#9874;", color: "#2563eb" },
  { key: "visualgo", name: "VisuAlgo", icon: "&#128200;", color: "#0f766e" },
  { key: "khan", name: "Khan Academy", icon: "&#127891;", color: "#9333ea" }
];

const STATIC_SOURCE_FALLBACKS = {
  w3schools: "https://www.w3schools.com/dsa/dsa_intro.php",
  programiz: "https://www.programiz.com/dsa",
  tutorialspoint: "https://www.tutorialspoint.com/data_structures_algorithms/index.htm",
  khan: "https://www.khanacademy.org/computing/computer-science/algorithms"
};

const CURATED_CHAPTER_LINKS = {
  1: { leetcode: "https://leetcode.com/explore/learn/card/fun-with-arrays/", gfg: "https://www.geeksforgeeks.org/introduction-to-data-structures/", wikipedia: "https://en.wikipedia.org/wiki/Data_structure", cpalgo: "https://cp-algorithms.com/", visualgo: "https://visualgo.net/en" },
  2: { leetcode: "https://leetcode.com/problems/contains-duplicate/", gfg: "https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/", wikipedia: "https://en.wikipedia.org/wiki/Time_complexity", cpalgo: "https://cp-algorithms.com/", visualgo: "https://visualgo.net/en/sorting" },
  3: { leetcode: "https://leetcode.com/problems/move-zeroes/", gfg: "https://www.geeksforgeeks.org/space-complexity-of-algorithms/", wikipedia: "https://en.wikipedia.org/wiki/Space_complexity", cpalgo: "https://cp-algorithms.com/", visualgo: "https://visualgo.net/en/list" },
  4: { leetcode: "https://leetcode.com/problems/two-sum/", gfg: "https://www.geeksforgeeks.org/array-data-structure-guide/", wikipedia: "https://en.wikipedia.org/wiki/Array_(data_structure)", cpalgo: "https://cp-algorithms.com/", visualgo: "https://visualgo.net/en/list" },
  5: { leetcode: "https://leetcode.com/problems/valid-anagram/", gfg: "https://www.geeksforgeeks.org/string-data-structure/", wikipedia: "https://en.wikipedia.org/wiki/String_(computer_science)", cpalgo: "https://cp-algorithms.com/string/prefix-function.html", visualgo: "https://visualgo.net/en" },
  6: { leetcode: "https://leetcode.com/problems/fibonacci-number/", gfg: "https://www.geeksforgeeks.org/recursion/", wikipedia: "https://en.wikipedia.org/wiki/Recursion_(computer_science)", cpalgo: "https://cp-algorithms.com/", visualgo: "https://visualgo.net/en" },
  7: { leetcode: "https://leetcode.com/problems/sort-an-array/", gfg: "https://www.geeksforgeeks.org/sorting-algorithms/", wikipedia: "https://en.wikipedia.org/wiki/Sorting_algorithm", cpalgo: "https://cp-algorithms.com/", visualgo: "https://visualgo.net/en/sorting" },
  8: { leetcode: "https://leetcode.com/problems/binary-search/", gfg: "https://www.geeksforgeeks.org/binary-search/", wikipedia: "https://en.wikipedia.org/wiki/Binary_search_algorithm", cpalgo: "https://cp-algorithms.com/num_methods/binary_search.html", visualgo: "https://visualgo.net/en/bst" },
  9: { leetcode: "https://leetcode.com/problems/group-anagrams/", gfg: "https://www.geeksforgeeks.org/hashing-data-structure/", wikipedia: "https://en.wikipedia.org/wiki/Hash_table", cpalgo: "https://cp-algorithms.com/string/string-hashing.html", visualgo: "https://visualgo.net/en/hashtable" },
  10: { leetcode: "https://leetcode.com/problems/valid-palindrome/", gfg: "https://www.geeksforgeeks.org/two-pointers-technique/", wikipedia: "https://en.wikipedia.org/wiki/Pointer_(computer_programming)", cpalgo: "https://cp-algorithms.com/", visualgo: "https://visualgo.net/en/list" },
  11: { leetcode: "https://leetcode.com/problems/reverse-linked-list/", gfg: "https://www.geeksforgeeks.org/data-structures/linked-list/", wikipedia: "https://en.wikipedia.org/wiki/Linked_list", cpalgo: "https://cp-algorithms.com/", visualgo: "https://visualgo.net/en/list" },
  12: { leetcode: "https://leetcode.com/problems/valid-parentheses/", gfg: "https://www.geeksforgeeks.org/stack-data-structure/", wikipedia: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)", cpalgo: "https://cp-algorithms.com/", visualgo: "https://visualgo.net/en/list" },
  13: { leetcode: "https://leetcode.com/problems/implement-queue-using-stacks/", gfg: "https://www.geeksforgeeks.org/queue-data-structure/", wikipedia: "https://en.wikipedia.org/wiki/Queue_(abstract_data_type)", cpalgo: "https://cp-algorithms.com/graph/breadth-first-search.html", visualgo: "https://visualgo.net/en/list" },
  14: { leetcode: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", gfg: "https://www.geeksforgeeks.org/window-sliding-technique/", wikipedia: "https://en.wikipedia.org/wiki/Sliding_window_protocol", cpalgo: "https://cp-algorithms.com/", visualgo: "https://visualgo.net/en/list" },
  15: { leetcode: "https://leetcode.com/problems/range-sum-query-immutable/", gfg: "https://www.geeksforgeeks.org/understanding-prefix-sums/", wikipedia: "https://en.wikipedia.org/wiki/Summed-area_table", cpalgo: "https://cp-algorithms.com/data_structures/fenwick.html", visualgo: "https://visualgo.net/en/fenwicktree" },
  16: { leetcode: "https://leetcode.com/problems/binary-tree-level-order-traversal/", gfg: "https://www.geeksforgeeks.org/tree-data-structure/", wikipedia: "https://en.wikipedia.org/wiki/Tree_(data_structure)", cpalgo: "https://cp-algorithms.com/graph/depth-first-search.html", visualgo: "https://visualgo.net/en/bst" },
  17: { leetcode: "https://leetcode.com/problems/validate-binary-search-tree/", gfg: "https://www.geeksforgeeks.org/binary-search-tree-data-structure/", wikipedia: "https://en.wikipedia.org/wiki/Binary_search_tree", cpalgo: "https://cp-algorithms.com/data_structures/treap.html", visualgo: "https://visualgo.net/en/bst" },
  18: { leetcode: "https://leetcode.com/problems/kth-largest-element-in-an-array/", gfg: "https://www.geeksforgeeks.org/heap-data-structure/", wikipedia: "https://en.wikipedia.org/wiki/Heap_(data_structure)", cpalgo: "https://cp-algorithms.com/graph/dijkstra.html", visualgo: "https://visualgo.net/en/heap" },
  19: { leetcode: "https://leetcode.com/problems/jump-game/", gfg: "https://www.geeksforgeeks.org/greedy-algorithms/", wikipedia: "https://en.wikipedia.org/wiki/Greedy_algorithm", cpalgo: "https://cp-algorithms.com/", visualgo: "https://visualgo.net/en/sorting" },
  20: { leetcode: "https://leetcode.com/problems/subsets/", gfg: "https://www.geeksforgeeks.org/backtracking-algorithms/", wikipedia: "https://en.wikipedia.org/wiki/Backtracking", cpalgo: "https://cp-algorithms.com/", visualgo: "https://visualgo.net/en" },
  21: { leetcode: "https://leetcode.com/problems/number-of-provinces/", gfg: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/", wikipedia: "https://en.wikipedia.org/wiki/Graph_(abstract_data_type)", cpalgo: "https://cp-algorithms.com/graph/depth-first-search.html", visualgo: "https://visualgo.net/en/graphds" },
  22: { leetcode: "https://leetcode.com/problems/number-of-islands/", gfg: "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/", wikipedia: "https://en.wikipedia.org/wiki/Depth-first_search", cpalgo: "https://cp-algorithms.com/graph/depth-first-search.html", visualgo: "https://visualgo.net/en/dfsbfs" },
  23: { leetcode: "https://leetcode.com/problems/rotting-oranges/", gfg: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/", wikipedia: "https://en.wikipedia.org/wiki/Breadth-first_search", cpalgo: "https://cp-algorithms.com/graph/breadth-first-search.html", visualgo: "https://visualgo.net/en/dfsbfs" },
  24: { leetcode: "https://leetcode.com/problems/house-robber/", gfg: "https://www.geeksforgeeks.org/dynamic-programming/", wikipedia: "https://en.wikipedia.org/wiki/Dynamic_programming", cpalgo: "https://cp-algorithms.com/dynamic_programming/intro-to-dp.html", visualgo: "https://visualgo.net/en" },
  25: { leetcode: "https://leetcode.com/problems/implement-trie-prefix-tree/", gfg: "https://www.geeksforgeeks.org/trie-insert-and-search/", wikipedia: "https://en.wikipedia.org/wiki/Trie", cpalgo: "https://cp-algorithms.com/string/suffix-automaton.html", visualgo: "https://visualgo.net/en" },
  26: { leetcode: "https://leetcode.com/problems/range-sum-query-mutable/", gfg: "https://www.geeksforgeeks.org/segment-tree-data-structure/", wikipedia: "https://en.wikipedia.org/wiki/Segment_tree", cpalgo: "https://cp-algorithms.com/data_structures/segment_tree.html", visualgo: "https://visualgo.net/en/segmenttree" },
  27: { leetcode: "https://leetcode.com/problems/redundant-connection/", gfg: "https://www.geeksforgeeks.org/disjoint-set-data-structures/", wikipedia: "https://en.wikipedia.org/wiki/Disjoint-set_data_structure", cpalgo: "https://cp-algorithms.com/data_structures/disjoint_set_union.html", visualgo: "https://visualgo.net/en/ufds" },
  28: { leetcode: "https://leetcode.com/problems/single-number/", gfg: "https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/", wikipedia: "https://en.wikipedia.org/wiki/Bitwise_operation", cpalgo: "https://cp-algorithms.com/algebra/bit-manipulation.html", visualgo: "https://visualgo.net/en" },
  29: { leetcode: "https://leetcode.com/problems/longest-increasing-subsequence/", gfg: "https://www.geeksforgeeks.org/dynamic-programming/", wikipedia: "https://en.wikipedia.org/wiki/Dynamic_programming", cpalgo: "https://cp-algorithms.com/dynamic_programming/intro-to-dp.html", visualgo: "https://visualgo.net/en" },
  30: { leetcode: "https://leetcode.com/problems/network-delay-time/", gfg: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/", wikipedia: "https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm", cpalgo: "https://cp-algorithms.com/graph/dijkstra.html", visualgo: "https://visualgo.net/en/sssp" },
  31: { leetcode: "https://leetcode.com/problem-list/top-interview-questions/", gfg: "https://www.geeksforgeeks.org/coding-interview-preparation/", wikipedia: "https://en.wikipedia.org/wiki/Algorithm_design_paradigm", cpalgo: "https://cp-algorithms.com/", visualgo: "https://visualgo.net/en" },
  32: { leetcode: "https://leetcode.com/studyplan/top-interview-150/", gfg: "https://www.geeksforgeeks.org/top-100-data-structure-and-algorithms-dsa-interview-questions-topic-wise/", wikipedia: "https://en.wikipedia.org/wiki/Competitive_programming", cpalgo: "https://cp-algorithms.com/", visualgo: "https://visualgo.net/en" },
  33: { leetcode: "https://leetcode.com/interview/", gfg: "https://www.geeksforgeeks.org/how-to-prepare-for-coding-interview/", wikipedia: "https://en.wikipedia.org/wiki/Job_interview", cpalgo: "https://cp-algorithms.com/", visualgo: "https://visualgo.net/en" },
  34: { leetcode: "https://leetcode.com/discuss/interview-question", gfg: "https://www.geeksforgeeks.org/software-engineer-resume-tips-to-get-an-interview-call/", wikipedia: "https://en.wikipedia.org/wiki/R%C3%A9sum%C3%A9", cpalgo: "https://cp-algorithms.com/", visualgo: "https://visualgo.net/en" },
  35: { leetcode: "https://leetcode.com/assessment/", gfg: "https://www.geeksforgeeks.org/how-to-prepare-for-online-assessment-tests-for-software-companies/", wikipedia: "https://en.wikipedia.org/wiki/Pre-employment_testing", cpalgo: "https://cp-algorithms.com/", visualgo: "https://visualgo.net/en" }
};

const TOPIC_EXTRA_NOTES = {
  1: "Think in operations first: insert, delete, find, update, and range query. Data-structure choice should come before coding details.",
  2: "Count dominant operations as input scales. Ignore constants, compare growth classes, and defend complexity with loop and recursion-tree reasoning.",
  3: "Include auxiliary arrays, recursion depth, and temporary copies. Many interview optimizations come from replacing extra memory with in-place transitions.",
  4: "Array problems often unlock with index arithmetic, prefix summaries, and boundary handling. Strong index discipline prevents most implementation bugs.",
  5: "String questions usually reduce to frequency counting, pattern matching, or window boundaries. Be explicit about charset assumptions and case handling.",
  6: "Recursion is state modeling. Define base case, recursive progress, and return merge rule. If depth is risky, convert to iterative stack.",
  7: "Sorting is a preprocessing tool. Sort once, then solve with linear scans, binary search, interval merging, or greedy selection.",
  8: "Binary search needs monotonic truth. Define invariant, boundaries, and move rule clearly before writing the loop.",
  9: "Hashing trades memory for speed. Use hash map for counts/indexes and hash set for existence checks.",
  10: "Two pointers work when movement can be proven safe. Sorted order or constraints justify shrinking search space in O(n).",
  11: "Linked-list mastery is pointer safety. Preserve next pointer before rewiring and use dummy nodes to simplify head edge cases.",
  12: "Stacks solve nested dependencies. Decide what each stack element represents: value, index, or state snapshot.",
  13: "Queues model ordered processing. BFS and scheduling both rely on enqueue/dequeue invariants and careful visited-state timing.",
  14: "Sliding window requires an explicit invalid condition. Expand to explore, shrink to restore validity, and update answer at the right moment.",
  15: "Prefix sum converts repeated range work to O(1) query time. The critical skill is consistent index framing.",
  16: "Tree problems become easier with subtree contracts: what each recursive call guarantees when it returns.",
  17: "BST efficiency depends on height. Always mention balanced vs skewed behavior when discussing time complexity.",
  18: "Heaps are for top-k and priority extraction, not full sorting. Keep heap size controlled for best performance.",
  19: "Greedy is valid only with proof intuition: local optimal choices must preserve global optimality.",
  20: "Backtracking is controlled brute force. Add pruning early and always undo mutable state between branches.",
  21: "Graph success starts with representation: adjacency list for sparse graphs, matrix for dense graphs.",
  22: "DFS is exploration depth-first. Use recursion stack logic for directed-cycle detection and postorder dependencies.",
  23: "BFS guarantees shortest path in unweighted graphs because nodes are visited in increasing edge distance.",
  24: "DP requires state design first, transition second. Bad state definitions create exponential complexity or invalid recurrences.",
  25: "Trie is ideal for prefix-heavy workloads like autocomplete and dictionary checks with shared prefixes.",
  26: "Segment tree handles dynamic range queries with updates. Correct overlap-case handling is the core implementation challenge.",
  27: "Union-Find solves dynamic connectivity efficiently with path compression and union-by-rank or size.",
  28: "Bit manipulation is constant-time state encoding. Practice masks, toggles, subsets, and XOR identities.",
  29: "Advanced DP often needs dimensional thinking: index + constraint + decision. Reduce dimensions when transition allows rolling states.",
  30: "Shortest path selection depends on edge constraints: BFS (unweighted), Dijkstra (non-negative), Bellman-Ford (negative edges).",
  31: "Pattern recognition is interview acceleration. Classify by constraints before code to avoid wrong-template implementation.",
  32: "Top-100 practice should be revision-driven. Track mistakes, revisit weak patterns, and measure time-to-solution improvement.",
  33: "Mock rounds test communication, not only code. Narrate trade-offs, test cases, and complexity under time pressure.",
  34: "Resume quality is leverage. Use action + impact + metric bullets and ensure claims are defendable in interviews.",
  35: "OA clearing is execution strategy: triage quickly, secure easy points, then attack medium/hard with checkpoints."
};

function renderDeepDiveDetails(chapter) {
  const note = TOPIC_EXTRA_NOTES[chapter.id] || "Use constraint-first thinking and map the problem to a proven pattern.";
  const refs = CURATED_CHAPTER_LINKS[chapter.id] || {};
  const referenceLinks = [
    refs.cpalgo ? `<a href="${refs.cpalgo}" target="_blank" rel="noopener noreferrer">CP-Algorithms</a>` : "",
    refs.gfg ? `<a href="${refs.gfg}" target="_blank" rel="noopener noreferrer">GeeksforGeeks</a>` : "",
    refs.wikipedia ? `<a href="${refs.wikipedia}" target="_blank" rel="noopener noreferrer">Wikipedia</a>` : ""
  ].filter(Boolean);

  return `
    <section class="card-block">
      <h4>Deep Dive (Reference-backed)</h4>
      <p>${note}</p>
      <ul>
        <li>Interview checklist: define constraints, pick pattern, justify complexity, test edge cases.</li>
        <li>Implementation checklist: maintain invariant, update state safely, verify corner inputs.</li>
      </ul>
      <p class="muted">Reference reading: ${referenceLinks.length ? referenceLinks.join(" | ") : "Use curated source links below."}</p>
    </section>
  `;
}

function renderSourceLinks(chapter) {
  const chapterLinks = CURATED_CHAPTER_LINKS[chapter.id] || {};
  const resources = SOURCE_META.map((source) => {
    const url = chapterLinks[source.key] || STATIC_SOURCE_FALLBACKS[source.key] || "https://visualgo.net/en";
    // CP-Algorithms fallback for users whose network blocks the domain/SSL chain.
    const fallbackUrl =
      source.key === "cpalgo"
        ? (chapterLinks.gfg || chapterLinks.wikipedia || STATIC_SOURCE_FALLBACKS.programiz)
        : "";

    return {
      ...source,
      url,
      fallbackUrl
    };
  });

  return `
    <div class="source-links">
      ${resources
        .map(
          (r) => `<a class="source-btn" style="--src-color:${r.color}" href="${r.url}" data-source-key="${r.key}" data-primary-url="${r.url}" data-fallback-url="${r.fallbackUrl}" target="_blank" rel="noopener noreferrer">
            <span>${r.icon}</span>${r.name}
          </a>`
        )
        .join("")}
    </div>
    <p class="muted">All links are fixed curated direct URLs (no Google redirect) and open in a new tab.</p>
  `;
}

function enforceSingleExpandedPhase() {
  const order = ["Beginner", "Intermediate", "Advanced", "Interview Mastery"];
  const active = order.filter((p) => state.phaseState[p]);
  const keep = active.length ? active[0] : "Beginner";
  order.forEach((p) => {
    state.phaseState[p] = p === keep;
  });
}

function getPhaseFromProgress() {
  const maxCompleted = Math.max(0, ...state.completed);
  if (state.trackMode === "experienced" && maxCompleted === 0) return "Intermediate (Fast Track)";
  if (maxCompleted >= 31) return "Interview Mastery";
  if (maxCompleted >= 21) return "Advanced";
  if (maxCompleted >= 11) return "Intermediate";
  return "Beginner";
}

function renderChapter(id) {
  const chapter = chapters.find((item) => item.id === id) || chapters[0];
  const index = chapters.findIndex((item) => item.id === chapter.id);
  const prev = chapters[index - 1];
  const next = chapters[index + 1];

  state.currentChapter = chapter.id;
  localStorage.setItem(STORAGE_KEYS.current, String(chapter.id));

  refs.chapterContent.classList.remove("fade-in");
  void refs.chapterContent.offsetWidth;
  refs.chapterContent.classList.add("fade-in");

  refs.chapterContent.innerHTML = `
    <div class="chapter-head">
      <div>
        <span class="chapter-chip">${chapter.phase}</span>
        <h3>${chapter.id}. ${chapter.title}</h3>
      </div>
      <div class="chapter-actions">
        <button class="btn btn-ghost small" id="bookmarkBtn">${state.bookmarks.includes(chapter.id) ? "Bookmarked" : "Bookmark"}</button>
        <button class="btn btn-primary small" id="completeBtn">${state.completed.includes(chapter.id) ? "Completed" : "Mark Completed"}</button>
      </div>
    </div>

    <div class="chapter-grid">
      <section class="card-block"><h4>Why It Matters</h4><p>${chapter.why}</p></section>
      <section class="card-block"><h4>Theory Explanation</h4><p>${chapter.theory}</p></section>
      ${renderDeepDiveDetails(chapter)}
      <section class="card-block"><h4>Visual Diagram (HTML/CSS)</h4>${renderDiagram(chapter.diagram)}</section>
      <section class="card-block"><h4>Real World Use Case</h4><p>${chapter.useCase}</p></section>
      <section class="card-block"><h4>Complexity Table</h4>${renderComplexity(chapter.complexity)}</section>
      <section class="card-block"><h4>C# Example</h4><pre><code>${escapeHtml(chapter.csharp)}</code></pre></section>
      <section class="card-block"><h4>Python Example</h4><pre><code>${escapeHtml(chapter.python)}</code></pre></section>
      <section class="card-block"><h4>Common Mistakes</h4>${formatList(chapter.mistakes)}</section>
      <section class="card-block"><h4>Interview Tips</h4>${formatList(chapter.tips)}</section>
      <section class="card-block"><h4>Practice Problems</h4>${formatList(chapter.practice)}</section>
      <section class="card-block"><h4>Chapter Summary</h4><p>${chapter.summary}</p></section>
      <section class="card-block"><h4>Topic-Wise Source Links</h4>${renderSourceLinks(chapter)}</section>
    </div>

    <section class="quiz" id="quizSection">
      <h4>Quick Quiz</h4>
      <p>${chapter.quiz.q}</p>
      <div class="quiz-options" id="quizOptions">
        ${chapter.quiz.options
          .map((opt, idx) => `<button class="quiz-option" data-quiz-option="${idx}">${opt}</button>`)
          .join("")}
      </div>
      <p class="muted" id="quizFeedback"></p>
    </section>

    <div class="chapter-nav-buttons">
      <button class="btn btn-ghost" id="prevChapterBtn" ${!prev ? "disabled" : ""}>${prev ? `<- ${prev.title}` : "No Previous"}</button>
      <button class="btn btn-primary" id="nextChapterBtn" ${!next ? "disabled" : ""}>${next ? `${next.title} ->` : "Course Complete"}</button>
    </div>
  `;

  refs.notesArea.value = state.notes[String(chapter.id)] || "";
  refs.notesStatus.textContent = `Editing notes for Chapter ${chapter.id}`;

  wireChapterActions(chapter, prev, next);
  renderNav(refs.chapterSearch.value);
  updateDashboard();
}

function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function wireChapterActions(chapter, prev, next) {
  const bookmarkBtn = document.getElementById("bookmarkBtn");
  const completeBtn = document.getElementById("completeBtn");
  const nextBtn = document.getElementById("nextChapterBtn");
  const prevBtn = document.getElementById("prevChapterBtn");
  const quizOptions = document.querySelectorAll("[data-quiz-option]");
  const quizFeedback = document.getElementById("quizFeedback");

  bookmarkBtn?.addEventListener("click", () => {
    toggleBookmark(chapter.id);
    renderChapter(chapter.id);
  });

  completeBtn?.addEventListener("click", () => {
    toggleCompleted(chapter.id);
    renderChapter(chapter.id);
  });

  nextBtn?.addEventListener("click", () => {
    if (!next) return;
    renderChapter(next.id);
    document.getElementById("chapters")?.scrollIntoView({ behavior: "smooth" });
  });

  prevBtn?.addEventListener("click", () => {
    if (!prev) return;
    renderChapter(prev.id);
    document.getElementById("chapters")?.scrollIntoView({ behavior: "smooth" });
  });

  quizOptions.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = Number(button.getAttribute("data-quiz-option"));
      quizOptions.forEach((btn) => btn.classList.remove("correct", "wrong"));

      if (selected === chapter.quiz.answer) {
        button.classList.add("correct");
        quizFeedback.textContent = `Correct. ${chapter.quiz.explain}`;
      } else {
        button.classList.add("wrong");
        const correctBtn = [...quizOptions].find((btn) => Number(btn.getAttribute("data-quiz-option")) === chapter.quiz.answer);
        correctBtn?.classList.add("correct");
        quizFeedback.textContent = `Not quite. ${chapter.quiz.explain}`;
      }
    });
  });
}

async function isUrlReachable(url) {
  try {
    // no-cors lets us perform a lightweight network reachability test across domains.
    await fetch(url, { method: "GET", mode: "no-cors", cache: "no-store" });
    return true;
  } catch {
    return false;
  }
}

function toggleCompleted(id) {
  if (state.completed.includes(id)) {
    state.completed = state.completed.filter((item) => item !== id);
  } else {
    state.completed.push(id);
  }
  state.completed.sort((a, b) => a - b);
  saveJson(STORAGE_KEYS.completed, state.completed);
}

function toggleBookmark(id) {
  if (state.bookmarks.includes(id)) {
    state.bookmarks = state.bookmarks.filter((item) => item !== id);
  } else {
    state.bookmarks.push(id);
  }
  state.bookmarks.sort((a, b) => a - b);
  saveJson(STORAGE_KEYS.bookmarks, state.bookmarks);
  renderBookmarks();
}

function renderBookmarks() {
  if (!state.bookmarks.length) {
    refs.bookmarkList.innerHTML = "<li>No bookmarks yet.</li>";
    return;
  }

  refs.bookmarkList.innerHTML = state.bookmarks
    .map((id) => chapters.find((c) => c.id === id))
    .filter(Boolean)
    .map((chapter) => `<li><button class="chapter-link" data-bookmark-open="${chapter.id}">${chapter.id}. ${chapter.title}</button></li>`)
    .join("");
}

function updateDashboard() {
  const completed = state.completed.length;
  const total = chapters.length;
  const percent = Math.round((completed / total) * 100);
  const hoursPerChapter = state.trackMode === "experienced" ? 1.0 : 1.5;

  refs.completedMetric.textContent = `${completed} / ${total}`;
  refs.progressMetric.textContent = `${percent}%`;
  refs.timeMetric.textContent = `${(completed * hoursPerChapter).toFixed(1)}h`;
  refs.phaseMetric.textContent = getPhaseFromProgress();
  refs.streakValue.textContent = `Streak: ${state.streak.count} day${state.streak.count > 1 ? "s" : ""}`;
}

function bindGlobalEvents() {
  refs.themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEYS.theme, state.theme);
    applyTheme();
  });

  refs.mobileNavToggle.addEventListener("click", () => {
    refs.sidebar.classList.toggle("open");
  });

  refs.nav.addEventListener("click", (event) => {
    const target = event.target.closest("[data-chapter-id]");
    if (!target) return;
    renderChapter(Number(target.getAttribute("data-chapter-id")));
    refs.sidebar.classList.remove("open");
    document.getElementById("chapters")?.scrollIntoView({ behavior: "smooth" });
  });

  refs.phaseControls.addEventListener("click", (event) => {
    const target = event.target.closest("[data-phase-toggle]");
    if (!target) return;
    const phase = target.getAttribute("data-phase-toggle");
    Object.keys(state.phaseState).forEach((key) => {
      state.phaseState[key] = key === phase;
    });
    saveJson(STORAGE_KEYS.phases, state.phaseState);
    renderPhaseControls();
    renderNav(refs.chapterSearch.value);
  });

  refs.trackModeToggle?.addEventListener("click", (event) => {
    const target = event.target.closest("[data-track-mode]");
    if (!target) return;
    const mode = target.getAttribute("data-track-mode");
    if (!["fresher", "experienced"].includes(mode)) return;
    setTrackMode(mode);
  });

  refs.rolePathGrid?.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-role-path][data-action]");
    if (!trigger) return;
    const pathId = trigger.getAttribute("data-role-path");
    const action = trigger.getAttribute("data-action");
    activateRolePath(pathId, action);
  });

  refs.chapterSearch.addEventListener("input", () => {
    renderNav(refs.chapterSearch.value);
  });

  refs.bookmarkList.addEventListener("click", (event) => {
    const target = event.target.closest("[data-bookmark-open]");
    if (!target) return;
    renderChapter(Number(target.getAttribute("data-bookmark-open")));
    document.getElementById("chapters")?.scrollIntoView({ behavior: "smooth" });
  });

  refs.chapterContent.addEventListener("click", async (event) => {
    const link = event.target.closest(".source-btn");
    if (!link) return;

    const sourceKey = link.getAttribute("data-source-key");
    if (sourceKey !== "cpalgo") return;

    event.preventDefault();

    const primaryUrl = link.getAttribute("data-primary-url") || link.getAttribute("href");
    const fallbackUrl = link.getAttribute("data-fallback-url") || link.getAttribute("href");

    const newTab = window.open("about:blank", "_blank", "noopener,noreferrer");
    if (!newTab) return;

    const ok = await isUrlReachable(primaryUrl);
    newTab.location.href = ok ? primaryUrl : fallbackUrl;
  });

  refs.saveNotesBtn.addEventListener("click", () => {
    state.notes[String(state.currentChapter)] = refs.notesArea.value;
    saveJson(STORAGE_KEYS.notes, state.notes);
    refs.notesStatus.textContent = `Saved notes for Chapter ${state.currentChapter}`;
  });

  refs.clearNotesBtn.addEventListener("click", () => {
    delete state.notes[String(state.currentChapter)];
    saveJson(STORAGE_KEYS.notes, state.notes);
    refs.notesArea.value = "";
    refs.notesStatus.textContent = `Cleared notes for Chapter ${state.currentChapter}`;
  });

  refs.randomChapterBtn.addEventListener("click", () => {
    const randomChapter = chapters[Math.floor(Math.random() * chapters.length)];
    renderChapter(randomChapter.id);
    document.getElementById("chapters")?.scrollIntoView({ behavior: "smooth" });
  });

  refs.saveGoalBtn.addEventListener("click", () => {
    const target = Math.max(1, Math.min(20, Number(refs.dailyGoalInput.value) || 2));
    state.goal.target = target;
    saveJson(STORAGE_KEYS.goal, state.goal);
    syncGoalText();
  });

  refs.plusSolvedBtn.addEventListener("click", () => {
    state.goal.solved = Math.min(999, state.goal.solved + 1);
    saveJson(STORAGE_KEYS.goal, state.goal);
    syncGoalText();
  });

  refs.minusSolvedBtn.addEventListener("click", () => {
    state.goal.solved = Math.max(0, state.goal.solved - 1);
    saveJson(STORAGE_KEYS.goal, state.goal);
    syncGoalText();
  });

  window.addEventListener("scroll", updateReadingProgress);
}

function updateReadingProgress() {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  refs.readingProgressBar.style.width = `${Math.min(100, Math.max(0, ratio))}%`;
}

function init() {
  refs.totalChaptersStat.textContent = String(chapters.length);
  applyTheme();
  initStreak();
  initGoal();
  renderRoadmap();
  renderRolePaths();
  renderPhaseControls();
  renderNav();
  renderBookmarks();
  bindGlobalEvents();
  renderChapter(state.currentChapter);
  updateReadingProgress();
}

init();

