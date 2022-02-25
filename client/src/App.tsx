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
import RenderRoutes from './pages/routes/routes';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SnackBarProvider>
        <AuthProvider>
          <SocketProvider>
            <CssBaseline />
            <Navbar />
            <RenderRoutes />
          </SocketProvider>
        </AuthProvider>
      </SnackBarProvider>
    </ThemeProvider>
  );
}

export default App;
