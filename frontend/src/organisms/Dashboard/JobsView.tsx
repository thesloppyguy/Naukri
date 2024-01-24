import { useEffect, useState } from "react";
import SearchBar from "../../molecules/SearchBar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import JobCard from "../../molecules/JobCard";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import JobDetailsCard from "../../molecules/JobDetailsCard";
import {
  useGetJobsLazyQuery,
  useGetJobLazyQuery,
  Job,
} from "../../generated/graphql";
import { CircularProgress } from "@mui/material";

const JobsView = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [jobList, setJobList] = useState<Job[]>([]);
  const [page, setPage] = useState(1);
  const [getJobs, { data: jobsdata, error: jobsError }] = useGetJobsLazyQuery({
    onCompleted() {
      setJobList(jobsdata?.getJobs as Job[]);
      setLoading(false);
    },
    onError(jobsError) {
      setLoading(false);
    },
  });

  const [getjob, { data: jobData, error: jobError }] = useGetJobLazyQuery({
    fetchPolicy: "no-cache",
    onCompleted() {
      setJobList(jobData?.getJob as Job[]);
      console.log(jobData);
      setLoading(false);
    },
    onError(jobError) {
      setLoading(false);
    },
  });

  const handlePageChange = (event: any, value: any) => {
    setPage(value);
  };
  const handleSubmit = () => {
    if (search !== "") {
      setLoading(true);
      getjob({
        variables: {
          query: search,
        },
      });
    }
  };
  useEffect(() => {
    if (search === "") {
      setLoading(true);
      getJobs();
    }
  }, [getJobs, search]);
  return (
    <>
      {!selected ? (
        <Container>
          <SearchBar
            field={search}
            setField={setSearch}
            onSubmit={handleSubmit}
            disabled={loading}
          />
          <Stack
            direction="row"
            sx={{ mt: "20px", justifyContent: "flex-end" }}
          >
            <Pagination
              count={10}
              size="small"
              defaultPage={page}
              onChange={handlePageChange}
            />
          </Stack>
          <Stack>
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : jobList.length > 0 ? (
              <Grid container>
                {jobList.map((job: Job) => (
                  <Grid
                    key={job.job_id}
                    xs={12}
                    sm={6}
                    md={3}
                    sx={{
                      padding: "10px",
                    }}
                  >
                    <div onClick={() => setSelected(job)}>
                      <JobCard job={job} />
                    </div>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography variant="h3">No jobs Found</Typography>
            )}
          </Stack>
        </Container>
      ) : (
        <Container>
          <JobDetailsCard job={selected} setSelected={setSelected} />
        </Container>
      )}
    </>
  );
};

export default JobsView;
