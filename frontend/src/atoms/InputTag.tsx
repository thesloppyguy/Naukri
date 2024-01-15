import React, { useRef, useState } from "react";
import { Cancel, Tag } from "@mui/icons-material";
import { FormControl, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface TagsProps {
  data: string;
  handleDelete: (value: string) => void;
}

const Tags = ({ data, handleDelete }: TagsProps) => {
  return (
    <Box
      sx={{
        background: "#283240",
        height: "100%",
        display: "flex",
        padding: "0.4rem",
        margin: "0 0.5rem 0 0",
        justifyContent: "center",
        alignContent: "center",
        color: "#ffffff",
      }}
    >
      <Stack direction="row" gap={1}>
        <Typography>{data}</Typography>
        <Cancel
          sx={{ cursor: "pointer" }}
          onClick={() => {
            handleDelete(data);
          }}
        />
      </Stack>
    </Box>
  );
};

const InputTags = (keywords: string[]) => {
  const [tags, setTags] = useState<string[]>(keywords);
  const tagRef = useRef<HTMLInputElement>(null);

  const handleDelete = (value: string) => {
    const newTags = tags.filter((val) => val !== value);
    setTags(newTags);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tagRef.current) {
      setTags([...tags, tagRef.current.value]);
      tagRef.current.value = "";
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <form onSubmit={handleOnSubmit}>
        <TextField
          inputRef={tagRef}
          fullWidth
          variant="standard"
          size="small"
          sx={{ margin: "1rem 0" }}
          margin="none"
          placeholder={tags.length < 5 ? "Enter tags" : ""}
          InputProps={{
            startAdornment: (
              <Box sx={{ margin: "0 0.2rem 0 0", display: "flex" }}>
                {tags.map((data, index) => {
                  return (
                    <Tags data={data} handleDelete={handleDelete} key={index} />
                  );
                })}
              </Box>
            ),
          }}
        />
      </form>
    </Box>
  );
};

export default InputTags;
