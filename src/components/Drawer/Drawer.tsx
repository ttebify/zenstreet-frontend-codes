import React from "react";
import cls from "classnames";

interface DrawerProps {
  children: React.ReactNode;
  width?: string;
  anchor?: "left" | "top" | "right" | "bottom";
  open: boolean;
  onClose: () => void;
}
export default function Drawer({
  width = "",
  children,
  anchor = "right",
  onClose,
  open,
}: DrawerProps) {
  const anchorClass = anchor + "-10";

  return (
    <React.Fragment>
      <div
        className={cls(
          "fixed top-0 h-screen w-64 shadow-md z-[111] overflow-hidden transition-all",
          "duration-150 ease-in bg-white right-0",
          anchorClass,
          { "translate-x-full": !open, "translate-x-0": open }
        )}
      >
        <div style={{ width: width }}>{children}</div>
      </div>
      <div
        onClick={onClose}
        className={cls("fixed inset-0 w-screen bg-black/50 z-[100] lg:hidden", {
          hidden: !open,
        })}
      />
    </React.Fragment>
  );
}
