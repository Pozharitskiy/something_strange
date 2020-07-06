import React from "react";
import { useForm } from "react-hook-form";
// import { usePosition } from "use-position";

// const { latitude, longitude, timestamp, accuracy, error } = usePosition(true);

const AuthContainer = ({
  getUserEmail,
  getUserName,
  getUserPass,
  userName,
  userEmail,
  userPass,
  login,
  register,
  setToken
}) => {
  const userData = {
    userName: userName,
    userEmail: userEmail,
    userPass: userPass
  };
  return (
    <div>
      <div>
        login
        <input
          type="text"
          placeholder="login"
          value={userName || ""}
          onChange={e => getUserName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="userPass"
          value={userPass || ""}
          onChange={e => getUserPass(e.target.value)}
        ></input>
        <button
          onClick={() => {
            login(userData, setToken);
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
          value={userName || ""}
          onChange={e => {
            getUserName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="userEmail"
          value={userEmail || ""}
          onChange={e => getUserEmail(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="userPass"
          value={userPass || ""}
          onChange={e => getUserPass(e.target.value)}
        ></input>
        <button onClick={() => register(userData)}>submit</button>
      </div>
      {/* <code>
      latitude: {latitude}
      <br />
      longitude: {longitude}
      <br />
      timestamp: {timestamp}
      <br />
      accuracy: {accuracy && `${accuracy}m`}
      <br />
      error: {error}
    </code> */}
    </div>
  );
};

export default AuthContainer;
