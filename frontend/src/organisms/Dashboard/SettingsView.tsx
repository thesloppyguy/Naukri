import { useState } from "react";
import { SubmitButton } from "../../atoms/SubmitButton";
import Container from "@mui/material/Container";
import { useRouter } from "../../hooks/useRouter";
import UserWindow from "../../molecules/UserWindow";
import { Stack, CircularProgress } from "@mui/material";
import { removeToken } from "../../util/auth";

const SettingsView = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    removeToken();
    setLoading(false);
    router.reload();
  };
  return (
    <Container>
      <UserWindow />
      <Stack direction="row" sx={{ justifyContent: "center" }}>
        <SubmitButton
          onClick={handleLogout}
          sx={{ minWidth: "300px", textAlign: "center", mt: "20px" }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Logout"}
        </SubmitButton>
      </Stack>
    </Container>
  );
};

export default SettingsView;
