import React, { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import BookingCalendar, { Booking } from '../BookingCalendar/BookingCalendar';
import { Request } from '../../../interface/manageBooking';

// return a filtered array AND remove filtered values from the original

interface calendar {
  nextBooking: Request;
  bookingsArray: Request[];
}

function BookingCalendarWrapper({ nextBooking, bookingsArray }: calendar): JSX.Element {
  function getPastBookings() {
    bookingsArray = bookingsArray.filter((value, index, arr) => {
      if (new Date(value.start) < new Date(Date.now())) {
        arr.splice(index, 1);
        return true;
      }
    });
    return bookingsArray;
  }

  function sortBookingDates() {
    return bookingsArray.sort((booking1, booking2) => {
      if (booking1.start < booking2.start) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  const pastBookings = getPastBookings();

  const sortedBookings = sortBookingDates();

  return (
    <Box>
      <BookingCalendar firstBooking={nextBooking} upcomingBookings={sortedBookings} />
    </Box>
  );
}

export default BookingCalendarWrapper;
