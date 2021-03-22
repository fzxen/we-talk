import React, { useMemo } from "react";

import MessageList from "../../components/MessageList/MessageList";

import { useStore } from "_common/store";

import style from "./Message.module.css";

const Subscriptions = React.lazy(
  () => import("../../components/Subscriptions/Subscriptions")
);
const FriendMessageBox = React.lazy(
  () => import("../../components/MessageBox/FriendMessageBox")
);
const GroupMessageBox = React.lazy(
  () => import("../../components/MessageBox/GroupMessageBox")
);

export default function Message() {
  const { state } = useStore();
  const type = useMemo(() => state.opt.checkedMessage.type, [state]);
  return (
    <section className={style.container}>
      <MessageList />

      {type === "friend" ? <FriendMessageBox /> : ""}
      {type === "group" ? <GroupMessageBox /> : ""}
      {type === "subscriptions" ? <Subscriptions /> : ""}
    </section>
  );
}
