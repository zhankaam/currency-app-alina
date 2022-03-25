import React from "react";

export const SelectCustomOption = ({ label, value }: {label: any, value: any}) => {
  return (
    <div className="currency-option">
      {value ? <i className={`currency-flag currency-flag-${value}`} /> : null}
      {label ?? ""}
    </div>
  );
};
