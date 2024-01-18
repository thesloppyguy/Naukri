import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CandidateCard from "../../molecules/CandidateCard";
import { Box, Paper, Switch, useTheme } from "@mui/material";
import CandidateSearch from "../../molecules/CandidateSearch";
import { SubmitButton } from "../../atoms/SubmitButton";
import NlpSearch from "../../molecules/NlpSearch";
import axios from "axios";
import { SearchForm, NLPForm } from "../../interfaces/search";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CandidateDetailsCard from "../../molecules/CandidateDetailsCard";

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
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>();
  const theme = useTheme();
  const [check, setCheck] = useState(true);
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState<SearchForm>(searchBody);
  const [nlpData, setNlpData] = useState<NLPForm>(nlpBody);
  const [candidateList, setCandidateList] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
    if (check) {
      axios
        .post(
          "http://localhost:4000/api/search/filter",
          { ...formData, page: page },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          setCandidateList(response.data.hits.hits);
          console.log(candidateList);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post(
          "http:/localhost:4000/api/search/nlp",
          { ...nlpData, page: page },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          setCandidateList(response.data.hits.hits);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setLoading(false);
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
    handleSubmit();
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
              <SubmitButton onClick={handleSubmit}> Search</SubmitButton>
            </Stack>
            <Stack
              direction="row"
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              NLP
              <Switch checked={check} onChange={handleSwitch} />
              FILTER
            </Stack>
            <Stack direction="row">
              <Pagination
                count={10}
                size="small"
                defaultPage={page}
                onChange={handlePageChange}
              />
            </Stack>
          </Stack>
          <Stack>
            {candidateList.length > 0 ? (
              <Grid container>
                {candidateList.map((candidate: any) => (
                  <Grid
                    key={candidate._source.employee_id}
                    xs={12}
                    sm={6}
                    md={3}
                    sx={{
                      padding: "10px",
                    }}
                  >
                    <motion.div onClick={() => setSelected(candidate)}>
                      <CandidateCard candidate={candidate._source} />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <></>
            )}
          </Stack>
        </Container>
      ) : (
        <Container sx={{ height: "100vh" }}>
          <AnimatePresence>
            {selected && (
              <Paper>
                <CandidateDetailsCard
                  candidate={selected._source}
                  setSelected={setSelected}
                />
              </Paper>
            )}
          </AnimatePresence>
        </Container>
      )}
    </>
  );
};

export default SearchView;
