import { Helmet } from "react-helmet-async";

import { JobsView } from "../sections/jobs/view";

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Blog | Minimal UI </title>
      </Helmet>

      <JobsView />
    </>
  );
}
