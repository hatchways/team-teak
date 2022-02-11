import React from 'react';
import { Box } from '@mui/material';

interface CustomBookingWraperProps {
  customNavbar: JSX.Element | JSX.Element[];
}

const CustomBookingWraper: React.FC<CustomBookingWraperProps> = ({ customNavbar }) => {
  return (
    <Box
      sx={{
        background: '#fff',
        padding: 2,
        height: 800,
        marginRight: 3,
      }}
    >
      {customNavbar}
    </Box>
  );
};

export default CustomBookingWraper;
