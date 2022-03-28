import React, { FC } from "react";
import { Box, CircularProgress } from "@mui/material";

interface IProps {
  isLoading: boolean;
}

export const Loader: FC<IProps> = ({isLoading}) => (
  <>
  {isLoading && (
    <Box sx={{ textAlign: "center", marginTop: "60px" }}>
      <CircularProgress />
    </Box>
  )}
</>
);
