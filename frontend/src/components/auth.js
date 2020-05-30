import React, { useState } from 'react';
import { addUser, loginUser } from '../actions/actions';
import { connect } from "react-redux";
import { usePosition } from 'use-position';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";



const Auth = ({ state, setAuthData, loginUser }) => {
  const [userLoginName, getUserLoginName] = useState('');
  const [userLoginPass, getUserLoginPass] = useState('');
  const [userRegisterName, getUserRegisterName] = useState('');
  const [userRegisterPass, getUserRegisterPass] = useState('');
  const [userEmail, getUserEmail] = useState('');

  const {
    latitude,
    longitude,
    timestamp,
    accuracy,
    error,
  } = usePosition(true);

  const userRegisterData = {
    userRegisterName: userRegisterName,
    userEmail: userEmail,
    userRegisterPass: userRegisterPass
  }
  const userLoginData = {
    userLoginName: userLoginName,
    userLoginPass: userLoginPass
  }
  return (
    <div>
      <div>
        login
      <input type='text' placeholder='login' value={userLoginName} onChange={e => getUserLoginName(e.target.value)}></input>
        <input type='text' placeholder='userPass' value={userLoginPass} onChange={e => getUserLoginPass(e.target.value)}></input>
        <button onClick={() => loginUser(userLoginData)}>submit</button>
      </div>
      <div>
        registration
      <input type='text' placeholder='userName' value={userRegisterName} onChange={e => getUserRegisterName(e.target.value)}></input>
        <input type='text' placeholder='userEmail' value={userEmail} onChange={e => getUserEmail(e.target.value)}></input>
        <input type='text' placeholder='userPass' value={userRegisterPass} onChange={e => getUserRegisterPass(e.target.value)}></input>

        <button onClick={() => setAuthData(userRegisterData)}>submit</button>
      </div>
      <code>
        latitude: {latitude}<br />
      longitude: {longitude}<br />
      timestamp: {timestamp}<br />
      accuracy: {accuracy && `${accuracy}m`}<br />
      error: {error}
      </code>

    </div>
  )
}

// const mapStateToProps = state => ({
//   userData: { userName: '', userEmail: '', userPass: '' }, state
// });
const mapDispatchToProps = dispatch => {
  return {
    setAuthData: (userRegisterData) => dispatch(addUser(userRegisterData)),
    loginUser: (userLoginData) => dispatch(loginUser(userLoginData))
  }
}
export default connect(null, mapDispatchToProps)(Auth);