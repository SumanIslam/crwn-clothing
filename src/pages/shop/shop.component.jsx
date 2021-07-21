import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
// import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
      </Switch>
    </div>
  );
};

export default ShopPage;
