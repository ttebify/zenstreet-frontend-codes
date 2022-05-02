import React from "react";
import cls from "classnames";

interface RewardsActionProps {
  size?: "small" | "large";
  action: string;
  value: string;
  color: string;
}

export default function RewardsAction({
  size = "small",
  action,
  value,
  color,
}: RewardsActionProps) {
  const large = size === "large";

  return (
    <div
      className={cls("flex items-center space-x-3 my-3  mx-auto", {
        "!my-6": large,
        "max-w-screen-xs md:max-w-screen-md": !large,
      })}
    >
      <div
        className={cls("bg-gray-100 flex-none w-6 md:w-10 h-6 md:h-10 rounded-full", {
          "!w-14 md:!w-20 !h-14 md:!h-20": large,
        })}
      ></div>
      <div className="flex justify-between items-center w-full">
        <div
          className={cls("max-w-xs text-sm md:text-base", {
            "text-2xl md:text-4xl font-bold text-green-700": large,
          })}
          style={{ color: !large ? color : "" }}
        >
          {action}
        </div>
        <div
          className={cls("text-xs", {
            "font-medium text-base md:text-lg": large,
          })}
        >
          {value}
        </div>
      </div>
    </div>
  );
}
