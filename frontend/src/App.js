//prettier-ignore
import React from "react";
import { connect } from "react-redux";

import { getState } from "./actions/actions";

import "./App.css";

const App = ({ state, getState }) => {
  // getState();
  return <div className="App">app</div>;
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
