import React from "react";
import style from "./MessageList.module.css";
import Search from "_common/components/Search/Search";
import Icon from "_common/components/Icon/Icon";

function AddButton() {
  return (
    <div className={style.addButton}>
      <Icon icon="icon-plus" />
    </div>
  );
}

function List() {
  const msgs = new Array(10).fill({
    name: "张海斌",
    avatar: "http://api.btstu.cn/sjtx/api.php",
    message: {
      content: "小李，晚上一起吃个饭",
      type: "text",
    },
  });
  return (
    <ul className={style.msgList}>
      {msgs.map((m, index) => (
        <li key={index} className={style.msgItem}>
          <img src={`${m.avatar}?_t=${index}`} alt="avatar" />
          <div className="middle">
            <div className="name">{m.name}</div>
            <div className="content">{m.message.content}</div>
          </div>
          <div className="right">15:22</div>
        </li>
      ))}
    </ul>
  );
}

export default function MessageList() {
  return (
    <section className={style.messageList}>
      <header className={style.header}>
        <span className="title">微信(16)</span>
        <Search customStyle={style.search} />
        <AddButton />
      </header>

      <List />
    </section>
  );
}
