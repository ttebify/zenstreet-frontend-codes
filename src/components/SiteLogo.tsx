import React from "react";
import cls from "classnames";
import Link from "./Link";

export default function Logo(props: { className?: string }) {
  return (
    <Link
      className={cls(
        "font-medium inline-block text-xl text-primary-800/80 flex-none",
        props.className
      )}
      to="/"
    >
      <span>Zenstreet</span>
    </Link>
  );
}
