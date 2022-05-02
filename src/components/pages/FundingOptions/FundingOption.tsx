import React from "react";
import Link from "../../Link";

export default function FundingOption() {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-2xl shadow-lg">
      <div className="h-40 w-full bg-gray-300">Image</div>
      <div className="space-y-3 mt-3 p-3">
        <div className="font-medium text-2xl">Chemical charm</div>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, vitae
          diam, porta odio.
        </p>
        <ul className="text-sm list-inside">
          <li>ROC: 200%</li>
          <li>Min. Contribution: 20 USDT Project</li>
          <li>Duration: 4d</li>
        </ul>
        <p className="my-3 font-medium text-sm text-center">
          Funding begins in 3 days
        </p>
        <Link
          as="button"
          to="/app/investment/dt73vsyu6389"
          className="block mx-auto w-full"
        >
          View This Project
        </Link>
      </div>
    </div>
  );
}
