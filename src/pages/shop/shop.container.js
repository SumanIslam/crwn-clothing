import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import ShopPage from './shop.component';
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

const ShopPageContainer = compose(connect(mapStateToProps), WithSpinner)(ShopPage);

export default ShopPageContainer;
