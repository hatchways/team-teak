import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import heroImg from '../../images/landing/landing_page.webp';

export const useStyles = makeStyles((theme: Theme) => ({
  landingContainer: {
    width: '100vw',
    position: 'relative',
    backgroundImage: `url(${heroImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    justifyContent: 'center',
    alignContent: 'center',
    [theme.breakpoints.up('xs')]: {
      height: '33vh',
      backgroundPosition: '15% 0%',
    },
    [theme.breakpoints.up('sm')]: {
      height: '100vh',
      backgroundPosition: '50% 50%',
      top: '-88px',
    },
  },
  flexLayout: {
    [theme.breakpoints.down('xs')]: {
      direction: 'column-reverse',
    },
  },
}));
