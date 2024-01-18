import React, { useState } from "react";
import SearchBar from "../../molecules/SearchBar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import JobCard from "../../molecules/JobCard";
import Container from "@mui/material/Container";

const jobsList = [{}, {}, {}, {}];

const JobsView = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState();
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <SearchBar field={search} setField={setSearch} />
      <Stack>
        {jobsList.length > 0 ? (
          <Grid container>
            {jobsList.map((job: any) => (
              <Grid
                key={job.id}
                xs={12}
                sm={6}
                md={3}
                sx={{
                  padding: "2px",
                }}
              >
                <JobCard
                  job={job}
                  state={open}
                  setOpen={setOpen}
                  onClick={() => {
                    setOpen(true);
                    setSelected(job);
                  }}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <></>
        )}
      </Stack>
    </Container>
  );
};

export default JobsView;
