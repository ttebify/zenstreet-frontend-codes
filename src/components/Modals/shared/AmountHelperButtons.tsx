import BigNumber from "bignumber.js";
import React, { useCallback } from "react";
import type { InputHelperProps } from "./types";

interface AmountHelperButtonsProps extends InputHelperProps {
  onSelect: (v: number) => void;
  maxValue: BigNumber;
}
export default function AmountHelperButtons({
  count,
  ratio,
  onSelect,
  maxValue,
  max,
  type,
}: AmountHelperButtonsProps) {
  const getValue = useCallback(
    (num) => {
      const t = type;
      let r = ratio;
      const m = max;
      let result = 0; // Keep track of the final result
      if (t === "percentage" && m && r) {
        const pv = m * (r * num); // Percentage value
        result = pv;
      } else {
        const rv = num; // Raw value, we just return the raw array values here [x, y, z]
        result = rv;
      }
      return { number: new BigNumber(result), type };
    },
    [ratio, max, type]
  );

  const selectHandler = useCallback(
    (num: number) => {
      const value = getValue(num);
      if (value.type === "percentage") {
        const percent = value.number.div(100);
        const result = percent.times(maxValue);
        onSelect(+result); // +result returns number to the primitive js number notiation
      } else {
        onSelect(+value.number);
      }
    },
    [maxValue]
  );

  return (
    <div className="flex space-x-2 items-center">
      {count.map((num) => {
        const value = getValue(num);
        const symbol = value.type === "percentage" ? "%" : null;
        return (
          <button
            className="p-2 rounded-md bg-gray-100 focus:bg-gray-200 hover:bg-gray-200
          focus-within:bg-gray-200"
            onClick={() => selectHandler(num)}
          >
            {value.number.toString()}
            {symbol}
          </button>
        );
      })}
    </div>
  );
}
