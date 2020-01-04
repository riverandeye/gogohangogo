import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useUserStore } from './hooks';

interface PrivateRouterProps {
  Component: React.ComponentType<any>;
  redirectTo: string;
  path: string;
  exact?: boolean;
}

const PrivateRouter = (props: PrivateRouterProps) => {
  const { user } = useUserStore();
  const { Component, redirectTo, path, exact } = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(props: any) =>
        user.isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};

export default observer(PrivateRouter);
