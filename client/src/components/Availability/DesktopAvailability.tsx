import { Box, CircularProgress, Grid, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { cloneElement } from 'react';
import { NavLink, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import PageContainer from '../../components/PageContainer/PageContainer';
import SettingHeader from '../../components/SettingsHeader/SettingsHeader';
import SettingsWrapper from '../../components/SettingsWrapper/SettingsWrapper';
import { useAuth } from '../../context/useAuthContext';
import EditProfile from '../../pages/Settings/EditProfile/EditProfile';
import Availability from '../../pages/Settings/Availability/Availability';

const useStyles = makeStyles({
  activeLink: {
    fontWeight: 700,
    color: '#000',
  },
});

const DesktopAvailability = (): JSX.Element => {
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

  const { loggedInUser, profile } = useAuth();
  const history = useHistory();
  const classes = useStyles();

  return (
    <Switch>
      <Route exact path="/profile/settings">
        <Redirect to="/profile/settings/edit-profile" />
      </Route>
      <SettingsWrapper>
        {settingsMenu.map((item) => (
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
    </Switch>
  );
};

export default DesktopAvailability;
