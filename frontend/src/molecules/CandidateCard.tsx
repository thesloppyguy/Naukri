import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
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
