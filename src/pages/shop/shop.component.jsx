import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import updateCollections from '../../redux/shop/shop.actions';

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
    const { match } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path={`${match.path}`} component={CollectionOverview} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
