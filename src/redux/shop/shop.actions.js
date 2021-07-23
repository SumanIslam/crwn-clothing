import shopActionTypes from './shop.types';

const updateCollections = (collections) => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collections,
});

export default updateCollections;
