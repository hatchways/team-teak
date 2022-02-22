export interface message {
  _id: string;
  message: string;
  createdAt: string;
  receiverId: string;
  senderId: string;
  user: {
    name: string;
    photo: string;
    isOnline: boolean;
  };
}

export interface conversation {
  _id: string;
  receiverId: string;
  senderId: string;
  user: {
    name: string;
    photo: string;
    isOnline: boolean;
  };
  message: {
    message: string;
    createdAt: string;
  };
}

export interface conversations {
  conversations: conversation[];
}

export interface chatRoom {
  conversation: conversation;
}
