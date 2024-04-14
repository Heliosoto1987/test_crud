import { createContext, useState } from "react";
import { initialFormUserType } from "../components/templates/users/ModalFormUser/types";

interface UsersContextType {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  userEdit: null | initialFormUserType;
  setUserEdit: React.Dispatch<React.SetStateAction<null | initialFormUserType>>;
}

export const UsersContext = createContext<UsersContextType>({
  user: "",
  setUser: () => {},
  userEdit: null,
  setUserEdit: () => {},
});

export const UsersProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [user, setUser] = useState<string>("");
  const [userEdit, setUserEdit] = useState<null | initialFormUserType>(null);
  return (
    <UsersContext.Provider value={{ user, setUser, userEdit, setUserEdit }}>
      {children}
    </UsersContext.Provider>
  );
};
