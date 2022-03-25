import React from 'react';
import { InputAdornment, OutlinedInput } from '@mui/material';
import { getSymbolFromCode } from 'currency-code-symbol-map';

export const Amount = ({ error, value, onChange }: { error: any; value: any; onChange: any }) => {
  const currencySymbol = getSymbolFromCode('USD');
  const errorClass = error ? 'has-error' : '';

  return (
    <label className={errorClass}>
      <div className="label">Amount to convert:</div>
      <OutlinedInput
        type="number"
        autoFocus
        startAdornment={<InputAdornment position="start">{currencySymbol}</InputAdornment>}
        placeholder="Set Amount"
        value={value}
        onChange={onChange}
      />

      {error && <div className="error-hint">{error}</div>}
    </label>
  );
};
