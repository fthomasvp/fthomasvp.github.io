import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from 'pages/About';
import PageLayout from 'components/PageLayout';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/about">
        <PageLayout>
          <About />
        </PageLayout>
      </Route>
    </Switch>
  );
};

export default Routes;
