// 单词本（小样：从课程英文术语抽取 3 个，验证模块可行性）
// enAudio = 英文真人发音(edge-tts 英文嗓)；zhAudio = 中文解释语音(晓晓)
window.WORD_LIST = [
  {
    en: 'print',
    zh: '打印、输出。把括号里的内容显示到屏幕上。例如 print("你好") 会在屏幕上显示"你好"。',
    enAudio: 'audio/words/print_en.mp3',
    zhAudio: 'audio/words/print_zh.mp3'
  },
  {
    en: 'if',
    zh: '如果。用来做判断，意思是"如果……就……"。例如 if x > 5: 就执行下面缩进的内容。',
    enAudio: 'audio/words/if_en.mp3',
    zhAudio: 'audio/words/if_zh.mp3'
  },
  {
    en: 'for',
    zh: '重复、循环。用来把一件事做很多次。例如 for i in range(3): 会把里面的内容重复做 3 次。',
    enAudio: 'audio/words/for_en.mp3',
    zhAudio: 'audio/words/for_zh.mp3'
  }
];
