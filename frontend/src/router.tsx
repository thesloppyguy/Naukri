import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ActivatePage from "./pages/ActivatePage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/DashboardPage/UsersPage";
import SearchPage from "./pages/DashboardPage/SearchPage";
import JobsPage from "./pages/DashboardPage/JobsPage";
import MaintainerPage from "./pages/DashboardPage/MaintainerPage";
import OverviewPage from "./pages/DashboardPage/OverviewPage";
import PreLoginPage from "./pages/PreLoginPage";
import SettingsPage from "./pages/DashboardPage/SettingsPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import Page404 from "./pages/Page404";
import App from "./pages";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "user",
        element: <PreLoginPage />,
        children: [
          {
            path: "",
            element: <LoginPage />,
          },
          {
            path: "register",
            element: <RegisterPage />,
          },
          {
            path: "forgot-password",
            element: <ForgotPasswordPage />,
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
            path: "overview",
            element: <OverviewPage />,
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
            path: "users",
            element: <UsersPage />,
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
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

export default Router;
