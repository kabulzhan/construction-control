import { takeLeading, put, all, call, takeLatest } from "redux-saga/effects";
import axios from "axios";

import UserActionTypes from "./user.types";
import {
  signInSuccess,
  signInFailure,
  addUserFailure,
  addUserSuccess,
  getUsersSuccess,
  getUsersFailure,
} from "./user.actions";

export function* getUsers({ payload }) {
  try {
    const response = yield axios.get(`/api/users/${payload.id}`);
    yield put(getUsersSuccess(response.data));
  } catch (e) {
    yield put(
      getUsersFailure(e.response ? e.response.data : "Сеть недоступна")
    );
  }
}

export function* onGetUsersStart() {
  yield takeLeading(UserActionTypes.GET_USERS_START, getUsers);
}

export function* signIn(emailAndPassword) {
  try {
    const response = yield axios.post("/api/login", emailAndPassword.payload);
    yield put(signInSuccess(response.data));
  } catch (e) {
    yield put(
      signInFailure(e.response ? e.response.data.message : "Сеть недоступна")
    );
  }
}

export function* onSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signIn);
}

export function* addUser({ payload, callback }) {
  try {
    yield axios.post("/api/users/add", payload);
    yield put(addUserSuccess());
    yield callback();
  } catch (e) {
    console.log(e.response);
    yield put(addUserFailure(e.response ? e.response.data : "Сеть недоступна"));
  }
}

export function* onAddUserStart() {
  yield takeLatest(UserActionTypes.ADD_USER_START, addUser);
}

export function* editUser({ payload, callback }) {
  yield console.log("HELLO EDIT USER");
}

export function* onEditUserStart() {
  yield takeLatest(UserActionTypes.EDIT_USER_START, editUser);
}

export function* userSagas(args) {
  yield all([
    call(onSignInStart),
    call(onGetUsersStart),
    call(onAddUserStart),
    call(onEditUserStart),
  ]);
}
