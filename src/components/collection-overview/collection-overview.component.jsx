import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsForOverview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';
// import './collection-overview.styles.scss';
import { OverviewContainer } from './collection-overview.styles';

const CollectionOverview = ({ collections }) => (
  <OverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </OverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForOverview,
});

export default connect(mapStateToProps)(CollectionOverview);
