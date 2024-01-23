import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useScrollTop } from "../hooks/useScrollTop";
import { useEffect } from "react";
import { AppProvider } from "../states/AppContext";
import { checkToken } from "../util/auth";

const WrappedPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = (path: string) => {
    navigate(path);
  };
  const handleRoute = async () => {
    const isAuthenticated = checkToken();

    if (isAuthenticated) {
      if (!location.pathname.includes("dashboard")) {
        redirect("/dashboard");
      }
    } else if (!location.pathname.includes("user")) {
      redirect("/user");
    }
  };

  useEffect(() => {
    handleRoute();
  }, []);
  return <Outlet />;
};

export default function App() {
  useScrollTop();
  return (
    <AppProvider>
      <WrappedPage />
    </AppProvider>
  );
}
