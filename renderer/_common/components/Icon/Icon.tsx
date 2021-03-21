import React from "react";
import cn from "classnames";
import style from "./Icon.module.css";

interface IProps {
  icon: string;
  type?: "aside" | "normal";
  active?: boolean;
  customStyle?: any;
  refElement?: any;
  onClick?: () => void;
  [key: string]: any;
}

export default function Icon({
  type = "normal",
  icon,
  active = false,
  customStyle,
  refElement,
  onClick,
  ...arg
}: IProps) {
  return (
    <svg
      ref={refElement}
      className={cn("icon", style.icon, style[type], customStyle, {
        [style.active]: active,
      })}
      onClick={() => onClick && onClick()}
      aria-hidden="true"
      {...arg}
    >
      <use xlinkHref={`#${icon}`}></use>
    </svg>
  );
}
