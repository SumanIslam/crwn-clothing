import React, { useEffect, lazy, Suspense } from 'react';

// Redux
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStart } from './redux/shop/shop.actions';
import { checkCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

// components
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';

// Error boundary Component
import ErrorBoundary from './components/error-boundary/error-boundary.component';

// styles
import { GlobalStyles } from './global.styles';

// Lazy loaded Components
const HomePage = lazy(() => import('./pages/homepage/homepage.components'));
const ShopPageContainer = lazy(() => import('./pages/shop/shop.container'));
const SignInAndSignOutPage = lazy(() =>
  import('./pages/sign-in-and-sign-out-page/sign-in-and-sign-out-page.component')
);
const CollectionPageContainer = lazy(() => import('./pages/collection/collection.container'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

// eslint-disable-next-line no-shadow
const App = ({ fetchCollectionsStart, checkCurrentUser, currentUser }) => {
  useEffect(() => {
    checkCurrentUser();
    fetchCollectionsStart();
  }, [checkCurrentUser, fetchCollectionsStart]);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPageContainer} />
            <Route exact path="/shop/:collectionId" component={CollectionPageContainer} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignOutPage />)}
            />
          </Suspense>
        </ErrorBoundary>
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
