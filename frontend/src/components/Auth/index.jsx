import React from "react";
import ModalWindow from "../ModalWindow";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from "../../utils/usestyles-materialUI";
// import { usePosition } from "use-position";

// const { latitude, longitude, timestamp, accuracy, error } = usePosition(true);

import "./Auth.scss";

const AuthContainer = ({
  getUserEmail,
  getUserName,
  getUserPass,
  getUserSecretWord,
  userName,
  userEmail,
  userPass,
  userSecretWord,
  login,
  register,
  forgotPass,
  setToken,
  setUsers
}) => {
  const userData = {
    userName: userName,
    userEmail: userEmail,
    userPass: userPass,
    userSecretWord: userSecretWord
  };
  //material UI
  const classes = useStyles();

  //material UI ends
  return (
    <div className="auth">
      <div className="auth-login">
        <form className={classes.root} noValidate autoComplete="off" className="login-form">
          <TextField id="standard-basic login-username" label="username" value={userName || ""}
            onChange={e => getUserName(e.target.value)} />
          <TextField id="standard-basic login-password" label="password" value={userPass || ""}
            onChange={e => getUserPass(e.target.value)} />
          <Button variant="outlined" color="primary" className="login-btn"
            onClick={() => {
              login(userData, setToken, setUsers);
            }}
          >
            Submit
        </Button>
        </form>
      </div>
      <div className="auth-help--btns">
        <ModalWindow
          modalType={"registration"}
          actions={[getUserEmail, getUserName, getUserPass, getUserSecretWord]}
          actionLabels={["Your e-mail", "Your name", "Your password", "Your secret word"]}
          confirm={register}
          extraData={userData}
        >
        </ModalWindow>
        <ModalWindow
          modalType={"forgot pass"}
          actions={[getUserName, getUserSecretWord]}
          actionLabels={["Your name", "Your secret word"]}
          confirm={forgotPass}
          extraData={userData}
        >

        </ModalWindow>
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
