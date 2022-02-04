import { Box, CircularProgress, Grid, Link, Hidden } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { cloneElement } from 'react';
import { NavLink, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import PageContainer from '../../components/PageContainer/PageContainer';
import SettingHeader from '../../components/SettingsHeader/SettingsHeader';
import SettingsWrapper from '../../components/SettingsWrapper/SettingsWrapper';
import { useAuth } from '../../context/useAuthContext';
import EditProfile from './EditProfile/EditProfile';
import Availability from './Availability/Availability';
import DestopAvailability from '../../components/Availability/DesktopAvailability';
import DesktopAvailability from '../../components/Availability/DesktopAvailability';

const settingsMenu = [
  {
    name: 'Edit profile',
    to: '/profile/settings/edit-profile',
    component: <EditProfile header="Edit Profile" />,
  },
  {
    name: 'Profile photo',
    to: '/profile/settings/profile-photo',
    component: <SettingHeader header="Profile Photo" />,
  },
  {
    name: 'Availability',
    to: '/profile/settings/availability',
    component: <Availability header="Availability" />,
  },
  {
    name: 'Payment methods',
    to: '/profile/settings/payment-methods',
    component: <SettingHeader header="Payment Methods" />,
  },
];

const useStyles = makeStyles({
  activeLink: {
    fontWeight: 700,
    color: '#000',
  },
});

export default function Settings(): JSX.Element {
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
      <Grid sx={{ width: '100%', margin: '0 auto' }} container>
        <Grid xs={12} md={3} item>
          {settingsMenu.map((item) => (
            <Box
              sx={{
                margin: '20px 0',
              }}
              key={item.name}
            >
              <Link
                sx={{
                  fontSize: 20,
                  color: '#555',
                  textDecoration: 'none',
                  transition: 'color 100ms ease-in-out',
                  '&:hover': {
                    color: '#000',
                  },
                }}
                component={NavLink}
                activeClassName={classes.activeLink}
                to={item.to}
              >
                {item.name}
              </Link>
            </Box>
          ))}
        </Grid>
        <Grid xs={12} md={9} item>
          <DesktopAvailability />
        </Grid>
      </Grid>
    </PageContainer>
  );
}
