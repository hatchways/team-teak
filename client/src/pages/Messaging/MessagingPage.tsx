import { Grid, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import ChatRoom from '../../components/Messaging/ChatSection/ChatRoom';
import SendersSideWrapper from '../../components/Messaging/SendersWrapper/SendersSideWrapper';
import { useAuth } from '../../context/useAuthContext';
import { getAllConversations, getAllMessages } from '../../helpers/APICalls/messaging';
import { Conversation } from '../../interface/messages';

const conversationObj: Conversation = {
  _id: 'dhfjd',
  receiverId: '',
  senderId: '',
  user: {
    name: '',
    photo: '',
    isOnline: false,
  },
  message: {
    message: '',
    createdAt: '',
  },
};

const MessagingPage = (): JSX.Element => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [conversation, setConversation] = useState(conversationObj);

  useEffect(() => {
    const fetchAllCoversation = async () => {
      const result = await getAllConversations();

      setConversations(result.success.conversations);

      const firstConversation = result.success.conversations[0];

      setConversation(firstConversation);
    };
    fetchAllCoversation();
  }, []);

  console.log(conversation, conversations);

  const handleConversationChange = async (id?: string) => {
    for (const jazz of conversations) {
      if (jazz._id === id) {
        const newConversations = conversations.filter((item) => item._id !== id);
        setConversation(jazz);
        setConversations([jazz, ...newConversations]);
      }
    }
  };

  return (
    <Grid container>
      <Grid xs={4} md={4} item>
        <Box>
          <SendersSideWrapper conversations={conversations} handleConversationChange={handleConversationChange} />
        </Box>
      </Grid>
      <Grid xs={8} md={8} item>
        <Box>{conversation._id.length ? <ChatRoom conversation={conversation} /> : ''}</Box>
      </Grid>
    </Grid>
  );
};

export default MessagingPage;
