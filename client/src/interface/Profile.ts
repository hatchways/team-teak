import { User } from './User';

export interface Profile {
  userId: User;
  name: string;
  description: string;
  gender: string;
  address: string;
  telephone: string;
  birthday: Date;
  photo: string;
  accountType: string;
}

export interface SearchProfileApiData {
  users?: Profile[];
  error?: { message: string };
}
