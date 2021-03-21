import React from "react";

import MessageList from "../../components/MessageList/MessageList";
import FriendMessageBox from "../../components/MessageBox/FriendMessageBox";
import GroupMessageBox from "../../components/MessageBox/GroupMessageBox";

import style from "./Message.module.css";

export default function Message() {
  return (
    <section className={style.container}>
      <MessageList />
      <GroupMessageBox />
    </section>
  );
}
