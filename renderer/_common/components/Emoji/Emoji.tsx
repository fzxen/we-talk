import React from "react";
import emoji from "emoji-toolkit";

import style from "./Emoji.module.css";

emoji.imagePathPNG = "";

interface EmojiProps {
  shortname: string;
  type?: "unicode" | "image";
}

export default function Emoji({ shortname }: EmojiProps) {
  // return <div className={style.emoji} dangerouslySetInnerHTML={{ __html: emoji.toImage(shortname) }} />;
  return (
    <div className={style.emoji}>{emoji.shortnameToUnicode(shortname)}</div>
  );
}
