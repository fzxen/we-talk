import React, { Fragment } from "react";
import Search from "_common/components/Search/Search";
import Icon from "_common/components/Icon/Icon";
import cn from "classnames";
import { useFriendsStore } from "_common/store/friends";

import style from "./FriendsAside.module.css";

function Header() {
  return (
    <header className={style.header}>
      <span className="title">通讯录</span>
      <Search customStyle={style.search} />
      <div className={style.headerButton}>
        <Icon icon="icon-ic_friendlist" />
      </div>
    </header>
  );
}

function TabSwitch() {
  const {
    category: list,
    activeCategory: active,
    setCategoryActive,
  } = useFriendsStore();
  return (
    <ul className={style.TabSwitch}>
      {list.map((l) => (
        <li
          className={cn({ active: active === l.key })}
          onClick={() => setCategoryActive(l.key)}
        >
          <span className="title">{l.name}</span>
          <span className="count">{l.count}</span>
        </li>
      ))}
    </ul>
  );
}

function List() {
  const { list, activeListId, setListActive } = useFriendsStore();
  return (
    <ul className={style.List}>
      {list.map((item) => {
        const [order, l] = item;
        return (
          <Fragment key={order}>
            <span className="tag">{order}</span>
            {l.map((i) => (
              <li
                key={i.id}
                className={cn({ active: i.id === activeListId })}
                onClick={() => setListActive(i.id)}
              >
                <img src={i.avatar} alt="" />
                <div className="name text-ellipsis ">{i.comment || i.name}</div>
              </li>
            ))}
          </Fragment>
        );
      })}
    </ul>
  );
}

export default function FriendsAside() {
  return (
    <>
      <Header />
      <TabSwitch />
      <List />
    </>
  );
}
