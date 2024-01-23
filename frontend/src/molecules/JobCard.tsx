import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

const JobCard = ({ job }: any) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={6}
      sx={{
        minHeight: "150px",
        // padding: "20px",
        borderRadius: "15px",
        borderColor: alpha("#000000", 0.5),
        borderWidth: "1px",
        borderStyle: "solid",
        bgcolor: "#ffffff",
      }}
    >
      <Box
        sx={{
          borderTopLeftRadius: "11px",
          borderTopRightRadius: "11px",
          minWidth: "100%",
          bgcolor: alpha(theme.palette.primary.main, 0.4),
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "#000000", margin: "auto" }}
        >
          <b>{job.job_id}</b>
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "20px",
          minWidth: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "#000000", fontSize: "12px" }}
        >
          {" "}
          {job.job_code_title}
        </Typography>
      </Box>
    </Paper>
  );
};

export default JobCard;
