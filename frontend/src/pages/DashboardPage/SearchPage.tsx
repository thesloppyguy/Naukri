import React from "react";
import SearchView from "../../organisms/Dashboard/SearchView";
import { Helmet } from "react-helmet-async";

const SearchPage = () => {
  return (
    <>
      <Helmet>
        <title> Search</title>
      </Helmet>
      <SearchView />
    </>
  );
};

export default SearchPage;
