import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CurrencyForm } from './components/CurrencyForm';
import { IResponse } from './types';
import { Typography } from '@mui/material';
import { Loader } from './components/loader';
import { ErrorSnackbar } from './components/error-snackbar';
import './App.css';

const API_ACCESS_KEY = process.env.REACT_APP_API_ACCESS_KEY;
const API_URL = process.env.REACT_APP_CURRENCY_API_URL;

function App() {
  const [data, setData] = useState<IResponse>({
    success: false,
    timestamp: 0,
    base: '',
    date: '',
    rates: {},
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { base, rates } = data;

  const getCurrencyconvertTor = async () => {
    setIsLoading(true);

    const { data } = await axios.get(
      `${API_URL}latest?access_key=${API_ACCESS_KEY}`
    );

    if (data.success) {
      setData(data);
      setIsLoading(false);
    } else {
      setError(data.error.info);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCurrencyconvertTor();
  }, []);

  return (
    <div className="App">
      <Typography variant="h3" component="div" gutterBottom>
        Currency Converter
      </Typography>

      <Loader isLoading={isLoading} />
      <ErrorSnackbar error={error} setError={setError} />

      <CurrencyForm base={base} rates={rates} />
    </div>
  );
}

export default App;
