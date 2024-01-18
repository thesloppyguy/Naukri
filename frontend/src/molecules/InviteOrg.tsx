import { FC, useState } from "react";
import { Grid, Paper, TextField } from "@mui/material";
import { SubmitButton } from "../atoms/SubmitButton";

const InviteOrg: FC = () => {
  const [formValues, setFormValues] = useState({
    name: "",
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
    await inviteOrg();
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
        <Grid item xs={5}>
          <TextField
            label="Name"
            value={formValues.name}
            name="email"
            onChange={handleChange}
            size="small"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={5}>
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

export default InviteOrg;
function inviteOrg() {
  throw new Error("Function not implemented.");
}
