import { Outlet, useLocation } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Logo from "../../molecules/Logo";
const PreLoginPage = () => {
  const location = useLocation();
  const getTitle = () => {
    if (location.pathname.includes("activate")) {
      return "Activate your account";
    } else if (location.pathname.includes("forgot-password")) {
      return "Forgot Password";
    } else if (location.pathname.includes("reset-password")) {
      return "Reset Password";
    } else if (location.pathname.includes("signup")) {
      return "Signup";
    } else if (location.pathname.includes("login")) {
      return "Login";
    }
  };
  return (
    <>
      <Helmet>
        <title> {getTitle()} </title>
      </Helmet>
      <Box
        sx={{
          background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(./assets/overlay_4.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: 1,
        }}
      >
        <Logo
          sx={{
            position: "fixed",
            top: { xs: 16, md: 24 },
            left: { xs: 16, md: 24 },
          }}
        />
        <Outlet />
      </Box>
    </>
  );
};

export default PreLoginPage;
