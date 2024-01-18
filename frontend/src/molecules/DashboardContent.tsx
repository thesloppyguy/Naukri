import Box from "@mui/material/Box";
import { useResponsive } from "../hooks/useResponsive";
import { NAV, HEADER } from "../constants";

const SPACING = 20;

export default function DashboardContent({ children, sx, ...other }: any) {
  const lgUp = useResponsive("up", "lg", "lg");

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: "flex",
        flexDirection: "column",
        px: 2,
        pt: `${HEADER.H_MOBILE + SPACING}px`,

        ...(lgUp && {
          px: 2,
          pt: `${HEADER.H_DESKTOP + SPACING}px`,
          width: `calc(100% - ${NAV.WIDTH}px)`,
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
