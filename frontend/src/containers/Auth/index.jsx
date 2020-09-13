import React from "react";
import { connect } from "react-redux";
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import http from "../../services/http";
import {
  setToken,
  setUsers,
  getUserName,
  getUserEmail,
  getUserPass,
  getUserSecretWord,
} from "../../actions/actions";
import AuthContainer from "../../components/Auth";

const Auth = ({
  userEmail,
  userName,
  userPass,
  userSecretWord,
  setToken,
  setUsers,
  getUserEmail,
  getUserName,
  getUserPass,
  getUserSecretWord
}) => {
  const login = (userData, setToken, setUsers) => {
    http.login(userData, setToken, setUsers);
  };

  const register = (userData) => {
    http.register(userData, setToken);
  };

  const forgotPass = (userData) => {
    http.forgotPass(userData, setToken);
  }

  return (
    <AuthContainer
      getUserEmail={getUserEmail}
      getUserName={getUserName}
      getUserPass={getUserPass}
      getUserSecretWord={getUserSecretWord}
      userName={userName}
      userEmail={userEmail}
      userPass={userPass}
      userSecretWord={userSecretWord}
      login={login}
      register={register}
      forgotPass={forgotPass}
      setToken={setToken}
      setUsers={setUsers}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    userName: state.authReducers.userName,
    userPass: state.authReducers.userPass,
    userName: state.authReducers.userName,
    userPass: state.authReducers.userPass,
    userEmail: state.authReducers.userEmail,
    userSecretWord: state.authReducers.userSecretWord
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToken: token => dispatch(setToken(token)),
    setUsers: users => dispatch(setUsers(users)),
    getUserName: userName => dispatch(getUserName(userName)),
    getUserPass: userPass => dispatch(getUserPass(userPass)),
    getUserEmail: userEmail => dispatch(getUserEmail(userEmail)),
    getUserSecretWord: userSecretWord => dispatch(getUserSecretWord(userSecretWord)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
