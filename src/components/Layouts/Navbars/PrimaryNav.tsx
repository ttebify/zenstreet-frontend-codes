import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  disableBodyScroll,
  clearAllBodyScrollLocks,
  enableBodyScroll,
} from "body-scroll-lock";
import IconButton from "../../Widgets/IconButton";
import { FaTimes } from "react-icons/fa";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import Link from "../../Link";
import Logo from "../../SiteLogo";
import { navigationItems } from "../../../globals/navLinks";
import Drawer from "../../Drawer/Drawer";

export default function PrimaryMenu() {
  const [open, setOpen] = useState(false);
  const mobileNavELement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileNavELement.current) return;
    if (open) {
      disableBodyScroll(mobileNavELement.current);
    } else {
      enableBodyScroll(mobileNavELement.current);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [open]);

  const openMenu = useCallback(() => setOpen(true), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <div className="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between py-5">
      <div className="flex flex-row items-center justify-between">
        <Link
          to="/"
          className="text-xs font-semibold tracking-widest uppercase rounded-lg focus:outline-none
            focus:shadow-outline"
        >
          <Logo />
        </Link>
        <IconButton
          title="Menu"
          onClick={openMenu}
          arial-label="Menu"
          className="lg:hidden cursor-pointer"
        >
          <RiBarChartHorizontalLine className="h-6 w-6" />
        </IconButton>
      </div>
      <Drawer anchor={"right"} open={open} onClose={closeMenu}>
        <nav
          ref={mobileNavELement}
          className="w-full h-full text-gray-800 capitalize"
        >
          <div className="py-3 flex items-center justify-end px-4">
            <IconButton onClick={closeMenu} title="close">
              <FaTimes className="h-5 w-5 text-red-600" />
            </IconButton>
          </div>
          <ul className="flex flex-col w-full">
            {navigationItems.map((nav) => (
              <li key={nav.id} className="block w-full">
                <Link
                  to={nav.href}
                  activeClassName="text-blue-600"
                  className="mb-8 hover:underline p-2"
                  onClick={closeMenu}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
    </div>
  );
}
