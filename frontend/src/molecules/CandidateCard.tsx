import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import { useState } from "react";
import { motion } from "framer-motion";

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
      <motion.div
        style={{
          minHeight: "264px",
          padding: "10px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderRadius: "25px",
        }}
        onClick={() => setOpen(!open)}
      >
        <motion.h2>
          {candidate.first_name} {candidate.last_name}
        </motion.h2>
      </motion.div>
    </>
  );
}
