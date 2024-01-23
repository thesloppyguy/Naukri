import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useApp } from "../states/AppContext";
import { useContext } from "react";

const UserWindow = () => {
  const [state] = useApp();

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        mt: "10%",
      }}
    >
      <Typography variant="h5" gutterBottom textAlign={"center"}>
        User Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>Name:</strong> {state?.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>Email:</strong> {state?.email}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>Role:</strong> {state?.role}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>Organization:</strong> {state?.organization.name}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserWindow;
