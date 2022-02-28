import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BookingWrapper from '../../components/ManageBookings/BookingWrapper/BookingWrapper';
import CurrentBookingCard from '../../components/ManageBookings/CurrentBooking/CurrentBookingCard';
import BookingCalendar from '../../components/ManageBookings/BookingCalendar/BookingCalendar';
import BookingCalendarWrapper from '../../components/ManageBookings/BookingCalenderWrapper/BookingCalenderWrapper';
import useStyles from './useStyles';
const BookingsPage = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container className={classes.wrapper}>
      <Grid xs={12} md={5} lg={5} item>
        <Box className={classes.boxMargin}>
          <CurrentBookingCard />
          <br />
          <BookingWrapper />
        </Box>
      </Grid>
      <Grid xs={10} md={5} lg={5} item>
        <Box className={classes.boxMargin}>
          <BookingCalendarWrapper />
        </Box>
      </Grid>
    </Grid>
  );
};

export default BookingsPage;
