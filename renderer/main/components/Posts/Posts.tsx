import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import style from "./Posts.module.css";
import Icon from "_common/components/Icon/Icon";

function Article() {
  const content = ``;
  return (
    <>
      <h1>2021优酷设计改版总结</h1>
      <p className={style.from}>
        <span>UI头条</span>
        <span>昨天</span>
      </p>
      <p className={style.desc}>
        以下文章来源于AlibabaDesign，作者优酷设计中心
      </p>
      <div className={style.author}>
        <img src="http://api.btstu.cn/sjtx/api.php" alt="" />
        <div className="middle">
          <strong>AlibabaDesign</strong>
          <p>
            这是一个充满魅力的组织，是一群疯狂热爱用户体验的家伙，这里有国际音乐家有舞者
          </p>
        </div>
        <Icon icon="icon-previewright" />
      </div>
      <article
        className={style.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
}

export default function Posts() {
  const history = useHistory();
  const back = useCallback(() => history.goBack(), [history]);

  return (
    <section className={style.layout}>
      <header className={style.header}>
        <Icon icon="icon-previewright" onClick={() => back()} />
        <span className="title">UI头条</span>
        <ul className={style.iconList}>
          <li>
            <Icon icon="icon-shuaxin" />
          </li>
          <li>
            <Icon icon="icon-fenxiang" />
          </li>
          <li>
            <Icon icon="icon-shoucang" />
          </li>
          <li>
            <Icon icon="icon-zitidaxiao" />
          </li>
          <li>
            <Icon icon="icon-lianjie" />
          </li>
          <li>
            <Icon icon="icon-zailiulanqidakai" />
          </li>
          <li>
            <Icon icon="icon-xuanfuchuang" />
          </li>
        </ul>
      </header>
      <main className={style.article}>
        <Article />
      </main>
    </section>
  );
}
