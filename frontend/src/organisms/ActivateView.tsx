import { ReactEventHandler, useState } from "react";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import { useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import createHttpError, { isHttpError } from "http-errors";
import { useRouter } from "../hooks/useRouter";
import Iconify from "../molecules/Iconify";
import { useParams } from "react-router-dom";

interface FormData {
  password: string;
  repassword: string;
}

export default function LoginView() {
  const theme = useTheme();
  const router = useRouter();
  const { token } = useParams();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    password: "",
    repassword: "",
  });

  const handleActivate = async () => {
    console.log({ ...formData, token });
    setLoading(true);
    setLoading(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify
                    icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          name="repassword"
          label="Re-enter Password"
          type={showPassword ? "text" : "password"}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify
                    icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ my: 3 }}
      ></Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleActivate}
      >
        Login
      </LoadingButton>
    </>
  );

  return (
    <>
      <Typography variant="h4" textAlign={"center"} sx={{ mb: 5 }}>
        Activate Account
      </Typography>
      {renderForm}
    </>
  );
}
