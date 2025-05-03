import React from 'react';
import {Stack} from '@mui/material';
import Text from '../../ui-components/text';

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
      <Text label={text1} />
      <Text label={text2} />
      <Text label={text3} />
      <Text label={text4} />
      <Text label={text5} />
      <Text label={text6} />
      <Text label={text7} />
      <Text label={text8} />
      <Text label={text9} />
    </Stack>
  );
};

export default Motion1;
