import UsersView from "../../organisms/Dashboard/UsersView";
import { Helmet } from "react-helmet-async";

const UsersPage = () => {
  return (
    <>
      <Helmet>
        <title>Users</title>
      </Helmet>
      <UsersView />
    </>
  );
};

export default UsersPage;
