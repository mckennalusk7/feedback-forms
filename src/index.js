import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feedbackInitialState = {
  feeling: 0,
  content: 0,
  support: 0,
  comments: "",
};

const feelingReducer = (state = feedbackInitialState, action) => {
  if (action.type === "SET_FEELINGS_FEEDBACK") {
    return {
      ...state,
      feeling: action.payload,
    };
  }
  return state;
};

const contentReducer = (state = feedbackInitialState, action) => {
  if (action.type === "SET_UNDERSTANDING_FEEDBACK") {
    return {
      ...state,
      content: action.payload,
    };
  }
  return state;
};

const supportedReducer = (state = feedbackInitialState, action) => {
  if (action.type === "SET_SUPPORT_FEEDBACK") {
    return {
      ...state,
      support: action.payload,
    };
  }
  return state;
};

const commentReducer = (state = feedbackInitialState, action) => {
  if (action.type === "SET_COMMENTS_FEEDBACK") {
    return {
      ...state,
      comments: action.payload,
    };
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    contentReducer,
    supportedReducer,
    commentReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
