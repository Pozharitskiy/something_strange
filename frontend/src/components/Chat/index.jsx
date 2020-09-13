import React, { useEffect } from "react";
import io from "socket.io-client";
// import moment from "moment";
import { connect } from "react-redux";

import { getUsers } from "../../actions/actions";
import { setUsers } from "../../actions/actions";
import { getUserName } from "../../actions/actions";

const socket = io("http://localhost:5000", {
    transports: ["websocket", "polling"]
});

const Chat = ({ users, getUsers }) => {
    console.log(users)
    useEffect(() => {
        // getUsers();
        socket.on("connect", () => {
            socket.emit("username", getUserName /*redux */);
        })

        socket.on("users", users => {
            setUsers(users) //redux
        })

        // socket.on("message", message => {
        //     setMessages(messages => [...messages, message])
        // })

        socket.on("connected", user => {
            setUsers(users => [...users, user])
        })

        socket.on("disconnected", id => {
            setUsers(users => {
                return users.filter(user => user.id !== id)
            })
        })
    })
    return (
        <div>Chat
            <div>Users:
                    {users ? users.map(user => (
            <div className="user" key={user.userid}>{user.username}</div>)
        ) : <div>You are the 1st user!</div>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        users: state.authReducers.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => {
            dispatch(getUsers())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);