import { createBrowserRouter, Navigate } from "react-router-dom";
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
import PreLoginPage from "./pages/PreLoginPage";
import SettingsPage from "./pages/SettingsPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import App from "./pages";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <PreLoginPage />,
        children: [
          {
            path: "register",
            element: <RegisterPage />,
          },
          {
            path: "",
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
          {
            path: "forgot-password",
            element: <ForgotPasswordPage />,
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
          {
            path: "settings",
            element: <SettingsPage />,
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
    ],
  },
]);

export default Router;
