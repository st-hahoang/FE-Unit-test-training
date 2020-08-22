import { AnyAction } from 'redux';
import { put, takeLatest } from 'redux-saga/effects';

import { ApiService, ENDPOINT } from '@app/core/services/api.service';
import * as types from '@core/constants/types';
import { AuthService } from '../services/auth/auth.service';

const http = new ApiService();
const auth = new AuthService();

export function* signin({ payload }: AnyAction) {
  const res = yield auth.signIn(payload).then(res => res);
  yield put({ type: types.SET_TOKEN, payload: res });
}

export function* watchAuth() {
  yield takeLatest(types.SIGN_IN, signin);
}
