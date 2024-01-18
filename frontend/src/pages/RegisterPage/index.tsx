import { Helmet } from "react-helmet-async";
import RegisterView from "../../organisms/RegisterView";

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title> Register </title>
      </Helmet>
      <RegisterView />
    </>
  );
};

export default RegisterPage;
