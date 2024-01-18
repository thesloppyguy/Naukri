import { FC, useState } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { SubmitButton } from "../atoms/SubmitButton";

const InviteMember: FC = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    role: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    await inviteUser();
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        padding: "20px",
        margin: "auto",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={8}>
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
            Invite
          </SubmitButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default InviteMember;
function inviteUser() {
  throw new Error("Function not implemented.");
}
