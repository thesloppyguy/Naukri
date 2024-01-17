import { useEffect } from "react";
import { NAV, navConfig, maintainerConfig, settingsConfig } from "../constants";
import { usePathname } from "../hooks/usePathname";
import { useResponsive } from "../hooks/useResponsive";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Logo from "./Logo";
import Scrollbar from "../atoms/Scrollbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavItem from "../atoms/NavItems";
import Avatar from "@mui/material/Avatar";

const Nav = ({ openNav, onCloseNav }: any) => {
  const pathname = usePathname();
  const upLg = useResponsive("up", "lg", "lg");

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const account = {
    name: "Jaydon Frankie",
    email: "demo@minimals.cc",
    role: "maintainer",
    photoURL: "/assets/avatars/base_avatar.png",
  };
  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Logo sx={{ mt: 3, ml: 4 }} />
      <Box
        sx={{
          my: 3,
          mx: 2.5,
          py: 2,
          px: 2.5,
          display: "flex",
          borderRadius: 1.5,
          alignItems: "center",
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.12),
        }}
      >
        <Box sx={{ ml: 2 }}>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Avatar src={account.photoURL} alt="photoURL" />
            <Typography variant="subtitle2">{account.name}</Typography>
          </Stack>
        </Box>
      </Box>
      <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </Stack>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ ml: 2, pb: 3 }}>
        <Stack component="nav" spacing={0.5}>
          {account.role === "maintainer" ? (
            <NavItem key={maintainerConfig.title} item={maintainerConfig} />
          ) : (
            <> </>
          )}
          {account.role === "admin" || account.role === "maintainer" ? (
            <NavItem key={settingsConfig.title} item={settingsConfig} />
          ) : (
            <></>
          )}
        </Stack>
      </Box>
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: "fixed",
            width: NAV.WIDTH,
            borderRight: (theme) => `solid 2px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
};

export default Nav;
