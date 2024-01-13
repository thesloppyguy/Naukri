import { Helmet } from "react-helmet-async";
import RegisterView from "../templates/RegisterView";
import React from "react";

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
