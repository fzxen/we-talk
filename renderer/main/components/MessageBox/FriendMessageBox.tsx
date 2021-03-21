import React, { useMemo, useState } from "react";
import style from "./MessageBox.module.css";

import Icon from "_common/components/Icon/Icon";

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

export default function GroupMessageBox() {
  const [open, setOpen] = useState(false);
  const { state } = useStore();

  const group = useMemo(
    () => state.chatLog.find((g) => g.id === state.opt.checkedMessage.id),
    [state]
  );
  const name = useMemo(() => group?.name ?? "", [group]);
  const msgs = useMemo(() => group?.chatHistory ?? [], [group]);
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
