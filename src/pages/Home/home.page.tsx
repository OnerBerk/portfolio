import {Grid, useMediaQuery, useTheme} from '@mui/material';
import {motion} from 'framer-motion';
import PageLayout from '../../components/layout/page-layout/page-layout';
import MotionContainer from './motion-container';
import photo from '@/assets/me.PNG';
import './home.page.scss';

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <PageLayout>
      <Grid container>
        <Grid px={5} item xs={12} md={8} alignItems='center' justifyContent='center' display='flex' height='95vh'>
          <MotionContainer />
        </Grid>
        <Grid borderColor='primary.main' item xs={12} md={4} display='flex' justifyContent='center' alignItems='center'>
          {!isMobile && (
            <motion.img
              className='fade-image'
              src={photo}
              alt='moi'
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 2}}
            />
          )}
        </Grid>
      </Grid>
    </PageLayout>
  );
};
export default HomePage;
