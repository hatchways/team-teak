import { Box, CircularProgress, Grid, Link, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { cloneElement } from 'react';
import { NavLink, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import PageContainer from '../../../components/PageContainer/PageContainer';
import SettingHeader from '../../../components/SettingsHeader/SettingsHeader';
import SettingsWrapper from '../../../components/SettingsWrapper/SettingsWrapper';
import { useAuth } from '../../../context/useAuthContext';
import EditProfile from './../EditProfile/EditProfile';
import CustomBooking from './CustomBookingForm/CustomBooking';
import ButtonBase from '@mui/material/ButtonBase';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import useStyles from './makeStyles';

const ticketList = [
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/learn-firebase-masalib.appspot.com/o/images%2Fsite%2Fs-DSC00325.jpg?alt=media',
    description: 'Authentication',
    unit_price: '50',
    siteurl: '/screens/index',
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/learn-firebase-masalib.appspot.com/o/images%2Fsite%2Fs-DSC00375.jpg?alt=media',
    description: 'Cloud FireStore',
    unit_price: '20',
    siteurl: '/chat/index',
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/learn-firebase-masalib.appspot.com/o/images%2Fsite%2Fs-DSC00537.jpg?alt=media',
    description: 'Realtime Datebase',
    unit_price: '100',
    siteurl: '/screens/index3',
  },
  {
    url: 'https://firebasestorage.googleapis.com/v0/b/learn-firebase-masalib.appspot.com/o/images%2Fsite%2Fs-DSC00389.jpg?alt=media',
    description: 'Hosting',
    unit_price: '65',
    siteurl: '/screens/index4',
  },
];

export default function CustomBookingList(): JSX.Element {
  const { loggedInUser, profile } = useAuth();
  const history = useHistory();
  const classes = useStyles();

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser || !profile) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <PageContainer>
      <Grid sx={{ width: '75%', margin: '0 auto' }} container>
        <Grid xs={3} item>
          <Box
            sx={{
              width: '95%',
              height: '100%',
              padding: '20px',
              backgroundColor: '#fff',
            }}
          >
            <Grid item>
              <ButtonGroup variant="outlined" aria-label="outlined button group" size="large">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </Grid>

            <Box sx={{ mt: '2rem' }} />

            <Divider />

            <Box sx={{ mt: '2rem' }} />

            {ticketList.map((item) => (
              <Box
                sx={{
                  margin: '5px 0',
                  border: 'solid black 1px',
                  backgroundColor: '#A9A9A9',
                  height: '100px',
                }}
                key={item.url}
              >
                <Link
                  sx={{
                    fontSize: 20,
                    color: '#fff',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#000',
                    },
                  }}
                  component={NavLink}
                  activeClassName={classes.activeLink}
                  to={item.url}
                >
                  {item.description}
                  {item.unit_price}
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid xs={9} item>
          <CustomBooking header="Customer Booking" />
          {/* <Switch>
            <Route exact path="/profile/settings">
              <Redirect to="/profile/custom/booking" />
            </Route>
            <SettingsWrapper>
              {optionList.map((item) => (
                <Route
                  key={item.name}
                  path={item.to}
                  render={(props) =>
                    cloneElement(item.component, {
                      ...props,
                      currentUser: loggedInUser,
                      currentProfile: profile,
                    })
                  }
                />
              ))}
            </SettingsWrapper>
            <Route path="*">
              <Redirect to="/not-found" />
            </Route>
          </Switch> */}
        </Grid>
      </Grid>
    </PageContainer>
  );
}
