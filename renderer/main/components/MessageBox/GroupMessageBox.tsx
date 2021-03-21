import React, { useMemo, useState } from "react";
import style from "./MessageBox.module.css";

import Icon from "_common/components/Icon/Icon";
import Button from "_common/components/Button/Button";

import ChatBox from "./ChatBox";
import Editor from "./Editor";
import cn from "classnames";

import { useStore } from "_common/store";

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
  member: Array<{
    name: string;
    avatar: string;
  }>;
}
function Aside({ open, member }: AsideProps) {
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
  const [open, setOpen] = useState(false);
  const { state } = useStore();

  const group = useMemo(
    () => state.group.find((g) => g.id === state.opt.checkedMessage.id),
    [state]
  );
  const msgs = useMemo(() => group?.chatHistory ?? [], [group]);
  const name = useMemo(() => group?.name ?? "", [group]);
  const member = useMemo(() => group?.member ?? [], [group]);
  return (
    <section className={style.messageBoxWrap}>
      <section className={style.messageBox}>
        <header className={style.header}>
          <span className="name">{name}</span>
          <MoreButton open={open} setOpen={setOpen} />
        </header>
        <ChatBox msgs={msgs} />
        <Editor />
      </section>
      <Aside open={open} member={member} />
    </section>
  );
}
