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
        "w-full bg-gray-100 border rounded text-gray-400 text-base border-gray-200 p-2 relative flex",
        "justify-between items-center transition-colors duration-200",

        {
          "bg-sky-200 border-sky-600 text-sky-700": selected,
        }
      )}
    >
      <div>{label}</div>
      <div
        className={cls(
          "relative inline-block w-4 h-4 rounded-full bg-gray-300 transition-colors duration-150",
          { "bg-sky-700": selected }
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
