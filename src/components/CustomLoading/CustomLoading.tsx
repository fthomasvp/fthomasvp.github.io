import React from 'react';

import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

const CustomLoading = (): JSX.Element => {
  return (
    <Box style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <CircularProgress size={60} />
    </Box>
  );
};

export default CustomLoading;
