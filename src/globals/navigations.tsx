import React from "react";
// import { authRoles } from "../auth/authRoles";
import { NavigationItems } from "./types";
import {
  MdOutlineMiscellaneousServices,
  MdOutlinePassword,
} from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { VscOrganization, VscSignIn } from "react-icons/vsc";
import { FiUserPlus } from "react-icons/fi";

export const navigations: NavigationItems[] = [
  {
    label: "Quick Links",
    type: "label",
  },
  {
    name: "Drawer",
    path: "/app/drawer",
    icon: <RiDashboardLine />,
  },
  {
    name: "Profile",
    path: "/app/profile",
    icon: <FaRegUser />,
  },
  {
    name: "Services",
    path: "/services",
    icon: <MdOutlineMiscellaneousServices />,
  },
  {
    name: "About Us",
    path: "/about",
    icon: <VscOrganization />,
  },
  {
    label: "Account Management",
    type: "label",
  },
  {
    name: "Session/Auth",
    children: [
      {
        name: "Sign in",
        path: "/app/login",
        icon: <VscSignIn />,
      },
      {
        name: "Sign up",
        path: "/app/register",
        icon: <FiUserPlus />,
      },
      {
        name: "Forgot Password",
        path: "/app/forgot-password",
        icon: <MdOutlinePassword />,
      },
    ],
  },
];
