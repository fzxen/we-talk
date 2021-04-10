import React from "react";
import style from "./Layout.module.css";

interface DivideLayoutProps {
  children: {
    aside: JSX.Element;
    main: JSX.Element;
  };
}
export default function DivideLayout(props: DivideLayoutProps) {
  return (
    <section className={style.DivideLayout}>
      <aside>{props.children.aside}</aside>
      <main>{props.children.main}</main>
    </section>
  );
}
