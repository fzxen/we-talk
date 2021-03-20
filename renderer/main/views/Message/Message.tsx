import React from "react";

import MessageList from "../../components/MessageList/MessageList";
import MessageBox from "../../components/MessageBox/MessageBox";

import style from "./Message.module.css";

export default function () {
  return (
    <section className={style.container}>
      <MessageList />
      <MessageBox />
    </section>
  );
}
