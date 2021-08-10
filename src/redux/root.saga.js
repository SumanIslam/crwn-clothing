import { all, call } from '@redux-saga/core/effects';
import { fetchCollectionStart } from './shop/shop.sagas';
import userSaga from './user/user.sagas';

export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSaga)]);
}
