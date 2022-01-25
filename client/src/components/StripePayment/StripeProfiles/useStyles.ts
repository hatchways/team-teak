import { makeStyles } from '@mui/styles';
import { theme } from '../../../themes/theme';

const useStyles = makeStyles(() => ({
  wrapper: {
    width: '100%',
    paddingBottom: '30px',
    display: 'flex',
  },
  heading: {
    color: '#909090',
    fontSize: '15px',
    padding: '10px',
  },
}));

export default useStyles;
