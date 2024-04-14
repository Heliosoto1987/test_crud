import { useContext } from "react";
import { initialFormUserType } from "./types";
import { UsersContext } from "../../../../context/context";

export const useInitialValues = () => {
  const { userEdit } = useContext(UsersContext);

  const initialFormUser: initialFormUserType = {
    name: userEdit?.name ?? "",
    email: userEdit?.email ?? "",
    age: userEdit?.age ?? null,
    lastName: userEdit?.email ?? "",
  };
  return { initialFormUser };
};
