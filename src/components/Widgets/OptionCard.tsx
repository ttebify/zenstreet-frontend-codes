import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Link from "../Link";

export default function OptionCard() {
  return (
    <div
      className="bg-white shadow my-8 flex flex-col sm:flex-row items-center md:flex-col
        md:w-[45%] lg:w-[30%] shadow-gray-200 rounded-b max-w-sm sm:max-w-none"
    >
      <div className="w-full sm:w-56 md:w-full flex-none">
        <StaticImage
          src="../../images/pexels-serena-koi-6878250.jpg"
          alt=""
          layout="fullWidth"
          placeholder="blurred"
        />
      </div>
      <div className="p-4 text-base">
        <div className="font-medium text-xl mb-3">Lagos Farm</div>
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolor ex
          adipisci sapiente quae. Provident mollitia quos, recusandae dolores
          aliquid ad nulla ea commodi dignissimos sapiente, suscipit quod ipsam
          soluta.
        </p>
        <div className="flex justify-center items-center mt-4 space-x-4">
          <span className="font-medium text-xl">RIO $500</span>
          <Link to="/" className="p-2" as="button" variant="primary">
            Join now
          </Link>
        </div>
      </div>
    </div>
  );
}
