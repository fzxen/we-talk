import React, { useCallback } from "react";
import style from "./MessageList.module.css";
import Search from "_common/components/Search/Search";
import Icon from "_common/components/Icon/Icon";
import { useAppStore } from "_common/store";
import cn from "classnames";

function AddButton() {
  return (
    <div className={style.addButton}>
      <Icon icon="icon-plus" />
    </div>
  );
}

function List() {
  const { state, checkMessage } = useAppStore();
  const msgs = state.messageList;

  const check = useCallback((message: typeof msgs[0]) => 
    checkMessage({ id: message.id, type: message.type })
  , [checkMessage])
        
  
  return (
    <ul className={style.msgList}>
      {msgs.map((m, index) => (
        <li
          key={index}
          className={cn(style.msgItem)}
          onClick={() => check(m)}
        >
          <img src={`${m.avatar}?_t=${index}`} alt="avatar" />
          <div className="middle">
            <div className="name text-ellipsis">{m.name}</div>
            <div className="content text-ellipsis">{m.lastMessage.content}</div>
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
