import React, { useState } from "react";
import Button from "../Buttons/Button";
import ModalFooter from "./shared/ModalFooter";
import BigNumber from "bignumber.js";
import ModalInput from "./shared/ModalInput";
import AddressInput from "./shared/AddressInput";

interface FundOptionModalProps {
  balance: BigNumber;
}

const formatFullDisplayBalance = (balance: BigNumber) => {
  return balance.toFixed(4);
};

export default function WithdrawFundsModal({ balance }: FundOptionModalProps) {
  const [walletAddress, setWalletAddress] = useState("");

  return (
    <div className="modal-wrapper">
      <div className="text-xl font-bold flex items-center justify-end">
        Your Account Bal:
        <span className="text-cyan-800 ml-1">
          {formatFullDisplayBalance(balance)} USDT
        </span>
      </div>
      <div className="text-base text-gray-500">
        <div className="my-1">Steps:</div>
        <ul className="list-inside list-disc text-xs text-amber-600">
          <li>Enter the amount to withdraw</li>
          <li>Choose the network from which you want to get paid</li>
          <li>Enter your wallet address</li>
        </ul>
      </div>
      <div className="mt-5 space-y-5">
        <ModalInput
          balance={balance}
          label="USDT amount to withdraw"
          helperProps={{
            count: [50, 100, 200, 300, 400, 500],
            type: "raw",
          }}
        />
        <div>
          Which network do you want your money to be paid from?
          <p>Dropdown</p>
        </div>
        <div className="space-y-5">
          <div>Enter your wallet address</div>
          <AddressInput
            changeHandler={setWalletAddress}
            value={walletAddress}
            name="userWalletAddress"
            className="text-field block"
            placeholder="Enter your wallet address"
          />
        </div>
        <Button className="rounded-full text-sm block mx-auto">
          Request Withdrawal
        </Button>
        <ModalFooter />
      </div>
    </div>
  );
}
