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
    if (debouncedLocation === 'DEMO') {
      return staticData.map((sitter, id) => {
        return (
          <SitterCard
            key={id}
            photo={sitter.imageUrl}
            name={sitter.maintitle}
            subTitle={sitter.title}
            description={sitter.description}
            address={sitter.country}
            rate={sitter.price}
          />
        );
      });
    }
    if (profiles?.users?.length === 0) {
      return <NotFound message={'No sitters available'} />;
    }
    return profiles?.users?.map((profile, id) => {
      const { photo, name, description, address } = profile;
      return (
        <SitterCard
          key={id}
          photo={photo}
          name={name}
          subTitle={'Pet Lover'}
          description={description}
          address={address}
          rate={'20/hr'}
        />
      );
    });
  };
  return (
    <Box>
      <Grid container spacing={7} alignItems="center" justifyContent="center">
        {profiles?.users && renderProfiles()}
      </Grid>
    </Box>
  );
};

export default ProfileListing;
