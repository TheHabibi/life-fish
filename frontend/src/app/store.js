import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import fishReducer from '../features/fishes/fishSlice';
import contactReducer from '../features/contacts/contactSlice'

export const store = configureStore({

  reducer: {
    auth: authReducer,
    fishes: fishReducer,
    contacts: contactReducer
  },
});


