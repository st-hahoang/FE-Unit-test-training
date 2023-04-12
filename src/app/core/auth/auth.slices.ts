import { createSlice } from '@reduxjs/toolkit';

import { signIn } from './auth.middleware';

const initialState = {
  userInfo: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserInfo: (state, { payload }) => {
      state.userInfo = { ...state.userInfo, ...payload };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        // do something
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.userInfo = payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        // do something
      });
  }
});

export default authSlice.reducer;
