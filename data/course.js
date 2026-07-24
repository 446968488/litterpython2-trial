window.COURSE_DATA = {
  "title": "和小光一起学 Python（体验版）",
  "chapters": [
    {
      "title": "第0章 思维热身",
      "lessons": [
        {
          "id": "c0l1",
          "title": "什么是程序",
          "icon": "🤖",
          "markdown": "## 程序就是一步一步的指令\n\n你教爸爸妈妈做三明治：先拿面包，涂果酱，再合起来。这一串\"先做什么、再做什么\"的步骤，电脑就叫它**程序**。\n\n> 程序 = 给电脑的一张\"步骤清单\"，它一步一步照着做。",
          "figures": [
            {
              "key": "robot_steps",
              "caption": "🤖 机器人按步骤做三明治：程序就是一步步的指令"
            }
          ],
          "takeaway": "程序呀，其实就是给电脑写的一张做事清单，你写一步它做一步，一步一步来。",
          "video": "video/c0l1.mp4",
          "videoCaption": "机器人照着步骤清单做三明治：先拿面包、涂果酱、合起来——一步一步按顺序做，这就是程序！",
          "words": [],
          "exercises": [
            {
              "type": "choice",
              "question": "下面哪一组是\"程序\"？",
              "options": [
                "随便乱按键盘",
                "先拿面包、涂果酱、合起来的步骤",
                "看电视"
              ],
              "answer": 1,
              "explain": "程序是有顺序的步骤清单。"
            },
            {
              "type": "choice",
              "question": "程序就是给电脑的一张什么清单？",
              "options": [
                "零食清单",
                "步骤清单",
                "玩具清单"
              ],
              "answer": 1,
              "explain": "程序是\"步骤清单\"，电脑一步一步照着做。"
            },
            {
              "type": "typing",
              "question": "键盘小挑战：这一节是概念课，没有要敲的单词，点一下就通过啦～",
              "words": [
                "STEP",
                "ORDER",
                "LIST"
              ]
            },
            {
              "type": "coding",
              "question": "程序就是给电脑的一串命令。写一行代码，让电脑说出：你好，程序！",
              "starter": "print(\"___\")",
              "expect": "你好，程序！",
              "hint": "用 print 把要显示的话放在引号里，再点运行。"
            }
          ]
        },
        {
          "id": "c0l2",
          "video": "video/c0l2.mp4",
          "videoCaption": "小朋友先穿袜子再穿鞋，顺序一反就穿不进去——步骤的顺序很重要！",
          "title": "顺序不能乱",
          "icon": "👟",
          "markdown": "## 顺序错了，结果就乱了\n\n穿鞋穿袜子：\n\n- ✅ 正确：先穿袜子，再穿鞋\n- ❌ 错了：先穿鞋，再想穿袜子——穿不进去！\n\n程序里的步骤**顺序很重要**。同样几步，换个顺序，结果可能完全不一样。",
          "figures": [
            {
              "key": "sequence_wrong",
              "caption": "👟 先穿袜再穿鞋才对，顺序一反就乱套"
            }
          ],
          "takeaway": "写清单的时候，顺序可有讲究啦！先说哪步后说哪步，电脑就严格照着来，顺序一乱，结果就乱套了。",
          "words": [
            {
              "en": "order",
              "zh": "顺序：谁先谁后的排列方法。"
            },
            {
              "en": "first",
              "zh": "首先、第一步：最先要做的那一步。"
            },
            {
              "en": "next",
              "zh": "接下来、下一个：紧跟着要做的下一步。"
            }
          ],
          "exercises": [
            {
              "type": "order",
              "question": "起床出门，把步骤按正确顺序排一排：",
              "steps": [
                "睁开眼",
                "穿衣服",
                "刷牙洗脸",
                "背上书包出门"
              ],
              "explain": "按真实生活顺序：先睁眼，再穿衣、洗漱，最后出门。"
            },
            {
              "type": "choice",
              "question": "想画出正方形，下面哪句最重要？",
              "options": [
                "随便画",
                "按正确的顺序画四条边",
                "只画一条线"
              ],
              "answer": 1,
              "explain": "顺序对了，画出来的才是正方形。"
            },
            {
              "type": "typing",
              "question": "照着敲一敲今天的新单词（打完会带你复习前面学过的词）：",
              "words": [
                "ORDER",
                "FIRST",
                "NEXT"
              ]
            },
            {
              "type": "coding",
              "question": "电脑从上到下依次执行命令。写三行 print，依次打印数字 1、2、3。",
              "starter": "print(1)\nprint(2)\nprint(3)",
              "expect": "1\n2\n3",
              "hint": "一行一行写，电脑会按顺序做。"
            }
          ]
        },
        {
          "id": "c0l3",
          "video": "video/c0l3.mp4",
          "videoCaption": "每天刷牙不用写365遍，说一句\"每天→刷牙\"电脑就自动重复，这就是循环！",
          "title": "循环真省力",
          "icon": "🔁",
          "markdown": "## 重复的事，用\"循环\"一句话搞定\n\n每天刷牙，要写 365 遍吗？不用！只说一句：**每天 → 刷牙**。电脑就自动重复做。\n\n这种\"重复做同一件事\"的本领，叫**循环**。",
          "figures": [
            {
              "key": "loop_teeth",
              "caption": "🔁 每天刷牙：不用写 365 遍，循环一句话搞定"
            }
          ],
          "takeaway": "循环就像说“这个动作重复做十遍”，电脑二话不说就帮你一遍遍做，省得你抄十次。",
          "words": [
            {
              "en": "loop",
              "zh": "循环：让电脑把同一件事重复做很多次。"
            },
            {
              "en": "again",
              "zh": "再一次：再来一遍。"
            },
            {
              "en": "repeat",
              "zh": "重复：一遍又一遍地做同一件事。"
            }
          ],
          "exercises": [
            {
              "type": "choice",
              "question": "下面哪种情况最适合用\"循环\"？",
              "options": [
                "只做一次的事",
                "把同一件事重复很多次",
                "什么都不做"
              ],
              "answer": 1,
              "explain": "重复很多次的事，用循环最省力。"
            },
            {
              "type": "choice",
              "question": "让电脑重复做一件事，这种本领叫什么？",
              "options": [
                "循环",
                "睡觉",
                "画画"
              ],
              "answer": 0,
              "explain": "循环 = 重复做同一件事，省时省力。"
            },
            {
              "type": "typing",
              "question": "照着敲一敲今天的新单词（打完会带你复习前面学过的词）：",
              "words": [
                "LOOP",
                "AGAIN",
                "REPEAT"
              ]
            },
            {
              "type": "coding",
              "question": "用循环算 1+2+3 的和，把结果打印出来（不用写三行加法）。",
              "starter": "total = 0\nfor i in range(1, 4):\n    total = total + i\nprint(___)",
              "expect": "6",
              "hint": "把累加好的变量 total 打印出来。"
            }
          ]
        }
      ]
    }
  ]
};
