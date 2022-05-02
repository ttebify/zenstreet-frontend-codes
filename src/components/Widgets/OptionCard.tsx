import React from "react";
import Link from "../Link";

export default function OptionCard() {
  return (
    <div
      className="bg-white shadow my-8 flex flex-col sm:flex-row items-center md:flex-col
        md:w-[45%] lg:w-[30%] shadow-gray-200 rounded-b"
    >
      <div className="w-full sm:w-56 md:w-full h-56 flex-none bg-black/70">
        image
      </div>
      <div className="p-4 text-base">
        <div className="font-medium text-xl mb-3">
          Fund a Graphic Designer
        </div>
        <p className="text-gray-500">
          Invest in a graphic designer with UI/UX skills for our Furniture
          company...
        </p>
        <div className="flex justify-center items-center mt-4 space-x-4">
          <span className="font-medium text-xl">RIO $500</span>
          <Link
            to="/"
            className="p-2"
            as="button"
            variant="primary"
          >
            Join now
          </Link>
        </div>
      </div>
    </div>
  );
}
