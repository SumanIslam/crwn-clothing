import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import ToggleCartHidden from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

// eslint-disable-next-line no-shadow
const CartIcon = ({ ToggleCartHidden }) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div className="cart-icon" onClick={ToggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
