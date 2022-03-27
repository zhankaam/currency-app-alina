import React, { FC } from 'react';
import CompareArrowsSharpIcon from '@mui/icons-material/CompareArrowsSharp';
import { Button } from '@mui/material';

interface IProps {
  disabled: boolean;
  onSwitch: () => void;
}

export const CurrencySwitcher: FC<IProps> = ({ disabled, onSwitch }) => (
  <Button variant="contained" type="button" disabled={!!disabled} onClick={onSwitch}>
    <CompareArrowsSharpIcon />
  </Button>
);
