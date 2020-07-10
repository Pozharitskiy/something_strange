import React from "react";
import { connect } from "react-redux";
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import http from "../../services/http";
import {
  setToken,
  getUserName,
  getUserEmail,
  getUserPass,
} from "../../actions/actions";
import AuthContainer from "../../components/Auth";

const Auth = ({
  userEmail,
  userName,
  userPass,
  setToken,
  getUserEmail,
  getUserName,
  getUserPass
}) => {
  const login = (userData, setToken) => {
    http.login(userData, setToken);
  };

  const register = (userData) => {
    http.register(userData, setToken);
  };

  return (
    <AuthContainer
      getUserEmail={getUserEmail}
      getUserName={getUserName}
      getUserPass={getUserPass}
      userName={userName}
      userEmail={userEmail}
      userPass={userPass}
      login={login}
      register={register}
      setToken={setToken}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    userName: state.authReducers.userName,
    userPass: state.authReducers.userPass,
    userName: state.authReducers.userName,
    userPass: state.authReducers.userPass,
    userEmail: state.authReducers.userEmail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToken: token => dispatch(setToken(token)),
    getUserName: userName => dispatch(getUserName(userName)),
    getUserPass: userPass => dispatch(getUserPass(userPass)),
    getUserEmail: userEmail => dispatch(getUserEmail(userEmail))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
