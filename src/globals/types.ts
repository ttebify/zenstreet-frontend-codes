type BaseNavItem = { name?: string; path?: string; icon?: JSX.Element };
export type NavigationItems = BaseNavItem & {
  label?: string;
  type?: string;
  children?: Array<BaseNavItem & { path: string; auth?: string[] }>;
};
