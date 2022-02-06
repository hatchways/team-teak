import { Grid, Box, Typography, Rating, Divider } from '@mui/material';
import PageContainer from '../../components/PageContainer/PageContainer';
import AvatarDisplay from '../../components/AvatarDisplay/AvatarDisplay';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RequestForm from './RequestFormSubmit/RequestFormSubmit';
import useStyles from './useStyles';
import { useEffect, useState } from 'react';

const testProfileDetail = {
  name: 'fa nki',
  description: 'pet lover',
  location: 'Vancouver, Canada',
  introduction:
    'I grew up with animals my whole life. I have a passion for pets of all sizes and species. I am excited to be able to help you by caring for your pets while you are away. Your babies will be cared for and loved just as if they were my own.',
  hourlyRate: 16,
  rating: 3.7,
};

export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => window.removeEventListener('resize', updateWindowWidth);
  });

  return (
    <PageContainer>
      <Grid
        maxWidth={windowWidth < 800 ? 400 : windowWidth < 1200 ? 600 : 1200}
        m={'auto'}
        justifyContent="space-around"
        container
        alignItems="flex-start"
      >
        <Grid
          mb={windowWidth < 1200 ? 3 : 0}
          xs={12}
          lg={6}
          item
          borderRadius={2}
          boxShadow={windowWidth < 1200 ? 0 : 4}
          container
          flexDirection="column"
        >
          <Box borderRadius={2} className={classes.coverImage}>
            <AvatarDisplay
              width={windowWidth < 600 ? 100 : 150}
              height={windowWidth < 600 ? 100 : 150}
              loggedIn
              user={{ name: 'pet lover', email: 'example@example.com' }}
            />
          </Box>
          <Box m={windowWidth < 600 ? '1rem 0' : '5rem 0 1rem 0'} textAlign="center">
            <Typography fontWeight="bold" component="h1" fontSize="1.4rem">
              {testProfileDetail.name}
            </Typography>
            <Typography fontWeight="bold" color="rgba(0,0,0,0.3)">
              {testProfileDetail.description}
            </Typography>
          </Box>
          <Typography margin="auto" mb={4} display="flex" alignItems="center" color="rgba(0,0,0,0.3)" fontWeight="bold">
            <LocationOnIcon color="primary" /> &nbsp; {testProfileDetail.location}
          </Typography>
          <Box m={windowWidth < 600 ? `${5} ${4}` : 5}>
            <Typography mb={1} fontSize="1.1rem" component="h2" fontWeight="bold">
              About me
            </Typography>
            <Typography>{testProfileDetail.introduction}</Typography>
          </Box>
        </Grid>
        {windowWidth < 1200 ? <Divider sx={{ width: '95%' }} /> : null}
        <Grid
          xs={12}
          lg={4}
          item
          borderRadius={2}
          boxShadow={windowWidth < 1200 ? 'none' : 4}
          container
          flexDirection="column"
        >
          <Typography fontSize="1.1rem" component="p" fontWeight="bold" m="3rem auto 1rem auto">
            ${testProfileDetail.hourlyRate}/hr
          </Typography>
          <Rating sx={{ margin: 'auto' }} value={testProfileDetail.rating} precision={0.5} readOnly />
          <RequestForm />
        </Grid>
      </Grid>
    </PageContainer>
  );
}
