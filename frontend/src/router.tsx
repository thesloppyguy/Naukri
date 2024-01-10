import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./pages";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ActivatePage from "./pages/ActivatePage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import SearchPage from "./pages/SearchPage";
import JobsPage from "./pages/JobsPage";
import MaintainerPage from "./pages/MaintainerPage";
import Page404 from "./pages/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <RegisterPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "activate/:token",
        element: <ActivatePage />,
      },
      {
        path: "reset-password/:token",
        element: <ResetPasswordPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "jobs",
        element: <JobsPage />,
      },
      {
        path: "maintainer",
        element: <MaintainerPage />,
      },
    ],
  },
  {
    path: "404",
    element: <Page404 />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
]);

export default router;
