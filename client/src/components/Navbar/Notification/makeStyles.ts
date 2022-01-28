import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NotificationInterface from '../../../interface/Notification';

export const useStyles = makeStyles<Theme, NotificationInterface>((theme) => ({
  root: {
    backgroundColor: ({ isRead }) => (isRead ? '#696880' : '#D21404'),
    fontWeight: 700,
    textDecoration: 'none',
  },
}));
