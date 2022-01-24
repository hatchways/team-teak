import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IconButton, CardMedia } from '@material-ui/core';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import { ProfileInterface } from './interface';

const mockProfile = {};

const ProfileDetails: FC<profileInterface> = () => {
  const { avatarUrl, title, description, imageUrl, maintitle, price, country } = props;
  return (
    <>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {' '}
          <CardMedia
            style={{ height: '100px', width: '110px', borderRadius: '50px', alignItems: 'center', justify: 'center' }}
            image={imageUrl}
          />
        </div>
        <CardContent style={{ alignItems: 'center', justify: 'center' }}>
          <div style={{ direction: 'column', marginLeft: '25%', justifyContent: 'center' }}>
            <Typography variant="body2" component="p">
              {maintitle}
            </Typography>
            <Typography variant={'caption'} component="p">
              {title}
            </Typography>
            <IconButton aria-label="settings">{/* <Rating name="size-medium" defaultValue={2} /> */}</IconButton>
            <Rating name="simple-controlled" value={4} />

            <Typography variant="body2" component="p">
              {description}
            </Typography>
          </div>
        </CardContent>

        <CardActions>
          <LocationOnIcon />
          <Typography variant="body2" component="p">
            {country}
          </Typography>
          <Typography variant="body2" component="p">
            {price}
          </Typography>{' '}
        </CardActions>
      </Card>
    </>
  );
};

export default ProfileDetail;
