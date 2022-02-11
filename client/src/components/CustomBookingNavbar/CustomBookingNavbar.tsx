import React from 'react';
import { Box } from '@mui/material';

interface CustomBookingNavbarProps {
  customNavbar: JSX.Element | JSX.Element[];
}

const CustomBookingNavbar: React.FC<CustomBookingNavbarProps> = ({ customNavbar }) => {
  return (
    <Box
      sx={{
        background: '#fff',
        height: 800,
        padding: 3,
      }}
    >
      {customNavbar}
    </Box>
  );
};

export default CustomBookingNavbar;
