import { takeLatest, call, put } from '@redux-saga/core/effects';
import shopActionTypes from './shop.types';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailed } from './shop.actions';

function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collection = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collection));
  } catch (error) {
    yield put(fetchCollectionsFailed(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync);
}
