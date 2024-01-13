import Box from "@mui/material/Box";
import Logo from "../molecules/Logo";

export const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        top: 0,
        left: 0,
        width: 1,
        lineHeight: 0,
        position: "fixed",
        p: (theme) => ({
          xs: theme.spacing(3, 3, 0),
          sm: theme.spacing(5, 5, 0),
        }),
      }}
    >
      <Logo />
    </Box>
  );
};
