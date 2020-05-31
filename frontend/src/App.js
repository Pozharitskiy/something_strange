//prettier-ignore
import React from "react";
import { connect } from "react-redux";

import "./App.css";

const App = ({ state }) => {
  console.log(state);
  return <div className="App">app</div>;
};

const mapStateToProps = (state) => state;
//state

// const mapDispatchToProps = (dispatch) => {
//   //functions
// }

export default connect(mapStateToProps)(App);
