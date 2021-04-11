import React from "react";

import style from "./FavoriteMain.module.css";

function Header() {
  return (
    <header className={style.Header}>
      <span>链接</span>
    </header>
  );
}

function List() {
  return (
    <ul className={style.List}>
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <li className={style.ListItem} key={i}>
            <img
              src="https://bing.ioliu.cn/v1/rand?key=person&w=300&h=150"
              alt=""
            />
            <div className="content">
              <div className="title text-ellipsis">
                如何看待市场监管总局对阿里巴巴垄断行为作出
                182.28亿行政处罚？会带来哪些影响？
              </div>
              <div className="type">链接</div>
              <div className="author">时报</div>
            </div>
            <div className="info">
              <span className="time">2021/02/08</span>
              <span className="from">来自：专业吹水群</span>
            </div>
          </li>
        ))}
    </ul>
  );
}

function Gallery() {
  return (
    <ul className={style.Gallery}>
      <li>
        <span className={style.GalleryDate}>三月 2021</span>
        <ul className={style.GalleryList}>
          <li className={style.GalleryListItem}>
            <img src="https://bing.ioliu.cn/v1/rand?key=person&w=150&h=150&_t=1" />
            <img src="https://bing.ioliu.cn/v1/rand?key=person&w=150&h=150&_t=2" />
            <img src="https://bing.ioliu.cn/v1/rand?key=person&w=150&h=150&" />
            <img src="https://bing.ioliu.cn/v1/rand?key=person&w=150&h=150&_t=4" />
            <img src="https://bing.ioliu.cn/v1/rand?key=person&w=150&h=150&" />
          </li>
        </ul>
      </li>
      <li>
        <span className={style.GalleryDate}>二月 2021</span>
        <ul className={style.GalleryList}>
          <li className={style.GalleryListItem}>
            <img src="https://bing.ioliu.cn/v1/rand?key=person&w=150&h=150&_t=1" />
            <img src="https://bing.ioliu.cn/v1/rand?key=person&w=150&h=150&_t=2" />
            <img src="https://bing.ioliu.cn/v1/rand?key=person&w=150&h=150&_t=3" />
            <img src="https://bing.ioliu.cn/v1/rand?key=person&w=150&h=150&_t=4" />
            <img src="https://bing.ioliu.cn/v1/rand?key=person&w=150&h=150&_t=5" />
          </li>
        </ul>
      </li>
      <li>
        <span className={style.GalleryDate}>一月 2021</span>
        <ul className={style.GalleryList}>
          <li className={style.GalleryListItem}>
            <img src="https://bing.ioliu.cn/v1/rand?key=person&w=150&h=150&_t=1" />
            <img src="https://bing.ioliu.cn/v1/rand?key=person&w=150&h=150&_t=2" />
            <img src="https://bing.ioliu.cn/v1/rand?key=person&w=150&h=150&_t=3" />
            <img src="https://bing.ioliu.cn/v1/rand?key=person&w=150&h=150&_t=4" />
            <img src="https://bing.ioliu.cn/v1/rand?key=person&w=150&h=150&_t=5" />
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default function FavoriteMain() {
  return (
    <>
      <Header />
      <Gallery />
    </>
  );
}
