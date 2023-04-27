import { ApiService } from '@app/core/services/api.service';
import ACTION_TYPES from '@app/core/constants/types';
import { getListUserError, getListUserSuccess, getUserDetailSuccess, getUserDetailError } from './user.actions';
import { put, takeLatest } from 'redux-saga/effects';

const http = new ApiService();

function* getListUser() {
  try {
    const res = yield http.get(['https://jsonplaceholder.typicode.com/users']);
    yield put(getListUserSuccess(res));
  } catch (error) {
    yield put(getListUserError(error));
  }
}

function* getUserDetail({ payload }: any) {
  try {
    const res = yield http.get([`https://jsonplaceholder.typicode.com/users/${payload.id}`]);
    yield put(getUserDetailSuccess(res));
  } catch (error) {
    yield put(getUserDetailError(error));
  }
}

export function* watchUsers() {
  yield takeLatest(ACTION_TYPES.GET_LIST_USER, getListUser);
  yield takeLatest(ACTION_TYPES.GET_USER_DETAIL, getUserDetail);
}