import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const Header = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box>
      <AppBar position="static" classes={{ root: classes.headerAppBar }}>
        <Toolbar>
          <Grid container direction="row" alignItems="center" spacing={2}>
            <Grid item>
              <Typography component="span" variant="h6">
                Menu
              </Typography>
            </Grid>

            <Grid item>
              <Typography component="span" variant="h6">
                Feedback
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
