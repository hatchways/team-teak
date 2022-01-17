import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BookingWrapper from '../../components/ManageBookings/BookingWrapper/BookingWrapper';
import CurrentBookingCard from '../../components/ManageBookings/CurrentBooking/CurrentBookingCard';
import BookingCalendar from '../../components/ManageBookings/BookingCalendar/BookingCalendar';
import BookingCalendarWrapper from '../../components/ManageBookings/BookingCalenderWrapper/BookingCalenderWrapper';

const BookingsPage = (): JSX.Element => {
  return (
    <Grid container>
      <Grid xs={12} md={7} lg={7} item>
        <Box component="div" style={{ margin: '30px auto' }}>
          <CurrentBookingCard />
          <br />
          <BookingWrapper />
        </Box>
      </Grid>
      <Grid xs={12} md={5} lg={5} item>
        <Box style={{ margin: '30px auto' }}>
          <BookingCalendarWrapper />
        </Box>
      </Grid>
    </Grid>
  );
};

export default BookingsPage;
