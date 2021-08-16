import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';
import CollectionPageContainer from './pages/collection/collection.container';
import Homepage from './pages/homepage/homepage.components';
import ShopPageContainer from './pages/shop/shop.container';
import SignInAndSignOut from './pages/sign-in-and-sign-out-page/sign-in-and-sign-out-page.component';
import { fetchCollectionsStart } from './redux/shop/shop.actions';
import { checkCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

// eslint-disable-next-line no-shadow
const App = ({ fetchCollectionsStart, checkCurrentUser, currentUser }) => {
  useEffect(() => {
    checkCurrentUser();
    fetchCollectionsStart();
  }, [checkCurrentUser, fetchCollectionsStart]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPageContainer} />
        <Route exact path="/shop/:collectionId" component={CollectionPageContainer} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignOut />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  checkCurrentUser: () => dispatch(checkCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
