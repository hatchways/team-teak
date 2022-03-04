import { Grid, Box } from '@mui/material';
import ChatRoom from '../../components/Messaging/ChatSection/ChatRoom';

import MessageSenderCard from '../../components/Messaging/SenderCard/MessageSenderCars';
import SendersSideWrapper from '../../components/Messaging/SendersWrapper/SendersSideWrapper';

const MessagingPage = (): JSX.Element => {
  return (
    <Grid container>
      <Grid xs={4} md={4} item>
        <Box>
          <SendersSideWrapper />
        </Box>
      </Grid>
      <Grid xs={8} md={8} item>
        <Box>
          <ChatRoom />
        </Box>
      </Grid>
    </Grid>
  );
};

export default MessagingPage;
