import { connect } from 'react-redux';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../redux/cart/cart.actions';

import {
  ArrowContainer,
  CheckoutItemContainer,
  ImageContainer,
  ItemName,
  ItemPrice,
  ItemQuantity,
  QuantityContainer,
  RemoveButton,
} from './checkout-item.styles';

// eslint-disable-next-line no-shadow
const CheckoutItem = ({ cartItem, clearItemFromCart, addItemToCart, removeItemFromCart }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <ItemName>{name}</ItemName>
      <QuantityContainer>
        <ArrowContainer onClick={() => removeItemFromCart(cartItem)}>&#10094;</ArrowContainer>
        <ItemQuantity>{quantity}</ItemQuantity>
        <ArrowContainer onClick={() => addItemToCart(cartItem)}>&#10095;</ArrowContainer>
      </QuantityContainer>

      <ItemPrice>{price}</ItemPrice>

      <RemoveButton onClick={() => clearItemFromCart(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
