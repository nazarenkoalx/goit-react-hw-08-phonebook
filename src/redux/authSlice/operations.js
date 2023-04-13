import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const tokenSetter = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const logIn = createAsyncThunk('users/login', async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('users/login');
    tokenSetter.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const signUp = createAsyncThunk(
  'users/signup',
  async ({ name, password, email }, thunkAPI) => {
    try {
      const { data } = await axios.post('users/signup', {
        name,
        password,
        email,
      });
      tokenSetter.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('users/logout');
    tokenSetter.unset();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk();
