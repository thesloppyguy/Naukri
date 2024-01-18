import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { UserContext } from "../states/AppContext";
import { useContext } from "react";

const UserWindow = () => {
  const userContext = useContext(UserContext);
  console.log(userContext?.user);
  const email = userContext?.user?.email;
  const role = userContext?.user?.role;
  // const organization = user.organization.name;
  // const contactEmail = user.organization.contactEmail;
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
            <strong>Email:</strong> {userContext?.user?.email}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>Role:</strong> {userContext?.user?.role}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>Organization:</strong>{" "}
            {userContext?.user?.organization.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            <strong>Admin Email:</strong>{" "}
            {userContext?.user?.organization.contactEmail}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserWindow;
