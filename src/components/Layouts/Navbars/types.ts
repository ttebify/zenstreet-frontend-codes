import { IconType } from "react-icons";

export interface NavigationItems {
  /**@property {children} NavigationItems[] Sub menu items in a parent*/
  children?: NavigationItems[];

  /**@property {description} string Short description about an item*/
  description: string;

  /**@property {icon} IconType A material icon name*/
  icon: IconType;

  /**@property {name} string Name of the nav link to show in the browser*/
  name: string;

  /**@property {slug} string A fragment of the URL of which the nav*/
  slug: string;

  /**@property {type} string 'link' | 'button' */
  type?: "link" | "button";

  /**@property {protected} string This marks that the link leads to a protected page */
  protected?: boolean;
}
