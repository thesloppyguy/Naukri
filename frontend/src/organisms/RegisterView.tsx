import { useState } from "react";
import {
  Link,
  Stack,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { SubmitButton } from "../atoms/SubmitButton";
import { IRegister } from "../interfaces/Polling";
import Divider from "@mui/material/Divider";
import { useRegisterOrganizationMutation } from "../generated/graphql";
import { INotification } from "../interfaces/General";
import { Notification } from "../molecules/Notification";

export default function RegisterView() {
  const [loading, setLoading] = useState(false);
  const [notifcation, setNotification] = useState<INotification>({
    message: "",
    open: false,
    type: "info",
  });
  const [formData, setFormData] = useState<IRegister>({
    organizationName: "",
    organizationEmail: "",
    url: "",
  });
  const [register] = useRegisterOrganizationMutation({
    variables: {
      input: {
        name: formData.organizationName,
        email: formData.organizationEmail,
        url: formData.url,
      },
    },
    fetchPolicy: "no-cache",
    async onCompleted() {
      setNotification({
        message:
          "Successfully Registered! Please wait while we review your website.",
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
  const handleRegister = async () => {
    setLoading(true);
    register();
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
        {loading ? <CircularProgress size={24} color="inherit" /> : "Register"}
      </SubmitButton>
    </>
  );

  return (
    <>
      <Notification {...notifcation} setOpen={setNotification} />
      <Typography variant="h4" textAlign={"center"}>
        Register to Lokibots
      </Typography>

      <Typography variant="body2" sx={{ mt: 2, mb: 5 }} textAlign={"center"}>
        Already have an account?
        <Link variant="subtitle2" sx={{ ml: 0.5 }} href="/user">
          Login
        </Link>
      </Typography>
      <Divider></Divider>
      {renderForm}
    </>
  );
}
