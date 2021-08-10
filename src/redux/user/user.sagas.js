import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { auth, createUserProfileDocument, googleProvider } from '../../firebase/firebase.utils';
import {
  emailSignInFailure,
  emailSignInSuccess,
  googleSignInFailure,
  googleSignInSuccess,
} from './user.actions';
import { userActionTypes } from './user.types';

// google sign in saga
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

// email sign in saga
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield createUserProfileDocument(user);
    const userSnapshot = yield userRef.get();
    yield put(emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(emailSignInFailure(error));
  }
}
export function* onEmailSignIn() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export default function* userSaga() {
  yield all([call(onGoogleSignIn), call(onEmailSignIn)]);
}
