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
<<<<<<< HEAD:frontend/src/components/auth.js
  const register = userData => {
    http.register(userData, setToken);
  };
  const userData = {
    userName: userName,
    userEmail: userEmail,
    userPass: userPass
  };
=======

  const register = (userData) => {
    http.register(userData, setToken);
  };

>>>>>>> aee3a3ec0a45ac64bc4d86e2a94d6a1df115678d:frontend/src/containers/Auth/index.jsx
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

<<<<<<< HEAD:frontend/src/components/auth.js
const mapStateToProps = state => {
=======
const mapStateToProps = (state) => {
>>>>>>> aee3a3ec0a45ac64bc4d86e2a94d6a1df115678d:frontend/src/containers/Auth/index.jsx
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
