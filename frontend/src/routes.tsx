import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";

import DashboardLayout from "../src/layout/dashboard";

export const HomePage = lazy(() => import("./pages/home"));
export const JobsPage = lazy(() => import("./pages/jobs"));
export const UserPage = lazy(() => import("./pages/user"));
export const LoginPage = lazy(() => import("./pages/login"));
export const SearchPage = lazy(() => import("./pages/search"));
export const Page404 = lazy(() => import("./pages/page-not-found"));

export default function Router() {
  const routes = useRoutes([
    {
      path: "/login",
      element: <LoginPage />,
      // children: [
      //   {
      //     path: "activate/:token",
      //     element: <ActivatePage />,
      //   },
      //   {
      //     path: "forgot-password",
      //     element: <ForgotPasswordPage />,
      //   },
      //   {
      //     path: "signup",
      //     element: <SignupPage />,
      //   },
      //   {
      //     path: "finalize-register/:token",
      //     element: <FinalizeRegistrationPage />,
      //   },
      //   {
      //     path: "reset-password/:token/:uid",
      //     element: <ResetPasswordPage />,
      //   },
      //   {
      //     path: "",
      //     element: <LoginPage />,
      //   },
      // ],
    },
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <HomePage />, index: true },
        { path: "search", element: <SearchPage /> },
        { path: "jobs", element: <JobsPage /> },
        { path: "user", element: <UserPage /> },
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

  return routes;
}
