import React from "react";
import SettingsView from "../../organisms/Dashboard/SettingsView";
import { Helmet } from "react-helmet-async";

const SettingsPage = () => {
  return (
    <>
      <Helmet>
        <title>Settings</title>
      </Helmet>
      <SettingsView />
    </>
  );
};

export default SettingsPage;
