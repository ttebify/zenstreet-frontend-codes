import React, { useCallback, useState } from "react";
import cls from "classnames";
import AmountHelperButtons from "./AmountHelperButtons";
import BigNumber from "bignumber.js";
import type { InputHelperProps } from "./types";

interface ModalInputProps {
  balance: BigNumber;
  label: string;
  helperProps?: InputHelperProps;
}
export default function ModalInput({
  balance,
  label,
  helperProps,
}: ModalInputProps) {
  const [value, setValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange: React.FormEventHandler<HTMLInputElement> =
    useCallback(
      async (e) => {
        const val = e.currentTarget.value.replace(/,/g, ".");
        const pattern = /^[0-9]*[.,]?[0-9]{0,18}$/g;
        if (!pattern.test(val)) return;
        const amount = new BigNumber(val);
        const bal = new BigNumber(balance);
        // const bal = Number.parseFloat("100");
        if (amount.isGreaterThan(bal)) {
          setErrorMsg("Insufficient funds in your wallet");
        } else {
          setErrorMsg("");
        }
        setValue(amount.toJSON());
      },
      [balance]
    );

  const handleSelect = useCallback((value: number) => {
    setValue(value.toString());
    setErrorMsg("");
  }, []);

  const hasError = errorMsg.length > 0;

  return (
    <div className="space-y-2 md:space-y-4">
      <label htmlFor="withdrawal-input" className="space-y-2 block w-full">
        <div className="text-center md:text-left">{label}</div>
        <input
          id="withdrawal-input"
          className={cls("text-field block", {
            "placeholder:!text-red-500 !text-red-500": hasError,
            "focus:ring-red-600 focus-within:ring-red-600": hasError,
          })}
          value={value}
          onChange={handleInputChange}
        />
      </label>
      {hasError && <div className="text-xs text-red-400">{errorMsg}</div>}
      {helperProps && (
        <div className="flex justify-center">
          <AmountHelperButtons
            maxValue={balance}
            onSelect={handleSelect}
            {...helperProps}
          />
        </div>
      )}
    </div>
  );
}
