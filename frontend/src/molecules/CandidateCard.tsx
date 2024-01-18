import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import { useState } from "react";
import { motion } from "framer-motion";
import { alpha } from "@mui/material";

export default function CandidateCard({ candidate }: any) {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          minHeight: "264px",
          padding: "10px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: alpha("#000000", 0.3),
          borderRadius: "15px",
          boxShadow: 3,
          bgcolor: "white",
        }}
        onClick={() => setOpen(!open)}
      >
        <Typography>
          {candidate._source.first_name} {candidate._source.last_name}
        </Typography>
      </Box>
    </>
  );
}
