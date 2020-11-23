import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import CustomLoading from 'components/CustomLoading';

const AboutRoutes = React.lazy(() => import('routes/about'));

const Routes = (): JSX.Element => {
  return (
    <Router basename="/">
      <React.Suspense fallback={<CustomLoading />}>
        <AboutRoutes />
      </React.Suspense>
    </Router>
  );
};

export default Routes;
