import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  googleProvider,
} from '../../firebase/firebase.utils';
import {
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
} from './user.actions';
import { userActionTypes } from './user.types';

// get snapshot from userAuth helper function
export function* getSnapshotFromUserAuth(user, additionData = null) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccess({ id: userSnapshot.id, ...userSnapshot.data(), displayName: additionData })
    );
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

// check if user is sign in or not
export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// sign out in saga
export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

// email sign up in saga
export function* signUpWithEmailAndPassword({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield getSnapshotFromUserAuth(user, displayName);
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onGoogleSignIn() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignIn() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOut() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUP() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUpWithEmailAndPassword);
}

// user saga
export function* userSagas() {
  yield all([
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onCheckUserSession),
    call(onSignOut),
    call(onSignUP),
  ]);
}
