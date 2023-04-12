import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '@core/services/auth.service';
import { AccountAttributes } from '@shared/types/account';

const auth = new AuthService();

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (account: AccountAttributes, { rejectWithValue }) => {
    try {
      const response = await auth.signIn(account);
      return response['accessToken'];
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
