import React, { useState, useRef, useCallback } from "react";
import { useEffect } from "react";
import type { NavigationItems } from "../../globals/types";
import { useLocation } from "@reach/router";
import cls from "classnames";
import { merge } from "lodash";
import { BiMinus, BiPlus } from "react-icons/bi";

interface VerticalNavExpansionPanelProps {
  item: NavigationItems;
  children: React.ReactNode;
}
const VerticalNavExpansionPanel = ({
  item,
  children,
}: VerticalNavExpansionPanelProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const elementRef = useRef<HTMLDivElement>(null);
  const componentHeight = useRef(0);
  const { pathname } = useLocation();
  const { name } = item;

  const handleClick = useCallback(() => {
    if (elementRef.current !== null) {
      componentHeight.current = 0;
      calcaulateHeight(elementRef.current);
      setCollapsed(!collapsed);
    }
  }, [elementRef, collapsed]);

  const calcaulateHeight = useCallback((node: HTMLDivElement) => {
    if (node.dataset.name !== "child") {
      for (let child of node.children) {
        calcaulateHeight(child as HTMLDivElement);
      }
    }

    if (node.dataset.name === "child")
      componentHeight.current += node.scrollHeight;
    else componentHeight.current += 44; //here 44 is node height
    return;
  }, []);

  useEffect(() => {
    if (!elementRef.current) return;

    calcaulateHeight(elementRef.current);
    // OPEN DROPDOWN IF CHILD IS ACTIVE
    for (let child of elementRef.current.children) {
      if (child.getAttribute("href") === pathname) {
        setCollapsed(false);
      }
    }
  }, [pathname, calcaulateHeight, elementRef]);

  return (
    <div>
      <div
        className={cls({
          "flex justify-between items-center h-[44px] mb-2 w-full pr-4 whitespace-pre":
            true,
          "overflow-hidden hover:bg-gray-50 cursor-pointer": true,
          "open bg-gray-100": !collapsed,
        })}
        onClick={handleClick}
      >
        <span className="align-middle text-sm pl-3">{name}</span>
        {collapsed ? <BiPlus /> : <BiMinus />}
      </div>
      <div
        ref={elementRef}
        className="overflow-hidden border-l-4"
        style={merge(
          {
            transition: "max-height 0.3s cubic-bezier(0, 0, 0.2, 1)",
          },
          collapsed
            ? { maxHeight: "0px" }
            : { maxHeight: componentHeight.current + "px" }
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default VerticalNavExpansionPanel;
