import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Logo from "../../molecules/Logo";
import { bgGradient } from "../../theme/css";
import { alpha, useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

const PreLoginPage = () => {
  const theme = useTheme();
  const location = useLocation();
  const getTitle = () => {
    if (location.pathname.includes("activate")) {
      return "Activate your account";
    } else if (location.pathname.includes("forgot-password")) {
      return "Forgot Password";
    } else if (location.pathname.includes("reset-password")) {
      return "Reset Password";
    } else if (location.pathname.includes("register")) {
      return "Register";
    } else if (location.pathname.includes("user")) {
      return "Login";
    } else {
      return "Register";
    }
  };
  return (
    <>
      <Helmet>
        <title> {getTitle()} </title>
      </Helmet>
      <Box
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.9),
            imgUrl: "/assets/background/overlay_4.jpg",
          }),
          height: "100vh",
        }}
      >
        <Logo
          sx={{
            position: "fixed",
            top: { xs: 16, md: 24 },
            left: { xs: 16, md: 24 },
          }}
        />
        <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
          <Card
            sx={{
              p: 5,
              width: 1,
              maxWidth: 420,
            }}
          >
            <Outlet />
          </Card>
        </Stack>
      </Box>
    </>
  );
};

export default PreLoginPage;
