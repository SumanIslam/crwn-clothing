import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Header from './components/header/header.component';
import WithSpinner from './components/with-spinner/with-spinner.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import CheckoutPage from './pages/checkout/checkout.component';
import CollectionPage from './pages/collection/collection.component';
import Homepage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignOut from './pages/sign-in-and-sign-out-page/sign-in-and-sign-out-page.component';
import { fetchCollectionsStartAsync } from './redux/shop/shop.actions';
import {
  selectIsCollectionsFetching,
  selectIsCollectionsLoaded,
} from './redux/shop/shop.selectors';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

const ShopPageWithSpinner = WithSpinner(ShopPage);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { setCurrentUser, fetchCollectionsStartAsync } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });

    fetchCollectionsStartAsync();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    // eslint-disable-next-line no-shadow
    const { currentUser, isCollectionFetching, selectIsCollectionsLoaded } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path="/shop"
            render={() => <ShopPageWithSpinner isLoading={isCollectionFetching} />}
          />
          <Route
            exact
            path="/shop/:collectionId"
            render={(routeProps) => (
              <CollectionPageWithSpinner isLoading={!selectIsCollectionsLoaded} {...routeProps} />
            )}
          />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignOut />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCollectionFetching: selectIsCollectionsFetching,
  selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
