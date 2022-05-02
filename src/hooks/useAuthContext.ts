import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export default function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}
