import React, { useRef, useState } from "react";
import cls from "classnames";
import { useField } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import type { AllInputTypes, TextInputProps } from "../types";

function TextInput<T extends AllInputTypes>({
  icon,
  label,
  inputId,
  type,
  name,
  ...rest
}: TextInputProps<T>) {
  const [field, meta /* , helpers */] = useField({ name });
  const hasError = meta.error && meta.touched;

  const isPassword = React.useMemo(() => type === "password", [type]);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputEle = inputRef.current;

  const toggleTextAttributes = (hidden: boolean) => {
    if (inputEle != null) {
      const attr = hidden ? "password" : "text";
      inputEle.type = attr;
    }
  };

  return (
    <label htmlFor={inputId} className="w-full">
      <span className="block mb-0.5 text-sm text-gray-500">{label}</span>
      <div className="w-full flex justify-between items-center relative">
        <input
          ref={inputRef}
          id={inputId}
          type={isPassword ? "password" : "text"}
          className={cls(
            `inline-block bg-white px-2 py-2.5 placeholder:text-gray-400 rounded w-full
            outline-none ring ring-gray-100 focus:ring-sky-600 focus-within:ring-sky-600
            transition-all duration-200 placeholder:text-sm`,
            {
              "placeholder:!text-red-500 !text-red-500": hasError,
              "focus:ring-red-600 focus-within:ring-red-600": hasError,
            }
          )}
          {...field}
          {...rest}
        />
        <div
          className={cls(
            "absolute right-3 h-8 w-8 inline-flex justify-center items-center text-sky-700",
            { "text-red-600": hasError }
          )}
        >
          {isPassword ? (
            <PasswordEyeIcon onHidden={toggleTextAttributes} />
          ) : (
            icon
          )}
        </div>
      </div>
      {hasError && (
        <small className="text-red-600 block text-xs mt-1">{meta.error}</small>
      )}
    </label>
  );
}

interface PasswordEyeIconType {
  onHidden: (hidden: boolean) => void;
}
const PasswordEyeIcon = (props: PasswordEyeIconType) => {
  const [hidden, setHidden] = useState(true);

  const toggleHidden = () => {
    setHidden((p) => !p);
    props.onHidden(!hidden);
  };

  if (hidden)
    return (
      <AiOutlineEyeInvisible
        className="cursor-pointer"
        onClick={toggleHidden}
      />
    );
  else
    return <AiOutlineEye className="cursor-pointer" onClick={toggleHidden} />;
};

export default React.memo(TextInput);
