import Box from "@mui/material/Box";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../molecules/Header";
import Nav from "../../molecules/Nav";
import DashboardContent from "../../molecules/DashboardContent";

const DashboadPage = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      {/* <Header onOpenNav={() => setOpenNav(true)} /> */}
      <Box
        sx={{
          minHeight: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />
        <DashboardContent>
          <Outlet />
        </DashboardContent>
      </Box>
    </>
  );
};

export default DashboadPage;
