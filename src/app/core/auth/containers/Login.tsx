import React, { useState } from 'react';

import { signIn } from '@core/auth/auth.middleware';
import { useAppDispatch } from '@app/store';

const Login = () => {
  const [isRequesting, setIsRequesting] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const onLogin = () => {
    setIsRequesting(true);
    const account = { email: 'trang.nguyen@supremetech.vn', password: 'Trang@1234' };
    dispatch(
      signIn(account)
    ).finally(() => {
      setIsRequesting(false);
    });
  };

  return (
    <div>
      <button onClick={onLogin} disabled={isRequesting}>Login</button>
    </div>
  );
};

export default Login;
