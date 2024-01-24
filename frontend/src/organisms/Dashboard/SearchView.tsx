import {
  Container,
  Grid,
  Pagination,
  Stack,
  Box,
  Paper,
  CircularProgress,
  Typography,
} from "@mui/material";
import CandidateDetailsCard from "../../molecules/CandidateDetailsCard";
import CandidateSearch from "../../molecules/CandidateSearch";
import CandidateCard from "../../molecules/CandidateCard";
import NlpSearch from "../../molecules/NlpSearch";
import { SubmitButton } from "../../atoms/SubmitButton";
import { ISearch, INLP } from "../../interfaces/Query";
import { useEffect, useState } from "react";
import { Candidate, useGetCandidateLazyQuery } from "../../generated/graphql";

const searchBody = {
  keywords: [] as string[],
  must: false,
  notKeywords: [] as string[],
  gender: "any",
  location: "",
  expMax: "100",
  expMin: "0",
  department: "any",
  industry: "any",
  currentCompany: "",
  currentDesignation: "",
  ugCourse: "no",
  pgCourse: "no",
  pdCourse: "no",
  jobcode: "",
  global: false,
};

const nlpBody = {
  query: "",
};

const SearchView = () => {
  const [selected, setSelected] = useState<any>();
  const [check, setCheck] = useState(true);
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState<ISearch>(searchBody);
  const [nlpData, setNlpData] = useState<INLP>(nlpBody);
  const [candidateList, setCandidateList] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [getCandidate, { data, error }] = useGetCandidateLazyQuery({
    fetchPolicy: "no-cache",
    onCompleted() {
      const canList = data?.getCandidate?.map((candidate) =>
        JSON.parse(candidate?.value as string)
      );
      console.log(canList);
      setCandidateList(canList);
      setLoading(false);
    },
    onError(error) {
      setLoading(false);
    },
  });

  const handleSubmit = () => {
    setLoading(true);
    setPage(1);
    if (check) {
      setCandidateList([]);
      getCandidate({
        variables: {
          query: formData,
          page: page,
        },
      });
    }
  };

  const handlePageChange = (event: any, value: any) => {
    setPage(value);
  };

  const handleClear = () => {
    setFormData(searchBody);
  };

  const handleSwitch = () => {
    setCheck(!check);
  };

  useEffect(() => {
    if (check) {
      getCandidate({
        variables: {
          query: formData,
          page: page,
        },
      });
    }
  }, [page]);

  return (
    <>
      {!selected ? (
        <Container sx={{ height: "100vh" }}>
          <Box sx={{ minHeight: "270px" }}>
            {check ? (
              <CandidateSearch formData={formData} setFormData={setFormData} />
            ) : (
              <NlpSearch formData={nlpData} setFormData={setNlpData} />
            )}
          </Box>
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack direction="row" sx={{ padding: "10px", gap: "10px" }}>
              <SubmitButton onClick={handleClear}> Clear</SubmitButton>
              <SubmitButton
                onClick={() => {
                  setPage(1);
                  handleSubmit();
                }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Search"
                )}
              </SubmitButton>
            </Stack>
            {/* <Stack
              direction="row"
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              NLP
              <Switch checked={check} onChange={handleSwitch} />
              FILTER
            </Stack> */}
            {loading ? (
              <></>
            ) : (
              <Stack direction="row">
                <Pagination
                  count={10}
                  size="small"
                  page={page}
                  onChange={handlePageChange}
                />
              </Stack>
            )}
          </Stack>
          <Stack>
            {loading ? (
              <></>
            ) : candidateList.length > 0 ? (
              <Grid container>
                {candidateList.map((candidate: any) => (
                  <Grid
                    key={candidate.employee_id}
                    xs={12}
                    sm={6}
                    md={3}
                    sx={{
                      padding: "10px",
                    }}
                  >
                    <div onClick={() => setSelected(candidate)}>
                      <CandidateCard candidate={candidate} />
                    </div>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                No candidate Found
              </Typography>
            )}
          </Stack>
        </Container>
      ) : (
        <Container sx={{ height: "100vh" }}>
          <div>
            {selected && (
              <Paper>
                <CandidateDetailsCard
                  candidate={selected}
                  setSelected={setSelected}
                />
              </Paper>
            )}
          </div>
        </Container>
      )}
    </>
  );
};

export default SearchView;
