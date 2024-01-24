import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Button, Grid, Stack, alpha, useTheme } from "@mui/material";
import { SubmitButton } from "../atoms/SubmitButton";

const CandidateDetailsCard = ({ candidate, setSelected }: any) => {
  const theme = useTheme();
  console.log(candidate);
  const resumeLines = candidate.review_body.split("\n");
  return (
    <Card
      sx={{
        margin: "auto",
        alignContent: "center",
        height: "80vh",
        padding: "20px",
        bgcolor: alpha(theme.palette.primary.main, 0.2),
        overflowY: "scroll",
      }}
    >
      <Stack
        direction="row"
        sx={{
          right: "5%",
          paddingX: "20px",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
          {`${candidate.title} ${candidate.first_name} ${candidate.last_name}`}
        </Typography>
        <Button onClick={() => setSelected(null)}>X</Button>
      </Stack>
      <Grid container>
        <Grid
          xs={6}
          sx={{
            padding: "10px",
          }}
        >
          <Stack
            sx={{ bgcolor: "#ffffff", padding: "10px", borderRadius: "20px" }}
          >
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
            <Typography variant="body1" color="textPrimary" gutterBottom>
              {`Current Address: ${candidate.current_address}`}
            </Typography>
            <Typography variant="body1" color="textPrimary" gutterBottom>
              {`Permanent Address: ${candidate.permanent_address}`}
            </Typography>
          </Stack>
        </Grid>
        <Grid
          xs={6}
          sx={{
            padding: "10px",
          }}
        >
          <Stack
            sx={{ bgcolor: "#ffffff", padding: "10px", borderRadius: "20px" }}
          >
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
          </Stack>
        </Grid>
        <Grid
          xs={6}
          sx={{
            padding: "10px",
          }}
        >
          <Stack
            sx={{ bgcolor: "#ffffff", padding: "10px", borderRadius: "20px" }}
          >
            <Typography variant="h6" gutterBottom>
              Skills:
            </Typography>
            <Typography variant="body1" color="textPrimary">
              {candidate.skills}
            </Typography>
          </Stack>
        </Grid>
        <Grid
          xs={6}
          sx={{
            padding: "10px",
          }}
        >
          <Stack
            sx={{ bgcolor: "#ffffff", padding: "10px", borderRadius: "20px" }}
          >
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
          </Stack>
        </Grid>
        <Grid
          xs={12}
          sx={{
            padding: "10px",
          }}
        >
          <Stack
            sx={{ bgcolor: "#ffffff", padding: "20px", borderRadius: "20px" }}
          >
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Typography variant="h6" gutterBottom>
                Resume:
              </Typography>
              <SubmitButton
                onSubmit={() => console.log(candidate.review_body)}
                sx={{ paddingX: "10px" }}
              >
                Download
              </SubmitButton>
            </Stack>
            <Typography>
              {resumeLines.map((line: string) => (
                <p>{line}</p>
              ))}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CandidateDetailsCard;
