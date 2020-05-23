import React from "react";
import { Route } from "react-router-dom";

import App from '../App';
import Auth from '../components/auth';

const protectedRoute = (user) => {
  return function ({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          !!user ? <App /> : <Auth />
        }
      />
    );
  };
}

export default protectedRoute;