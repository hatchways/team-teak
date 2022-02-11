export interface CustomBooking {
  name: string;
  description: string;
  photo: string;
  start: Date;
  end: Date;
  hours: number;
  rate: number;
  status: string;
}

export interface CustomBookingData {
  users?: CustomBooking[];
  error?: { message: string };
}
