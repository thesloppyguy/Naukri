import { Helmet } from "react-helmet-async";

import { SearchView } from "../sections/search/view";

// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Products | Minimal UI </title>
      </Helmet>

      <SearchView />
    </>
  );
}
