import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  navbar: {
    position: 'relative',
    zIndex: 5,
    boxShadow: '4px 4px 13px 7px rgba(217,217,217,0.26)',
    padding: theme.spacing(2),
    background: 'white',
  },
  transparentNavbar: {
    boxShadow: 'none',
    background: 'none',
  },
  navbarItem: {
    color: theme.palette.grey[900],
    fontWeight: 700,
    textDecoration: 'none',
    transition: 'color 120ms ease-in-out',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  navbarLogo: {
    width: 180,
  },
  navSitterButton: {
    color: theme.palette.primary.light,
    textDecoration: 'underline',
  },
}));
