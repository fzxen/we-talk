import React, { useCallback } from "react";
import style from "./MessageList.module.css";
import Search from "_common/components/Search/Search";
import Icon from "_common/components/Icon/Icon";
import { useStore, ACTIONS } from "_common/store";

function AddButton() {
  return (
    <div className={style.addButton}>
      <Icon icon="icon-plus" />
    </div>
  );
}

function List() {
  const { state, dispatch } = useStore();
  const msgs = state.messageList;

  const checkMessage = useCallback((message: typeof msgs[0]) => {
    dispatch({
      type: ACTIONS.CHECK_MESSAGE,
      payload: { id: message.id, type: message.type },
    });
  }, []);
  return (
    <ul className={style.msgList}>
      {msgs.map((m, index) => (
        <li
          key={index}
          className={style.msgItem}
          onClick={() => checkMessage(m)}
        >
          <img src={`${m.avatar}?_t=${index}`} alt="avatar" />
          <div className="middle">
            <div className="name">{m.name}</div>
            <div className="content">{m.lastMessage.content}</div>
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
