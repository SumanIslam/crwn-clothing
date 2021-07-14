import { connect } from 'react-redux';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

// eslint-disable-next-line no-shadow
const CheckoutItem = ({ cartItem, clearItemFromCart, addItemToCart, removeItemFromCart }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          role="button"
          tabIndex={0}
          onClick={() => removeItemFromCart(cartItem)}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" role="button" tabIndex={0} onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        role="button"
        tabIndex={0}
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
