import React, { FC } from 'react';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

const ButtonWrapper = styled(Button)({
   minWidth: '300px',
   borderRadius: '30px',
   background: '#e7007e',
})

interface IProps {
  disabled: boolean;
  onSwitch: () => void;
}

export const CurrencySwitcher: FC<IProps> = ({ disabled, onSwitch }) => (
  <ButtonWrapper variant="contained" type="button" disabled={!!disabled} onClick={onSwitch}>
    Swap
  </ButtonWrapper>
);
