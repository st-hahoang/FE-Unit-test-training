import React from 'react';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  const onLogin = () => {
    const account = { username: 'admin', password: 'admin' };
  };

  return (
    <div>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Login;
