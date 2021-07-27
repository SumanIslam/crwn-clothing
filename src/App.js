import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Header from './components/header/header.component';
import WithSpinner from './components/with-spinner/with-spinner.component';
import {
  auth,
  convertCollectionsSnapshotToMap,
  createUserProfileDocument,
  firestore,
} from './firebase/firebase.utils';
import CheckoutPage from './pages/checkout/checkout.component';
import CollectionPage from './pages/collection/collection.component';
import Homepage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignOut from './pages/sign-in-and-sign-out-page/sign-in-and-sign-out-page.component';
import { selectLoading } from './redux/shop/shop.selectors';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import updateCollections from './redux/shop/shop.actions';

const ShopPageWithSpinner = WithSpinner(ShopPage);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class App extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { setCurrentUser, updateCollections } = this.props;

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

    const collectionRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collection = await convertCollectionsSnapshotToMap(snapshot);
      console.log(collection);
      updateCollections(collection);
      // setLoading(false);
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubscribeFromSnapshot();
  }

  render() {
    // eslint-disable-next-line no-shadow
    const { currentUser } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" render={() => <ShopPageWithSpinner isLoading={loading} />} />
          <Route
            exact
            path="/shop/:collectionId"
            render={(routeProps) => (
              <CollectionPageWithSpinner isLoading={loading} {...routeProps} />
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
  setLoading: selectLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  updateCollections: (collections) => dispatch(updateCollections(collections)),
  // setLoading: (boolean) => dispatch(setLoading(boolean)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
