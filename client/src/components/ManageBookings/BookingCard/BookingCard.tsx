import { Typography, Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import useStyles from './useStyles';

const BookingCard = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.cardWrapper}>
      <SettingsIcon className={classes.icon} />
      <Typography variant="h6" className={classes.date}>
        8 April 2020, 7-9 PM
      </Typography>

      <Box className={classes.details}>
        <Typography component="div" className={classes.image}>
          <img src="https://cdn.pixabay.com/photo/2021/09/12/18/07/robin-6619184_960_720.jpg" alt="Image" />
        </Typography>
        <Typography className={classes.name} sx={{ fontSize: '18px', fontWeight: 'bold' }}>
          Muhamad
        </Typography>
        <Typography className={classes.name} sx={{ fontSize: '18px', fontWeight: 'bold', paddingLeft: '5px' }}>
          Rashid
        </Typography>
        <Typography
          component="span"
          className={classes.status}
          sx={{ fontSize: '20px', fontWeight: 'bold', paddingLeft: '20px' }}
        >
          Status
        </Typography>
      </Box>
    </Box>
  );
};

export default BookingCard;
