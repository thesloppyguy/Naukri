import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import React from "react";

const JobCard = ({ job, state, setOpen }: any) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        mt: "20px",
        minHeight: "100px",
        padding: "10px",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: alpha("#000000", 0.3),
        borderRadius: "15px",
        boxShadow: 3,
        bgcolor: "white",
      }}
      onClick={() => setOpen(!state)}
    >
      <Typography>
        {job.jobcode} {job.description}
      </Typography>
    </Box>
  );
};

export default JobCard;
