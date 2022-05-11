import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Link from "../../Link";

export default function FundingOption() {
  return (
    <div className="w-full max-w-xs flex-none overflow-hidden ring-1">
      <div className="w-full bg-gray-300">
        <StaticImage
          src="../../../images/pexels-serena-koi-6878250.jpg"
          alt="A farm"
          layout="fullWidth"
          placeholder="blurred"
        />
      </div>
      <div className="space-y-3 p-3">
        <div className="font-semibold text-2xl">Chemical Charm</div>
        <ul className="text-sm list-inside">
          <li>ROC: 200%</li>
          <li>Min. Contribution: 20 USDT Project</li>
          <li>Duration: 4d</li>
        </ul>
        <p className="my-3 font-medium text-sm">Funding begins in 3 days</p>
        <Link
          as="button"
          to="/app/investment/dt73vsyu6389"
          className="rounded-none"
        >
          View This Project
        </Link>
      </div>
    </div>
  );
}
