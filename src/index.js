import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feelingReducer = (state = {}, action) => {
  if (action.type === "SET_FEELINGS_FEEDBACK") {
    return action.payload;
  }
  return state;
};

const contentReducer = (state = {}, action) => {
  if (action.type === "SET_UNDERSTANDING_FEEDBACK") {
    return { ...action.payload };
  }
  return state;
};

const supportedReducer = (state = {}, action) => {
  if (action.type === "SET_SUPPORT_FEEDBACK") {
    return { ...action.payload };
  }
  return state;
};

const commentReducer = (state = {}, action) => {
  if (action.type === "SET_COMMENTS_FEEDBACK") {
    return { ...action.payload };
  }
  return state;
};

const completedReducer = (state = {}, action) => {
  if (action.type === "SET_COMPLETED_PAGE") {
    return { ...action.payload };
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    contentReducer,
    supportedReducer,
    commentReducer,
    completedReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
