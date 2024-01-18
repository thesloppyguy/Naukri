import { Helmet } from "react-helmet-async";
import ResetPasswordView from "../../organisms/ResetPasswordView";

const ResetPasswordPage = () => {
  return (
    <>
      <Helmet>
        <title> Reset Password </title>
      </Helmet>
      <ResetPasswordView />
    </>
  );
};

export default ResetPasswordPage;
