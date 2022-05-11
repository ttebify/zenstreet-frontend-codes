import React, { Fragment } from "react";
import Scrollbar from "react-perfect-scrollbar";
import useSettings from "../../hooks/useSettings";
import { navigations } from "../../globals/navigations";
import VerticalNav from "../VerticalNav/VerticalNav";
import Logo from "../SiteLogo";
import cls from "classnames";
import { Transition } from "@headlessui/react";

const Sidenav = () => {
  const { settings, updateSettings } = useSettings();

  const updateSidebarMode = (sidebarSettings: { show: boolean }) => {
    updateSettings({
      ...settings,
      leftSidebar: {
        ...sidebarSettings,
      },
    });
  };

  return (
    <Fragment>
      <Transition
        show={settings.leftSidebar.show}
        enter="transition duration-300 ease-out"
        enterFrom="-translate-x-full"
        enterTo="-translate-x-0"
        leave="transition duration-200 ease-out"
        leaveFrom="-translate-x-0"
        leaveTo="-translate-x-full"
        as={Fragment}
      >
        <div className={cls("fixed top-0 left-0 h-screen w-64 z-[111]")}>
          <div className="flex flex-col relative h-full bg-[#d9eaf8] z-[111]">
            <div
              className="h-16 pt-4 px-3"
              onClick={() => updateSidebarMode({ show: false })}
            >
              <Logo className="block" />
            </div>
            <Scrollbar
              options={{ suppressScrollX: true }}
              className="relative px-1"
            >
              <VerticalNav items={navigations} />
            </Scrollbar>
          </div>
        </div>
      </Transition>
      <Transition
        show={settings.leftSidebar.show}
        enter="transition duration-100 ease-out"
        enterFrom="hidden opacity-0"
        enterTo="block opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="block opacity-100"
        leaveTo="opacity-0 hidden"
        as={Fragment}
      >
        <div
          onClick={() => updateSidebarMode({ show: false })}
          className={cls(
            "fixed inset-0 w-screen bg-black/50 z-[100] lg:hidden"
          )}
        />
      </Transition>
    </Fragment>
  );
};

export default Sidenav;
