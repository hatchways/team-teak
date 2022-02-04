import React from 'react';
import { Box, Grid, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CloseIcon from '@mui/icons-material/Close';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useStyles } from './useStyles';

const Search = (): JSX.Element => {
  const [value, setValue] = React.useState<Date | null>(null);
  const classes = useStyles();
  return (
    <Box>
      <Grid container justifyContent="center" className={classes.searchContainer}>
        <Grid item>
          <TextField
            id="search sitters"
            name="Search for Sitters"
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
              value={value}
              inputFormat="d MMMM yyyy"
              onChange={(newValue) => {
                setValue(newValue);
              }}
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
                    <CloseIcon className={classes.closeIcon} onClick={() => setValue(null)} />
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
