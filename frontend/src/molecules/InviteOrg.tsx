import { FC, useState } from "react";
import { CircularProgress, Grid, Paper, TextField } from "@mui/material";
import { SubmitButton } from "../atoms/SubmitButton";
import { INotification } from "../interfaces/General";
import { Notification } from "../molecules/Notification";
import { useInviteOrganizationMutation } from "../generated/graphql";
import { useApp } from "../states/AppContext";
const InviteOrg: FC = () => {
  const [state] = useApp();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    url: "",
  });
  const [notifcation, setNotification] = useState<INotification>({
    message: "",
    open: false,
    type: "info",
  });
  const [inviteOrg] = useInviteOrganizationMutation({
    onCompleted() {
      setLoading(false);
      setNotification({
        message: "Invite Sent",
        open: true,
        type: "success",
      });
      setFormValues({
        name: "",
        email: "",
        url: "",
      });
    },
    onError(error) {
      console.log(error);
      setNotification({
        message: error?.message as string,
        open: true,
        type: "error",
      });
      setLoading(false);
    },
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    setLoading(true);
    if (state.role === "Admin" || state.role === "Maintainer") {
      inviteOrg({
        variables: {
          input: {
            name: formValues.name,
            email: formValues.email,
            url: formValues.url,
          },
        },
      });
    } else {
      setNotification({
        message: "You dont have permission to invite.",
        open: true,
        type: "error",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Notification {...notifcation} setOpen={setNotification} />
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          padding: "20px",
          margin: "auto",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              label="Organization Name"
              value={formValues.name}
              name="name"
              onChange={handleChange}
              size="small"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Contact Email"
              value={formValues.email}
              name="email"
              onChange={handleChange}
              size="small"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="url"
              value={formValues.url}
              name="url"
              onChange={handleChange}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <SubmitButton
              variant="contained"
              color="primary"
              onClick={handleClick}
              sx={{
                width: "100%",
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Invite"
              )}
            </SubmitButton>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default InviteOrg;
