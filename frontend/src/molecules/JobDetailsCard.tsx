import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Stack, alpha, useTheme } from "@mui/material";

const JobDetailsCard = ({ job, selected, setSelected }: any) => {
  const theme = useTheme();
  return (
    <Card
      elevation={24}
      sx={{
        margin: "auto",
        alignContent: "center",
        height: "60vh",
        padding: "20px",
        bgcolor: alpha(theme.palette.primary.main, 0.2),
        overflowY: "scroll",
      }}
    >
      <Stack direction="row" sx={{ position: "absolute", right: "5%" }}>
        <Button onClick={() => setSelected(null)}>X</Button>
      </Stack>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {`Title: ${job.job_code_title}`}
        </Typography>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          {`Job Code: ${job.job_code}`}
        </Typography>
        <Typography variant="body1" color="textPrimary" gutterBottom>
          {`Description: ${job.description}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default JobDetailsCard;
