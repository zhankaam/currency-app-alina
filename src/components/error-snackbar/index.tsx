import { Snackbar, Alert } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
  error: string;
  setError: (error: string) => void;
}

export const ErrorSnackbar: FC<IProps> = ({ error, setError }) => {

  const handleClose = (event?: React.SyntheticEvent<any> | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setError('');
  };

  return (
    <Snackbar open={error !== ''} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        {error}
      </Alert>
    </Snackbar>
  );
};
