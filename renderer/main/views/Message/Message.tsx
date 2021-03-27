import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import MessageList from "../../components/MessageList/MessageList";

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
const Posts = React.lazy(() => import("../../components/Posts/Posts"));

export default function Message() {
  return (
    <section className={style.container}>
      <MessageList />

      <Suspense fallback={""}>
        <Route path="/message/friend/:id" component={FriendMessageBox}></Route>
        <Route path="/message/group/:id" component={GroupMessageBox}></Route>
        <Route path="/message/subscriptions" component={Subscriptions}></Route>
        <Route path="/message/posts/:id" component={Posts}></Route>
      </Suspense>
    </section>
  );
}
