import React from 'react';
import { Typography, Box } from '@mui/material';

const UsersPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Users Management
      </Typography>
      <Typography variant="body1">
        This is a placeholder for the User list and permissions screen.
      </Typography>
    </Box>
  );
};

export default UsersPage;