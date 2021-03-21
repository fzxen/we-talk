import React from "react";
import style from "./Button.module.css";
import Icon from "_common/components/Icon/Icon";

import cn from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  shape?: "circle" | "rect";
  icon?: string;
  type?: "primary" | "warning" | "error";
}

export default function Button({
  children,
  shape = "circle",
  icon,
  type = "primary",
}: ButtonProps) {
  return (
    <button className={cn(style.button, shape, type, "button")}>
      {icon ? <Icon icon={icon} /> : ""}
      {children}
    </button>
  );
}
