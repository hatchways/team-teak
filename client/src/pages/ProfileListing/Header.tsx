import React, { Fragment, FC } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Grid } from '@material-ui/core';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
  },
  root2: {
    backgroundColor: 'green',
    margin: 'auto',
  },
});

const Header: FC = () => {
  const classes = useStyles();

  return (
    <>
      {/* <Stack spacing={4}> */}
      <Grid container spacing={3} direction="row" alignItems="center" justify="center" marginTop="20px">
        <Grid item className={classes.root}>
          <Typography variant="h3" style={{ marginTop: '50px' }}>
            {' '}
            your search results
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} direction="row" alignItems="center" justify="center">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TextField
            id="outlined-basic"
            label={
              <Fragment>
                {' '}
                <LocationOnIcon />
                Toronto,Ontario
              </Fragment>
            }
            variant="outlined"
          />

          <TextField
            id="date"
            type="date"
            defaultValue="2019-06-27"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            // style={{ marginBottom: '30px' }}
          />
        </LocalizationProvider>
      </Grid>
      <Grid container spacing={1} direction="row" style={{ minHeight: '5vh' }}></Grid>
      {/* </Stack> */}
    </>
  );
};

export default Header;
