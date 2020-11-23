import React from 'react';

import Box from '@material-ui/core/Box';
import PlaceIcon from '@material-ui/icons/Place';

import useStyles from './styles';

const Footer = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.boxMainContent}>
      <PlaceIcon color="primary" fontSize="large" />
      Recife - PE, Brazil
    </Box>
  );
};

export default Footer;
