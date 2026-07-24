// 学生园地 · 代码练手
// 两套代码练习，给学得快的孩子练手。每题用 Skulpt 在浏览器里真跑 Python 判分。
// 判分规则：运行输出里包含 expect 且无报错，即视为完成。
// 注意：内置 Python 引擎没有 json 模块、跑不了真实文件IO/网络/matplotlib；题目都按此约束设计。
//
// 两种练习（初级 / 中级）都是填空模式：
//   starter 里用 ____ 标出空缺，孩子补全后运行；完整答案放在 answer 字段，可点「看答案」对照。
//   expect 仍以输出命中为准判完成。
window.CODE_PRACTICE = {
  projects: [
    {
      id: 'p1', title: '火箭倒计时', fill: true,
      question: '写一个倒计时：从 5 数到 1，然后打印「发射！」。代码里 ____ 处要你来填。',
      hint: '用 range(5, 0, -1) 就能 5,4,3,2,1 依次打印。',
      starter: "for i in range(____, ____, ____):\n    print(i)\nprint('发射！')",
      answer: "for i in range(5, 0, -1):\n    print(i)\nprint('发射！')",
      expect: '发射！'
    },
    {
      id: 'p2', title: '乘法表前 5 行', fill: true,
      question: '打印九九乘法表的前 5 行：第 i 行打印 1×i 到 i×i。代码里 ____ 处要你来填。',
      hint: '两层 for：外层 i 从 1 到 5，内层 j 从 1 到 i。',
      starter: "for i in range(1, ____):\n    for j in range(1, ____):\n        print(str(j) + ' * ' + str(i) + ' = ' + str(i*j), end='  ')\n    print()",
      answer: "for i in range(1, 6):\n    for j in range(1, i + 1):\n        print(str(j) + ' * ' + str(i) + ' = ' + str(i*j), end='  ')\n    print()",
      expect: '5 * 5 = 25'
    },
    {
      id: 'p3', title: '累加 1 到 100', fill: true,
      question: '用循环把 1 到 100 全部加起来，打印总和。代码里 ____ 处要你来填。',
      hint: 'total 从 0 开始，每圈加 i。',
      starter: "total = ____\nfor i in range(1, ____):\n    total ____ i\nprint(total)",
      answer: "total = 0\nfor i in range(1, 101):\n    total += i\nprint(total)",
      expect: '5050'
    },
    {
      id: 'p4', title: '星号三角形', fill: true,
      question: '打印一个 5 行的星号三角形：第 1 行 1 个 *，第 5 行 5 个 *。代码里 ____ 处要你来填。',
      hint: "'*' * i 会重复出 i 个星号。",
      starter: "for i in range(1, ____):\n    print('*' * ____)",
      answer: "for i in range(1, 6):\n    print('*' * i)",
      expect: '*****'
    },
    {
      id: 'p5', title: '列表求和', fill: true,
      question: '下面这些数字的和是几？打印结果：3, 7, 2, 9, 5。代码里 ____ 处要你来填。',
      hint: 'sum(列表) 直接帮你加总。',
      starter: "nums = ____\nprint(____(nums))",
      answer: "nums = [3, 7, 2, 9, 5]\nprint(sum(nums))",
      expect: '26'
    },
    {
      id: 'p6', title: '找最大数', fill: true,
      question: "在列表 [4, 9, 2, 7, 1, 8] 里找出最大的数，打印「最大数是 X」。代码里 ____ 处要你来填。",
      hint: 'max(列表) 取最大值。',
      starter: "nums = ____\nprint('最大数是 ' + str(____(nums)))",
      answer: "nums = [4, 9, 2, 7, 1, 8]\nprint('最大数是 ' + str(max(nums)))",
      expect: '最大数是 9'
    },
    {
      id: 'p7', title: '字符串反转', fill: true,
      question: "把字符串 'hello' 反过来打印（变成 olleh）。代码里 ____ 处要你来填。",
      hint: "s[::-1] 表示把字符串倒着取。",
      starter: "s = ____\nprint(____)",
      answer: "s = 'hello'\nprint(s[::-1])",
      expect: 'olleh'
    },
    {
      id: 'p8', title: '统计元音', fill: true,
      question: "字符串 'education' 里有几个元音字母（a e i o u）？打印「元音有 X 个」。代码里 ____ 处要你来填。",
      hint: '用一个变量数，遇到元音就 +1。',
      starter: "s = 'education'\nvowels = 'aeiou'\ncount = ____\nfor ch in s:\n    if ch in vowels:\n        count ____ 1\nprint('元音有 ' + str(count) + ' 个')",
      answer: "s = 'education'\nvowels = 'aeiou'\ncount = 0\nfor ch in s:\n    if ch in vowels:\n        count += 1\nprint('元音有 ' + str(count) + ' 个')",
      expect: '元音有 5 个'
    },
    {
      id: 'p9', title: '判断素数', fill: true,
      question: '判断 17 是不是素数，打印「17 是素数」或「17 不是素数」。代码里 ____ 处要你来填。',
      hint: '从 2 试到 n-1，只要有一个能整除就不是素数。',
      starter: "n = 17\nis_prime = True\nfor i in range(2, ____):\n    if n % i == ____:\n        is_prime = False\nif is_prime:\n    print(str(n) + ' 是素数')\nelse:\n    print(str(n) + ' 不是素数')",
      answer: "n = 17\nis_prime = True\nfor i in range(2, n):\n    if n % i == 0:\n        is_prime = False\nif is_prime:\n    print(str(n) + ' 是素数')\nelse:\n    print(str(n) + ' 不是素数')",
      expect: '17 是素数'
    },
    {
      id: 'p10', title: '阶乘', fill: true,
      question: '计算 5 的阶乘（5! = 5×4×3×2×1），打印结果。代码里 ____ 处要你来填。',
      hint: 'result 从 1 开始，每圈乘 i。',
      starter: "result = ____\nfor i in range(1, ____):\n    result ____ i\nprint(result)",
      answer: "result = 1\nfor i in range(1, 6):\n    result *= i\nprint(result)",
      expect: '120'
    },
    {
      id: 'p11', title: '斐波那契前 10 项', fill: true,
      question: '打印斐波那契数列的前 10 项（1, 1, 2, 3, 5, 8, 13, 21, 34, 55）。代码里 ____ 处要你来填。',
      hint: 'a, b = b, a + b 能同时更新两个数。',
      starter: "a, b = 1, 1\nfib = []\nfor _ in range(____):\n    fib.append(a)\n    a, b = ____, ____\nprint(', '.join(str(x) for x in fib))",
      answer: "a, b = 1, 1\nfib = []\nfor _ in range(10):\n    fib.append(a)\n    a, b = b, a + b\nprint(', '.join(str(x) for x in fib))",
      expect: '55'
    },
    {
      id: 'p12', title: '摄氏转华氏', fill: true,
      question: '25 摄氏度等于多少华氏度？公式：华氏 = 摄氏 × 9/5 + 32，只打印整数部分。代码里 ____ 处要你来填。',
      hint: 'int(小数) 会直接去掉小数。',
      starter: "c = ____\nf = c * 9 / 5 + 32\nprint(____(f))",
      answer: "c = 25\nf = c * 9 / 5 + 32\nprint(int(f))",
      expect: '77'
    },
    {
      id: 'p13', title: '偶数', fill: true,
      question: '打印 1 到 20 里所有的偶数（每行一个）。代码里 ____ 处要你来填。',
      hint: 'i % 2 == 0 说明是偶数。',
      starter: "for i in range(1, ____):\n    if i % ____ == 0:\n        print(i)",
      answer: "for i in range(1, 21):\n    if i % 2 == 0:\n        print(i)",
      expect: '20'
    },
    {
      id: 'p14', title: '字母出现次数', fill: true,
      question: "在单词 'banana' 里，字母 a 出现了几次？打印「a 出现了 X 次」。代码里 ____ 处要你来填。",
      hint: "字符串的 .count('a') 能数出个数。",
      starter: "word = ____\nprint('a 出现了 ' + str(word.____('a')) + ' 次')",
      answer: "word = 'banana'\nprint('a 出现了 ' + str(word.count('a')) + ' 次')",
      expect: 'a 出现了 3 次'
    },
    {
      id: 'p15', title: '完整乘法表', fill: true,
      question: '打印完整的九九乘法表（1 到 9 行）。代码里 ____ 处要你来填。',
      hint: '和前 5 行一样，只是外层到 9。',
      starter: "for i in range(1, ____):\n    for j in range(1, ____):\n        print(str(j) + ' * ' + str(i) + ' = ' + str(i*j), end='  ')\n    print()",
      answer: "for i in range(1, 10):\n    for j in range(1, i + 1):\n        print(str(j) + ' * ' + str(i) + ' = ' + str(i*j), end='  ')\n    print()",
      expect: '9 * 9 = 81'
    },
    {
      id: 'p16', title: '7 的倍数', fill: true,
      question: '在 1 到 100 中，能被 7 整除的最大数是多少？打印它。代码里 ____ 处要你来填。',
      hint: '从小到大扫，遇到 7 的倍数就记下来，最后一个就是最大。',
      starter: "ans = ____\nfor i in range(1, ____):\n    if i % ____ == 0:\n        ans = i\nprint(ans)",
      answer: "ans = 0\nfor i in range(1, 101):\n    if i % 7 == 0:\n        ans = i\nprint(ans)",
      expect: '98'
    },
    {
      id: 'p17', title: '单词计数', fill: true,
      question: "句子 'python is fun' 里有几个单词？打印数量。代码里 ____ 处要你来填。",
      hint: "split() 按空格把句子拆成单词列表。",
      starter: "s = ____\nprint(____(s.split()))",
      answer: "s = 'python is fun'\nprint(len(s.split()))",
      expect: '3'
    },
    {
      id: 'p18', title: '列表去重', fill: true,
      question: '列表 [1, 2, 2, 3, 1, 4] 去掉重复后变成什么？保持原来的顺序，打印结果。代码里 ____ 处要你来填。',
      hint: '用一个新列表，只把没见过的加进去。',
      starter: "lst = [1, 2, 2, 3, 1, 4]\nseen = ____\nfor x in lst:\n    if x not in ____:\n        seen.____(x)\nprint(', '.join(str(x) for x in seen))",
      answer: "lst = [1, 2, 2, 3, 1, 4]\nseen = []\nfor x in lst:\n    if x not in seen:\n        seen.append(x)\nprint(', '.join(str(x) for x in seen))",
      expect: '1, 2, 3, 4'
    },
    {
      id: 'p19', title: 'BMI（整数）', fill: true,
      question: '体重 60 公斤、身高 1.7 米，BMI = 体重 ÷ 身高²，只打印整数部分。代码里 ____ 处要你来填。',
      hint: 'h * h 是身高平方。',
      starter: "w = ____\nh = 1.7\nbmi = w / (h * h)\nprint(____(bmi))",
      answer: "w = 60\nh = 1.7\nbmi = w / (h * h)\nprint(int(bmi))",
      expect: '20'
    },
    {
      id: 'p20', title: '3 的倍数求和', fill: true,
      question: '把 1 到 50 里所有 3 的倍数加起来，打印总和。代码里 ____ 处要你来填。',
      hint: 'i % 3 == 0 是 3 的倍数。',
      starter: "total = ____\nfor i in range(1, ____):\n    if i % ____ == 0:\n        total += i\nprint(total)",
      answer: "total = 0\nfor i in range(1, 51):\n    if i % 3 == 0:\n        total += i\nprint(total)",
      expect: '408'
    }
  ],
  advanced: [
    {
      id: 'a1', title: '回文数', fill: true,
      question: '判断 12321 是不是回文数（正着读反着读一样），打印「是回文数」或「不是回文数」。代码里 ____ 处要你来填。',
      hint: "把数字转成字符串，s == s[::-1] 就说明是回文。",
      starter: "n = ____\ns = str(n)\nif s == ____:\n    print('是回文数')\nelse:\n    print('不是回文数')",
      answer: "n = 12321\ns = str(n)\nif s == s[::-1]:\n    print('是回文数')\nelse:\n    print('不是回文数')",
      expect: '是回文数'
    },
    {
      id: 'a2', title: '冒泡排序', fill: true,
      question: '把列表 [5, 3, 8, 1, 2] 从小到大排序，打印排序后的结果。代码里 ____ 处要你来填。',
      hint: '相邻两个比较，大的往后换，重复多轮。',
      starter: "lst = [5, 3, 8, 1, 2]\nfor i in range(____):\n    for j in range(len(lst) - 1 - ____):\n        if lst[j] ____ lst[j + 1]:\n            lst[j], lst[j + 1] = lst[j + 1], lst[j]\nprint(', '.join(str(x) for x in lst))",
      answer: "lst = [5, 3, 8, 1, 2]\nfor i in range(len(lst)):\n    for j in range(len(lst) - 1 - i):\n        if lst[j] > lst[j + 1]:\n            lst[j], lst[j + 1] = lst[j + 1], lst[j]\nprint(', '.join(str(x) for x in lst))",
      expect: '1, 2, 3, 5, 8'
    },
    {
      id: 'a3', title: '最大公约数', fill: true,
      question: '求 48 和 36 的最大公约数，打印结果。代码里 ____ 处要你来填。',
      hint: '辗转相除法：用大的除以小的，余数接着除，直到余数为 0。',
      starter: "def gcd(a, b):\n    while ____:\n        a, b = ____, ____\n    return a\nprint(gcd(48, 36))",
      answer: "def gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a\nprint(gcd(48, 36))",
      expect: '12'
    },
    {
      id: 'a4', title: '质数个数', fill: true,
      question: '1 到 30 之间一共有几个素数？打印数量。代码里 ____ 处要你来填。',
      hint: '写一个判断素数的函数，再逐个试。',
      starter: "def is_prime(n):\n    if n < ____:\n        return False\n    for i in range(2, ____):\n        if n % i == 0:\n            return False\n    return True\ncount = 0\nfor i in range(1, 31):\n    if is_prime(i):\n        count ____ 1\nprint(count)",
      answer: "def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, n):\n        if n % i == 0:\n            return False\n    return True\ncount = 0\nfor i in range(1, 31):\n    if is_prime(i):\n        count += 1\nprint(count)",
      expect: '10'
    },
    {
      id: 'a5', title: '反转整数', fill: true,
      question: '把整数 123 反转，打印成 321（不用转成字符串的方法，用取余和整除）。代码里 ____ 处要你来填。',
      hint: '每次取末位 n % 10，再 n = n // 10 去掉末位。',
      starter: "n = 123\nrev = ____\nwhile ____ > 0:\n    rev = rev * 10 + ____ % 10\n    n ____= 10\nprint(rev)",
      answer: "n = 123\nrev = 0\nwhile n > 0:\n    rev = rev * 10 + n % 10\n    n //= 10\nprint(rev)",
      expect: '321'
    },
    {
      id: 'a6', title: '词频最高', fill: true,
      question: "在 'a b a c a b' 里，哪个单词出现次数最多？打印它。代码里 ____ 处要你来填。",
      hint: '用字典记每个词的次数，再找出最大的。',
      starter: "text = 'a b a c a b'\nwords = text.split()\ncount = ____\nfor w in words:\n    count[w] = count.____(w, 0) + 1\nbest = ''\nbest_n = -1\nfor w, c in count.items():\n    if c > ____:\n        best = w\n        best_n = c\nprint(best)",
      answer: "text = 'a b a c a b'\nwords = text.split()\ncount = {}\nfor w in words:\n    count[w] = count.get(w, 0) + 1\nbest = ''\nbest_n = -1\nfor w, c in count.items():\n    if c > best_n:\n        best = w\n        best_n = c\nprint(best)",
      expect: 'a'
    },
    {
      id: 'a7', title: '斐波那契第 n 项（递归）', fill: true,
      question: '用递归函数求出斐波那契数列第 10 项（fib(1)=1, fib(2)=1），打印结果。代码里 ____ 处要你来填。',
      hint: 'fib(n) = fib(n-1) + fib(n-2)，最前面两项返回 1。',
      starter: "def fib(n):\n    if n <= ____:\n        return 1\n    return fib(n - 1) ____ fib(n - 2)\nprint(fib(10))",
      answer: "def fib(n):\n    if n <= 2:\n        return 1\n    return fib(n - 1) + fib(n - 2)\nprint(fib(10))",
      expect: '55'
    },
    {
      id: 'a8', title: '闰年', fill: true,
      question: "判断 2024 年是不是闰年（能被 4 整除且不能被 100 整除，或能被 400 整除），打印「闰年」或「平年」。代码里 ____ 处要你来填。",
      hint: '条件是 (year%4==0 and year%100!=0) or year%400==0。',
      starter: "year = ____\nif (year % ____ == 0 and year % ____ != 0) or year % 400 == 0:\n    print('闰年')\nelse:\n    print('平年')",
      answer: "year = 2024\nif (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:\n    print('闰年')\nelse:\n    print('平年')",
      expect: '闰年'
    },
    {
      id: 'a9', title: '二进制转换', fill: true,
      question: '把十进制 13 转换成二进制（用循环，不用内置函数），打印结果 1101。代码里 ____ 处要你来填。',
      hint: '每次取 n % 2 当一位，再把 n 整除 2，注意要倒着拼。',
      starter: "n = ____\nbits = ____\nwhile ____ > 0:\n    bits = str(____ % 2) + bits\n    n ____= 2\nprint(bits)",
      answer: "n = 13\nbits = ''\nwhile n > 0:\n    bits = str(n % 2) + bits\n    n //= 2\nprint(bits)",
      expect: '1101'
    },
    {
      id: 'a10', title: '第二大数', fill: true,
      question: '在列表 [10, 5, 10, 8, 3] 里，第二大的数是多少（重复的只算一次）？打印它。代码里 ____ 处要你来填。',
      hint: '先去重，再排降序，取第二个。',
      starter: "lst = [10, 5, 10, 8, 3]\nuniq = ____\nfor x in lst:\n    if x not in ____:\n        uniq.____(x)\nuniq.sort(reverse=____)\nprint(uniq[1])",
      answer: "lst = [10, 5, 10, 8, 3]\nuniq = []\nfor x in lst:\n    if x not in uniq:\n        uniq.append(x)\nuniq.sort(reverse=True)\nprint(uniq[1])",
      expect: '8'
    },
    {
      id: 'a11', title: '变位词', fill: true,
      question: "判断 'listen' 和 'silent' 是不是变位词（字母一样、顺序不同），打印「是变位词」或「不是变位词」。代码里 ____ 处要你来填。",
      hint: '把两个词各自排序，排序后一样就是变位词。',
      starter: "a = ____\nb = ____\nif sorted(a) == ____:\n    print('是变位词')\nelse:\n    print('不是变位词')",
      answer: "a = 'listen'\nb = 'silent'\nif sorted(a) == sorted(b):\n    print('是变位词')\nelse:\n    print('不是变位词')",
      expect: '是变位词'
    },
    {
      id: 'a12', title: '阶乘之和', fill: true,
      question: '计算 1! + 2! + 3! + 4! + 5! 的总和，打印结果。代码里 ____ 处要你来填。',
      hint: '外层 n 从 1 到 5，内层算 n! 再累加。',
      starter: "total = ____\nfor n in range(1, ____):\n    f = ____\n    for i in range(1, n + 1):\n        f *= i\n    total ____ f\nprint(total)",
      answer: "total = 0\nfor n in range(1, 6):\n    f = 1\n    for i in range(1, n + 1):\n        f *= i\n    total += f\nprint(total)",
      expect: '153'
    },
    {
      id: 'a13', title: '水仙花数个数', fill: true,
      question: '100 到 999 之间有几个「水仙花数」（各位数字的立方和等于它本身，如 153=1³+5³+3³）？打印数量。代码里 ____ 处要你来填。',
      hint: '拆出百位、十位、个位，各自立方相加比较。',
      starter: "count = ____\nfor n in range(____, 1000):\n    a = n // 100\n    b = (n // 10) % 10\n    c = ____ % 10\n    if a**3 + b**3 + c**3 == n:\n        count ____ 1\nprint(count)",
      answer: "count = 0\nfor n in range(100, 1000):\n    a = n // 100\n    b = (n // 10) % 10\n    c = n % 10\n    if a**3 + b**3 + c**3 == n:\n        count += 1\nprint(count)",
      expect: '4'
    },
    {
      id: 'a14', title: '最长公共前缀', fill: true,
      question: "列表 ['flower', 'flow', 'flight'] 里所有单词的最长公共前缀是什么？打印它。代码里 ____ 处要你来填。",
      hint: '从第一个单词开始，逐步缩短，直到每个单词都以其开头。',
      starter: "words = ____\nprefix = ____\nfor w in words[1:]:\n    while not w.startswith(prefix):\n        prefix = ____[:-1]\nprint(prefix)",
      answer: "words = ['flower', 'flow', 'flight']\nprefix = words[0]\nfor w in words[1:]:\n    while not w.startswith(prefix):\n        prefix = prefix[:-1]\nprint(prefix)",
      expect: 'fl'
    },
    {
      id: 'a15', title: '数组旋转', fill: true,
      question: '把列表 [1, 2, 3, 4, 5] 向右循环移动 2 位（最后两个数移到最前面），打印结果 [4, 5, 1, 2, 3]。代码里 ____ 处要你来填。',
      hint: 'lst[-k:] 是最后 k 个，lst[:-k] 是前面剩下的，拼起来即可。',
      starter: "lst = ____\nk = ____\nres = lst[-k:] + ____\nprint(', '.join(str(x) for x in res))",
      answer: "lst = [1, 2, 3, 4, 5]\nk = 2\nres = lst[-k:] + lst[:-k]\nprint(', '.join(str(x) for x in res))",
      expect: '4, 5, 1, 2, 3'
    },
    {
      id: 'a16', title: '括号匹配', fill: true,
      question: "判断字符串 '(()())' 里的括号是否完全配对，打印「匹配」或「不匹配」。代码里 ____ 处要你来填。",
      hint: '遇 ( 加 1，遇 ) 减 1，过程中不能变负，最后要是 0。',
      starter: "s = ____\nstack = ____\nok = True\nfor ch in s:\n    if ch == '(':\n        stack ____ 1\n    else:\n        stack ____ 1\n        if stack < ____:\n            ok = False\nif stack == 0 and ok:\n    print('匹配')\nelse:\n    print('不匹配')",
      answer: "s = '(()())'\nstack = 0\nok = True\nfor ch in s:\n    if ch == '(':\n        stack += 1\n    else:\n        stack -= 1\n        if stack < 0:\n            ok = False\nif stack == 0 and ok:\n    print('匹配')\nelse:\n    print('不匹配')",
      expect: '匹配'
    },
    {
      id: 'a17', title: '列表交集', fill: true,
      question: '求 [1, 2, 3, 4] 和 [3, 4, 5] 的共同元素，打印结果。代码里 ____ 处要你来填。',
      hint: '用列表推导式：在 a 里、同时也在 b 里的元素。',
      starter: "a = ____\nb = ____\ninter = [x for x in a if x in ____]\nprint(', '.join(str(x) for x in inter))",
      answer: "a = [1, 2, 3, 4]\nb = [3, 4, 5]\ninter = [x for x in a if x in b]\nprint(', '.join(str(x) for x in inter))",
      expect: '3, 4'
    },
    {
      id: 'a18', title: '100 以内素数', fill: true,
      question: '打印 100 以内的所有素数，用逗号隔开。代码里 ____ 处要你来填。',
      hint: '和 a4 一样判断素数，把素数收集成字符串再打印。',
      starter: "def is_prime(n):\n    if n < ____:\n        return False\n    for i in range(2, ____):\n        if n % i == 0:\n            return False\n    return True\nprimes = [str(i) for i in range(2, ____) if is_prime(i)]\nprint(', '.join(primes))",
      answer: "def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, n):\n        if n % i == 0:\n            return False\n    return True\nprimes = [str(i) for i in range(2, 101) if is_prime(i)]\nprint(', '.join(primes))",
      expect: '97'
    },
    {
      id: 'a19', title: '组合数', fill: true,
      question: '计算组合数 C(5, 2)（从 5 个里选 2 个有多少种选法），打印结果。代码里 ____ 处要你来填。',
      hint: '用公式一条条乘再除，避免算大阶乘。',
      starter: "def c(n, k):\n    res = ____\n    for i in range(1, ____ + 1):\n        res = res * (____ - i + 1) // i\n    return res\nprint(c(5, 2))",
      answer: "def c(n, k):\n    res = 1\n    for i in range(1, k + 1):\n        res = res * (n - i + 1) // i\n    return res\nprint(c(5, 2))",
      expect: '10'
    },
    {
      id: 'a20', title: '最大子数组和', fill: true,
      question: '在 [-2, 1, -3, 4, -1, 2, 1, -5, 4] 中，连续子数组能凑出的最大和是多少？打印结果（答案是 6）。代码里 ____ 处要你来填。',
      hint: ' Kadane 算法：当前和取「自己 or 累加上去」里更大的，再和历史最大比。',
      starter: "nums = ____\nbest = ____\ncur = ____\nfor x in nums[1:]:\n    cur = max(____, cur + x)\n    best = max(____, cur)\nprint(best)",
      answer: "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]\nbest = nums[0]\ncur = nums[0]\nfor x in nums[1:]:\n    cur = max(x, cur + x)\n    best = max(best, cur)\nprint(best)",
      expect: '6'
    }
  ]
};
