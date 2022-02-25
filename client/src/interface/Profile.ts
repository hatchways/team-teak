import { User } from './User';

export interface Profile {
  type?: string;
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

export interface PetSitter extends Profile {
  type: string;
  stripeConnectId: string;
  availabilityId: string;
  activatedAvailabilitySchedule: string;
  rate: string;
}

export interface SearchProfileApiData {
  users?: Profile[];
  error?: { message: string };
}
