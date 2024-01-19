import React, { createContext, useState, useMemo, useContext } from "react";
import { IUser } from "../interfaces/Polling";

interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUserContext["user"]>>;
}

export const UserContext = createContext<IUserContext | null>(null);

export const AppProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [user, setUser] = useState<IUserContext["user"]>(null);
  const value = useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
