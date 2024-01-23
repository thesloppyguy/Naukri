import { useState } from "react";
import {
  Link,
  Stack,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { SubmitButton } from "../atoms/SubmitButton";
import { IForgotPassword } from "../interfaces/Polling";
import { useForgotPasswordMutation } from "../generated/graphql";
import { Notification } from "../molecules/Notification";
import { INotification } from "../interfaces/General";

export default function ForgotPasswordView() {
  const [loading, setLoading] = useState(false);
  const [notifcation, setNotification] = useState<INotification>({
    message: "",
    open: false,
    type: "info",
  });
  const [formData, setFormData] = useState<IForgotPassword>({
    organization: "",
    email: "",
  });
  const [forgetPassword] = useForgotPasswordMutation({
    variables: {
      input: {
        name: formData.organization,
        email: formData.email,
      },
    },
    fetchPolicy: "no-cache",
    async onCompleted() {
      setNotification({
        message: "Request Sent! Check your email ",
        open: true,
        type: "success",
      });
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
    forgetPassword();
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
          name="organization"
          label="Organization"
          onChange={handleInputChange}
        />
        <TextField
          name="email"
          label="Email address"
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
        onClick={handleForgotPassword}
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Send Request"
        )}
      </SubmitButton>
    </>
  );

  return (
    <>
      <Notification {...notifcation} setOpen={setNotification} />
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
