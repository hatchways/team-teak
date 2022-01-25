import React, { FC } from 'react';
import ProfileList from './ProfileList';
import { Grid } from '@material-ui/core';
import ProfileLists from './constants';

const Content: FC = () => {
  const getProfileList = (Profile) => {
    return (
      <Grid item xs={12} sm={4}>
        <ProfileList {...Profile} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={4} alignItems="center" justifyContent="center">
      {ProfileLists.map((profile) => getProfileList(profile))}
    </Grid>
  );
};

export default Content;
