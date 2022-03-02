import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  coverImage: {
    position: 'relative',
    backgroundImage: 'url("https://image.shutterstock.com/image-photo/human-dog-girl-her-friend-260nw-1494711500.jpg")',
    backgroundSize: 'cover',
    minHeight: 200,
    '& > *': {
      position: 'absolute',
      top: -235,
      left: 'calc(50% - 55px)',
      border: '5px solid ghostwhite',
    },
    '@media(min-width:600px)': {
      minHeight: 300,
      '& > *': {
        top: 220,
        left: 'calc(50% - 80px)',
      },
    },
  },
}));

export default useStyles;