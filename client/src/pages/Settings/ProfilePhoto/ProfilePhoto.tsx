import { LocalizationProvider, DesktopDatePicker } from '@mui/lab';
import { Button, CircularProgress, InputLabel } from '@mui/material';
import { Box } from '@mui/system';
import { Formik, FormikHelpers } from 'formik';
import FormInput from '../../../components/FormInput/FormInput';
import useStyles from './useStyles';
import SettingHeader from '../../../components/SettingsHeader/SettingsHeader';
import { User } from '../../../interface/User';
import { Typography } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import sampleProfileImage from '../../../images/landing/sampleProfilePhoto.jpeg';
const Input = styled('input')({
  display: 'none',
});

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { makeStyles } from '@mui/styles';
import editProfile from '../../../helpers/APICalls/editProfile';
import { useSnackBar } from '../../../context/useSnackbarContext';

interface ProfilePhotoProps {
  header: string;
  currentUser?: User; // set to optional but always passed in from settings
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ header, currentUser }) => {
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();

  return (
    <>
      <SettingHeader header={header} />
      <Box textAlign="center">
        <Box className={classes.photoDisplay}>
          <img className={classes.photoGeneral} src={sampleProfileImage} alt="Profile Photo" />
        </Box>
        <Typography variant="body1" className={classes.textDisplay}>
          Be sure to use a photo that <br /> clearly shows your face
        </Typography>
        <Box className={classes.input}>
          <FormLabel htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="outlined" component="span" sx={{ textTransform: 'none', fontSize: 16, py: 2, px: 5 }}>
              Upload a file from your device
            </Button>
          </FormLabel>
        </Box>
        <Button aria-label="delete">
          <DeleteIcon sx={{ mr: 1, color: 'black' }} />
          <Typography variant="body1" className={classes.textDisplay}>
            Delete photo
          </Typography>
        </Button>
      </Box>
    </>
  );
};

export default ProfilePhoto;
