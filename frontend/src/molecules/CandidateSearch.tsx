import { Grid, Stack } from "@mui/material";
import { Button, Checkbox, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

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
        <TextField name="keywords" label="Keywords" fullWidth size="small" />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          name="notKeywords"
          label="Not Keywords"
          fullWidth
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={3} sx={{ alignItems: "center" }}>
        <Checkbox
          size="small"
          name="must"
          sx={{ inputProps: { "aria-label": "Must include all keywords" } }}
          defaultChecked={formData.must}
        />
        <span>Must have all keywords</span>
      </Grid>
      <Grid item xs={12} md={2}>
        <Select
          size="small"
          value={formData.gender}
          label="Gender"
          name="gender"
          onChange={handleFormChange}
          fullWidth
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="any">Any Gender</MenuItem>
        </Select>
      </Grid>

      <Grid item xs={12} md={2}>
        <TextField
          size="small"
          name="empMin"
          label="Min Experience"
          type="number"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} md={2}>
        <TextField
          size="small"
          name="empMax"
          label="Max Experience"
          type="number"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField name="location" label="Location" fullWidth size="small" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Select
          size="small"
          value={formData.department}
          label="Department or Role"
          onChange={handleFormChange}
          fullWidth
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="any">Any Gender</MenuItem>
        </Select>
      </Grid>

      <Grid item xs={12} md={6}>
        <Select
          size="small"
          value={formData.industry}
          label="Industry"
          onChange={handleFormChange}
          fullWidth
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="any">Any Gender</MenuItem>
        </Select>
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          name="currentCompany"
          label="Current Company"
          fullWidth
          size="small"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          size="small"
          name="currentDesignation"
          label="Current Designation"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <Select
          size="small"
          value={formData.industry}
          label="Industry"
          onChange={handleFormChange}
          fullWidth
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="any">Any Gender</MenuItem>
        </Select>
      </Grid>

      <Grid item xs={12} md={4}>
        <Select
          size="small"
          value={formData.industry}
          label="Industry"
          onChange={handleFormChange}
          fullWidth
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="any">Any Gender</MenuItem>
        </Select>
      </Grid>

      <Grid item xs={12} md={4}>
        <Select
          size="small"
          value={formData.industry}
          label="Industry"
          onChange={handleFormChange}
          fullWidth
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="any">Any Gender</MenuItem>
        </Select>
      </Grid>
    </Grid>
  );
};

export default CandidateSearch;
