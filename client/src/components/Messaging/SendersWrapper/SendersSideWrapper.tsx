import { Typography, Box, Paper } from '@mui/material';
import MessageSenderCard from '../SenderCard/MessageSenderCars';
import { useStyles } from './useStyles';

const SendersSideWrapper = (): JSX.Element => {
  const classes = useStyles();

  const array = Array.from('1234');

  return (
    <Box elevation={3} component={Paper} square className={classes.wrapper}>
      <Box className={classes.header}>
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', margin: 'auto 10px' }}>Inbox Messages</Typography>
      </Box>
      <Box className={classes.chats}>
        {array.map((item, i) => (
          <MessageSenderCard key={i} />
        ))}
      </Box>
    </Box>
  );
};

export default SendersSideWrapper;
