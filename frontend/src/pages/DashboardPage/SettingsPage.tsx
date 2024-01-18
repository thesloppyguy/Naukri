import { Helmet } from "react-helmet-async";
import SettingsView from "../../organisms/Dashboard/SettingsView";

const UsersPage = () => {
  return (
    <>
      <Helmet>
        <title>Settings</title>
      </Helmet>
      <SettingsView />
    </>
  );
};

export default UsersPage;
