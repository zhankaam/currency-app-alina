import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { CurrencyForm } from './components/CurrencyForm';
import { Error } from './components/Error';
import { LoadingIcon } from './components/Loading';
import { IResponse } from './types';

const API_ACCESS_KEY = process.env.REACT_APP_API_ACCESS_KEY;
export const API_URL = `${process.env.REACT_APP_CURRENCY_API_URL}latest?access_key=${API_ACCESS_KEY}`;

// http://data.fixer.io/api/latest?access_key=33c24d225ff84ed532870bc3370aaf9c

function App() {
  const [data, setData] = useState<IResponse>({
    success: false,
    timestamp: 0,
    base: "",
    date: "",
    rates: {}
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getCurrencyconvertTor = async () => {
    setIsLoading(true);

    const {data} = await axios.get(
      `http://data.fixer.io/api/latest?access_key=33c24d225ff84ed532870bc3370aaf9c`
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

  if (error) {
    return <Error message={error} />;
  }

  if (isLoading) {
    return <LoadingIcon />;
  }

  return (
    <div className="App">
      <h1 className="cc-title">Currency Converter</h1>
      {error}

      <CurrencyForm base={data.base} rates={data.rates} />
    </div>
  );
}

export default App;
