import { Helmet } from "react-helmet-async";
import JobsView from "../../organisms/Dashboard/JobsView";

const JobsPage = () => {
  return (
    <>
      <Helmet>
        <title>Jobs</title>
      </Helmet>
      <JobsView />
    </>
  );
};

export default JobsPage;
