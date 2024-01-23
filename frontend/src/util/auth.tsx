import { useNavigate } from "react-router-dom";
import { useGetUserDataLazyQuery } from "../generated/graphql";
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
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        organization: {
          id: user.organization.id,
          name: user.organization.name,
          url: user.organization.url,
          contactEmail: user.organization.contactEmail,
          status: user.organization.status,
        },
      },
    });
  };
  const [user, { data, loading, error }] = useGetUserDataLazyQuery({
    onCompleted() {
      setUser(data?.getUserData as IUser);
    },
    onError(error) {
      logout();
      navigate("/user");
    },
  });
  const loginUser = (token?: string) => {
    if (token) {
      setToken(token);
    }
    return user();
  };

  const logout = () => {
    removeToken();
  };

  return {
    user: state,
    isAuthenticated: checkToken(),
    loginUser,
    loading,
    setUser,
    logout,
  };
};
