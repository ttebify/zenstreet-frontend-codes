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
            className="px-3 mb-2 pb-2 mt-6 text-opacity-70 text-xs border-b"
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
            activeClassName="bg-[#0071ce] !text-white"
            className="flex justify-between h-[44px] rounded-sm mb-2  whitespace-pre hover:bg-[#0071ce]
              hover:text-white overflow-hidden transition-colors duration-150 text-[#0071ce]"
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

  return <div className="navigation">{renderLevels(items)}</div>;
};

export default React.memo(VerticalNav);
