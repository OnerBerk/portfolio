import './home.page.scss';
import {useIntl} from 'react-intl';
import {motion} from 'framer-motion';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import messages from './messages';
import {Box, useMediaQuery, useTheme} from '@mui/material';

const MotionContainer = () => {
  const intl = useIntl();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack height='100%' justifyContent='center' overflow='hidden' py={5}>
      <motion.div
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 2, ease: 'backInOut'}}>
        <Typography variant='h1' sx={{mb: 3, fontWeight: 'bold', fontSize: isMobile ? '4.5rem' : '6.5rem'}}>
          {intl.formatMessage(messages.about)}
        </Typography>
      </motion.div>
      <motion.div
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 2, ease: 'backInOut'}}>
        <Typography variant='h2' sx={{mb: 3, fontSize: isMobile ? '2.5rem' : '3rem', whiteSpace: 'pre-line'}}>
          {intl.formatMessage(messages.title)}
        </Typography>
      </motion.div>
      <Box
        sx={{
          overflow: 'auto',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          zIndex: 1,
        }}>
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 2, ease: 'circIn', delay: 2}}>
          <Typography sx={{fontSize: '1.5rem', whiteSpace: 'pre-line', fontFamily: 'Merriweather, serif'}}>
            {intl.formatMessage(messages.meDesc)}
          </Typography>
        </motion.div>
      </Box>
    </Stack>
  );
};
export default MotionContainer;
