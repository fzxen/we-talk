import React from "react";
import cn from "classnames";
import Search from "_common/components/Search/Search";
import Icon from "_common/components/Icon/Icon";

import style from "./FavoriteAside.module.css";

function Header() {
  return (
    <header className={style.header}>
      <span className="title">收藏</span>
      <Search customStyle={style.search} />
      <div className={style.headerButton}>
        <Icon icon="icon-edit" />
      </div>
    </header>
  );
}

function List() {
  const menus = [
    {
      icon: "icon-menu1",
      name: "全部收藏",
    },
    {
      icon: "icon-Note",
      name: "笔记",
    },
    {
      icon: "icon-folder",
      name: "文件",
    },
    {
      icon: "icon-image",
      name: "相册",
    },
    {
      icon: "icon-Link",
      name: "链接",
    },
    {
      icon: "icon-tag",
      name: "标签",
    },
  ];
  return (
    <ul className={style.List}>
      {menus.map((m, i) => (
        <li key={m.icon} className={cn(style.ListItem, { active: i === 0 })}>
          <Icon icon={m.icon} />
          <span>{m.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function FavoriteAside() {
  return (
    <>
      <Header />
      <List />
    </>
  );
}
