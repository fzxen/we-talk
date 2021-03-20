import React from "react";
import cn from "classnames";
import style from "./Icon.module.css";

interface IProps {
  icon: string;
  type?: "aside" | "normal";
  active?: boolean;
}

export default function Icon({
  type = "normal",
  icon,
  active = false,
}: IProps) {
  return (
    <svg
      className={cn(style.icon, style[type], { [style.active]: active })}
      aria-hidden="true"
    >
      <use xlinkHref={`#${icon}`}></use>
    </svg>
  );
}
