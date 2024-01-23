import { useState } from "react";
import { useRouter } from "../hooks/useRouter";
import { ILogin } from "../interfaces/Polling";
import { SubmitButton } from "../atoms/SubmitButton";
import { useLoginUserMutation } from "../generated/graphql";
import { useUser } from "../util/auth";
import Iconify from "../molecules/Iconify";
import { Notification } from "../molecules/Notification";
import {
  Link,
  Stack,
  TextField,
  Typography,
  IconButton,
  Divider,
  InputAdornment,
  CircularProgress,
} from "@mui/material/";
import { INotification } from "../interfaces/General";

export default function LoginView() {
  const { loginUser } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [notifcation, setNotification] = useState<INotification>({
    message: "",
    open: false,
    type: "info",
  });
  const [formData, setFormData] = useState<ILogin>({
    organization: "",
    email: "",
    password: "",
  });
  const [login] = useLoginUserMutation({
    variables: {
      input: {
        organization: formData.organization,
        email: formData.email,
        password: formData.password,
      },
    },
    fetchPolicy: "no-cache",
    async onCompleted(data) {
      if (data.loginUser && data.loginUser.userJwtToken?.token) {
        await loginUser(data.loginUser.userJwtToken?.token);
        router.push("/dashboard");
        setLoading(false);
      } else {
        setLoading(false);
      }
    },
    onError(error) {
      setNotification({
        message: error?.message as string,
        open: true,
        type: "error",
      });
      setLoading(false);
    },
  });
  const handleLogin = async () => {
    setLoading(true);
    login();
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
          name="organization"
          label="Organization"
          value={formData.organization}
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
          onClick={() => {
            router.push("/user/forgot-password");
          }}
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
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
      </SubmitButton>
    </>
  );

  return (
    <>
      <Notification {...notifcation} setOpen={setNotification} />
      <Typography variant="h4" textAlign={"center"}>
        Login to Lokibots
      </Typography>
      <Typography variant="body2" sx={{ mt: 2, mb: 2 }} textAlign={"center"}>
        Don’t have an account?
        <Link href="/user/register" variant="subtitle2" sx={{ ml: 0.5 }}>
          Get started.
        </Link>
      </Typography>
      <Divider></Divider>
      {renderForm}
    </>
  );
}
