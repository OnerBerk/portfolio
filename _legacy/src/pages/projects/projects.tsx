import {Box, Grid, Stack, Typography, useMediaQuery, useTheme, Link} from '@mui/material';
import PageLayout from '../../components/layout/page-layout/page-layout';
import {defineMessages, useIntl} from 'react-intl';
import bow from '@/assets/bow.png';
import nar from '@/assets/nar.png';
import {HEAR_ME_OUT_LINK, NAR_LINK} from '@/utils/links';

const messages = defineMessages({
  title: {
    defaultMessage: 'Projects',
    id: 'projects.title',
  },
});

interface Iproject {
  name: string;
  description: string;
  image: string;
  link: string;
}

const projectsList: Iproject[] = [
  {
    name: 'Hear me out',
    description: 'A platform for finding and listening to podcasts',
    image: bow,
    link: HEAR_ME_OUT_LINK,
  },
  {
    name: 'Nar',
    description: 'A platform for finding and listening to podcasts',
    image: nar,
    link: NAR_LINK,
  },
];

const Projects = () => {
  const intl = useIntl();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <PageLayout>
      <Stack alignItems='center' justifyContent='center' height='100%' width='100%' zIndex={1} spacing={10}>
        <Box marginTop={0} marginBottom='auto'>
          <Typography variant='h1' sx={{fontSize: isMobile ? '4.5rem' : '6.5rem', fontWeight: 'semibold'}}>
            {intl.formatMessage(messages.title)}
          </Typography>
        </Box>
        <Grid
          fontFamily='Merriweather, serif'
          width='100%'
          height='100%'
          alignItems='center'
          justifyContent='center'
          px={5}>
          <Grid display='flex' gap={2} alignItems='center' justifyContent='center' >
            {projectsList.map((project) => (
              <Grid
                key={project.name}
                border={1}
                width={isMobile ? { xs: '100%', md: '30%' } : { xs: '100%', md: '30%' }}
                maxWidth={400}
                sx={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.4))'}}
                borderRadius={3}>
                <Link href={project.link} target='_blank' rel='noopener noreferrer' sx={{textDecoration: 'none'}}>
                  <Box sx={{zIndex: 1}}>
                    <img src={project.image} alt={project.name} width='100%'  height='100%' />
                    <Typography
                      borderTop={1}
                      fontSize={isMobile ? '1rem' : '2rem'}
                      textAlign='center'
                      fontWeight='700'
                      sx={{color: '#000'}}>
                      {project.name}
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Stack>
    </PageLayout>
  );
};

export default Projects;
