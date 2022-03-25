import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import Select, { components, StylesConfig } from 'react-select';
import { SelectCustomOption } from './SelectCustomOption';

// export const CustomComponent = (Comp: any) => (props: any) => {
//   return (
//     <Comp {...props}>
//       <SelectCustomOption {...props.data} />
//     </Comp>
//   );
// };

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

  console.log({ label, options, value, onChange });

  return (
    <label>
      {/* <Autocomplete
        // disablePortal
        value={value}
        onChange={handleChange}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={label} />}
      /> */}
      <Select
        className="react-select-container"
        isClearable={true}
        value={value}
        onChange={handleChange}
        options={options}
        // components={{
        //   Option: CustomComponent(components.Option),
        //   SingleValue: CustomComponent(components.SingleValue),
        // }}
      />
    </label>
  );
};
