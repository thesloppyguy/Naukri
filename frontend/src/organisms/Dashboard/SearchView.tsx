import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CandidateCard from "../../molecules/CandidateCard";
import DetailedCard from "../../molecules/DetailedCard";
import {
  Box,
  Button,
  Checkbox,
  MenuItem,
  Select,
  Switch,
  TextField,
  alpha,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import CandidateSearch from "../../molecules/CandidateSearch";
import purple from "@mui/material/colors/purple";
import { SubmitButton } from "../../atoms/SubmitButton";
import NlpSearch from "../../molecules/NlpSearch";

const candidates = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    country: "India",
    education: [
      {
        institute_location: "",
        major: "Finance and Marketing",
        degree_name: "MBA",
        institute_name: "",
        institute_type: "",
      },
    ],
    gender: "Male",
    date_of_birth: "1998-05-04",
    highest_education: "MBA,Masters",
    title: "",
    permanent_address:
      "Plot No 109 Shivaganga Layout Kusugal Road, Keshwapur, Hubli, Karnataka, India, 580020",
    skills:
      "erp software, marketing, excel, analytical skills, financial analysis, derivatives market, lead a team, management research, communication skills, microsoft office, ms-word, oracle, mcp, listening, sql, business development, analysis, soft skills, financial reporting, ms office, branding, presentation skills, sustainability, sales funnel, technical analysis, strong communication skills, marketing funnel, determined, financial forecasting, c language, tally, predict, make presentations, derivatives, prepare presentations, balance sheet, machine learning, performance analysis, strategic planning, strategic financial planning, good interpersonal skills, ms excel, employee resource group, operations, financials, client management, business needs, retail marketing, annual reports, e-commerce, swot analysis, ability to plan, digital platform, html, python, artificial intelligence, enterprise resource planning, finance, power point, determine, forex trading, retail sales, erp, trading, financial reports, excellent written and verbal communication skills, portfolio management, team productivity, financial planning, implement strategies, corporate training",
    fresher: "Yes",
    total_work_experience: 0,
    job_code_title:
      "Assistant Manager - Internation..., Assistant Manager - Internation...",
    first_name: "Ganesh",
    email: "ganeshkalmane98@gmail.com",
    employer_id: "LNT/1688144841061667",
    work_experience: [
      {
        end_date: "2022-10-01",
        domain: "Information Technology",
        employer:
          "Institute of Management Studies and Research Hubli (Karnatak University Dharwad)",
        job_title: "INTERNSHIP PROJECTS AND CERTIFICATIONS",
        start_date: "2020-12-01",
      },
      {
        end_date: "2021-10-01",
        domain: "",
        employer: "Cholamandalam Investment and Finance Company",
        job_title: "Internship Project",
        start_date: "2021-09-01",
      },
      {
        end_date: "2021-09-01",
        domain: "Sales",
        employer: "IFORTIS WORLDWIDE",
        job_title: "Marketing and Sales Intern",
        start_date: "2021-08-01",
      },
    ],
    candidate_age: "25",
    languages: "hindi, kannada and hindi, english, kannada",
    file_name: "LNT_1688144841061667.pdf",
    last_employer:
      "Institute of Management Studies and Research Hubli (Karnatak University Dharwad)",
    last_designation: "INTERNSHIP PROJECTS AND CERTIFICATIONS",
    last_name: "Kalmane",
    current_address:
      "Plot No 109 Shivaganga Layout Kusugal Road, Keshwapur, Hubli, Karnataka, India, 580020",
    pan_number: "",
    phone: "+91-7829771082",
    aadhaar_number: "714675306455",
    job_id: "LNT/AM-IS/786991, LNT/AM-IS/786991",
    passport_number: "",
    location: "KARNATAKA, Hubli",
  },
];

const searchBody = {
  keywords: [],
  must: false,
  notKeywords: [],
  gender: "any",
  location: "",
  expMax: 100,
  expMin: 0,
  department: "any",
  industry: "any",
  currentCompany: "",
  currentDesignation: "",
  ugCourse: "no",
  pgCourse: "no",
  pdCourse: "no",
  jobcode: "",
  page: 1,
};

const nlpBody = {
  query: "",
};

const SearchView = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [check, setCheck] = useState(true);
  const [selected, setSelected] = useState({});
  const [formData, setFormData] = useState(searchBody);
  const [nlpData, setNlpData] = useState(nlpBody);
  const [candidateList, setCandidateList] = useState([1]);

  const handleSubmit = () => {
    console.log(formData);
  };

  const handlePageChange = (event: any, value: any) => {
    console.log(event);
    setFormData((prevData: any) => ({
      ...prevData,
      page: value,
    }));
  };

  const handleClear = () => {
    setFormData(searchBody);
  };

  const handleSwitch = () => {
    setCheck(!check);
  };
  return (
    <>
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
              defaultPage={formData.page}
              onChange={handlePageChange}
            />
          </Stack>
        </Stack>
        <Stack>
          {candidateList.length > 0 ? (
            <Grid container>
              {candidates.map((candidate: any) => (
                <Grid
                  key={candidate.id}
                  xs={12}
                  sm={6}
                  md={3}
                  sx={{
                    padding: "2px",
                  }}
                >
                  <CandidateCard
                    candidate={candidate}
                    onClick={() => {
                      setOpen(true);
                      setSelected(candidate);
                      console.log("clicked");
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
    </>
  );
};

export default SearchView;
