import { Box, Container, Typography } from "@mui/material";
import React from "react";

const DetailedCard = ({ details }: any) => {
  return (
    <Box sx={{ background: "#ffffff", height: "90vh", maxWidth: "50vw" }}>
      <Typography variant="h4" sx={{ mb: 5 }}>
        {details.file_name}
      </Typography>
    </Box>
  );
};

export default DetailedCard;
