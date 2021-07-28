import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

const selectShopCollections = createSelector([selectShop], (shop) => shop.collections);

export const selectShopCollectionsForPrerview = createSelector(
  [selectShopCollections],
  (collections) => (collections ? Object.keys(collections).map((key) => collections[key]) : [])
);

export const selectCollections = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionsFetching = createSelector([selectShop], (shop) => shop.isFetching);

export const selectIsCollectionsLoaded = createSelector([selectShop], (shop) => !!shop.collections);

export default selectShopCollections;
