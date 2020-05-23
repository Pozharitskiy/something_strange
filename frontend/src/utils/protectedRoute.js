import React from "react";
import { Route } from "react-router-dom";

import App from '../App';
import Auth from '../components/auth';

const protectedRoute = () => {
  return function ({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          //проверять редаксом
          !!localStorage.getItem("token") ? <App /> : <Auth />
        }
      />
    );
  };
}

export default protectedRoute;