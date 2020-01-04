import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Landing from './page/landing';
import { ROUTE } from './constants';
import Main from './page/main';
import Subscribe from './page/subscribe';
import SignUp from './page/signup';
import MyParties from './page/my-parties';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path={ROUTE.LANDING} component={Landing} />
      <Route exact path={ROUTE.MAIN} component={Main} />
      <Route exact path={ROUTE.SUBSCRIBE} component={Subscribe} />
      <Route exact path={ROUTE.SIGNUP} component={SignUp} />
      <Route exact path={ROUTE.MYPARTIES} component={MyParties} />
    </BrowserRouter>
  );
};

export default App;
