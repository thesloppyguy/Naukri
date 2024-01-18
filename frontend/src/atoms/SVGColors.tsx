import { forwardRef } from "react";

import Box from "@mui/material/Box";
import { SxProps } from "@mui/system";

interface SVG {
  src: string;
  sx: SxProps;
}

const SVGColor = forwardRef(({ src, sx, ...other }: SVG, ref) => (
  <Box
    component="span"
    className="svg-color"
    ref={ref}
    sx={{
      width: 24,
      height: 24,
      display: "inline-block",
      bgcolor: "currentColor",
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
    {...other}
  />
));

export default SVGColor;
