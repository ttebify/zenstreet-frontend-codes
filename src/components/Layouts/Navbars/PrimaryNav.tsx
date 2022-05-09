import React, { Fragment, useCallback, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import Link from "../../Link";
import Logo from "../../SiteLogo";
import { navigationItems } from "../../../globals/navLinks";
import Icon from "../../Widgets/Icon";
import cls from "classnames";

export default function PrimaryMenu() {
  const [open, setOpen] = useState(false);

  const openMenu = useCallback(() => setOpen(true), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <Fragment>
      <div className="flex flex-col lg:flex-row lg:items-center w-full">
        <div className="flex justify-between items-center w-full lg:w-min py-5">
          <Link
            to="/"
            className="text-xs font-semibold tracking-widest rounded-lg focus:outline-none
            focus:shadow-outline"
          >
            <Logo />
          </Link>
          <Icon
            title="Menu"
            arial-label="Menu"
            className="lg:hidden cursor-pointer"
          >
            {open ? (
              <FaTimes onClick={closeMenu} className="h-6 w-6" />
            ) : (
              <RiBarChartHorizontalLine
                onClick={openMenu}
                className="h-6 w-6"
              />
            )}
          </Icon>
        </div>
        <nav
          className={cls(
            "w-full text-gray-800 capitalize py-5 flex lg:items-center",
            { hidden: !open }
          )}
        >
          <ul
            className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-2
            lg:items-center lg:justify-end w-full"
          >
            {navigationItems.map((nav) => (
              <li
                key={nav.id}
                className="flex items-stretch w-full lg:w-min lg:inline-block"
              >
                <Link
                  to={nav.href}
                  activeClassName="text-blue-600"
                  className="inline-block text-xl p-2 m-0 whitespace-nowrap"
                  onClick={closeMenu}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
            <li
              className="flex justify-between items-end lg:!ml-4 lg:items-center w-full lg:w-auto
              lg:space-x-2"
            >
              <Link to="/app/signup" as="button">
                Start Funding
              </Link>
              <Link to="/app/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}
