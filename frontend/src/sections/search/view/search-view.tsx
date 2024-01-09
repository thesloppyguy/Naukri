import { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import FilterSearch from "../filter-search";
import QuerySearch from "../query-search";
import SearchCard from "../search-card";
import { Button } from "@mui/material";

const pollserver = async (field: {}): Promise<[]> => {
  return [];
};

export default function ProductsView() {
  const [checked, setChecked] = useState(true);
  const [response, setResponse] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [fields, setFields] = useState({});
  const handleNLPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const handleFromSubmit = async () => {
    setLoading(true);
    const response = await pollserver(fields);
    setResponse(response);
    setLoading(false);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Products
      </Typography>
      <Typography variant="h6" sx={{ mb: 5 }}>
        NLP
        <Switch checked={checked} onChange={handleNLPChange} name="NLP" />
      </Typography>
      {checked ? <QuerySearch /> : <FilterSearch />}
      <Button variant="contained" onClick={handleFromSubmit} disableElevation>
        Disable elevation
      </Button>
      {response.length ? (
        <Typography variant="h4" sx={{ mb: 5 }}>
          No Valid Candidate Found
        </Typography>
      ) : (
        response.map((value, index) => {
          return <SearchCard />;
        })
      )}
    </Container>
  );
}
