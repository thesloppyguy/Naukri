import {
  FunctionComponent,
  createContext,
  useContext,
  useReducer,
} from "react";
import { IUser, UserAction } from "../interfaces/Polling";
import { UserReducer, userInitialState } from "./UserReducer";
const ContextState = createContext([]);

interface IDispatchParams {
  type: UserAction;
  payload: IUser;
}

const useApp = () => {
  const context = useContext(ContextState);
  if (!context) {
    throw new Error(`useApp must be used within a AppProvider`);
  }
  return context as unknown as [IUser, ({ ...args }: IDispatchParams) => void];
};

const AppProvider: FunctionComponent<any> = (props) => {
  const [state, dispatch] = useReducer(UserReducer, userInitialState);
  return (
    <ContextState.Provider
      value={
        [state, dispatch] as unknown as [
          IUser,
          ({ ...args }: IDispatchParams) => void
        ]
      }
      {...props}
    />
  );
};

export { useApp, AppProvider };

// export const AppProvider = (FunctionComponent<any> = (props) => {
//   const [user, setUser] = useState<IUserContext["user"]>(null);
//   const value = useMemo(() => ({ user, setUser }), [user]);

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// });
