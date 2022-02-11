import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { updateRequest } from '../../../helpers/APICalls/requests';
import useStyles from './useStyles';
interface props {
  id: string;
}

const ChangeRequstStatus = ({ id }: props): JSX.Element => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const classes = useStyles();

  const updateRequestToCancel = async () => {
    setIsSubmitting(true);

    const result = await updateRequest(id, 'cancelled');

    window.location.href = '/my-jobs';
  };

  const updateRequestToAccepted = async () => {
    setIsSubmitting(true);

    await updateRequest(id, 'accepted');

    window.location.href = '/my-jobs';
  };

  return (
    <Box elevation={3} component={Paper} square className={classes.statusUpdate}>
      <Box>
        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => {
            updateRequestToAccepted();
          }}
        >
          Accept
        </Button>
      </Box>

      <Box>
        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => {
            updateRequestToCancel();
          }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default ChangeRequstStatus;
