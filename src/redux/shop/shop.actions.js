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
