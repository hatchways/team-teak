import './App.css';
import './index.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProfilePhoto from './pages/Settings/ProfilePhoto/ProfilePhoto';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import { Navbar } from './components/Navbar/Navbar';
import { getAllRoutes } from './pages/routes/route';
import NotFound from './pages/NotFound/NotFound';
import ProfileListing from './pages/ProfileListing/ProfileListing';

function App(): JSX.Element {
  const routes = getAllRoutes();
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
