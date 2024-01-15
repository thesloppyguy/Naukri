import ListItemButton from "@mui/material/ListItemButton";
import RouterLink from "../util/RouterLink";
import { usePathname } from "../hooks/usePathname";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";

interface NavItemBody {
  item: {
    title: string;
    path: string;
    icon: JSX.Element;
  };
}

function NavItem({ item }: NavItemBody) {
  const pathname = usePathname();
  const active = pathname.includes(item.path);

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: "body2",
        color: "text.secondary",
        textTransform: "capitalize",
        fontWeight: "fontWeightMedium",
        ...(active && {
          color: "primary.main",
          fontWeight: "fontWeightSemiBold",
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          "&:hover": {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title} </Box>
    </ListItemButton>
  );
}

export default NavItem;
