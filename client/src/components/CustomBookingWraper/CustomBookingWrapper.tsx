import React from 'react';
import { Box } from '@mui/material';

interface CustomBookingWrapperProps {
  customNavbar: JSX.Element | JSX.Element[];
}

const CustomBookingWrapper: React.FC<CustomBookingWrapperProps> = ({ customNavbar }) => {
  return (
    <Box
      sx={{
        background: '#fff',
        padding: 1,
        height: 900,
        marginRight: 1,
      }}
    >
      {customNavbar}
    </Box>
  );
};

export default CustomBookingWrapper;
