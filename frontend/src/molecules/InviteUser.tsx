import { FC, useState } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  CircularProgress,
} from "@mui/material";
import { SubmitButton } from "../atoms/SubmitButton";
import { Notification } from "../molecules/Notification";
import { INotification } from "../interfaces/General";
import { useApp } from "../states/AppContext";
import { useInviteUserMutation } from "../generated/graphql";
import { Role } from "../generated/graphql";

const InviteMember: FC = () => {
  const [state] = useApp();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [notifcation, setNotification] = useState<INotification>({
    message: "",
    open: false,
    type: "info",
  });
  const [inviteUser] = useInviteUserMutation({
    onCompleted() {
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
      inviteUser({
        variables: {
          input: {
            name: formValues.name,
            email: formValues.email,
            role: formValues.role as Role,
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
          <Grid item xs={4}>
            <TextField
              label="Name"
              value={formValues.name}
              name="name"
              onChange={handleChange}
              size="small"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Email"
              value={formValues.email}
              name="email"
              onChange={handleChange}
              size="small"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth size="small">
              <InputLabel sx={{ color: "black" }}>Role</InputLabel>
              <Select
                name="role"
                label="Role"
                onChange={handleChange}
                sx={{ bgcolor: "white" }}
              >
                <MenuItem value="User">User</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Maintainer">Maintainer</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
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

export default InviteMember;
