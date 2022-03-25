import React from 'react';
import Select, { components } from 'react-select';
import { SelectCustomOption } from './SelectCustomOption';

export const CustomComponent = (Comp: any) => (props: any) => {
  return (
    <Comp {...props}>
      <SelectCustomOption {...props.data} />
    </Comp>
  );
};

export const CurrencySelector = ({
  label,
  options = [],
  value,
  onChange,
}: {
  label: any;
  options: any;
  value: any;
  onChange: any;
}) => {
  const handleChange = (selectedOption: any) => {
    onChange(selectedOption);
  };

  return (
    <label>
      {label && <div className="label">{`${label}:`}</div>}
      <Select
        className="react-select-container"
        isClearable={true}
        value={value}
        onChange={handleChange}
        options={options}
        components={{
          Option: CustomComponent(components.Option),
          SingleValue: CustomComponent(components.SingleValue),
        }}
      />
    </label>
  );
};
