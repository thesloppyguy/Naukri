import { useState } from "react";
import {
  Stack,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import Iconify from "../molecules/Iconify";
import { useParams } from "react-router-dom";
import { SubmitButton } from "../atoms/SubmitButton";
import { IActivate } from "../interfaces/Polling";
import { Notification } from "../molecules/Notification";
import { INotification } from "../interfaces/General";
import { useActivateUserMutation } from "../generated/graphql";
import { useRouter } from "../hooks/useRouter";

export default function LoginView() {
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
  const [formData, setFormData] = useState<IActivate>({
    password: "",
    repassword: "",
  });
  const [activate] = useActivateUserMutation({
    variables: {
      input: {
        id: token as string,
        password: formData.password,
      },
    },
    fetchPolicy: "no-cache",
    async onCompleted() {
      setNotification({
        message: "Account Activated!",
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

  const handleActivate = async () => {
    setLoading(true);
    if (formData.password !== formData.repassword) {
      setNotification({
        message: "Password Missmatch",
        open: true,
        type: "error",
      });
      setLoading(false);
    } else {
      activate();
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
        onClick={handleActivate}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Confirm"}
      </SubmitButton>
    </>
  );

  return (
    <>
      <Notification {...notifcation} setOpen={setNotification} />
      <Typography variant="h4" textAlign={"center"} sx={{ mb: 5 }}>
        Activate Account
      </Typography>
      {renderForm}
    </>
  );
}
