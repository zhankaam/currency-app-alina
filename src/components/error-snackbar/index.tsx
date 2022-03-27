import { Snackbar, Alert } from '@mui/material';
import React, { FC } from 'react';
// import { useDispatch } from "react-redux";
// import { useTypedSelector } from "../../store";
// import { setError } from "../../store/modules/result/action-creator";

interface IProps {
  error: string;
  setError: (error: string) => void;
}

export const ErrorSnackbar: FC<IProps> = ({ error, setError }) => {
  // const error = useTypedSelector(({ results }) => results.error);
  // const dispatch = useDispatch();

  const handleClose = (event?: React.SyntheticEvent<any> | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setError('');
    // dispatch(setError(null));
  };

  return (
    <Snackbar open={error !== ''} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        {error}
      </Alert>
    </Snackbar>
  );
};
