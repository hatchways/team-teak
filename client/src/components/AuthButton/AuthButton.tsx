import { Box, Button, CircularProgress } from '@mui/material';
import { loginWithDemo } from '../../helpers/APICalls/login';
import useStyles from '../../pages/Login/LoginForm/useStyles';

interface Props {
  isSubmitting?: boolean;
  displayText: string;
  type?: any;
  demo: boolean;
}
const AuthButton = ({ isSubmitting, displayText, type = 'button', demo, ...otherProps }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box>
      <Button
        size="large"
        variant="contained"
        color="primary"
        className={classes.submit}
        disableElevation
        sx={{ marginRight: '10px', marginLeft: '10px' }}
        type={type}
        onClick={() => {
          demo ? loginWithDemo() : '';
        }}
        {...otherProps}
      >
        {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : displayText}
      </Button>
    </Box>
  );
};

export default AuthButton;
