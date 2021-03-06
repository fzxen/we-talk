import React, { useCallback, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import style from "./Subscriptions.module.css";
import Search from "_common/components/Search/Search";
import Icon from "_common/components/Icon/Icon";
import { useAppStore, InitialState } from "_common/store";

import cn from "classnames";

// * 内容列表
interface ContentListProps {
  data: InitialState["subscriptions"];
}
function ContentList({ data }: ContentListProps) {
  const history = useHistory();
  const goToDetail = useCallback(
    (id: string) => {
      history.push(`/message/posts/${id}`);
    },
    [history]
  );

  const list = useMemo(
    () =>
      data.map((m) => (
        <ContentListCard key={m.name} data={m} goToDetail={goToDetail} />
      )),
    [data, goToDetail]
  );
  return <ul className={style.contentList}>{list}</ul>;
}

interface ContentListCardProps {
  data: InitialState["subscriptions"][0];
  goToDetail: (id: string) => void;
}
function ContentListCard({ data, goToDetail }: ContentListCardProps) {
  const m = data;
  const len = m.articles.length - 2;
  const [more, setMore] = useState(len > 0); // true 显示余下n篇

  return (
    <li
      key={m.name}
      className={style.contentListItem}
      onClick={() => goToDetail(m.id)}
    >
      <div className={style.titleLine}>
        <img src={m.avatar} alt={m.name} />
        <span className="name">{m.name}</span>
        <span className="time">1小时前</span>
      </div>
      <ul className={style.contentPosts}>
        {(more ? m.articles.slice(0, 2) : m.articles).map((a) => (
          <li key={a.id}>
            <div className="content">{a.content}</div>
            <div className="cover-wrap">
              <img className="cover" src={a.cover} alt="" />
            </div>
          </li>
        ))}
        {more ? (
          <li
            className={style.morePost}
            onClick={(e) => {
              e.stopPropagation()
              setMore(false);
            }}
          >
            <span className="content">余下{len}篇</span>
            <Icon icon="icon-previewright" />
          </li>
        ) : (
          ""
        )}
      </ul>
    </li>
  );
}

// * 索引列表
interface IndexListProps {
  data: InitialState["subscriptions"];
  show: boolean;
}
function IndexList({ data, show }: IndexListProps) {
  const list = useMemo(
    () =>
      data.map((d) => (
        <li className={cn(style.indexListItem, "text-ellipsis")} key={d.name}>
          <img src={d.avatar} alt={d.name} />
          <span className="name">{d.name}</span>
          <div className="dot"></div>
        </li>
      )),
    [data]
  );
  return (
    <div className={cn(style.indexList, { show })}>
      <div className="title">常读订阅号</div>
      <ul>{list}</ul>
    </div>
  );
}

export default function Subscriptions() {
  const { state } = useAppStore();
  const subscriptions = useMemo(() => state.subscriptions ?? [], [
    state.subscriptions,
  ]);

  const [isAsideShow, setAsideShow] = useState(false);
  return (
    <section className={style.subscriptions}>
      <header className={style.header}>
        <span className="title">订阅号消息(37)</span>
        <Search />
        <div className="button-wrap" onClick={() => setAsideShow((v) => !v)}>
          <Icon icon="icon-menu" />
        </div>
      </header>
      <main className={cn(style.main, { asideShow: isAsideShow })}>
        <ContentList data={subscriptions} />
        <IndexList data={subscriptions} show={isAsideShow} />
      </main>
    </section>
  );
}
