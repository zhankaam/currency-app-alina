import React from "react";

export const CurrencySwitcher = ({ disabled, onSwitch }: {disabled: any, onSwitch: any}) => {
  return <button
    type="button"
    className="button switch-currency"
    disabled={!!disabled}
    onClick={onSwitch}
  >
   Swap
  </button>;
};
