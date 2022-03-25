import React from "react";
import CompareArrowsSharpIcon from '@mui/icons-material/CompareArrowsSharp';
import { Button } from "@mui/material";

export const CurrencySwitcher = ({ disabled, onSwitch }: {disabled: any, onSwitch: any}) => {
  return <Button
    variant="contained"
    type="button"
    className="button switch-currency"
    disabled={!!disabled}
    onClick={onSwitch}
  >
   <CompareArrowsSharpIcon />
  </Button>;
};
