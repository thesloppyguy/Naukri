import { IUser, IUserState, UserAction } from "../interfaces/Polling";

export const userInitialState: IUser = {
  id: "",
  email: "",
  name: "",
  organization: {
    id: "",
    name: "",
    url: "",
    contactEmail: "",
    status: "Review",
  },
  role: "User",
};

export const UserReducer = (
  state: IUser = userInitialState,
  action: IUserState
) => {
  switch (action.type) {
    case UserAction.SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
  }
};
