import React from 'react';
import { useStyles } from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import { FormikHelpers } from 'formik';

import { Grid, Box, Typography } from '@mui/material';

import FindSitter from './FindSitter/FindSitter';

export default function Landing(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { where, dropIn, dropOff }: { where: string; dropIn: string; dropOff: string },
    { setSubmitting }: FormikHelpers<{ where: string; dropIn: string; dropOff: string }>,
  ) => {
    return null;
  };
  return (
    <Grid container className={classes.flexLayout}>
      <Grid item xs={12} sm={6} container justifyContent="center">
        <FindSitter handleSubmit={handleSubmit} />
      </Grid>
      <Grid item xs={12} sm={6} container sx={{ height: '80vh' }}>
        <Box className={classes.landingContainer} />
      </Grid>
    </Grid>
  );
}
