import React from "react";
import { IconBaseProps } from "react-icons";

interface FeatureCardProps {
  icon: (props?: IconBaseProps) => JSX.Element;
  heading: string;
  text: string;
}
export default function FeatureCard({ icon, heading, text }: FeatureCardProps) {
  return (
    <div
      className="mx-auto text-center max-w-xs p-4 mb-10 md:mb-0 shadow-lg md:shadow-none
        rounded"
    >
      <div className="bg-blue-300/30 h-20 w-20 mx-auto flex justify-center items-center rounded-full">
        {icon({ className: "!w-10 !h-10 text-blue-500" })}
      </div>
      <div className="my-1 text-2xl !font-medium">{heading}</div>
      <p className="text-gray-500">{text}</p>
    </div>
  );
}
