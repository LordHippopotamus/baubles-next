import { useContext } from "react";
import { UserContext } from "../_context/user";

export const useUser = () => useContext(UserContext);
