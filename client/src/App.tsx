import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Main from './page/main';
import { ROUTE } from './constants';
import Subscribe from './page/subscribe';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path={ROUTE.MAIN} component={Main} />
      <Route exact path={ROUTE.SUBSCRIBE} component={Subscribe} />
    </BrowserRouter>
  );
};

export default App;
