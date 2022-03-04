import { Typography, Box } from '@mui/material';
import { useStyles } from './useStyles';

const MessageSenderCard = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.cardContainer}>
      <Box className={classes.image}>
        <img src="https://cdn.pixabay.com/photo/2021/09/12/18/07/robin-6619184_960_720.jpg" alt="Image" />
        <Typography className={classes.online}></Typography>
      </Box>
      <Box className={classes.content}>
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>Marry Wills</Typography>
        <Typography className="message" sx={{ fontSize: '13px' }}>
          This the last message...
        </Typography>
      </Box>
      <Box className={classes.sentTime}>
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>10:30 AM</Typography>
      </Box>
    </Box>
  );
};

export default MessageSenderCard;
