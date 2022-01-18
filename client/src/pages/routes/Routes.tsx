import Box from '@mui/material/Box';
import { Route, Switch } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';
import BookingsPage from '../BookingPage/BookingPage';
import Login from '../Login/Login';
import Settings from '../Settings/Settings';
import NotFound from '../NotFound/NotFound';
import Signup from '../SignUp/SignUp';
import Dashboard from '../Dashboard/Dashboard';

const RoutesComponent = (): JSX.Element => {
  const { loggedInUser: user } = useAuth();

  return (
    <Box>
      {!user ? (
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      ) : (
        <>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/profile/settings" component={Settings} />
            <Route exact path="/bookings" component={BookingsPage} />
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </>
      )}
    </Box>
  );
};

export default RoutesComponent;
