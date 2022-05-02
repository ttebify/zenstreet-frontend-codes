import React from "react";
import cls from "classnames";

export default function SectionHeading(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={cls("text-2xl mb-4", props.className)}>{props.children}</h2>;
}
