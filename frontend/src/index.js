import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import thunk from "redux-thunk";

import AdminRoute from "./components/AdminRoute/";
import rootReducer from "./reducers/rootReducer";
import * as serviceWorker from "./serviceWorker";

import "./index.scss";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <AdminRoute exact></AdminRoute>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
