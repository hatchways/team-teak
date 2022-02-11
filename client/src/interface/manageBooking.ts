export interface props {
  _id: string;
  name: string;
  start: string;
  status: string;
  photo: string;
}

export interface Request {
  _id: string;
  start: string;
  status: string;
  user: {
    photo: string;
    name: string;
  };
}

export interface requestsList {
  requests: Request[];
  cancelled: Request[];
}

export interface currentList {
  requests: Request[];
}

export interface requestItem {
  item: Request;
}
