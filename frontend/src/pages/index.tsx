import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
// import { AppProvider, useApp } from "../states/AppContext";
import { useScrollTop } from "../hooks/useScrollTop";
import { useEffect } from "react";
import IsAuth from "../util/IsAuth";
import { AppProvider } from "../states/AppContext";

const WrappedPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const redirect = (path: string) => {
    navigate(path);
  };
  const handleRoute = async () => {
    const isAuthenticated = await IsAuth();
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
