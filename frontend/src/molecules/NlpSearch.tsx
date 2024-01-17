import { Box } from "@mui/material";

const NlpSearch = ({ formData, setFormData }: any) => {
  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box
      sx={{
        borderStyle: "solid",
        borderWidth: "1px",
        borderRadius: "25px",
        padding: "15px",
        bgcolor: "#ffffff",
        height: "max",
      }}
    ></Box>
  );
};

export default NlpSearch;
