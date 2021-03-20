import React from "react";

import style from "./SingleMessage.module.css";
import cn from "classnames";

interface SingleMessageProps {
  position: "left" | "right";
  data: {
    name?: string;
    avatar: string;
    content: string;
  };
}

export default function SingleMessage({ position, data }: SingleMessageProps) {
  return (
    <section className={cn("single-message", position, style.singleMessage)}>
      <img src={data.avatar} alt="" />
      <div className={style.info}>
        <div className="name">{data.name}</div>
        <div className="content">{data.content}</div>
      </div>
    </section>
  );
}
