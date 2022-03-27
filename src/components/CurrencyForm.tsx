import React, { FC, useState } from 'react';
import { CurrencySwitcher } from './CurrencySwitcher';
import { styled } from '@mui/system';
import { CurrencyInput } from './CurrencyInput';

const CurrencySelectorContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  margin: '30px',
});

interface IProps {
  base: string;
  rates: { [key: string]: number };
}

export const CurrencyForm: FC<IProps> = ({ base, rates }) => {
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('EUR');

  const format = (num: number) => num.toFixed(4);

  const onAmount1Change = (amount1: number) => {
    setAmount2(Number(format((amount1 * rates[currency2]) / rates[currency1])));
    setAmount1(amount1);
  };

  const onCurrency1Change = (currency1: string) => {
    setAmount2(Number(format((amount1 * rates[currency2]) / rates[currency1])));
    setCurrency1(currency1);
  };

  const onAmount2Change = (amount2: number) => {
    setAmount1(Number(format((amount2 * rates[currency1]) / rates[currency2])));
    setAmount2(amount2);
  };

  const onCurrency2Change = (currency2: string) => {
    setAmount1(Number(format((amount2 * rates[currency1]) / rates[currency2])));
    setCurrency2(currency2);
  };

  const handleSwitch = () => {
    setCurrency1(currency2);
    setCurrency2(currency1);
  };

  return (
    <CurrencySelectorContainer>
      <CurrencyInput
        onAmountChange={onAmount1Change}
        onCurrencyChange={onCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}
      />

      <CurrencySwitcher disabled={!currency1 || !currency2} onSwitch={handleSwitch} />

      <CurrencyInput
        onAmountChange={onAmount2Change}
        onCurrencyChange={onCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2}
      />
    </CurrencySelectorContainer>
  );
};
