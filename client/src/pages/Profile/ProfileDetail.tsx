import React, { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IconButton, CardMedia } from '@material-ui/core';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import { ProfileInterface } from './interface';

const mockProfile = {
  maintitle: 'Norma byers',
  price: '$14/hr',
  title: 'Loving pet sitter',
  description: 'Dog sitting,cat sitting,pocket pet and bird core',
  avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Keurig_Logo.png',
  imageUrl:
    'https://media.istockphoto.com/photos/studio-portrait-of-smiling-young-woman-holding-affectionate-pet-picture-id1170668075?k=20&m=1170668075&s=612x612&w=0&h=9BDN9UNU8D2o-dpLh_-Ow4SyCQy8L3B3eiz-F6JNpdo=',
  country: 'Toronto,Ontario',
  aboutme:
    'grew up with animals my whole life. I have a passion for pets of all sizes and species. I am excited to be able to help you by caring for your dog',
};

const ProfileDetails: FC<ProfileInterface> = () => {
  //   const { avatarUrl, title, description, imageUrl, maintitle, price, country } = props;
  return (
    <>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {' '}
          <CardMedia style={{ height: '40%', width: '100%' }} image={mockProfile.imageUrl} />
        </div>
        <CardContent style={{ alignItems: 'center', justify: 'center' }}>
          <div style={{ direction: 'column', marginLeft: '25%', justifyContent: 'center' }}>
            <Typography variant="body2" component="p">
              {mockProfile.maintitle}
            </Typography>
            <Typography variant={'caption'} component="p">
              {mockProfile.title}
            </Typography>
            <IconButton aria-label="settings">{/* <Rating name="size-medium" defaultValue={2} /> */}</IconButton>
            <Rating name="simple-controlled" value={4} />

            <Typography variant="body2" component="p">
              {mockProfile.description}
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <LocationOnIcon />
          <Typography variant="body2" component="p">
            {mockProfile.country}
          </Typography>
          <Typography variant="body2" component="p">
            {mockProfile.price}
          </Typography>{' '}
        </CardActions>
        <Typography variant="body2" component="p">
          {mockProfile.aboutme}
        </Typography>{' '}
      </Card>
    </>
  );
};

export default ProfileDetails;
