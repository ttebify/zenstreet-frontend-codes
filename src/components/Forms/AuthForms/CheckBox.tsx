import React from "react";
import cls from "classnames";
import { useField, Field } from "formik";
import type { InputAttributes } from "../types";

function CheckBox({
  label,
  name,
  value,
  className,
  type,
  ...rest
}: InputAttributes<HTMLInputElement> & { label: string; name: string }) {
  const [field] = useField({ name });
  const selected = field.value === value;

  return (
    <div
      className={cls(
        "w-full bg-gray-100 border text-gray-400 text-base border-gray-200 p-2 relative flex",
        "justify-between items-center transition-colors duration-200",

        {
          "bg-[#9a4453]/30 border-[#9a4453] text-[#5f0e22]": selected,
        }
      )}
    >
      <div>{label}</div>
      <div
        className={cls(
          "relative inline-block w-3 h-3 bg-gray-300 transition-colors duration-150",
          { "!bg-[#5f0e22]": selected }
        )}
      />
      <Field
        type="radio"
        name={name}
        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
        value={value}
        {...rest}
      />
    </div>
  );
}

export default React.memo(CheckBox);
