import { useState } from "react";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "../hooks/useRouter";
import { useParams } from "react-router-dom";
import { SubmitButton } from "../atoms/SubmitButton";

interface FormData {
  orgId: string;
  email: string;
}

export default function ForgotPasswordView() {
  const theme = useTheme();
  const router = useRouter();
  const { token } = useParams();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    orgId: "",
    email: "",
  });

  const handleForgotPassword = async () => {
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

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField name="orgId" label="Organization" />
        <TextField name="email" label="Email address" />
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
        onClick={handleForgotPassword}
      >
        Send Request
      </SubmitButton>
    </>
  );

  return (
    <>
      <Typography variant="h4" textAlign={"center"}>
        Forgot Password
      </Typography>
      <Typography variant="body2" sx={{ mt: 2, mb: 5 }} textAlign={"center"}>
        Try again?
        <Link href="/user" variant="subtitle2" sx={{ ml: 0.5 }}>
          Login.
        </Link>
      </Typography>
      {renderForm}
    </>
  );
}
