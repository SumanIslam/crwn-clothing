import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { auth, createUserProfileDocument, googleProvider } from '../../firebase/firebase.utils';
import { signInFailure, signInSuccess } from './user.actions';
import { userActionTypes } from './user.types';

// get snapshot from userAuth helper function
export function* getSnapshotFromUserAuth(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// google sign in saga
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// email sign in saga
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* onGoogleSignIn() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignIn() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export default function* userSaga() {
  yield all([call(onGoogleSignIn), call(onEmailSignIn)]);
}
