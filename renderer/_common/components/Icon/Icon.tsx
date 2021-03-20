import React from "react";
import cn from "classnames";
import style from "./Icon.module.css";

interface IProps {
  icon: string;
  type?: "aside" | "normal";
  active?: boolean;
  customStyle?: any;
}

export default function Icon({
  type = "normal",
  icon,
  active = false,
  customStyle,
}: IProps) {
  return (
    <svg
      className={cn("icon", style.icon, style[type], customStyle, {
        [style.active]: active,
      })}
      aria-hidden="true"
    >
      <use xlinkHref={`#${icon}`}></use>
    </svg>
  );
}
