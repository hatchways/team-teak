import './App.css';
import './index.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';
import { AuthProvider, useAuth } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import { Navbar } from './components/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import { getRoutesAccordingToAccountType } from './pages/routes/route';
import NotFound from './pages/NotFound/NotFound';

function App(): JSX.Element {
  const { profile } = useAuth();
  let accountType;

  if (profile) accountType = profile.accountType;

  const routes = getRoutesAccordingToAccountType(accountType);
  return (
    <ThemeProvider theme={theme}>
      <SnackBarProvider>
        <AuthProvider>
          <SocketProvider>
            <CssBaseline />
            <Navbar />
            <Switch>
              {routes.map((item, i) => (
                <Route key={i} path={item.resource} component={item.component} />
              ))}
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </SocketProvider>
        </AuthProvider>
      </SnackBarProvider>
    </ThemeProvider>
  );
}

export default App;
