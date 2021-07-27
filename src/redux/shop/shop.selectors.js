import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

const selectShopCollections = createSelector([selectShop], (shop) => shop.collections);
export const selectLoading = createSelector([selectShop], (shop) => shop.isLoading);

export const selectShopCollectionsForPrerview = createSelector(
  [selectShopCollections],
  (collections) => (collections ? Object.keys(collections).map((key) => collections[key]) : [])
);

export const selectCollections = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export default selectShopCollections;
