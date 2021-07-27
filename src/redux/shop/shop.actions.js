import shopActionTypes from './shop.types';

const updateCollections = (collections) => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collections,
});

export const setLoading = (boolean) => ({
  type: shopActionTypes.SET_LOADING,
  payload: boolean,
});

export default updateCollections;
