import React from "react";
import { IconBaseProps } from "react-icons";

interface FeatureCardProps {
  icon: (props?: IconBaseProps) => JSX.Element;
  heading: string;
  text: string;
}
export default function FeatureCard({ icon, heading, text }: FeatureCardProps) {
  return (
    <div className="text-center max-w-xs p-4 mb-10 md:mb-0">
      <div className="mx-auto flex justify-center items-center rounded-full">
        {icon({ className: "h-12 w-12 text-blue-500" })}
      </div>
      <div className="my-2 text-2xl !font-medium">{heading}</div>
      <p className="text-gray-500 text-base">{text}</p>
    </div>
  );
}
