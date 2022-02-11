import React from 'react';
import { Box, Typography } from '@mui/material';
import CurrentBookingCard from '../CurrentBooking/CurrentBookingCard';
import BookingCard from '../BookingCard/BookingCard';
import useStyles from './useStyles';

const BookingWrapper = (): JSX.Element => {
  const classes = useStyles();

  const array = Array.from(Array(3).keys());

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.contentWrapper}>
        <Typography className={classes.sectionHeader}>current Bookings</Typography>
        {array.map((item, i) => (
          <BookingCard key={i} />
        ))}
        <Typography className={classes.sectionHeader}>past Bookings</Typography>
        {array.map((item, i) => (
          <BookingCard key={i} />
        ))}
      </Box>
    </Box>
  );
};

export default BookingWrapper;
