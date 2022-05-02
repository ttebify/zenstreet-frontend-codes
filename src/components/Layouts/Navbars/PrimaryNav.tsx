import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { navigationItems } from "../../../globals/navLinks";
import type { NavigationItems } from "./types";
import ScrollBar from "react-perfect-scrollbar";
import Link from "../../Link";
import Logo from "../../SiteLogo";
import useAuthContext from "../../../hooks/useAuthContext";
import Button from "../../Buttons/Button";
import Section from "../Section";

interface NavLinkProps extends NavigationItems {
  className?: string;
}

const SubMenu = ({
  subItems,
  parentLink,
}: {
  subItems: NavLinkProps[];
  parentLink: NavigationItems;
}) => {
  return (
    <ScrollBar className="fixed left-1/2 sm:left-0 sm:top-full -translate-x-1/2 sm:-translate-x-72 md:translate-x-0 sm:absolute w-[90%] sm:w-96 max-w-sm  py-2 max-h-[400px] overflow-y-auto overflow-x-hidden z-50 bg-white shadow-xl rounded text-gray-700 invisible group-hover:visible group-focus-within:visible">
      <div className="p-2 bg-gray-50">
        <Link
          to={parentLink.slug}
          className="p-2 font-medium text-primary-600 underline outline-4 outline-primary-800 "
        >
          {parentLink.name} <AiOutlineLink className="h-4 w-4 inline-block" />
        </Link>
      </div>
      {subItems.map((child) => {
        return (
          <Link
            to={`${parentLink.slug}${child.slug}`}
            key={child.name}
            className="px-2 py-3 flex hover:bg-gray-100 outline-4 outline-primary-800 cursor-pointer transition duration-300"
            title={child.name}
          >
            {child.icon({
              className:
                "h-8 w-8 p-1 inline-block bg-gray-50 flex-shrink-0 flex-grow-0 text-primary-800/80",
            })}
            <div className="ml-4">
              <h4 className="font-medium text-primary-800/80 underline">
                {child.name}
              </h4>
              <p className="text-xs text-gray-600">{child.description}</p>
            </div>
          </Link>
        );
      })}
    </ScrollBar>
  );
};

const NavLink = ({
  name,
  slug,
  description,
  icon,
  children,
  className,
  type = "link",
}: NavLinkProps) => {
  const navIcon = icon({
    className: `h-8 w-8 p-1 inline-block bg-gray-50 hover:bg-gray-200 focus:bg-gray-200 focus-within:bg-gray-200
        text-primary-800/80 hover:text-primary-600 focus:text-primary-600 focus-within:text-primary-600
        md:hidden cursor-pointer`,
    title: name,
    tabIndex: 0,
  });

  return (
    <li className="relative group inline-block mx-2 lg:mx-4 text-base">
      {children != null ? (
        <>
          {navIcon}
          <button
            className={`hidden outline-4 outline-primary-800  md:inline px-2 py-1 font-semibold
                text-gray-700 hover:text-primary-700 focus:text-primary-700
                focus-within:text-primary-700 transition duration-300 ${className}`}
          >
            {name}
          </button>
          <SubMenu
            subItems={children}
            parentLink={{ name, slug, description, icon, type }}
          />
        </>
      ) : (
        <Link
          to={slug}
          className={`p-0 md:px-2 md:py-1 outline-4 outline-primary-800 font-semibold text-gray-700
            hover:text-primary-700 focus:text-primary-700 focus-within:text-primary-700 transition
            duration-300 ${className}`}
        >
          {navIcon}
          <span className="hidden md:inline">{name}</span>
        </Link>
      )}
    </li>
  );
};

export default function PrimaryNav() {
  const { isAuthenticated, logout, user } = useAuthContext();

  return (
    <Section containerClass="bg-white" className="flex justify-center md:justify-start items-center">
      <div className="bg-white w-full py-4 md:p-4">
        <Logo />
        <div className="inline-block flex-grow">
          <nav
            className="md:mx-6 flex justify-end md:justify-start items-center"
            aria-label="primary navigation menu"
          >
            <ul>
              {navigationItems.map(
                (item) =>
                  item.type !== "button" &&
                  (item.protected ? (
                    isAuthenticated && <NavLink key={item.name} {...item} />
                  ) : (
                    <NavLink key={item.name} {...item} />
                  ))
              )}
              {isAuthenticated && (
                <li
                  className="relative group inline-block mx-2 lg:mx-4 text-base bg-gray-100 p-2 rounded-full
                  w-48 group cursor-pointer text-center"
                >
                  Hi, {user?.lastname}
                  <div className="shadow-md p-2 z-20 hidden group-hover:block absolute w-60 bg-white">
                    <Button onClick={logout} className="block w-full">
                      Logout
                    </Button>
                  </div>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <ul className="hidden md:inline-block">
          {navigationItems.map(
            (item) =>
              item.type === "button" && (
                <NavLink
                  key={item.name}
                  {...item}
                  className="bg-primary-500 rounded-full !text-white px-4 py-2 transition duration-300
                    ease-in-out hover:bg-primary-600"
                />
              )
          )}
        </ul>
      </div>
    </Section>
  );
}
