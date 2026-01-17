import {Box, Grid, Stack, Typography, useMediaQuery, useTheme, Link} from '@mui/material';
import PageLayout from '../../components/layout/page-layout/page-layout';
import {defineMessages, useIntl} from 'react-intl';
import bow from '@/assets/bow.png';
import {HEAR_ME_OUT_LINK} from '@/utils/links';

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
];

const Projects = () => {
  const intl = useIntl();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <PageLayout>
      <Stack alignItems='center' justifyContent='center' height='100%' width='100%' zIndex={1}>
        <Box marginTop={0} marginBottom='auto'>
          <Typography variant='h1' sx={{fontSize: isMobile ? '4.5rem' : '6.5rem', fontWeight: 'semibold'}}>
            {intl.formatMessage(messages.title)}
          </Typography>
        </Box>
        <Grid
          fontFamily='Merriweather, serif'
          container
          width='100%'
          height='100%'
          alignItems='center'
          justifyContent='center'
          px={5}>
          <Grid item>
            {projectsList.map((project) => (
              <Grid
                item
                key={project.name}
                border={1}
                width={isMobile ? '60%' : '30%'}
                bgcolor='rgba(255, 255, 255, 0.7)'
                borderRadius={3}>
                <Link href={project.link} target='_blank' rel='noopener noreferrer' sx={{textDecoration: 'none'}}>
                  <Box sx={{zIndex: 1}}>
                    <img src={project.image} alt={project.name} width='100%' height='100%' />
                    <Typography
                      borderTop={1}
                      fontSize={isMobile ? '1.5rem' : '2rem'}
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
