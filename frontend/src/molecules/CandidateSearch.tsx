import { FormControl, Grid, InputLabel } from "@mui/material";
import { Checkbox, MenuItem, Select, TextField } from "@mui/material";
import {
  industries,
  department,
  UgDegree,
  PgDegree,
  PhdDegree,
} from "../constants";

const CandidateSearch = ({ formData, setFormData }: any) => {
  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6}>
        <TextField
          name="keywords"
          label="Keywords"
          onChange={handleFormChange}
          fullWidth
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          name="notKeywords"
          label="Not Keywords"
          onChange={handleFormChange}
          fullWidth
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={3} sx={{ alignItems: "center" }}>
        <Checkbox
          size="small"
          name="must"
          onChange={handleFormChange}
          sx={{ inputProps: { "aria-label": "Must include all keywords" } }}
          defaultChecked={formData.must}
        />
        <span>Must have all keywords</span>
      </Grid>
      <Grid item xs={12} md={2}>
        <FormControl fullWidth size="small">
          <InputLabel>Gender</InputLabel>
          <Select
            name="gender"
            value={formData.gender}
            label="Gender"
            onChange={handleFormChange}
          >
            <MenuItem value={"any"}>Any Gender</MenuItem>
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} md={2}>
        <TextField
          size="small"
          name="expMin"
          label="Min Experience"
          type="number"
          onChange={handleFormChange}
          fullWidth
        />
      </Grid>

      <Grid item xs={12} md={2}>
        <TextField
          size="small"
          name="expMax"
          label="Max Experience"
          type="number"
          onChange={handleFormChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          name="location"
          label="Location"
          onChange={handleFormChange}
          fullWidth
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth size="small">
          <InputLabel>Department</InputLabel>
          <Select
            name="department"
            value={formData.department}
            label="Department"
            onChange={handleFormChange}
          >
            <MenuItem value={"any"}>Any Department</MenuItem>
            {department.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth size="small">
          <InputLabel>Industry</InputLabel>
          <Select
            name="industry"
            value={formData.industry}
            label="Industry"
            onChange={handleFormChange}
          >
            <MenuItem value={"any"}>Any Department</MenuItem>
            {industries.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          name="currentCompany"
          label="Current Company"
          onChange={handleFormChange}
          fullWidth
          size="small"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          size="small"
          name="currentDesignation"
          onChange={handleFormChange}
          label="Current Designation"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <FormControl fullWidth size="small">
          <InputLabel>UG Qualification</InputLabel>
          <Select
            name="ugCourse"
            value={formData.ugCourse}
            label="UG Qualification"
            onChange={handleFormChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} md={3}>
        <FormControl fullWidth size="small">
          <InputLabel>PG Qualification</InputLabel>
          <Select
            name="pgCourse"
            value={formData.pgCourse}
            label="PG Qualification"
            onChange={handleFormChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3}>
        <FormControl fullWidth size="small">
          <InputLabel>PhD Qualification</InputLabel>
          <Select
            name="pdCourse"
            value={formData.pdCourse}
            label="PhD Qualification"
            onChange={handleFormChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          size="small"
          name="jobcode"
          onChange={handleFormChange}
          label="Jobcode"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default CandidateSearch;
