/* eslint-disable func-style */
import { AxiosResponse } from 'axios';
import { all, put, takeLatest } from 'redux-saga/effects';
import { getListUserError, getListUserSuccess, getUserDetailSuccess, getUserDetailError } from './user.actions';
import ACTION_TYPES from '@app/core/constants/types';
import { UserService } from '@app/core/services/user.service';
const userService = new UserService();

export function* getUsers(){
  try {
    const res = yield userService.getUsers();
    yield put(getListUserSuccess(res));
  } catch (error) {
    yield put(getListUserError(error));
  }
}

export function* getUserDetail({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield userService.getUserDetail(payload);
    yield put(getUserDetailSuccess(res));
  } catch (error) {
    yield put(getUserDetailError(error));
  }
}

export function* watchUsers() {
  yield all([
    takeLatest(ACTION_TYPES.GET_LIST_USER, getUsers),
    takeLatest(ACTION_TYPES.GET_USER_DETAIL, getUserDetail)
  ]);
}
