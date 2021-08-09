import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import CheckoutPage from './pages/checkout/checkout.component';
import CollectionPageContainer from './pages/collection/collection.container';
import Homepage from './pages/homepage/homepage.components';
import ShopPageContainer from './pages/shop/shop.container';
import SignInAndSignOut from './pages/sign-in-and-sign-out-page/sign-in-and-sign-out-page.component';
import { fetchCollectionsStart } from './redux/shop/shop.actions';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { setCurrentUser, fetchCollectionsStart } = this.props;

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

    fetchCollectionsStart();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    // eslint-disable-next-line no-shadow
    const { currentUser } = this.props;
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
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
