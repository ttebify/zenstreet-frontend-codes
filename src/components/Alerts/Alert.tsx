import React from "react";
import clx from "classnames";
import { alertVariants } from ".";

export interface AlertProps extends React.ComponentPropsWithRef<"div"> {
  title: string;
  type?: typeof alertVariants[keyof typeof alertVariants];
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ type = "info", title, children, onClick, ...props }, ref) => {
    const info = type === "info",
      success = type === "success",
      error = type === "error",
      warn = type === "warning";

    return (
      <div
        className={clx(
          "fixed left-1/2 sm:left-4 -translate-x-1/2 sm:translate-x-0 transition-all duration-300",
          "flex items-center max-w-xs sm:max-w-sm mb-4 font-sans px-2 shadow-md rounded-md w-full",
          "sm:w-auto bg-gray-50 border-l-4",
          {
            "text-sky-800 border-sky-800": info,
            "text-red-400 border-red-400": error,
            "text-green-600 border-green-600": success,
            "text-yellow-400 border-yellow-400": warn,
          }
        )}
        ref={ref}
        onClick={onClick}
        {...props}
      >
        <div className="w-auto items-center py-2">
          <div className="text-sm font-medium">{title}</div>
          <p className="leading-tight text-xs font-light">{children}</p>
        </div>
      </div>
    );
  }
);

export default Alert;
