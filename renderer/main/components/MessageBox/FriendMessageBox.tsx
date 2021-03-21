import React from "react";
import style from "./MessageBox.module.css";

import Icon from "_common/components/Icon/Icon";

import ChatBox from "./ChatBox";
import Editor from "./Editor";

function MoreButton() {
  return (
    <div className={style.moreButton}>
      <Icon icon="icon-more" />
    </div>
  );
}

export default function FriendMessageBox() {
  const msgs = [
    {
      isMe: false,
      timestamp: Date.now(),
      avatar: "http://api.btstu.cn/sjtx/api.php",
      name: "",
      content: "好的👌",
    },
    {
      isMe: false,
      timestamp: Date.now(),
      avatar: "http://api.btstu.cn/sjtx/api.php",
      name: "",
      content: "老公，你下班了吗？",
    },
    {
      isMe: true,
      timestamp: Date.now(),
      avatar: "http://api.btstu.cn/sjtx/api.php",
      name: "",
      content: "下班了，在回来的路上。",
    },
    {
      isMe: false,
      timestamp: Date.now(),
      avatar: "http://api.btstu.cn/sjtx/api.php",
      name: "",
      content: "我已经到家了，等你回来吃饭。",
    },
    {
      isMe: true,
      timestamp: Date.now(),
      avatar: "http://api.btstu.cn/sjtx/api.php",
      name: "",
      content: "好的，我也马上就到家了。",
    },
    {
      isMe: false,
      timestamp: Date.now(),
      avatar: "http://api.btstu.cn/sjtx/api.php",
      name: "",
      content: "晚上吃红沙肉😁，回来顺便买瓶酱油吧！",
    },
    {
      isMe: true,
      timestamp: Date.now(),
      avatar: "http://api.btstu.cn/sjtx/api.php",
      name: "",
      content: "👌",
    },
  ];
  return (
    <section className={style.messageBox}>
      <header className={style.header}>
        <span className="name">老婆</span>
        <MoreButton />
      </header>
      <ChatBox msgs={msgs} />
      <Editor />
    </section>
  );
}
