import { useContext } from "react";
import { ModalContext } from "../components/Modal/ModalContext";

export default function useModalHandles() {
  const { onPresent, onDismiss } = useContext(ModalContext);
  return { onPresent, onDismiss };
}
