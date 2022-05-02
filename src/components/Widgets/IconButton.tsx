import React from "react";
import { ButtonProps } from "../Buttons/types";
import cls from "classnames";

const IconButton: React.FC<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cls(
        "bg-gray-50 rounded-full p-1 hover:bg-gray-100 focus:bg-gray-100 focus-within:bg-gray-100",
        "mx-2",
        className
      )}
    >
      {children}
    </button>
  );
};
export default IconButton;
