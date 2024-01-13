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

interface FormData {
  organizationName: string;
  organizationEmail: string;
  url?: string;
}

export default function RegisterView() {
  const router = useRouter();
  const [isRegistered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    organizationName: "",
    organizationEmail: "",
    url: "",
  });

  const handleClick = () => {
    if (isRegistered) {
      router.push("/login");
    }
    console.log("Unable to Register");
  };

  const handleRegister = async () => {
    try {
      setLoading(true);
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Registration successful");
      } else {
        console.error("Registration failed");
      }
      router.push("/login");
    } catch (error) {
      console.error("An error occurred", error);
    } finally {
      setLoading(false);
    }
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
    <Box
      sx={{
        background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(./assets/overlay_4.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: "fixed",
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4" textAlign={"center"}>
            Register to Lokibots
          </Typography>

          <Typography
            variant="body2"
            sx={{ mt: 2, mb: 5 }}
            textAlign={"center"}
          >
            Already have an account?
            <Link variant="subtitle2" sx={{ ml: 0.5 }} onClick={handleClick}>
              Login
            </Link>
          </Typography>
          <Divider sx={{ my: 3 }}></Divider>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
