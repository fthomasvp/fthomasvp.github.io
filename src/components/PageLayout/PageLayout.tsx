import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Header from 'components/Header';
import Footer from 'components/Footer';
import useStyles from './styles';

type Props = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      {/* Header */}
      <Grid item xs={12}>
        <Header />
      </Grid>

      {/* Main */}
      <Grid container direction="row" justify="flex-start">
        <Box className={classes.boxMainContent}>{children}</Box>
      </Grid>

      {/* Footer */}
      <Grid container direction="row" justify="center">
        <Footer />
      </Grid>
    </Container>
  );
};

export default PageLayout;
