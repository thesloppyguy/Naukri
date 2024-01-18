import PropTypes from "prop-types";
import { forwardRef } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import RouterLink from "../util/RouterLink";

interface LogoProps {
  disabledLink?: boolean;
  sx?: any;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const logo = (
      <Box
        component="img"
        src="/logo/Logo.svg"
        sx={{ width: 160, height: 100, cursor: "pointer", ...sx }}
      />
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: "contents" }}>
        {logo}
      </Link>
    );
  }
);

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
