import { Button, CircularProgress, InputLabel } from '@mui/material';
import { Box } from '@mui/system';
import useStyles from './useStyles';
import { User } from '../../../interface/User';
import { Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import { Avatar } from '@mui/material';

const Input = styled('input')({
  display: 'none',
});

interface ProfilePhotoProps {
  header: string;
  currentUser?: User; // set to optional but always passed in from settings
  imgPhoto: string;
}

const openFileSelector = () => {
  document.getElementById('photoInput')?.click();
};

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ header, currentUser, imgPhoto }) => {
  const classes = useStyles();

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          fontSize: '20px',
          marginBottom: 6,
        }}
      >
        {header}
      </Typography>

      <Avatar
        id="photo"
        src={imgPhoto}
        sx={{
          width: 150,
          height: 150,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />

      <Typography
        variant="h3"
        sx={{
          fontWeight: 400,
          fontSize: '14px',
          marginTop: '25px',
          color: '#aaaaaa',
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        Be sure to use a photo that <br />
        clearly shows your face
      </Typography>

      <Input id="photoInput" type="file" sx={{ display: 'block', visibility: 'hidden' }} />

      <Button
        sx={{
          fontSize: '14px',
          textTransform: 'none',
          marginBottom: '30px',
          height: 50,
          width: 250,
          border: '1px solid #f14140',
        }}
        onClick={openFileSelector}
      >
        Upload a file from your device
      </Button>

      <Box
        sx={{
          mr: 0,
          height: 50,
        }}
      >
        <Button aria-label="delete">
          <DeleteIcon sx={{ mr: 0, color: 'black' }} />
          <Typography variant="body1" className={classes.textDisplay}>
            Delete photo
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default ProfilePhoto;
