import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { getPost } from "./actions/post.action.js";
import { getUser } from "./actions/user.action.js";
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
store.dispatch(getPost());
store.dispatch(getUser());
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
