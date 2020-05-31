import React, { useState } from "react";
import { addUser, setToken } from "../actions/actions";
import { connect } from "react-redux";
import { usePosition } from "use-position";
import http from "../services/http";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Auth = ({ setToken }) => {
  const [userLoginName, getUserLoginName] = useState("");
  const [userLoginPass, getUserLoginPass] = useState("");
  const [userRegisterName, getUserRegisterName] = useState("");
  const [userRegisterPass, getUserRegisterPass] = useState("");
  const [userEmail, getUserEmail] = useState("");

  const { latitude, longitude, timestamp, accuracy, error } = usePosition(true);

  const userRegisterData = {
    userRegisterName: userRegisterName,
    userEmail: userEmail,
    userRegisterPass: userRegisterPass,
  };
  const userLoginData = {
    userLoginName: userLoginName,
    userLoginPass: userLoginPass,
  };

  const login = (userData, setToken) => {
    http.login(userData, setToken);
  };
  const register = (userData) => {
    http.register(userData, setToken);
  };
  return (
    <div>
      <div>
        login
        <input
          type="text"
          placeholder="login"
          value={userLoginName}
          onChange={(e) => getUserLoginName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="userPass"
          value={userLoginPass}
          onChange={(e) => getUserLoginPass(e.target.value)}
        ></input>
        <button
          onClick={() => {
            login(userLoginData, setToken);
          }}
        >
          submit
        </button>
      </div>
      <div>
        registration
        <input
          type="text"
          placeholder="userName"
          value={userRegisterName}
          onChange={(e) => getUserRegisterName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="userEmail"
          value={userEmail}
          onChange={(e) => getUserEmail(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="userPass"
          value={userRegisterPass}
          onChange={(e) => getUserRegisterPass(e.target.value)}
        ></input>
        <button onClick={() => register(userRegisterData)}>submit</button>
      </div>
      <code>
        latitude: {latitude}
        <br />
        longitude: {longitude}
        <br />
        timestamp: {timestamp}
        <br />
        accuracy: {accuracy && `${accuracy}m`}
        <br />
        error: {error}
      </code>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch(setToken(token)),
  };
};
export default connect(null, mapDispatchToProps)(Auth);
