import React from "react";
import type { HeadingProps, SectionDescriptionProps } from "./types";

export function SectionHeading({ children, ...props }: HeadingProps) {
  return <h2 {...props}>{children}</h2>;
}

export function SubHeading({ children, className, ...props }: HeadingProps) {
  return (
    <div
      className={`text-xl sm:text-2xl font-normal text-gray-500 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function SectionDescription({
  children,
  className,
}: SectionDescriptionProps) {
  return (
    <p
      className={`mt-4 text-sm md:text-base text-center md:text-left lg:text-lg leading-relaxed text-secondary-100 max-w-xl ${className}`}
    >
      {children}
    </p>
  );
}
