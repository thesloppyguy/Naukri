import { useState } from "react";

import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import { useRouter } from "../hooks/useRouter";
import { SubmitButton } from "../atoms/SubmitButton";
import axios from "axios";
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
    axios.post("", formData);
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

      <SubmitButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleRegister}
      >
        Register
      </SubmitButton>
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
