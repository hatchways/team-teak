import React, { useEffect } from 'react';
import { searchProfiles } from '../../helpers/APICalls/searchUsers';
import { SearchProfileApiData } from '../../interface/Profile';

import { Box, Grid, Card, CardMedia, CardContent, Typography, CardHeader } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useStyles } from './useStyles';
import staticData from './constants';

interface Props {
  debouncedLocation: string | null;
  date: Date | null;
}

const ProfileListing = ({ debouncedLocation, date }: Props): JSX.Element => {
  const [profiles, setProfiles] = React.useState<SearchProfileApiData | null>(null);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      if (debouncedLocation && date) {
        const data = await searchProfiles({ location: debouncedLocation, availability: date });
        setProfiles(data);
      }
    })();
  }, [debouncedLocation, date]);

  const renderProfiles = () => {
    return profiles?.users?.map((profile, id) => {
      return (
        <Grid item key={id}>
          <Card
            sx={{
              width: '300px',
              maxHeight: '450px',
              margin: '0 auto',
              boxShadow: [
                '0px 0px 1px -1px rgba(0, 0, 0, 0.048)',
                '0px 0px 3.4px -1px rgba(0, 0, 0, 0.072)',
                '0px 0px 15px -1px rgba(0, 0, 0, 0.12)',
              ],
            }}
          >
            <CardMedia
              src={profile.photo}
              component="img"
              sx={{
                borderRadius: '50%',
                width: '100px',
                height: '100px',
                marginTop: '20px',
                marginBottom: '10px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography sx={{ fontWeight: 800 }} variant="h5">
                {profile.name}
              </Typography>
              <Typography sx={{ fontWeight: 300, fontSize: '12px' }} variant="h6">
                Pet Lover
              </Typography>
              <Grid container justifyContent="center" alignItems="center">
                <Grid
                  item
                  sx={{
                    '.MuiSvgIcon-root': {
                      color: '#dec62f',
                      fontSize: '20px',
                      marginTop: '10px',
                      marginBottom: '10px',
                    },
                  }}
                >
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarBorderIcon />
                </Grid>
              </Grid>
              <Typography sx={{ fontWeight: 500, fontSize: '15px', width: '200px', margin: '0 auto' }} variant="body1">
                {profile.description}
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                paddingLeft: '0',
                paddingRight: '0',
              }}
            >
              <Grid
                container
                alignItems="center"
                display="grid"
                sx={{
                  gridTemplateColumns: '10% 65% 25%',
                  gridTemplateRows: '50px',
                  borderTopStyle: 'solid',
                  borderTopWidth: '1px',
                  borderTopColor: 'rgba(0, 0, 0, 0.1)',
                }}
              >
                <Grid item justifySelf="center">
                  <LocationOnIcon className={classes.icon} />
                </Grid>
                <Grid item>
                  <Typography sx={{ fontWeight: 300, fontSize: '12px' }} variant="body2">
                    {profile.address}
                  </Typography>
                </Grid>
                <Grid item sx={{ justifySelf: 'center' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, fontSize: '16px' }}>
                    $20/hr
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      );
    });
  };
  return (
    <Box>
      {' '}
      {console.log(profiles)}
      <Grid container spacing={7} alignItems="center" justifyContent="center">
        {profiles?.users && renderProfiles()}
      </Grid>
    </Box>
  );
};

export default ProfileListing;
