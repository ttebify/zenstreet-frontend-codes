import React from "react";
import cls from "classnames";

export default function Icon(props: React.HtmlHTMLAttributes<"div">) {
  return <div className={cls(props.className)}>{props.children}</div>;
}
