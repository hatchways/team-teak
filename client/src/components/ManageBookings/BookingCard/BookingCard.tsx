import { Typography, Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import useStyles from './useStyles';
import { createImageFromInitials } from '../../../helpers/makeAnImageFromName';
import { props } from '../../../interface/manageBooking';
import { convertDate } from '../../../helpers/APICalls/convertDateRightFormat';

const BookingCard = ({ name, start, status, photo }: props): JSX.Element => {
  const letterImage = createImageFromInitials(name);

  const firstName = name.split(' ')[0];
  const lastName = name.split(' ')[1];

  let image: any;
  if (!photo.length) image = letterImage;
  else image = photo;

  const classes = useStyles();
  return (
    <Box component="div" className={classes.cardWrapper}>
      <SettingsIcon className={classes.icon} />
      <Typography variant="h6" className={classes.date}>
        {convertDate(start)}
      </Typography>

      <Box className={classes.details}>
        <Typography component="div" className={classes.image}>
          <img src={image} alt="Image" />
        </Typography>
        <Typography className={classes.name} sx={{ fontSize: '18px', fontWeight: 'bold' }}>
          {firstName}
        </Typography>
        <Typography className={classes.name} sx={{ fontSize: '18px', fontWeight: 'bold', paddingLeft: '5px' }}>
          {lastName}
        </Typography>
        <Typography
          component="span"
          className={classes.status}
          sx={{ fontSize: '20px', fontWeight: 'bold', paddingLeft: '20px' }}
        >
          {status}
        </Typography>
      </Box>
    </Box>
  );
};

export default BookingCard;
