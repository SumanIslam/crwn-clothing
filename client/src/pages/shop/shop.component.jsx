import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { ShopPageContainer } from './shop.styles';
import { selectShopCollectionsForPrerview } from '../../redux/shop/shop.selectors';

const ShopPage = ({ collections }) => (
  <ShopPageContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </ShopPageContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPrerview,
});

export default connect(mapStateToProps)(ShopPage);
