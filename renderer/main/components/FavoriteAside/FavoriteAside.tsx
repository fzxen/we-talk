import React, { useMemo } from "react";
import cn from "classnames";
import { useFavoriteStore } from "_common/store/favorite";
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

interface ListPros {
  menus: Array<any>;
  activeMenu: string;
  setActive: (key: string) => void;
}
function List({ menus, activeMenu, setActive }: ListPros) {
  return (
    <ul className={style.List}>
      {menus.map((m) => (
        <li
          key={m.key}
          className={cn(style.ListItem, { active: m.key === activeMenu })}
          onClick={() => setActive(m.key)}
        >
          <Icon icon={m.icon} />
          <span>{m.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function FavoriteAside() {
  const { state, setActive } = useFavoriteStore();
  const menus = useMemo(() => state.menus, [state]);
  const activeMenu = useMemo(() => state.activeMenu, [state]);
  return (
    <>
      <Header />
      <List menus={menus} activeMenu={activeMenu} setActive={setActive} />
    </>
  );
}
