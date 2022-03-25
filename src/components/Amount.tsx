import React from 'react';
import { getSymbolFromCode } from 'currency-code-symbol-map';
import CurrencyInput from 'react-currency-input-field';

export const Amount = ({ error, value, onChange }: { error: any; value: any; onChange: any }) => {
  const errorClass = error ? 'has-error' : '';

  return (
    <label className={errorClass}>
      <div className="label">Amount to convert:</div>
      <CurrencyInput
        prefix={getSymbolFromCode('USD')}
        placeholder="Set Amount"
        value={value}
      />

      {error && <div className="error-hint">{error}</div>}
    </label>
  );
};
