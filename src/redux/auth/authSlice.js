import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import {
  registerSuccessReducer,
  loginSuccessReducer,
  logoutSuccessReducer,
  refreshUserPendingReducer,
  refreshUserFulfilledReducer,
  refreshUserRejectedReducer,
} from './reducers';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, registerSuccessReducer)
      .addCase(logIn.fulfilled, loginSuccessReducer)
      .addCase(logOut.fulfilled, logoutSuccessReducer)
      .addCase(refreshUser.pending, refreshUserPendingReducer)
      .addCase(refreshUser.fulfilled, refreshUserFulfilledReducer)
      .addCase(refreshUser.rejected, refreshUserRejectedReducer),
});

export const authReducer = authSlice.reducer;
