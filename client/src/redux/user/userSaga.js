// import { call, fork, put, takeLatest } from "redux-saga/effects";
// // import { fetchPosts } from "../api";
// import { login, register, logout } from "../../api/user";

// import {
//   fetchUserStart,
//   fetchUserSuccess,
//   fetchUserFailure,
//   setUserLoginStart,
//   setUserLoginSuccess,
//   setUserLoginFailure,
//   resetUserDataStart,
//   resetUserDataSuccess,
//   resetUserDataFailure,
// } from "./userSlice";

// function* getUserInfo({ payload }) {
//   const { onSuccess, onError } = payload;
//   const user = {
//     email: payload.email,
//     password: payload.password,
//     remember: payload.remember,
//   };
//   try {
//     const userInfo = yield call(login, user);
//     yield put(setUserLoginSuccess({ userInfo, onSuccess, onError }));
//   } catch (error) {
//     yield put(setUserLoginFailure({ error, onError }));
//   }
// }

// function* setResetAccount() {
//   try {
//     const response = yield call(logout);
//     yield put(resetUserDataSuccess(response));
//   } catch (error) {
//     yield put(resetUserDataFailure());
//   }
// }

// function* setUserInfo({ payload }) {
//   try {
//     // const { page, limit } = payload;
//     // console.log({ page });
//     const userInfo = yield call(register, payload);
//     yield put(fetchUserSuccess(userInfo));
//   } catch (error) {
//     yield put(fetchUserFailure(error));
//   }
// }

// function* watchGetUsers() {
//   yield takeLatest(setUserLoginStart.type, getUserInfo);
// }

// function* watchSetUsers() {
//   yield takeLatest(fetchUserStart.type, setUserInfo);
// }

// function* watchSetResetUserAccount() {
//   yield takeLatest(resetUserDataStart.type, setResetAccount);
// }

// export const usersSaga = [
//   fork(watchGetUsers),
//   fork(watchSetUsers),
//   fork(watchSetResetUserAccount),
// ];
