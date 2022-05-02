import React from "react";
import Button from "../../Buttons/Button";
import cls from "classnames";
import BigNumber from "bignumber.js";
import useModal from "../../Modal/useModal";
import PackSubscriptionModal from "../../Modals/PackSubscriptionModal";

interface SelectPackCardProps {
  name: string;
  price: string;
  presentBenefits: () => void;
  active?: boolean;
}
export default function SelectPackCard({
  name,
  price,
  presentBenefits,
  active,
}: SelectPackCardProps) {
  const bal = new BigNumber(60);
  const [onPresentModal] = useModal(
    <PackSubscriptionModal accountBalance={bal} price={price} />
  );

  return (
    <div
      className={cls(
        "rounded-lg shadow inline-block space-y-3 p-3 text-center w-full max-w-xs mx-auto",
        { "bg-green-200": active }
      )}
    >
      <div className="font-light text-3xl">{name}</div>
      <div className="font-light text-3xl">${price}</div>
      <div className="flex flex-col space-y-2">
        <Button onClick={presentBenefits}>See The Benefits</Button>
        <Button onClick={onPresentModal} disabled={!!active}>
          Subscribe
        </Button>
      </div>
      {active && (
        <div className="text-sm text-gray-400">
          You are currently on this plan
        </div>
      )}
    </div>
  );
}
