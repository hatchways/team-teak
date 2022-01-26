import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  navbar: {
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
  navbarItemLand: {
    fontWeight: 700,
    testDecoration: 'none',
    color: 'white !important',
    transition: 'color 120mx ease-in-out',
    '& .MuiBotton-root': {
      color: 'white',
    },
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  unreadNotification: {
    backgroundColor: 'green',
    fontWeight: 700,
    textDecoration: 'none',
  },
  readNotification: {
    backgroundColor: theme.palette.grey[200],
    fontWeight: 600,
    textDecoration: 'none',
  },
  badge: {
    '& .MuiBadge-standard': {
      backgroundColor: theme.palette.grey[300],
      left: '1px',
      top: '-10px',
    },
  },
  navbarLogo: {
    width: 180,
  },
}));
