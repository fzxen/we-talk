import React, { useState } from "react";
import style from "./MessageBox.module.css";

import Icon from "_common/components/Icon/Icon";
import Button from "_common/components/Button/Button";

import ChatBox from "./ChatBox";
import Editor from "./Editor";
import cn from "classnames";

interface MoreButtonProps {
  open: boolean;
  setOpen: (...arg: any[]) => void;
}

function MoreButton({ open, setOpen }: MoreButtonProps) {
  return (
    <div
      className={cn(style.moreButton, { open })}
      onClick={() => setOpen((val: boolean) => !val)}
    >
      <Icon icon="icon-previewright" />
    </div>
  );
}

interface AsideProps {
  open: boolean;
}
function Aside({ open }: AsideProps) {
  const member = [
    {
      name: "爱吹牛的宝妹",
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=1",
    },
    {
      name: "菜菜",
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=2",
    },
    {
      name: "四眼仔",
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=3",
    },
    {
      name: "ZXFAN",
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=4",
    },
    {
      name: "怪怪妹",
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=5",
    },
  ];
  return (
    <section className={cn(style.aside, { open })}>
      <div className={style.info}>
        <div className="infoItem">
          <span className="label">群聊名称</span>
          <span className="value">聊天吹水群</span>
        </div>
        <div className="infoItem">
          <span className="label">备注</span>
          <span className="value">群聊的备注仅自己可见</span>
        </div>
        <div className="infoItem">
          <span className="label">群公告</span>
          <span className="value">暂无群公告</span>
        </div>
      </div>
      <ul className={style.list}>
        {member.map((m) => (
          <li className={style.listItem} key={m.name}>
            <img src={m.avatar} alt="" />
            <span className="name">{m.name}</span>
          </li>
        ))}
      </ul>
      <div className={style.button}>
        <Button icon="icon-PeopleAdd">添加群成员</Button>
        <Button type="error">退出群聊</Button>
      </div>
    </section>
  );
}

export default function GroupMessageBox() {
  const [open, setOpen] = useState(true);

  const msgs = [
    {
      isMe: false,
      timestamp: Date.now(),
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=1",
      name: "爱吹牛的宝妹",
      content: "在通往吹牛的路上，我渐渐地放飞了自我",
    },
    {
      isMe: false,
      timestamp: Date.now(),
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=2",
      name: "菜菜",
      content: "如果没有遇见你们，我都不知道吹牛地真正含义。😂",
    },
    {
      isMe: false,
      timestamp: Date.now(),
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=1",
      name: "爱吹牛的宝妹",
      content: "我从来没说过谎话",
    },
    {
      isMe: false,
      timestamp: Date.now(),
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=3",
      name: "四眼仔",
      content: "吹牛大赛只要三个字就能得冠军——我不帅！",
    },
    {
      isMe: true,
      timestamp: Date.now(),
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=4",
      name: "",
      content:
        "如果吹牛有段位，你们都在永恒钻石徘徊，我却独自在王者百星独孤求败！",
    },
    {
      isMe: false,
      timestamp: Date.now(),
      avatar: "http://api.btstu.cn/sjtx/api.php?_t=5",
      name: "怪怪妹",
      content: "🐂🍺",
    },
  ];
  return (
    <section className={style.messageBoxWrap}>
      <section className={style.messageBox}>
        <header className={style.header}>
          <span className="name">聊天吹水群</span>
          <MoreButton open={open} setOpen={setOpen} />
        </header>
        <ChatBox msgs={msgs} />
        <Editor />
      </section>
      <Aside open={open} />
    </section>
  );
}
