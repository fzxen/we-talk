import React from "react";
import Icon from "_common/components/Icon/Icon";
import cn from "classnames";

import style from "./Search.module.css";

interface SearchProps {
  onInput?: (value: string) => void;
  customStyle?: any;
  placeholder?: string;
}

export default function Search({
  onInput,
  customStyle,
  placeholder = "搜索",
}: SearchProps) {
  return (
    <div className={cn("search", style.search, customStyle)}>
      <input
        className={style.input}
        type="text"
        placeholder={placeholder}
        onChange={(e) => onInput && onInput(e.target.value)}
      />
      <Icon icon="icon-search1" customStyle={style.icon} />
    </div>
  );
}
