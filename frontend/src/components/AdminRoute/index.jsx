import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { setToken } from "../../actions/actions";
import { setUsers } from "../../actions/actions";

import App from "../App";
import Auth from "../../containers/Auth";

const AdminRoute = ({
  token,
  setToken,
  setUsers,
  state,
  ...rest
}) => {
  useEffect(() => {
    const fetchUsers = async () => {
      await fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(users => setUsers(users))
    }
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      fetchUsers();
    }
  }, []);
  useEffect(() => { }, [state]);
  return <Route {...rest} render={(props) => (token ? <App /> : <Auth />)} />;
};

const mapStateToProps = (state) => ({
  token: state.authReducers.token,
  users: state.authReducers.users,
});

const mapDispatchToProps = (dispatch) => ({
  setToken: (token) => dispatch(setToken(token)),
  setUsers: (users) => dispatch(setUsers(users))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminRoute);
