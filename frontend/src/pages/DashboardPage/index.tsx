import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../molecules/Nav";
import DashboardContent from "../../molecules/DashboardContent";
import { useRouter } from "../../hooks/useRouter";

const DashboadPage = () => {
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard/overview");
  }, []);

  return (
    <>
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
