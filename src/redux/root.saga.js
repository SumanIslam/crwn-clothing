import { call } from 'redux-saga/effects';
import { fetchCollectionStart } from './shop/shop.sagas';

export default function* rootSaga() {
  yield call(fetchCollectionStart);
}
