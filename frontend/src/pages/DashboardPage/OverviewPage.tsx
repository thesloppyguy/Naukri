import React from "react";
import { Helmet } from "react-helmet-async";
import OverviewView from "../../organisms/Dashboard/OverviewView";

const OverviewPage = () => {
  return (
    <>
      <Helmet>
        <title>Overview</title>
      </Helmet>
      <OverviewView />
    </>
  );
};

export default OverviewPage;
