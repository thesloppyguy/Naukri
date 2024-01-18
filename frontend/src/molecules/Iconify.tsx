import PropTypes from "prop-types";
import { forwardRef, Ref } from "react";
import { Icon } from "@iconify/react";

import Box from "@mui/material/Box";

const Iconify = forwardRef(
  ({ icon, width = 20, sx, ...other }: any, ref: Ref<HTMLDivElement>) => (
    <Box
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  )
);

Iconify.propTypes = {
  icon: PropTypes.string.isRequired,
  sx: PropTypes.object,
  width: PropTypes.number,
};

export default Iconify;
