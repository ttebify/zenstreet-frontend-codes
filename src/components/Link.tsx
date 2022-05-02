import React from "react";
import { Link as GatsbyLink } from "gatsby";

type LinkProps = {
  as?: "button";
  variant?: "primary";
};
export default function Link({
  children,
  to,
  activeClassName,
  partiallyActive,
  className,
  state,
  as,
  variant = "primary",
  ...other
}: React.ComponentPropsWithoutRef<typeof GatsbyLink> & LinkProps) {
  const internal = /^\/(?!\/)/.test(to);
  let linkClassName = as === "button" ? "btn" : "";
  if (as === "button" && variant === "primary") {
    linkClassName += " btn-primary md:hover:text-gray-50";
  }

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        className={`hover:text-blue-500 ${linkClassName} ${className}`}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
}
