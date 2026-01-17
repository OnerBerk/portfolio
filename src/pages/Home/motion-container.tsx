import './home.page.scss';
import {useIntl} from 'react-intl';
import {motion} from 'framer-motion';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Motion1 from './motion1';
import messages from './messages';

const MotionContainer = () => {
  const intl = useIntl();
  return (
    <Stack width='80%' height='70vh' justifyContent='center' overflow='auto'>
      <motion.div
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 3, ease: 'backInOut'}}>
        <Typography variant='h4' sx={{mb: 3, fontWeight: 'bold'}}>
          {intl.formatMessage(messages.about)}
        </Typography>
      </motion.div>
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
