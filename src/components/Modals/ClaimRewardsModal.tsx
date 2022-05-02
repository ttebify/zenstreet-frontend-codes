import React from "react";
import Button from "../Buttons/Button";
import ModalFooter from "./shared/ModalFooter";
import BigNumber from "bignumber.js";
import ModalInput from "./shared/ModalInput";

interface FundOptionModalProps {
  balance: BigNumber;
}

const formatFullDisplayBalance = (balance: BigNumber) => {
  return balance.toFixed(4);
};

export default function ClaimRewardsModal({ balance }: FundOptionModalProps) {
  return (
    <div className="modal-wrapper">
      <div className="flex justify-end">
        <div className="text-xl font-bold">
          Your Reward Bal.
          <div className="text-cyan-800">
            {formatFullDisplayBalance(balance)} USDT
          </div>
        </div>
      </div>
      <div className="mt-5 space-y-5">
        <ModalInput
          balance={balance}
          label="Amount to Withdraw"
          helperProps={{
            count: [1, 2, 3, 4],
            ratio: 0.25,
            max: 100,
            type: "percentage",
          }}
        />
        <div className="text-center md:text-left">
          To Which Account?
          <div className="flex flex-col md:flex-row md:justify-center items-center space-y-3 md:space-y-0
            md:space-x-3 mt-2">
            <Button className="rounded-full text-sm">
              Add to Main Account
            </Button>
            <Button className="rounded-full text-sm">
              Move to Withdrawal Wallet
            </Button>
          </div>
        </div>
        <div>
          <ModalFooter />
        </div>
      </div>
    </div>
  );
}
