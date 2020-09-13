//prettier-ignore
import React from "react";
import { connect } from "react-redux";

import Chat from "../Chat/index";

import { getState } from "../../actions/actions";

import "./App.scss";

const App = ({ state, getState }) => {
  // getState();
  return <div className="App">
    <Chat />
  </div>;
};

const mapStateToProps = state => ({
  state: state
});
//state

const mapDispatchToProps = dispatch => ({
  //functions
  getState: () => dispatch(getState())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
