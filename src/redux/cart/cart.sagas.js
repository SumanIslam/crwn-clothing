import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { userActionTypes } from '../user/user.types';
import { clearCart } from './cart.actions';

export function* clearCartOnSignOutSuccess() {
  yield put(clearCart());
}
export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOutSuccess);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
