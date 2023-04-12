import React from 'react';

import { signIn } from '@core/auth/auth.middleware';
import { useAppDispatch, useAppSelector, RootState } from '@app/store';

const Login = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state: RootState) => state.auth);

  const onLogin = () => {
    const account = { email: 'trang.nguyen@supremetech.vn', password: 'Trang@1234' };
    dispatch(signIn(account));
  };

  return (
    <div>
      <button onClick={onLogin} disabled={isLoading}>Login</button>
    </div>
  );
};

export default Login;
