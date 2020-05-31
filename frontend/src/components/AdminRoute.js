import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { Route } from "react-router-dom";

import { setToken } from '../actions/actions';

import App from '../App';
import Auth from './auth';

const AdminRoute = ({ component: Component, token, setToken, state, ...rest }) => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }

  }, [])
  useEffect(() => {
  }, [state])
  return (
    <Route
      {...rest}
      render={props =>
        token ? <App /> : <Auth />
      }
    />
  );
}

const mapStateToProps = state => (
  {
    token: state.authReducers.token,
    state: state
  })

const mapDispatchToProps = (dispatch) => ({
  setToken: token => dispatch(setToken(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminRoute);