import { ReactEventHandler, useState } from "react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import { alpha, useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";

import { useRouter } from "../hooks/useRouter";
import Logo from "../molecules/Logo";
import Iconify from "../molecules/Iconify";
import { bgGradient } from "../theme/css";

interface FormData {
  organizationName: string;
  organizationEmail: string;
  url?: string;
}

export default function RegisterView() {
  const theme = useTheme();
  const router = useRouter();
  const [isRegistered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    organizationName: "",
    organizationEmail: "",
    url: "",
  });

  const handleRegister = async () => {
    console.log(formData);
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

  const renderForm = (
    <form onSubmit={handleRegister}>
      <Stack spacing={3}>
        <TextField
          name="organizationName"
          label="Organization Name"
          value={formData.organizationName}
          onChange={handleInputChange}
          required={true}
        />
        <TextField
          name="organizationEmail"
          label="Email"
          value={formData.organizationEmail}
          onChange={handleInputChange}
          required={true}
        />
        <TextField
          name="url"
          label="Website"
          value={formData.url}
          onChange={handleInputChange}
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
        onClick={handleRegister}
      >
        Register
      </LoadingButton>
    </form>
  );

  return (
    <>
      <Typography variant="h4" textAlign={"center"}>
        Register to Lokibots
      </Typography>

      <Typography variant="body2" sx={{ mt: 2, mb: 5 }} textAlign={"center"}>
        Already have an account?
        <Link variant="subtitle2" sx={{ ml: 0.5 }} href="/user">
          Login
        </Link>
      </Typography>
      {renderForm}
    </>
  );
}
