import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "redux/authSlice";
import quizReducer from "redux/quizSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  quizs: quizReducer,
});

export default rootReducer;
