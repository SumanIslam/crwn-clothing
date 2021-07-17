import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

const selectShopCollections = createSelector([selectShop], (shop) => shop.collections);
export const selectCollections = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) => collections[collectionUrlParam]);

export default selectShopCollections;
