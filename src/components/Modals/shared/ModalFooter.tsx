import React, { useCallback } from "react";
import Button from "../../Buttons/Button";
import cls from "classnames";
import useModalHandles from "../../../hooks/useModalHandlers";

interface ModalFooterProps {
  actionButton?: JSX.Element;
  children?: React.ReactNode;
  closeAction?: () => Promise<void>;
}
export default function ModalFooter({
  actionButton,
  children,
  closeAction,
}: ModalFooterProps) {
  const { onDismiss } = useModalHandles();

  const clickHandler = useCallback(async () => {
    if (closeAction) {
      await closeAction();
    }
    onDismiss();
  }, [closeAction]);

  return (
    <div
      className={cls("grid grid-cols-2 grid-rows-1 space-x-3 mt-8", {
        "grid-cols-1 space-x-0": !actionButton,
      })}
    >
      <Button className="btn-danger" onClick={clickHandler}>
        Close
      </Button>
      {actionButton}
      {children && <div>{children}</div>}
    </div>
  );
}
