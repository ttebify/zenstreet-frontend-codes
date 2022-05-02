import React from "react";
import Button from "../../Buttons/Button";

export default function AccountSummary() {
  return (
    <div className="bg-white flex flex-col md:flex-row items-stretch text-base w-full p-4 divide-y-2
      md:divide-y-0 md:divide-x-2">
      <div className="w-full md:w-1/3 p-4">
        <div className="text-xl font-medium mb-2">Account Summary</div>
        <p className="text-gray-500">Total Options Invested: 6</p>
        <p className="text-gray-500">Net Profit: 0.005 USDT</p>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <div className="text-xl font-medium mb-2">Account Bal: 50 USDT</div>
        <p className="text-gray-500">2 activities Pending confirmations</p>
        <Button className="block mt-2 rounded-full">Add Funds</Button>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <div className="text-xl font-medium mb-2">Rewards From Investments.</div>
        <p className="text-gray-500">50 USDT</p>
      </div>
    </div>
  );
}
