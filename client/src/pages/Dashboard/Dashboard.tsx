import React, { useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { CircularProgress, Grid, Typography } from '@mui/material';
import PageContainer from '../../components/PageContainer/PageContainer';
import ProfileListing from '../../components/ProfileListing/ProfileListing';
import Search from '../../components/ProfileListing/Search';

export default function Dashboard(): JSX.Element {
  const [date, setDate] = React.useState<Date | null>(null);
  const [location, setLocation] = React.useState<string | null>(null);
  const [debouncedLocation] = useDebounce(location, 2000);

  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();
  const history = useHistory();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <PageContainer>
      <Grid container>
        <Grid xs={12} item>
          <Typography sx={{ textAlign: 'center' }} variant="h4">
            Search Profiles
          </Typography>
          <Search setLocation={setLocation} setDate={setDate} location={location} date={date} />
          <ProfileListing debouncedLocation={debouncedLocation} date={date} />
        </Grid>
      </Grid>
    </PageContainer>
  );
}
