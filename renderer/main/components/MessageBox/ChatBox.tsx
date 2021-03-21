import React from "react";
import style from "./MessageBox.module.css";

import SingleMessage from "_common/components/SingleMessage/SingleMessage";

import cn from "classnames";

interface ChatBoxProps {
  msgs: Array<{
    isMe: boolean;
    timestamp: number;
    avatar: string;
    name: string;
    content: string;
  }>;
}

export default function ChatBox({ msgs }: ChatBoxProps) {
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
