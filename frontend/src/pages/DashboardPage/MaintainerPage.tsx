import React from "react";
import MaintainerView from "../../organisms/Dashboard/MaintainerView";
import { Helmet } from "react-helmet-async";

const MaintainerPage = () => {
  return (
    <>
      <Helmet>
        <title>Maintainer</title>
      </Helmet>
      <MaintainerView />
    </>
  );
};

export default MaintainerPage;
