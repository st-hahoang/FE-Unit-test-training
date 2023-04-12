import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '@core/services/auth.service';

const auth = new AuthService();

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (account: any, { rejectWithValue }) => {
    try {
      const response = await auth.signIn(account);
      return response['accessToken'];
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
