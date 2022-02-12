import React, { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import BookingCalendar, { Booking } from '../BookingCalendar/BookingCalendar';

const mockBookings: Booking[] = [
  {
    startTime: new Date(Date.parse('2022-01-25T12:00:00.000Z')),
    endTime: new Date(Date.parse('2022-01-25T14:00:00.000Z')),
    status: 'accepted',
  },
  {
    startTime: new Date(Date.parse('2022-01-28T15:00:00.000Z')),
    endTime: new Date(Date.parse('2022-01-28T18:00:00.000Z')),
    status: 'accepted',
  },
  {
    startTime: new Date(Date.parse('2022-02-11T08:00:00.000Z')),
    endTime: new Date(Date.parse('2022-02-11T10:00:00.000Z')),
    status: 'declined',
  },
  {
    startTime: new Date(Date.parse('2022-01-12T14:00:00.000Z')),
    endTime: new Date(Date.parse('2022-01-12T16:00:00.000Z')),
    status: 'accepted',
  },
];

// return a filtered array AND remove filtered values from the original
function getPastBookings(bookingsArray: Booking[]) {
  bookingsArray = bookingsArray.filter((value, index, arr) => {
    if (value.startTime < new Date(Date.now())) {
      arr.splice(index, 1);
      return true;
    }
  });
  return bookingsArray;
}

function sortBookingDates(bookingsArray: Booking[]) {
  return bookingsArray.sort((booking1, booking2) => {
    if (booking1.startTime < booking2.startTime) {
      return -1;
    } else {
      return 0;
    }
  });
}

const pastBookings = getPastBookings(mockBookings);

const nextBooking: Booking = mockBookings.shift()!;

const sortedBookings = sortBookingDates(mockBookings);

function BookingCalendarWrapper(): JSX.Element {
  return (
    <Box>
      <BookingCalendar firstBooking={nextBooking} upcomingBookings={sortedBookings} />
    </Box>
  );
}

export default BookingCalendarWrapper;
