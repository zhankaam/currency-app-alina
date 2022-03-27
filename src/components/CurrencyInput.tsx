import React, { FC } from 'react';
import { styled } from '@mui/system';
import { FormControl, MenuItem, Select, OutlinedInput, InputAdornment } from '@mui/material';
import { getSymbolFromCode } from 'currency-code-symbol-map';

const Container = styled('div')({
  minWidth: '400px',
  margin: '0 20px',
});

interface IProps {
  amount: number;
  currency: string;
  currencies: string[];
  onAmountChange: (amount: number) => void;
  onCurrencyChange: (currency: string) => void;
}

export const CurrencyInput: FC<IProps> = ({
  amount,
  currency,
  currencies,
  onAmountChange,
  onCurrencyChange,
}) => {
  // @ts-ignore
  const currencySymbol = getSymbolFromCode(currency);

  return (
    <Container>
      <OutlinedInput
        startAdornment={<InputAdornment position="start">{currencySymbol}</InputAdornment>}
        type="number"
        value={amount}
        onChange={(e: any) => onAmountChange(e.target.value)}
      />
      <FormControl>
        <Select value={currency} onChange={(e) => onCurrencyChange(e.target.value)}>
          {currencies.map((currency) => (
            <MenuItem key={currency} value={currency}>
              {currency}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};
