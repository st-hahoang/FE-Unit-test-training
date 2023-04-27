import { combineReducers } from 'redux';

import authReducer from '@app/core/auth/auth.reducers';
import usersReducer from './pages/user/user.reducers';

const appReducer = combineReducers({
  authReducer,
  usersReducer
});

export default appReducer;
