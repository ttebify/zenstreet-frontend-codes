import React from "react";
import { GoHome } from "react-icons/go";
import { NavigationItems } from "../components/Layouts/Navbars/types";

/**
 * @var {navigationItems} NavigationItems[] The list of all site navigations and options
 */
export const navigationItems: NavigationItems[] = [
  {
    name: "Home",
    slug: "/",
    description: "Learn, use and scale.",
    icon: (props) => <GoHome {...props} />,
  },
  {
    name: "Drawer",
    slug: "/app/drawer",
    description: "Everything street, all in one place.",
    icon: (props) => <GoHome {...props} />,
    protected: true,
  },
];
