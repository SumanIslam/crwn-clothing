import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import shopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsFailed = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILED,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => (dispatch) => {
  const collectionRef = firestore.collection('collections');
  dispatch(fetchCollectionsStart());

  collectionRef
    .get()
    .then((snapshot) => {
      const collection = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collection));
    })
    .catch((error) => dispatch(fetchCollectionsFailed(error.message)));
};
