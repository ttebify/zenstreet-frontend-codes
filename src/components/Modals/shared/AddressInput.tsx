import React, { useCallback } from "react";

interface AddressInputProps extends React.ComponentProps<"input"> {
  changeHandler: React.Dispatch<React.SetStateAction<string>>;
  errorHandler?: React.Dispatch<React.SetStateAction<string>>;
}
export default function AddressInput({
  changeHandler,
  errorHandler,
  ...rest
}: AddressInputProps) {
  const handleInputChange: React.FormEventHandler<HTMLInputElement> =
    useCallback(
      async (e) => {
        const val = e.currentTarget.value;
        const pattern = /^(0x)?[0-9a-fA-F]{0,40}$/;
        if (!pattern.test(val) && errorHandler) {
          errorHandler("Invalid address");
        } else if (pattern.test(val)) {
          changeHandler(val);
        }
      },
      [changeHandler, errorHandler]
    );
  return <input type="text" onChange={handleInputChange} {...rest} />;
}
