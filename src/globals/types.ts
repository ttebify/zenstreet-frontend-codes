type BaseNavItem = { name?: string; path?: string };
export type NavigationItems = BaseNavItem & {
  label?: string;
  type?: string;
  children?: Array<BaseNavItem & { path: string; auth?: string[] }>;
};
