import React from "react";
import style from "./MessageBox.module.css";

import Icon from "_common/components/Icon/Icon";
import SingleMessage from "_common/components/SingleMessage/SingleMessage";

import cn from "classnames";

function MoreButton() {
  return (
    <div className={style.moreButton}>
      <Icon icon="icon-more" />
    </div>
  );
}

function Box() {
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
    <main className={style.box}>
      {msgs.map((m, i) => (
        <div key={i} className={cn(style.boxItem, m.isMe ? "right" : "left")}>
          <SingleMessage position={m.isMe ? "right" : "left"} data={m} />
        </div>
      ))}
    </main>
  );
}

function Editor() {
  return (
    <footer className={style.editor}>
      <div className={style.tools}>
        <Icon icon="icon-face" />
        <Icon icon="icon-files" />
        <Icon icon="icon-5jietu-1" />
        <Icon icon="icon-message" />

        <Icon icon="icon-phone1" />
        <Icon icon="icon-video" />
      </div>
      <textarea className={style.textEditor} />
    </footer>
  );
}

export default function MessageBox() {
  return (
    <section className={style.messageBox}>
      <header className={style.header}>
        <span className="name">老婆</span>
        <MoreButton />
      </header>
      <Box />
      <Editor />
    </section>
  );
}
