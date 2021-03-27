import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./MessageBox.module.css";

import Icon from "_common/components/Icon/Icon";

import ChatBox from "./ChatBox";
import Editor from "./Editor";
import cn from "classnames";

import { useAppStore } from "_common/store";

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
      <Icon icon="icon-more" />
    </div>
  );
}

interface AsideProps {
  open: boolean;
}
function Aside({ open }: AsideProps) {
  return <section className={cn(style.aside, { open })}>aside</section>;
}

export default function FriendMessageBox() {
  const [open, setOpen] = useState(false);
  const { state } = useAppStore();
  const { id } = useParams<{ id: string }>();

  const friend = useMemo(() => state.chatLog.find((g) => g.id === id), [
    state.chatLog,
    id,
  ]);
  const name = useMemo(() => friend?.name ?? "", [friend]);
  const msgs = useMemo(() => friend?.chatHistory ?? [], [friend]);
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
      <Aside open={open} />
    </section>
  );
}
