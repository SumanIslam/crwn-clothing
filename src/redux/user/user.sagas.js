import { takeLatest, call, all, put } from '@redux-saga/core/effects';
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';
import { userActionTypes } from './user.types';

import { googleSignInSuccess, googleSignInFailure } from './user.actions';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield createUserProfileDocument(user);
    const userSnapshot = yield userRef.get();
    yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}
export function* onGoogleSignIn() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export default function* userSaga() {
  yield all([call(onGoogleSignIn)]);
}
