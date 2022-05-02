import BigNumber from "bignumber.js";
import React from "react";
import Button from "../Buttons/Button";
import useModal from "../Modal/useModal";
import FundAccountModal from "./FundAccountModal";
import ModalFooter from "./shared/ModalFooter";

interface PackSubscriptionModalProps {
  accountBalance: BigNumber;
  price: string;
}

const formatFullDisplayBalance = (balance: BigNumber) => {
  return balance.toFixed(4);
};

export default function PackSubscriptionModal({
  accountBalance,
  price,
}: PackSubscriptionModalProps) {
  const subscribed = "4";
  const insufficient = accountBalance.isLessThan(price);
  const [onPresentModal] = useModal(
    <FundAccountModal balance={accountBalance} />
  );

  return (
    <div className="modal-wrapper">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">
          Account Bal.
          <div className="text-cyan-800">
            {formatFullDisplayBalance(accountBalance)} USDT
          </div>
        </div>
        <Button className="rounded-full" onClick={onPresentModal}>
          Fund Your Account
        </Button>
      </div>
      <div className="mt-5 space-y-3 text-2xl">
        <div>Upgrade to Pack 5</div>
        <div className="text-gray-400 font-light">Price: {price} USDT</div>
        <div className="text-base text-amber-600">
          You are currently on pack {subscribed}
        </div>
        {insufficient && (
          <div className="text-red-600 text-sm">
            You don't have enough USDT in your wallet to make a purchase. Credit
            your wallet with the bare minimum needed to fund this project.
          </div>
        )}
        <div>
          <ModalFooter
            actionButton={<Button disabled={insufficient}>Upgrade Now</Button>}
          />
        </div>
      </div>
    </div>
  );
}
