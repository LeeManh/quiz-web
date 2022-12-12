import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
    },

    updateUserPoint: (state, action) => {
      const { idQuiz, userMaxPoint } = action.payload;
      const findPoint = state.user.points.find(
        (item) => item.idQuiz === idQuiz
      );
      if (!findPoint) {
        state.user.points.push({ idQuiz, userMaxPoint });
      } else if (findPoint && findPoint.userMaxPoint < userMaxPoint) {
        findPoint.userMaxPoint = userMaxPoint;
      }
    },
  },
});

export default authSlice.reducer;

export const { loginSuccess, logout, updateUserPoint } = authSlice.actions;

export const selectAuth = (state) => state.auth;
