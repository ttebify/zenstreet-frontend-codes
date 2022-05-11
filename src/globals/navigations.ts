// import { authRoles } from "../auth/authRoles";
import { NavigationItems } from "./types";

export const navigations: NavigationItems[] = [
  {
    label: "Quick Links",
    type: "label",
  },
  {
    name: "Drawer",
    path: "/app/drawer",
  },
  {
    name: "Profile",
    path: "/app/account",
  },
  {
    name: "Products",
    path: "/app/business-center",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "About Us",
    path: "/about",
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
      },
      {
        name: "Sign up",
        path: "/app/register",
      },
      {
        name: "Forgot Password",
        path: "/app/forgot-password",
      },
    ],
  },
];
