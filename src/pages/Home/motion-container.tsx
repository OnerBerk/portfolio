import './home.page.scss';
import {useIntl} from 'react-intl';

import Stack from '@mui/material/Stack';

import Motion1 from './motion1';
import messages from './messages';

const MotionContainer = () => {
  const intl = useIntl();
  return (
    <Stack width='80%' height='70vh' justifyContent='center' overflow='auto'>
      <Motion1
        text1={intl.formatMessage(messages.meDesc1)}
        text2={intl.formatMessage(messages.meDesc2)}
        text3={intl.formatMessage(messages.meDesc3)}
        text4={intl.formatMessage(messages.meDesc4)}
        text5={intl.formatMessage(messages.meDesc5)}
        text6={intl.formatMessage(messages.meDesc6)}
        text7={intl.formatMessage(messages.meDesc7)}
        text8={intl.formatMessage(messages.meDesc8)}
        text9={intl.formatMessage(messages.meDesc9)}
      />
    </Stack>
  );
};
export default MotionContainer;
