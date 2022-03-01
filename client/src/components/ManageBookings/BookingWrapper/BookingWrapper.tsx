import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import CurrentBookingCard from '../CurrentBooking/CurrentBookingCard';
import BookingCard from '../BookingCard/BookingCard';
import useStyles from './useStyles';

const BookingWrapper = (): JSX.Element => {
  const classes = useStyles();

  const array = Array.from(Array(3).keys());

  return (
    <Grid xs={12} sm={3} item>
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
    </Grid>
  );
};

export default BookingWrapper;
