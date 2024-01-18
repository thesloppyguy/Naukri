import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Avatar, Paper, alpha, useTheme } from "@mui/material";

export default function CandidateCard({ candidate }: any) {
  const theme = useTheme();
  return (
    <>
      <Paper
        elevation={6}
        sx={{
          minHeight: "250px",
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
            minHeight: "60px",
            bgcolor: alpha(theme.palette.primary.main, 0.4),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar src={"/assets/avatars/female.svg"} alt="photoURL" />
        </Box>
        <Box
          sx={{
            minWidth: "100%",
            minHeight: "40px",
            bgcolor: alpha(theme.palette.primary.main, 0.4),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottomColor: "#000000",
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: "#000000", fontSize: "12px" }}
          >
            <b>
              {candidate.first_name} {candidate.last_name}
            </b>
          </Typography>
        </Box>
        <Box
          sx={{
            paddingY: "20px",
            paddingX: "15px",
            minWidth: "100%",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: "#000000", fontSize: "12px" }}
          >
            <b>Phone: </b> {candidate.phone}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#000000", fontSize: "12px" }}
          >
            <b>Total Exp: </b> {candidate.total_work_experience}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#000000", fontSize: "12px" }}
          >
            <b>Gender: </b> {candidate.gender}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ overflow: "wrap", color: "#000000", fontSize: "12px" }}
          >
            <b>Email: </b> {candidate.email}
          </Typography>
        </Box>
      </Paper>
    </>
  );
}
