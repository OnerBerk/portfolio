import {useEffect} from 'react';
import {Box, Link} from '@mui/material';

const CvPage = () => {
  useEffect(() => {
    window.location.replace('/me.pdf');
  }, []);

  return (
    <Box
      minHeight='100vh'
      display='grid'
      sx={{placeItems: 'center', backgroundColor: '#fff', p: 3}}>
      <Link href='/me.pdf' underline='always' sx={{color: '#111', fontSize: '1rem'}}>
        Ouvrir mon CV (PDF)
      </Link>
    </Box>
  );
};

export default CvPage;
