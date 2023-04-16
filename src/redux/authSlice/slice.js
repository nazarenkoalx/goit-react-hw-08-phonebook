import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logIn, logOut, signUp, fetchCurrentUser } from './operations';

const initialState = {
  user: { name: null, password: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const declaredActions = [logIn, logOut, signUp];

const getAction = actionType =>
  declaredActions.map(action => action[actionType]);

const handlePending = state => {
  state.isLoggedIn = false;
};

const handleRejected = state => {
  state.isLoggedIn = false;
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
      .addCase(fetchCurrentUser.pending, state => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isFetchingCurrentUser = false;
      })
      .addMatcher(isAnyOf(...getAction('pending')), handlePending)
      .addMatcher(isAnyOf(...getAction('rejected')), handleRejected),
});

export const userReducer = userSlice.reducer;
