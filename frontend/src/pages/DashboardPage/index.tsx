import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../molecules/Nav";
import DashboardContent from "../../molecules/DashboardContent";
import { useRouter } from "../../hooks/useRouter";
import { useUser } from "../../util/auth";

const DashboadPage = () => {
  const { loginUser } = useUser();
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();
  const getUser = async () => {
    await loginUser();
  };
  useEffect(() => {
    getUser();
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
