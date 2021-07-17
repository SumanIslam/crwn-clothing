import { createSelector } from 'reselect';

// eslint-disable-next-line no-unused-vars
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

const selectShopCollections = createSelector([selectShop], (shop) => shop.collections);
export const selectCollections = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections.find((collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
  );

export default selectShopCollections;
