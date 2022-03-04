import { Box, Typography } from '@mui/material';
import { useStyles } from './useStyles';

interface props {
  sender: string;
  message: string;
}
const ChatMessage = ({ sender, message }: props): JSX.Element => {
  const classes = useStyles();
  const messageClass = sender === 'me' ? classes.sent : classes.received;

  const textStyle = messageClass.split('-')[1] === 'sent' ? classes.textSent : classes.textRecieved;

  return (
    <>
      <Box className={`message ${messageClass}`}>
        <img src="https://cdn.pixabay.com/photo/2021/09/12/18/07/robin-6619184_960_720.jpg" />
        <Typography className={textStyle} sx={{ fontSize: '15px', fontWeight: 'bold' }}>
          {message}
        </Typography>
      </Box>
    </>
  );
};

export default ChatMessage;
