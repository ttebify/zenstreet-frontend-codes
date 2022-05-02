import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  badgeContent: React.ReactNode;
}
export default function Badge(props: BadgeProps) {
  return (
    <div className="inline-block relative">
      <span className="absolute -top-1 -right-1 bg-yellow-600 text-white rounded-full p-1 text-xs inline-block
        w-5 h-5 flex justify-center items-center">
        {props.badgeContent}
      </span>
      {props.children}
    </div>
  );
}
