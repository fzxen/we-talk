import React from "react";

import Button from "_common/components/Button/Button";
import Icon from "_common/components/Icon/Icon";
import style from "./FriendsMain.module.css";

function Header() {
  return (
    <header className={style.Header}>
      <span>好友资料</span>
    </header>
  );
}

function Card() {
  return (
    <section className={style.Card}>
      <div className="top">
        <img src="http://api.btstu.cn/sjtx/api.php?_t=friend" alt="" />
        <div className="aside">
          <div className="name-info">
            <span className="name">餐桌上的小雨</span>
            <Icon icon="icon-user" />
          </div>
          <div className="desc">一个懂设计的朋友</div>
        </div>
      </div>
      <div className="bottom">
        <table className="table">
          <tbody>
            <tr className="tr">
              <td className="label">备注名</td>
              <td className="value">阿杰</td>
            </tr>
            <tr>
              <td className="label">地区</td>
              <td className="value">广州 广东</td>
            </tr>
            <tr>
              <td className="label">微信号</td>
              <td className="value">ajie 100101010101</td>
            </tr>
            <tr>
              <td className="label">来源</td>
              <td className="value">通过QQ好友添加</td>
            </tr>
          </tbody>
        </table>
        <Button>发消息</Button>
      </div>
    </section>
  );
}

export default function FriendsMain() {
  return (
    <section className={style.FriendsMain}>
      <Header />
      <div className={style.main}>
        <Card />
      </div>
    </section>
  );
}
