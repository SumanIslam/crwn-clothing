import React from 'react';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

// components or assets
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// styles
import { CartIconContainer, ShoppingIconContainer, ItemCount } from './cart-icon.styles';

// eslint-disable-next-line no-shadow
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer>
      <ShoppingIcon className="shopping-icon" />
    </ShoppingIconContainer>
    <ItemCount>{itemCount}</ItemCount>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
