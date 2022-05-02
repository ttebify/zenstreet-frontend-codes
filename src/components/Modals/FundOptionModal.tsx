import React from "react";
import Button from "../Buttons/Button";
import ModalFooter from "./shared/ModalFooter";
import BigNumber from "bignumber.js";
import useModal from "../Modal/useModal";
import FundAccountModal from "./FundAccountModal";

interface FundOptionModalProps {
  accountBalance: BigNumber;
  roc: string;
  minContribution: BigNumber;
  duration: string;
}

const formatFullDisplayBalance = (balance: BigNumber) => {
  return balance.toFixed(4);
};

export default function FundOptionModal({
  accountBalance,
  roc,
  minContribution,
  duration,
}: FundOptionModalProps) {
  const insufficient = accountBalance.isLessThan(minContribution);
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
      <div className="mt-5 space-y-3">
        <div className="flex flex-col space-y-3 md:flex-row md:space-x-3">
          <div className="w-full h-40 md:w-64 md:h-32 bg-gray-200"></div>
          <div>
            <div className="text-xl font-medium">Turkey Farm</div>
            <ul className="text-sm list-inside">
              <li>ROC: {roc}</li>
              <li>
                Min. Contribution: {formatFullDisplayBalance(minContribution)}{" "}
                USDT
              </li>
              <li>Project Duration: {duration}</li>
            </ul>
          </div>
        </div>
        {insufficient && (
          <div className="text-red-600 text-sm">
            You don't have enough USDT in your wallet to make a purchase. Credit
            your wallet with the bare minimum needed to fund this project.
          </div>
        )}
        <div>
          <ModalFooter actionButton={<Button disabled>Initiate</Button>} />
        </div>
      </div>
    </div>
  );
}
