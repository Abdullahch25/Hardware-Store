// src/reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./dataReducer"; // Adjust according to your actual reducer names and locations

const rootReducer = combineReducers({
  data: dataReducer,
  // Add other reducers here
});

export default rootReducer;
