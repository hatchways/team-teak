import { Box, Button, TextField } from '@mui/material';
import ActiveChatMember from '../ActiveChatMember/ActiveChatMember';
import ChatMessage from '../Message/ChartMessage';
import { useState } from 'react';
import { useStyles } from './useStyles';

const messages = [
  {
    sender: 'you',
    reciever: 'me',
    message: 'This is to try out alot of things this will a liitle bit longer than usual message',
    recivedAt: '16:02:2022: 10:30 AM',
  },
  {
    sender: 'me',
    reciever: 'you',
    message: 'This is to try out alot of things',
    recivedAt: '16:02:2022: 10:30 AM',
  },
  {
    sender: 'you',
    reciever: 'me',
    message: 'This is to try out alot of things',
    recivedAt: '16:02:2022: 10:30 AM',
  },
  {
    sender: 'me',
    reciever: 'you',
    message: 'This is to try out alot of things',
    recivedAt: '16:02:2022: 10:30 AM',
  },
];

const ChatRoom = (): JSX.Element => {
  const [message, setMessage] = useState('');

  const classes = useStyles();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Box>
      <ActiveChatMember />
      <Box className={classes.chatRoom}>
        {messages &&
          messages.map((message, i) => <ChatMessage key={i} sender={message.sender} message={message.message} />)}
      </Box>

      <form onSubmit={handleSubmit} className={classes.form}>
        <Box className={classes.input}>
          <TextField
            type="text"
            label={`reply to ...`}
            variant="standard"
            className={classes.text}
            InputProps={{
              disableUnderline: true,
            }}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </Box>
        <Box className={classes.button}>
          <Button variant="contained" size="large">
            Send
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ChatRoom;
