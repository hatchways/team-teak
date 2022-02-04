import Box from '@mui/material/Box';
import { isSameDay } from 'date-fns';
import Calendar from 'react-calendar';
import useStyles from './useStyles';

export interface Booking {
  startTime: Date;
  endTime: Date;
  status: string;
}

interface Props {
  firstBooking?: Booking;
  upcomingBookings?: Booking[];
}

function BookingCalendar({ firstBooking, upcomingBookings }: Props): JSX.Element {
  const classes = useStyles();

  function tileClassName({ date, view }: { date: Date; view: string }) {
    if (view === 'month') {
      // Check if the date matches either the first booking or any of the upcoming bookings (not declined), then return the class we want
      if (firstBooking) {
        if (isSameDay(date, firstBooking.startTime)) {
          return classes.activeTile;
        }
        if (upcomingBookings) {
          for (const booking of upcomingBookings) {
            if (isSameDay(booking.startTime, date) && booking.status != 'declined') {
              return classes.activeTile;
            }
          }
        }
      }
    }
    return 'yes';
  }

  return (
    <Box>
      <Calendar className={classes.calendar} tileClassName={tileClassName} />
    </Box>
  );
}
export default BookingCalendar;
