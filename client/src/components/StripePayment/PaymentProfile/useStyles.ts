import { makeStyles } from '@mui/styles';
import { theme } from '../../../themes/theme';

const useStyles = makeStyles(() => ({
  cardWrapper: {
    width: '300px',
    height: '200px',
    borderRadius: '5px',
    position: 'relative',
    outline: '0px',
    padding: '5px',
    margin: '5px',
    backgroundColor: 'rgb(255, 255, 255)',
    borderWidth: '1px 1px',
    borderStyle: 'solid',
    borderColor: theme.palette.primary.dark,
  },
  icon: {
    paddingLeft: '250px',
    color: theme.palette.primary.dark,
    fontWeight: 700,
    '@media(max-width: 767px)': {
      marginLeft: '90%',
    },
  },
  image: {
    position: 'relative',
    top: '-30px',
    width: '80px',
    height: '60px',
    padding: '5px',
    paddingLeft: '10px',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },
  cardNumber: {
    position: 'relative',
    top: '-20px',
  },

  expirely: {
    fontSize: '15px',
    color: '#909090',
    fontWeight: 'bold',
    paddingBottom: '15px',
    paddingLeft: '20px',
  },
}));

export default useStyles;
