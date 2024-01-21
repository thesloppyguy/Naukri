import { useNavigate } from "react-router-dom";
import { useMeLazyQuery } from "../generated/graphql";
import { IUser, UserAction } from "../interfaces/Polling";
import { useApp } from "../states/AppContext";

export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const checkToken = () => {
  return !!localStorage.getItem("token");
};

export const useUser = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useApp();
  const setUser = (user: IUser) => {
    dispatch({
      type: UserAction.SET_USER_DATA,
      payload: {
        name: user.name,
        email: user.email,
        organization: {
          id: user.organization.id,
          name: user.organization.name,
        },
        id: user.id,
      },
    });
  };
  const [me, { loading }] = useMeLazyQuery({
    onCompleted(data) {
      if (data.me && data.me.organization) {
        setUser(data.me as IUser);
      }
    },
    onError() {
      logout();
      navigate("/login");
    },
  });
  const loginUser = (token?: string) => {
    if (token) {
      setToken(token);
    }
    return me();
  };

  const logout = () => {
    removeToken();
  };

  return {
    user: state.UserReducer,
    isAuthenticated: checkToken(),
    loginUser,
    loading,
    setUser,
    logout,
  };
};
