import { Typography } from '@mui/material';
import { useAuth } from '../../../context/useAuthContext';
import { createImageFromInitials } from '../../../helpers/makeAnImageFromName';
import { useStyles } from './useStyles';

interface props {
  senderId: string;
  message: string;
  photo: string;
  name: string;
}
const ChatMessage = ({ senderId, message, photo, name }: props): JSX.Element => {
  const { profile } = useAuth();
  const classes = useStyles();
  const messageClass = senderId === profile._id ? classes.sent : classes.received;

  let image;
  if (photo.length) image = photo;
  else image = createImageFromInitials(name);

  const textStyle = messageClass.split('-')[1] === 'sent' ? classes.textSent : classes.textRecieved;

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={image} alt="image" />
        <Typography className={textStyle} sx={{ fontSize: '15px', fontWeight: 'bold' }}>
          {message}
        </Typography>
      </div>
    </>
  );
};

export default ChatMessage;
