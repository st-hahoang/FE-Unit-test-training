import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '@core/services/auth.service';
import { AccountAttributes } from '@shared/types/account';

const auth = new AuthService();

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (account: AccountAttributes) => {
    const response: any = await auth.signIn(account);
    auth.setToken(response.access_token);
    const userInfo = auth.getUserInfo();
    return userInfo;
  }
);
