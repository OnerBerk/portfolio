import React from 'react';

import {  TypographyProps } from '@mui/material/Typography';
import  Typography from '@mui/material/Typography';

interface TextProps extends TypographyProps {
  label: string;
}

const Text: React.FC<TextProps> = ({ label, sx, ...rest }) => {
  return (
    <Typography
      sx={{ fontSize: '1.3rem', ...sx }}
      {...rest}
    >
      {label}
    </Typography>
  );
};

export default Text;
