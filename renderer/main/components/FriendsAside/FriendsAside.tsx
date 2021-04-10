import React from "react";
import Search from "_common/components/Search/Search";
import Icon from "_common/components/Icon/Icon";
import cn from "classnames";

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
  return (
    <ul className={style.TabSwitch}>
      <li className="active">
        <span className="title">联系人</span>
        <span className="count">169</span>
      </li>
      <li>
        <span className="title">公众号</span>
        <span className="count">80</span>
      </li>
      <li>
        <span className="title">群聊</span>
        <span className="count">6</span>
      </li>
      <li>
        <span className="title">企业微信</span>
        <span className="count">3</span>
      </li>
    </ul>
  );
}

function List() {
  return (
    <ul className={style.List}>
      {new Array(5).fill(0).map((_, i) => (
        <>
          <span key={i + "span"} className="tag">
            {String.fromCharCode(65 + i)}
          </span>
          <li key={i + "li1"} className={cn({ active: i === 0 })}>
            <img src="http://api.btstu.cn/sjtx/api.php?_t=friend" alt="" />
            <div className="name text-ellipsis ">阿宝</div>
          </li>
          <li key={i + "li2"}>
            <img src="http://api.btstu.cn/sjtx/api.php?_t=friend" alt="" />
            <div className="name text-ellipsis ">阿宝</div>
          </li>
          <li key={i + "li3"}>
            <img src="http://api.btstu.cn/sjtx/api.php?_t=friend" alt="" />
            <div className="name text-ellipsis ">阿宝</div>
          </li>
        </>
      ))}
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
