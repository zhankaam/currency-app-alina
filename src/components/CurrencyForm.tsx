import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { convertAmount, getAmountError, getCurrencyOptions } from '../utils';
import { Amount } from './Amount';
import { CurrencySelector } from './CurrencySelector';
import { CurrencySwitcher } from './CurrencySwitcher';
import { Result } from './Result';

interface IProps {
   base: string;
   rates:  {[key: string]: number}
  }

export const CurrencyForm: FC<IProps> = ({ base, rates }) => {
  const [amount, setAmount] = useState('1');
  const [error, setError] = useState<string | undefined>('');
  const [from, setFrom] = useState<any | null>(null);
  const [to, setTo] = useState<any | null>(null);
  const [resultValue, setResultValue] = useState<number>();

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const error = getAmountError(value);
    setError(error);
    setAmount(value);
  };

  const handleFromChange = (from: any) => {
    setFrom(from);
  };

  const handleToChange = (to: any) => {
    setTo(to);
  };

  const handleSwitch = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newValue = convertAmount(base, rates, amount, from?.label, to?.label);
    console.log({newValue});
    
    setResultValue(newValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Amount error={error} value={amount} onChange={handleAmountChange} />
      <CurrencySelector
        label="From"
        options={getCurrencyOptions(rates, from)}
        value={from}
        onChange={handleFromChange}
      />
      <CurrencySwitcher disabled={!from || !to} onSwitch={handleSwitch} />
      <CurrencySelector
        label="To"
        options={getCurrencyOptions(rates, to)}
        value={to}
        onChange={handleToChange}
      />
      <input className="button" type="submit" value="Submit" />

      <Result value={resultValue} />
    </form>
  );
}
