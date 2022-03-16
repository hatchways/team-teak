import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BookingWrapper from '../../components/ManageBookings/BookingWrapper/BookingWrapper';
import CurrentBookingCard from '../../components/ManageBookings/CurrentBooking/CurrentBookingCard';
import BookingCalendarWrapper from '../../components/ManageBookings/BookingCalenderWrapper/BookingCalenderWrapper';
import useStyles from './useStyles';
import { useState, useEffect } from 'react';
import { fetchAllRequest } from '../../helpers/APICalls/requests';
import { Request } from '../../interface/manageBooking';

const obj: Request = {
  _id: 'djfkdjf',
  start: '02/28/2022',
  status: 'Not Available',
  user: {
    photo: '',
    name: 'No Bookings',
  },
};

interface RequestObj {
  accepted: Request[];
  pending: Request[];
  cancelled: Request[];
}

const request: RequestObj = {
  accepted: [],
  pending: [],
  cancelled: [],
};

const BookingsPage = (): JSX.Element => {
  const [requests, setRequests] = useState(request);

  const classes = useStyles();

  useEffect(() => {
    const getAllAccepted = async () => {
      const result = await fetchAllRequest();
      setRequests(result.requests);
    };

    getAllAccepted();
  }, []);

  const accepted: Request[] = requests.accepted;
  const nextBookings: Request[] = requests.pending;
  const cancelled: Request[] = requests.cancelled;

  const nextBooking: Request = nextBookings.shift() || obj;

  return (
    <Grid container className={classes.wrapper}>
      <Grid xs={12} md={5} lg={5} item>
        <Box className={classes.boxMargin}>
          <CurrentBookingCard
            start={nextBooking.start}
            name={nextBooking.user.name}
            photo={nextBooking.user.photo}
            _id={nextBooking._id}
            status={''}
          />
          <br />
          <BookingWrapper requests={accepted} cancelled={cancelled} />
        </Box>
      </Grid>
      <Grid xs={10} md={5} lg={5} item>
        <Box className={classes.boxMargin}>
          <BookingCalendarWrapper nextBooking={nextBooking} bookingsArray={accepted} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default BookingsPage;
