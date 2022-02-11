import * as React from 'react';
import { Box, Typography } from '@mui/material';

interface Props {
  name: string;
  photo: string;
  start: Date;
  end: Date;
  description: string;
  hours: number;
  rate: number;
  status: string;
}

const CustomBookingPreview = ({ name, photo, start, end, description, hours, rate, status }: Props): JSX.Element => {
  const [petSitterName, setPetSitterName] = React.useState('Jennifer Lawrence');
  const [petSitterDescription, setpetSitterDescription] = React.useState('Most popular dog-sitter');
  const [petSitterRate, setpetSitterRate] = React.useState(22);
  const [petSitterPhoto, setpetSitterPhoto] = React.useState(
    'https://pyxis.nymag.com/v1/imgs/cdd/4c7/65257dcae8272f7aff667d0bf255e5bd02-27-Jennifer-Lawrence-dog.rhorizontal.w700.jpg',
  );
  const [bookingHours, setBookingHours] = React.useState(4);
  const [paymentStatus, setPaymentStatus] = React.useState('Current');

  const formatDate = (date: Date) => {
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/');
  };

  const startDate = new Date(start);
  const endDate = new Date(end);

  return (
    <Box
      sx={{ paddingBottom: '1rem', '&:hover': { backgroundColor: '#eee' } }}
      onClick={() => {
        setPetSitterName(name);
        setpetSitterDescription(description);
        setpetSitterRate(rate);
        setpetSitterPhoto(photo);
        setBookingHours(hours);
        setPaymentStatus(status);
      }}
    >
      <Typography sx={{ fontSize: '20px', fontWeight: 500, paddingLeft: '0.5rem' }}>{name}</Typography>
      <Typography sx={{ fontSize: '15px', paddingLeft: '0.5rem' }}>{`${formatDate(startDate)} - ${formatDate(
        endDate,
      )}`}</Typography>
    </Box>
  );
};

export default CustomBookingPreview;
