import { useContext, useState } from "react";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useRouter } from "../hooks/useRouter";
import Iconify from "../molecules/Iconify";
import { ILogin } from "../interfaces/Polling";
import { SubmitButton } from "../atoms/SubmitButton";
import axios from "axios";
import Divider from "@mui/material/Divider";
import { UserContext } from "../states/AppContext";

export default function LoginView() {
  const userContext = useContext(UserContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<ILogin>({
    orgId: "",
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    setLoading(true);

    axios
      .post("http://localhost:5000/api/login/", formData, {
        withCredentials: true,
      })
      .then((response) => {
        setError("");
        router.push("/dashboard");
        userContext?.setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
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
        <TextField
          required
          name="orgId"
          label="Organization"
          value={formData.orgId}
          onChange={handleInputChange}
        />
        <TextField
          required
          name="email"
          label="Email address"
          value={formData.email}
          onChange={handleInputChange}
        />

        <TextField
          required
          name="password"
          label="Password"
          value={formData.password}
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
      >
        <Link
          variant="subtitle2"
          underline="hover"
          href="/user/forgot-password"
        >
          Forgot password?
        </Link>
      </Stack>

      <SubmitButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleLogin}
      >
        Login
      </SubmitButton>
    </>
  );

  return (
    <>
      <Typography variant="h4" textAlign={"center"}>
        Login to Lokibots
      </Typography>
      <Typography variant="body2" sx={{ mt: 2, mb: 2 }} textAlign={"center"}>
        Don’t have an account?
        <Link href="/user/register" variant="subtitle2" sx={{ ml: 0.5 }}>
          Get started.
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
