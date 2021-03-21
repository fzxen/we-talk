import React, { useMemo } from "react";

import MessageList from "../../components/MessageList/MessageList";
import FriendMessageBox from "../../components/MessageBox/FriendMessageBox";
import GroupMessageBox from "../../components/MessageBox/GroupMessageBox";

import { useStore } from "_common/store";

import style from "./Message.module.css";

export default function Message() {
  const { state } = useStore();
  const type = useMemo(() => state.opt.checkedMessage.type, [state]);
  return (
    <section className={style.container}>
      <MessageList />
      {type === "friend" ? <FriendMessageBox /> : ""}
      {type === "group" ? <GroupMessageBox /> : ""}
    </section>
  );
}
