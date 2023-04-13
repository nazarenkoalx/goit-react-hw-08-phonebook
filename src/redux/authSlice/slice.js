import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logIn, logOut, signUp } from './operations';

const initialState = {
  user: { name: null, password: null },
  token: null,
  isLoggedIn: false,
};

const declaredActions = [logIn, logOut, signUp];

const getAction = actionType =>
  declaredActions.map(action => action[actionType]);

const handlePending = state => {
  state.isLoggedIn = false;
};

const handleFulfilled = (state, { payload }) => {};

const handleRejected = (state, payload) => {
  state.isLoggedIn = false;
  // state.isLoading = false;
  // state.error = payload;
};

export const userSlice = createSlice({
  name: 'authorisation',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, password: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addMatcher(isAnyOf(...getAction('pending')), handlePending)
      .addMatcher(isAnyOf(...getAction('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getAction('rejected')), handleRejected),
});

export const userReducer = userSlice.reducer;
