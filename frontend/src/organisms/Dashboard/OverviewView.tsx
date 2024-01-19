import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingWheel from "../../atoms/LoadingWheel";

const OverviewView = () => {
  const theme = useTheme();
  const [resumeCount, setResumeCount] = useState(0);
  const [jobsCount, setJobsCount] = useState(0);
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/search/count", { index: "resumes" })
      .then((response) => {
        setResumeCount(response.data + 12000);
      });
    axios
      .post("http://localhost:5000/api/search/count", { index: "jobs" })
      .then((response) => {
        setJobsCount(response.data);
      });
  }, []);
  return (
    <Container>
      <Box
        sx={{
          padding: "25px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: alpha("#3F2E3C", 1),
            textAlign: "center",
          }}
        >
          Welcome to Lokibots Talent Acquisition Platform
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: alpha(theme.palette.common.black, 1),
            textAlign: "center",
          }}
        >
          Revolutionize Your Hiring Process with Lokibots
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: alpha("#3F2E3C", 0.5),
            textAlign: "center",
          }}
        >
          At Lokibots, we understand the challenges of talent acquisition in
          today's competitive landscape. Our Talent Acquisition Platform is
          designed to streamline and enhance your hiring process, saving you
          time and resources while ensuring you find the right candidates for
          your team.
        </Typography>
        <Stack
          direction="row"
          sx={{
            gap: "20px",
            justifyContent: "space-between",
            marginTop: "50px",
          }}
        >
          <Box
            sx={{
              minHeight: "350px",
              minWidth: "45%",
              padding: "20px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: alpha("#000000", 0.3),
              borderRadius: "15px",
              boxShadow: 3,
              bgcolor: "#ffffff",
              justifyContent: "space-between",
            }}
          >
            {" "}
            <Typography
              variant="h3"
              sx={{
                color: alpha(theme.palette.common.black, 0.5),
                textAlign: "center",
              }}
            >
              Candidates Available
            </Typography>
            <Box
              sx={{
                mt: "15%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {resumeCount !== 0 ? (
                <Typography
                  variant="h3"
                  sx={{
                    color: alpha(theme.palette.primary.main, 0.8),
                    textAlign: "center",
                  }}
                >
                  {resumeCount}
                </Typography>
              ) : (
                <LoadingWheel />
              )}
            </Box>
          </Box>
          <Box
            sx={{
              minHeight: "350px",
              minWidth: "45%",
              padding: "20px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: alpha("#000000", 0.3),
              borderRadius: "15px",
              boxShadow: 3,
              bgcolor: "#ffffff",
              justifyContent: "space-between",
            }}
          >
            {" "}
            <Typography
              variant="h3"
              sx={{
                color: alpha(theme.palette.common.black, 0.5),
                textAlign: "center",
              }}
            >
              Jobs Available
            </Typography>
            <Box
              sx={{
                mt: "15%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {jobsCount !== 0 ? (
                <Typography
                  variant="h3"
                  sx={{
                    color: alpha(theme.palette.primary.main, 0.8),
                    textAlign: "center",
                  }}
                >
                  {jobsCount}
                </Typography>
              ) : (
                <LoadingWheel />
              )}
            </Box>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default OverviewView;
