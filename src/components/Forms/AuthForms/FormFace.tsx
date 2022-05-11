import React from "react";
import Logo from "../../SiteLogo";
import { FormFaceProps } from "../types";
import cls from "classnames";

export default function FormFace({
  title,
  motivation,
  content,
  bgColorClass,
}: FormFaceProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between md:h-screen">
      <div
        className={cls(
          "w-full md:w-1/3 bg-sky-800 p-10 flex flex-col justify-center",
          bgColorClass
        )}
      >
        <Logo className="text-sky-50" />
        <h2 className="font-bold text-gray-100 mb-3">{title}</h2>
        <p className="text-gray-200 mb-5">{motivation}</p>
      </div>
      <div className="w-full md:w-2/3 px-4 py-10 md:px-10 flex flex-col md:justify-center">
        {content}
      </div>
    </div>
  );
}
