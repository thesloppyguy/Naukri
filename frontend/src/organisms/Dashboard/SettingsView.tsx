import { useContext, useState } from "react";
import { SubmitButton } from "../../atoms/SubmitButton";
import Container from "@mui/material/Container";
import { useRouter } from "../../hooks/useRouter";
import axios from "axios";
import UserWindow from "../../molecules/UserWindow";
import Stack from "@mui/material/Stack";
import { UserContext } from "../../states/AppContext";

const SettingsView = () => {
  const userContext = useContext(UserContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    axios
      .post(
        "http://localhost:5000/api/logout",
        {},
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response);
        router.reload();
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  console.log(userContext?.user);
  return (
    <Container>
      <UserWindow />
      <Stack direction="row" sx={{ justifyContent: "center" }}>
        <SubmitButton
          onClick={handleLogout}
          sx={{ minWidth: "300px", textAlign: "center", mt: "20px" }}
        >
          Logout
        </SubmitButton>
      </Stack>
    </Container>
  );
};

export default SettingsView;
