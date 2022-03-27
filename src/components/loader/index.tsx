import React, { FC } from "react";
import { Box, CircularProgress } from "@mui/material";
// import { useTypedSelector } from "../../store";

interface IProps {
  isLoading: boolean;
}

export const Loader: FC<IProps> = ({isLoading}) => {
  // const isFetching = useTypedSelector(({ results }) => results.isFetching);

  return (
    <>
      {isLoading && (
        <Box sx={{ textAlign: "center", marginTop: "60px" }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
};
