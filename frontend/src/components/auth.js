import React, { useState } from 'react';
import { addUser } from '../actions/actions';
import { connect } from "react-redux";

const Auth = ({ state, setAuthData }) => {
  const [userName, changeUserName] = useState('');
  const [userEmail, changeUserEmail] = useState('');
  const [userPass, changeUserPass] = useState('');
  const userData = {
    userName: userName,
    userEmail: userEmail,
    userPass: userPass
  }
  console.log(localStorage.getItem("token"))
  return (
    <div>
      <div>
        login
      <input type='text' placeholder='login'></input>
        <input type='text' placeholder='userPass' ></input>
        <button>submit</button>
      </div>
      <div>
        registration
      <input type='text' placeholder='userName' value={userName} onChange={e => changeUserName(e.target.value)}></input>
        <input type='text' placeholder='userEmail' value={userEmail} onChange={e => changeUserEmail(e.target.value)}></input>
        <input type='text' placeholder='userPass' value={userPass} onChange={e => changeUserPass(e.target.value)}></input>
        <button onClick={() => setAuthData(userData)}>submit</button>
      </div>
    </div>
  )
}

// const mapStateToProps = state => ({
//   userData: { userName: '', userEmail: '', userPass: '' }, state
// });
const mapDispatchToProps = dispatch => {
  return {
    setAuthData: (userData) => dispatch(addUser(userData))
  }
}
export default connect(null, mapDispatchToProps)(Auth);