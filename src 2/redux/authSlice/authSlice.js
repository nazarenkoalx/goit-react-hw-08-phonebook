const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, password: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'authorisation',
  initialState,
  extraReducers: {},
});

export const authReducer = authSlice.reducer;
