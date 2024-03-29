import { Box, FormControl, Grid, InputLabel, Typography } from "@mui/material";
import { Checkbox, MenuItem, Select, TextField } from "@mui/material";
import {
  industries,
  department,
  UgDegree,
  PgDegree,
  PhdDegree,
} from "../constants";
import { TagsInput } from "react-tag-input-component";

const CandidateSearch = ({ formData, setFormData }: any) => {
  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMustChange = (e: any) => {
    setFormData((prevData: any) => ({
      ...prevData,
      must: !prevData.must,
    }));
  };
  const handleGlobalChange = (e: any) => {
    setFormData((prevData: any) => ({
      ...prevData,
      global: !prevData.must,
    }));
  };
  const handleKeywordChange = (e: string[]) => {
    setFormData((prevData: any) => ({
      ...prevData,
      keywords: e,
    }));
  };

  const handleNotKeywordChange = (e: string[]) => {
    setFormData((prevData: any) => ({
      ...prevData,
      notKeywords: e,
    }));
  };

  return (
    <Box
      sx={{
        // borderStyle: "solid",
        // borderWidth: "1px",
        borderRadius: "10px",
        boxShadow: 3,
        padding: "15px",
        // bgcolor: theme.palette.primary.main,
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <TagsInput
            value={formData.keywords}
            onChange={handleKeywordChange}
            name="keywords"
            placeHolder="Keywords"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TagsInput
            value={formData.notKeywords}
            onChange={handleNotKeywordChange}
            name="notKeywords"
            placeHolder="Not Keywords"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{ alignItems: "center", display: "flex" }}
        >
          <Checkbox
            size="small"
            name="must"
            onChange={handleMustChange}
            color="primary"
            sx={{
              inputProps: { ariaLabel: "Must include all keywords" },
            }}
            checked={formData.must}
          />
          <Typography>Must have all keywords</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel sx={{ color: "black" }}>Gender</InputLabel>
            <Select
              name="gender"
              value={formData.gender}
              label="Gender"
              onChange={handleFormChange}
              sx={{ bgcolor: "white" }}
            >
              <MenuItem value={"any"}>Any Gender</MenuItem>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={2}>
          <TextField
            size="small"
            name="expMin"
            label="Min Experience"
            type="number"
            value={formData.expMin}
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
            value={formData.expMax}
            onChange={handleFormChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="location"
            label="Location"
            value={formData.location}
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
              <MenuItem value={"any"}>Any Industry</MenuItem>
              {industries.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4.5}>
          <TextField
            name="currentCompany"
            label="Company"
            value={formData.currentCompany}
            onChange={handleFormChange}
            fullWidth
            size="small"
          />
        </Grid>

        <Grid item xs={12} md={4.5}>
          <TextField
            size="small"
            name="currentDesignation"
            value={formData.currentDesignation}
            onChange={handleFormChange}
            label="Designation"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            size="small"
            name="jobcode"
            value={formData.jobcode}
            onChange={handleFormChange}
            label="Jobcode"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControl fullWidth size="small">
            <InputLabel>UG Qualification</InputLabel>
            <Select
              native
              name="ugCourse"
              value={formData.ugCourse}
              label="Ug Qualification"
              onChange={handleFormChange}
            >
              <option aria-label="Not required" value="no">
                Not required
              </option>
              <option aria-label="Any UG" value="any">
                Any UG
              </option>
              {UgDegree.map((items) => (
                <optgroup label={items.Degree} key={items.Degree}>
                  <option value={items.Degree} key={items.Degree}>
                    Any {items.Degree}
                  </option>
                  {items.Majors?.map((values) => (
                    <option
                      value={`${items.Degree} ${values}`}
                      key={`${items.Degree} ${values}`}
                    >
                      {`${items.Degree} ${values}`}
                    </option>
                  ))}
                </optgroup>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControl fullWidth size="small">
            <InputLabel>PG Qualification</InputLabel>
            <Select
              native
              name="pgCourse"
              value={formData.pgCourse}
              label="PG Qualification"
              onChange={handleFormChange}
            >
              <option aria-label="Not required" value="no">
                Not required
              </option>
              <option aria-label="Any PG" value="any">
                Any PG
              </option>
              {PgDegree.map((items) => (
                <optgroup label={items.Degree} key={items.Degree}>
                  <option value={items.Degree} key={items.Degree}>
                    Any {items.Degree}
                  </option>
                  {items.Majors?.map((values) => (
                    <option value={values} key={values}>
                      {values}
                    </option>
                  ))}
                </optgroup>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3}>
          <FormControl fullWidth size="small">
            <InputLabel>PhD Qualification</InputLabel>
            <Select
              native
              name="pdCourse"
              value={formData.pdCourse}
              label="PhD Qualification"
              onChange={handleFormChange}
              placeholder="Select Degree"
            >
              <option aria-label="Not required" value="no">
                Not required
              </option>
              <option aria-label="Any PhD" value="any">
                Any PhD
              </option>
              {PhdDegree.map((items) => (
                <optgroup label={items.major} key={items.major}>
                  <option value={items.major} key={items.major}>
                    Any {items.major}
                  </option>
                  {items.specializations?.map((values) => (
                    <option value={values} key={values}>
                      {values}
                    </option>
                  ))}
                </optgroup>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{ alignItems: "center", display: "flex" }}
        >
          <Checkbox
            size="small"
            name="must"
            onChange={handleGlobalChange}
            color="primary"
            sx={{
              inputProps: { "aria-label": "Global Search" },
            }}
            defaultChecked={formData.global}
          />
          <Typography>Global Search</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CandidateSearch;
