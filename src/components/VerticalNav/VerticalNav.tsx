import React from "react";
import VerticalNavExpansionPanel from "./VerticalNavExpansionPanel";
import type { NavigationItems } from "../../globals/types";
import Link from "../Link";
// import useSettings from "../../hooks/useSettings";

const VerticalNav = ({ items }: { items: NavigationItems[] }) => {
  // const { settings, updateSettings } = useSettings();

  /* const updateSidebarMode = (sidebarSettings: { show: boolean }) => {
    updateSettings({
      ...settings,
      leftSidebar: {
        ...sidebarSettings,
      },
    });
  }; */

  const renderLevels = (data: NavigationItems[]) => {
    return data.map((item, index) => {
      if (item.type === "label")
        return (
          <p
            key={index}
            className="px-3 mb-2 pb-2 mt-6 uppercase text-xs text-gray-500 border-b"
          >
            {item.label}
          </p>
        );
      if (item.children) {
        return (
          <VerticalNavExpansionPanel item={item} key={index}>
            {renderLevels(item.children)}
          </VerticalNavExpansionPanel>
        );
      } else {
        return (
          <Link
            key={index}
            to={item.path!}
            activeClassName="text-blue-600 bg-gray-100"
            className="flex justify-between h-[44px] rounded-sm mb-2  whitespace-pre hover:bg-gray-50
              overflow-hidden"
            // onClick={() => updateSidebarMode({ show: false })}
          >
            <div
              key={item.name}
              data-name="child"
              className="w-full flex items-center text-base"
            >
              <span className="align-middle text-left px-3">{item.name}</span>
            </div>
          </Link>
        );
      }
    });
  };

  return <div className="navigation bg-white">{renderLevels(items)}</div>;
};

export default React.memo(VerticalNav);
