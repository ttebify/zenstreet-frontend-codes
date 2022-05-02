import React from "react";
// import { StaticImage } from "gatsby-plugin-image";

interface PackBenefitProps {
  title: string;
  imageUrl: string;
  children: JSX.Element;
}
export default function PackBenefit({
  title,
  // imageUrl,
  children,
}: PackBenefitProps) {
  return (
    <div className="flex gap-2">
      <div className="w-12 h-12 bg-gray-300 flex-none">
        {/* <StaticImage
          src={imageUrl}
          alt=""
          placeholder="blurred"
          layout="constrained"
          className="w-full h-full"
        /> */}
      </div>
      <div className="flex-1">
        <h3 className="text-xl mb-1">{title}</h3>
        <div className="text-base">{children}</div>
      </div>
    </div>
  );
}
