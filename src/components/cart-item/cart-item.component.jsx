import React from 'react';

// styles
import { CartItemcontainer, ItemDetails, ItemName } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemcontainer>
    <img src={imageUrl} alt="item" />
    <ItemDetails>
      <ItemName>{name}</ItemName>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetails>
  </CartItemcontainer>
);
export default React.memo(CartItem);
