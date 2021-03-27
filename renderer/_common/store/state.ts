export const initialState = {
  messageList: [
    {
      id: "0x4102",
      name: "订阅号",
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=mother",
      lastMessage: {
        content: "[38条] 为什么五菱宏光比特斯拉卖得好？",
        type: "text",
      },
      type: "subscriptions",
    },
    {
      id: "0x0102",
      name: "母亲",
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=mother",
      lastMessage: {
        content: "👌",
        type: "text",
      },
      type: "friend",
    },
    {
      id: "00v001",
      name: "聊天吹水群",
      avatar: "http://api.btstu.cn/sjtx/api.php",
      lastMessage: {
        content: "🐂🍺",
        type: "text",
      },
      type: "group",
    },
    {
      id: "0x0104",
      name: "张文",
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=mother",
      lastMessage: {
        content: "👌",
        type: "text",
      },
      type: "friend",
    },
    {
      id: "0x0152",
      name: "孙倩倩",
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=mother",
      lastMessage: {
        content: "👌",
        type: "text",
      },
      type: "friend",
    },
  ],
  group: [
    {
      id: "00v001",
      name: "聊天吹水群",
      avatar: "http://api.btstu.cn/sjtx/api.php",
      type: "group",
      chatHistory: [
        {
          isMe: false,
          timestamp: Date.now(),
          avatar: "http://api.btstu.cn/sjtx/api.php?_t=1",
          name: "爱吹牛的宝妹",
          content: "在通往吹牛的路上，我渐渐地放飞了自我",
        },
        {
          isMe: false,
          timestamp: Date.now(),
          avatar: "http://api.btstu.cn/sjtx/api.php?_t=2",
          name: "菜菜",
          content: "如果没有遇见你们，我都不知道吹牛地真正含义。😂",
        },
        {
          isMe: false,
          timestamp: Date.now(),
          avatar: "http://api.btstu.cn/sjtx/api.php?_t=1",
          name: "爱吹牛的宝妹",
          content: "我从来没说过谎话",
        },
        {
          isMe: false,
          timestamp: Date.now(),
          avatar: "http://api.btstu.cn/sjtx/api.php?_t=3",
          name: "四眼仔",
          content: "吹牛大赛只要三个字就能得冠军——我不帅！",
        },
        {
          isMe: true,
          timestamp: Date.now(),
          avatar: "http://api.btstu.cn/sjtx/api.php?_t=me",
          name: "",
          content:
            "如果吹牛有段位，你们都在永恒钻石徘徊，我却独自在王者百星独孤求败！",
        },
        {
          isMe: false,
          timestamp: Date.now(),
          avatar: "http://api.btstu.cn/sjtx/api.php?_t=5",
          name: "怪怪妹",
          content: "🐂🍺",
        },
      ],
      member: [
        {
          name: "爱吹牛的宝妹",
          avatar: "http://api.btstu.cn/sjtx/api.php?_t=1",
        },
        {
          name: "菜菜",
          avatar: "http://api.btstu.cn/sjtx/api.php?_t=2",
        },
        {
          name: "四眼仔",
          avatar: "http://api.btstu.cn/sjtx/api.php?_t=3",
        },
        {
          name: "ZXFAN",
          avatar: "http://api.btstu.cn/sjtx/api.php?_t=4",
        },
        {
          name: "怪怪妹",
          avatar: "http://api.btstu.cn/sjtx/api.php?_t=5",
        },
      ],
    },
  ],
  chatLog: [
    {
      id: "0x0102",
      name: "母亲",
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=mother",
      type: "friend",
      chatHistory: [
        {
          isMe: false,
          timestamp: Date.now(),
          avatar: "http://api.btstu.cn/sjtx/api.php?_t=mother",
          name: "",
          content: "好的👌",
        },
        {
          isMe: false,
          timestamp: Date.now(),
          avatar: "http://api.btstu.cn/sjtx/api.php?_t=mother",
          name: "",
          content: "儿子，你下班了吗？",
        },
        {
          isMe: true,
          timestamp: Date.now(),
          avatar: "http://api.btstu.cn/sjtx/api.php?_t=me",
          name: "",
          content: "下班了，在回来的路上。",
        },
        {
          isMe: false,
          timestamp: Date.now(),
          avatar: "http://api.btstu.cn/sjtx/api.php?_t=mother",
          name: "",
          content: "我已经到家了，等你回来吃饭。",
        },
        {
          isMe: true,
          timestamp: Date.now(),
          avatar: "http://api.btstu.cn/sjtx/api.php?_t=me",
          name: "",
          content: "好的，我也马上就到家了。",
        },
        {
          isMe: false,
          timestamp: Date.now(),
          avatar: "http://api.btstu.cn/sjtx/api.php?_t=mother",
          name: "",
          content: "晚上吃红沙肉😁，回来顺便买瓶酱油吧！",
        },
        {
          isMe: true,
          timestamp: Date.now(),
          avatar: "http://api.btstu.cn/sjtx/api.php?_t=me",
          name: "",
          content: "👌",
        },
      ],
    },
  ],
  subscriptions: [
    {
      id: "00012",
      name: "逻辑思维",
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=luojisiwei",
      articles: [
        {
          id: "a001",
          content: "罗胖60秒：你身边的人是你的镜子吗？",
          cover: "https://bing.ioliu.cn/v1/rand?key=person&w=300&h=150&_t=1",
        },
        {
          id: "a002",
          content: "罗胖60秒：培训班的兴盛体现了父母的焦虑",
          cover: "https://bing.ioliu.cn/v1/rand?key=person&w=300&h=150&_t=2",
        },
        {
          id: "a003",
          content:
            "罗胖60秒：安得广厦千万间，大庇天下寒士俱欢颜。你不知道的杜甫",
          cover: "https://bing.ioliu.cn/v1/rand?key=person&w=300&h=150&_t=3",
        },
      ],
    },
    {
      id: "090123",
      name: "JS社",
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=jsshe",
      articles: [
        {
          id: "a001",
          content: "罗胖60秒：你身边的人是你的镜子吗？",
          cover: "https://bing.ioliu.cn/v1/rand?key=person&w=300&h=150&_t=1",
        },
        {
          id: "a002",
          content: "罗胖60秒：培训班的兴盛体现了父母的焦虑",
          cover: "https://bing.ioliu.cn/v1/rand?key=person&w=300&h=150&_t=2",
        },
        {
          id: "a003",
          content:
            "罗胖60秒：安得广厦千万间，大庇天下寒士俱欢颜。你不知道的杜甫",
          cover: "https://bing.ioliu.cn/v1/rand?key=person&w=300&h=150&_t=3",
        },
      ],
    },
  ],

  opt: {
    checkedMessage: {
      id: "0x4102",
      type: "subscriptions",
    },
  },
};

export type InitialState = typeof initialState;
