import React from "react";
import cls from "classnames";

export default function Section({
  noPadding = true,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  containerClass?: string;
  noPadding?: boolean;
}) {
  const pClass = noPadding ? "pt-0 py-0" : "py-16 md:py-20";
  return (
    <div className={cls(props.containerClass)}>
      <div
        className={cls(
          "px-4 md:px-16 max-w-screen-2xl mx-auto",
          pClass,
          props.className
        )}
      >
        {props.children}
      </div>
    </div>
  );
}
