import { useEffect, useState } from "react";
import SearchBar from "../../molecules/SearchBar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import JobCard from "../../molecules/JobCard";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import Typography from "@mui/material/Typography";
import { AnimatePresence, motion } from "framer-motion";
import JobDetailsCard from "../../molecules/JobDetailsCard";

const JobsView = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [jobList, setJobList] = useState([]);
  const [page, setPage] = useState(1);

  const handlePageChange = (event: any, value: any) => {
    setPage(value);
    handleSubmit();
  };
  const handleSubmit = () => {
    setLoading(true);
    axios
      .post(
        "http://localhost:5000/api/search/jobs",
        { jobcode: search, page: page },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setJobList(response.data.hits.hits);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <>
      {!selected ? (
        <Container>
          <SearchBar
            field={search}
            setField={setSearch}
            onSubmit={handleSubmit}
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
            {jobList.length > 0 ? (
              <Grid container>
                {jobList.map((job: any) => (
                  <Grid
                    key={job.id}
                    xs={12}
                    sm={6}
                    md={3}
                    sx={{
                      padding: "10px",
                    }}
                  >
                    <motion.div onClick={() => setSelected(job)}>
                      <JobCard job={job._source} />
                    </motion.div>
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
          <JobDetailsCard job={selected._source} setSelected={setSelected} />
        </Container>
      )}
    </>
  );
};

export default JobsView;
