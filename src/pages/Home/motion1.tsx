import React from 'react';
import {Typography, Stack} from '@mui/material';

interface Props {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
  text9: string;
}

const Motion1: React.FC<Props> = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
}) => {
  return (
    <Stack spacing={1}>
      <Typography>{text1}</Typography>
      <Typography>{text2}</Typography>
      <Typography>{text3}</Typography>
      <Typography>{text4}</Typography>
      <Typography>{text5}</Typography>
      <Typography>{text6}</Typography>
      <Typography>{text7}</Typography>
      <Typography>{text8}</Typography>
      <Typography>{text9}</Typography>
    </Stack>
  );
};

export default Motion1;
