// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk"; // Correct import for thunk
import rootReducer from "./reducers"; // Make sure to create this file

const initialState = {};

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  devTools: composeWithDevTools(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
  preloadedState: initialState,
});

export default store;
