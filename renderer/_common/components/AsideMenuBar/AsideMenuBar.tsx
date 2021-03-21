import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import avatarImg from "_common/images/avatar.jpg";
import style from "./AsideMenuBar.module.css";
import Icon from "_common/components/Icon/Icon";
import cn from "classnames";

const menus = [
  {
    name: "message",
    icon: "icon-message",
    to: "/message",
  },
  {
    name: "friends",
    icon: "icon-people",
    to: "/friends",
  },
  {
    name: "favorite",
    icon: "icon-box",
    to: "",
  },
  {
    name: "file",
    icon: "icon-files",
    to: "",
  },
];

const bottomOpts = [
  {
    name: "phone",
    icon: "icon-phone",
    to: "",
  },
  {
    name: "setting",
    icon: "icon-menu",
    to: "",
  },
];

export default function AsideMenuBar() {
  const history = useHistory();
  const [activeMenu, setActiveMenu] = useState("message");

  function switchHistory(menu: typeof menus[0]) {
    setActiveMenu(menu.name);
    history.push(menu.to);
  }

  return (
    <aside className={style.asideBar}>
      <img
        className={style.avatar}
        src="http://api.btstu.cn/sjtx/api.php?_t=me"
        alt=""
      />

      <ul className={style.menuList}>
        {menus.map((m) => (
          <li
            className={cn(style.menuItem, {
              [style.menuItemActive]: m.name === activeMenu,
            })}
            key={m.name}
            onClick={() => switchHistory(m)}
          >
            <Icon icon={m.icon} type="aside" active={m.name === activeMenu} />
          </li>
        ))}
      </ul>

      <ul className={style.bottomOpt}>
        {bottomOpts.map((bo) => (
          <li className={style.boItem} key={bo.name}>
            <Icon icon={bo.icon} type="aside" />
          </li>
        ))}
      </ul>
    </aside>
  );
}
