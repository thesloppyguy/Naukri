import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Button, Stack, alpha, useTheme } from "@mui/material";

const CandidateDetailsCard = ({ candidate, selected, setSelected }: any) => {
  const theme = useTheme();
  return (
    <Card
      elevation={24}
      sx={{
        margin: "auto",
        alignContent: "center",
        height: "80vh",
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
          {`${candidate.title} ${candidate.first_name} ${candidate.last_name}`}
        </Typography>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          {`Job Code/Title: ${candidate.job_code_title}`}
        </Typography>
        <Typography variant="body1" color="textPrimary" gutterBottom>
          {`Email: ${candidate.email}`}
        </Typography>
        <Typography variant="body1" color="textPrimary" gutterBottom>
          {`Phone: ${candidate.phone}`}
        </Typography>
        <Typography variant="body1" color="textPrimary" gutterBottom>
          {`Gender: ${candidate.gender}`}
        </Typography>
        <Typography variant="body1" color="textPrimary" gutterBottom>
          {`Date of Birth: ${candidate.date_of_birth}`}
        </Typography>
        <Typography variant="body1" color="textPrimary" gutterBottom>
          {`Age: ${candidate.candidate_age}`}
        </Typography>
        <Typography variant="body1" color="textPrimary" gutterBottom>
          {`Languages: ${candidate.languages}`}
        </Typography>
        <Typography variant="body1" color="textPrimary" gutterBottom>
          {`Location: ${candidate.location}`}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Education:
        </Typography>
        <List>
          {candidate.education.map((edu: any, index: any) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${edu.degree_name} in ${edu.major}`}
                secondary={`${edu.institute_type} - ${edu.institute_name}, ${edu.institute_location}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Work Experience:
        </Typography>
        <List>
          {candidate.work_experience.map((exp: any, index: any) => (
            <ListItem key={index}>
              <ListItemText
                primary={exp.job_title}
                secondary={`${exp.employer} - ${exp.domain}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Skills:
        </Typography>
        <Typography variant="body1" color="textPrimary">
          {candidate.skills}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Addresses:
        </Typography>
        <Typography variant="body1" color="textPrimary" gutterBottom>
          {`Current Address: ${candidate.current_address}`}
        </Typography>
        <Typography variant="body1" color="textPrimary" gutterBottom>
          {`Permanent Address: ${candidate.permanent_address}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CandidateDetailsCard;
