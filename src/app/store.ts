import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

export const store = configureStore({
  reducer: {},
  middleware:
    (getDefaultMiddleware) => process.env.NODE_ENV !== 'production'
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
});
