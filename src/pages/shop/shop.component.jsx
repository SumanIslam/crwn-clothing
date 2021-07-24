import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import updateCollections from '../../redux/shop/shop.actions';
import { selectShopCollectionsForOverview } from '../../redux/shop/shop.selectors';

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const collection = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collection);
    });
  }

  render() {
    const { collections } = this.props;
    return (
      <shopPageContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </shopPageContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForOverview,
});

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
