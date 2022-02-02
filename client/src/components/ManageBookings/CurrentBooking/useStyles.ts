import { makeStyles } from '@mui/styles';
import { theme } from '../../../themes/theme';

const useStyles = makeStyles(() => ({
  cardWrapper: {
    width: '400px',
    height: '150px',
    borderRadius: '5px',
    position: 'relative',
    outline: '0px',
    padding: '5px',
    margin: '0px auto',
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: theme.palette.primary.dark,
    '@media(max-width: 767px)': {
      width: '90%',
      alignItems: 'center',
      margin: '10px auto',
    },
  },
  icon: {
    marginLeft: '350px',
    color: theme.palette.primary.dark,
    fontWeight: 700,
    '@media(max-width: 767px)': {
      marginLeft: '90%',
    },
  },
  date: {
    position: 'relative',
    top: '-20px',
    paddingLeft: '20px',
    color: 'black',
    '@media(max-width: 767px)': {
      paddingLeft: '5px',
      color: 'black',
    },
  },
  title: {
    position: 'relative',
    top: '-20px',
    paddingLeft: '20px',
    color: 'black',
    textTransform: 'uppercase',
    '@media(max-width: 767px)': {
      paddingLeft: '5px',
      color: 'black',
    },
  },
  details: {
    position: 'relative',
    top: '-10px',
    left: '-10px',
    width: '100%',
    height: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: '60px',
    height: '60px',
    padding: '5px',
    paddingLeft: '10px',
    '& img': {
      width: '100%',
      height: '100%',
      display: 'block',
      margin: '0px auto',
      borderRadius: '50%',
    },
  },
  name: {
    paddingTop: '15px',
    textAlign: 'right',
    height: '50px',
  },

  status: {
    color: theme.palette.primary.dark,
    height: '50px',
  },
}));

export default useStyles;
