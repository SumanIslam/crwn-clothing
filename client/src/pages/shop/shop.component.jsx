import React from 'react';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsForPrerview } from '../../redux/shop/shop.selectors';

// Components
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

// Styles
import { ShopPageContainer } from './shop.styles';

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
