import authReducer from "redux/authSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
