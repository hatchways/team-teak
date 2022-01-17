import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header';
import Content from './Content';
import Button from '@material-ui/core/Button';

const ProfileListing = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
        {/* <h1>profile header</h1> */}
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
          <Grid container spacing={3} direction="row" alignItems="center" justify="center" marginTop="20px">
            <Button variant="outlined">show more</Button>
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default ProfileListing;
