import React from "react";
import { alpha, useTheme } from "@mui/material/styles";
import { useResponsive } from "../hooks/useResponsive";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Iconify from "./Iconify";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Profile from "./Profile";
import { HEADER, NAV } from "../constants";
import { bgBlur } from "../theme/css";

const Header = ({ onOpenNav }: any) => {
  const theme = useTheme();
  const lgUp = useResponsive("up", "lg", "lg");
  return (
    <AppBar
      sx={{
        boxShadow: "none",
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        transition: theme.transitions.create(["height"], {
          duration: theme.transitions.duration.shorter,
        }),
        backdropFilter: `blur(6px)`,
        WebkitBackdropFilter: `blur(6px)`,
        backgroundColor: alpha(theme.palette.background.default, 0.8),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {!lgUp && (
          <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
            <Iconify icon="eva:menu-2-fill" />
          </IconButton>
        )}

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={1}>
          <Profile />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
