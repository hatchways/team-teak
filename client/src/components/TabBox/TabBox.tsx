import React from 'react';
import { Box } from '@mui/material';

interface SettingsWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const TabBox: React.FC<SettingsWrapperProps> = ({ children }) => {
  return (
    <Box
      sx={{
        background: '#fff',
        padding: 2,
        height: 800,
        marginRight: 3,
        boxShadow:
          '0px 1.7px 4px rgba(0, 0, 0, 0.01), 0px 4.6px 11.1px rgba(0, 0, 0, 0.015), 0px 11.2px 26.8px rgba(0, 0, 0, 0.02),0px 37px 89px rgba(0, 0, 0, 0.03)',
      }}
    >
      {children}
    </Box>
  );
};

export default TabBox;
