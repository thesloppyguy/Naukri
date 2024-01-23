import { useState } from "react";
import {
  Stack,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "../hooks/useRouter";
import Iconify from "../molecules/Iconify";
import { SubmitButton } from "../atoms/SubmitButton";
import { IResetPassword } from "../interfaces/Polling";
import { useParams } from "react-router-dom";
import { useResetPasswordUserMutation } from "../generated/graphql";
import { Notification } from "../molecules/Notification";
import { INotification } from "../interfaces/General";

export default function ResetPasswordView() {
  const { token } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [notifcation, setNotification] = useState<INotification>({
    message: "",
    open: false,
    type: "info",
  });
  const [formData, setFormData] = useState<IResetPassword>({
    password: "",
    repassword: "",
  });
  const [resetPassword] = useResetPasswordUserMutation({
    variables: {
      input: {
        id: token as string,
        password: formData.password,
      },
    },
    fetchPolicy: "no-cache",
    async onCompleted(data) {
      setNotification({
        message: "Password Changed!",
        open: true,
        type: "success",
      });
      router.push("/user");
      setLoading(false);
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

  const handleForgotPassword = async () => {
    setLoading(true);
    if (formData.password !== formData.repassword) {
      setNotification({
        message: "Password Missmatch",
        open: true,
        type: "error",
      });
      setLoading(false);
    } else {
      resetPassword();
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
    <>
      <Stack spacing={3}>
        <TextField
          name="password"
          label="Password"
          onChange={handleInputChange}
          type={showPassword ? "text" : "password"}
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
          type={showRePassword ? "text" : "password"}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowRePassword(!showRePassword)}
                  edge="end"
                >
                  <Iconify
                    icon={showRePassword ? "eva:eye-fill" : "eva:eye-off-fill"}
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

      <SubmitButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={handleForgotPassword}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Confirm"}
      </SubmitButton>
    </>
  );

  return (
    <>
      <Notification {...notifcation} setOpen={setNotification} />
      <Typography variant="h4" sx={{ mb: 5 }} textAlign={"center"}>
        Reset Password
      </Typography>

      {renderForm}
    </>
  );
}
