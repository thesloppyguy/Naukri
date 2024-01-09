import { Helmet } from "react-helmet-async";

import { HomeView } from "../sections/home/view";

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <HomeView />
    </>
  );
}
