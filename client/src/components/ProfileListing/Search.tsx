import React, { Dispatch, SetStateAction, useEffect } from 'react';

import { Box, Grid, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CloseIcon from '@mui/icons-material/Close';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { useStyles } from './useStyles';

interface Props {
  setLocation: Dispatch<SetStateAction<string | null>>;
  location: string | null;
  setDate: Dispatch<SetStateAction<Date | null>>;
  date: Date | null;
}

const Search = ({ location, date, setLocation, setDate }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box>
      <Grid container justifyContent="center" className={classes.searchContainer}>
        <Grid item>
          <TextField
            id="search sitters"
            name="Search for Sitters"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            variant="outlined"
            type="search"
            placeholder="Toronto, Ontario"
            sx={{
              width: '300px',
              '.MuiOutlinedInput-root fieldset': {
                borderTopRightRadius: '0px',
                borderBottomRightRadius: '0px',
                borderWidth: '2px',
                borderColor: 'rgba(0, 0, 0, 0.1)',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className={classes.icon} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              inputFormat="d MMMM yyyy"
              onChange={(date) => {
                setDate(date);
              }}
              value={date}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Select a date"
                  sx={{
                    '.MuiOutlinedInput-root fieldset': {
                      borderTopLeftRadius: '0px',
                      borderBottomLeftRadius: '0px',
                      borderWidth: '2px',
                      borderColor: 'rgba(0, 0, 0, 0.1)',
                    },
                  }}
                />
              )}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DateRangeIcon className={classes.calendarIcon} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <CloseIcon className={classes.closeIcon} onClick={() => setDate(null)} />
                  </InputAdornment>
                ),
              }}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
