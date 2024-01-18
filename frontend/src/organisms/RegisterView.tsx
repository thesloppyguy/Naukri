import { useState } from "react";

import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import { useRouter } from "../hooks/useRouter";
import { SubmitButton } from "../atoms/SubmitButton";
import { RegisterForm } from "../interfaces/network";
import axios from "axios";
import Divider from "@mui/material/Divider";

export default function RegisterView() {
  const theme = useTheme();
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<RegisterForm>({
    organizationName: "",
    organizationEmail: "",
    url: "",
  });

  const handleRegister = async () => {
    console.log(formData);
    setLoading(true);
    axios
      .post("http://localhost:4000/api/register", formData)
      .then((response) => {
        router.push("/user");
        setLoading(false);
      })
      .catch((error) => {
        if (!error.response.data.error.includes("unknown"))
          setError(error.response.data.error);
      });
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
      {error ? (
        <Divider sx={{ color: "red", py: "2px" }} textAlign={"center"}>
          {error}
        </Divider>
      ) : (
        <Divider></Divider>
      )}
      {renderForm}
    </>
  );
}
