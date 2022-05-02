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

export default function FundAccountModal({ balance }: FundOptionModalProps) {
  const [walletAddress, setWalletAddress] = useState("");
  const [transactionHash, setTransactionHash] = useState("");

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
          <li>Enter the amount to trade</li>
          <li>Copy our wallet address</li>
          <li>
            Trade the same amount in any cryptocurrency wallet of your choice
          </li>
          <li>
            Enter your wallet address as well as the transaction ID/Hash for the
            transaction
          </li>
        </ul>
      </div>
      <div className="mt-5 space-y-5">
        <ModalInput
          balance={balance}
          label="USDT amount to trade"
          helperProps={{
            count: [50, 100, 200, 300, 400, 500],
            type: "raw",
          }}
        />
        <div>
          What network will you pay from?
          <p>Dropdown</p>
        </div>
        <div>Our wallet address</div>
        <div className="space-y-5">
          <div>Now let's be sure</div>
          <AddressInput
            changeHandler={setWalletAddress}
            value={walletAddress}
            name="userWalletAddress"
            className="text-field block"
            placeholder="Enter your wallet address"
          />
          <AddressInput
            changeHandler={setTransactionHash}
            value={transactionHash}
            name="userTransactionHash"
            className="text-field block"
            placeholder="Transaction id/hash code"
          />
        </div>
        <Button className="rounded-full text-sm block mx-auto">
          TOP UP WALLET
        </Button>
        <ModalFooter />
      </div>
    </div>
  );
}
