import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import {
  CheckoutHeaderContainer,
  CheckoutpageContainer,
  HeaderBlock,
  TotalBlock,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutpageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlock>
        <span>product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>remove</span>
      </HeaderBlock>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalBlock>
      <span>TOTAL: ${total}</span>
    </TotalBlock>
    <StripeCheckoutButton className="stripe-button" price={total} />
  </CheckoutpageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
