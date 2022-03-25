import { TextField } from "@mui/material";

export const Result = ({ value = 0 }) => {
  return (
      <TextField type="text" value={value} label="Converted to:" variant="outlined" />
  );
};
