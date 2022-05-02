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
    name: "Trades",
    path: "/app/trade-summary",
  },
  {
    name: "Rewards",
    path: "/app/rewards",
  },
  {
    name: "Activities",
    path: "/app/activities",
  },
  {
    label: "Account",
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
        path: "/app/signup",
      },
      {
        name: "Forgot Password",
        path: "/app/forgot-password",
      },
    ],
  },
];
