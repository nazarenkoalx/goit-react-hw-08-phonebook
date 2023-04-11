import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice/filterSlice';
import { contactsReducer } from './contactSlice/contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
