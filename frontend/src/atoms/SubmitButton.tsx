import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { purple } from "@mui/material/colors";

export const SubmitButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  background:
    "linear-gradient(113.62deg, rgb(138, 35, 135) 24.45%, rgb(233, 64, 87) 58.83%, rgb(242, 113, 33) 94.26%) repeat scroll 0% 0% / auto padding-box border-box;",
  borderRadius: 32,
  textTransform: "none",
  fontSize: "16px",
  boxShadow:
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
  "&:hover": {
    background:
      "linear-gradient(113.62deg, rgb(138, 35, 135) 50.45%, rgb(233, 64, 87) 80.83%, rgb(242, 113, 33) 94.26%) repeat scroll 0% 0% / auto padding-box border-box;",
  },
}));
