import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, CardHeader } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useStyles } from './useStyles';
import staticData from './constants';

const ProfileListing = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container rowSpacing={5} alignItems="center">
        {staticData.map((sitter, id) => {
          return (
            <Grid item key={id} lg={4}>
              <Card
                sx={{
                  width: '450px',
                  margin: '0 auto',
                }}
              >
                <CardMedia
                  src={sitter.imageUrl}
                  component="img"
                  sx={{
                    borderRadius: '50%',
                    width: '150px',
                    height: '150px',
                    margin: '20px auto',
                  }}
                />
                <CardContent className={classes.content}>
                  <Typography variant="h4">{sitter.maintitle}</Typography>
                  <Typography variant="subtitle1">{sitter.title}</Typography>
                  <Typography variant="body1">{sitter.description}</Typography>
                </CardContent>
                <CardContent>
                  <Grid
                    container
                    alignItems="center"
                    display="grid"
                    sx={{
                      gridTemplateColumns: '5% 70% 25%',
                      gridTemplateRows: '50px',
                    }}
                  >
                    <Grid item>
                      <LocationOnIcon />
                    </Grid>
                    <Grid item>
                      <Typography variant="body2">{sitter.country}</Typography>
                    </Grid>
                    <Grid item sx={{ justifySelf: 'end' }}>
                      <Typography variant="subtitle2">{sitter.price}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProfileListing;
