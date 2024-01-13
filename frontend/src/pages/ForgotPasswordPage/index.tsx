import React from "react";
import { Helmet } from "react-helmet-async";
import ForgotPasswordView from "../../organisms/ForgotPasswordView";
const ForgotPasswordPage = () => {
  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <ForgotPasswordView />
    </>
  );
};

export default ForgotPasswordPage;
