import StripeCheckout from 'react-stripe-checkout';
import svg from '../../assets/crawn clothing.svg';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JEAs0SEmqan8qXQS287haIuCZJNDYfzZXFlpqvndZHzjZLjOISZCPxmN3AYe9jqb4X9B6Y4YHQONlvJGlXlMBS700Buh2JB9i';

  const onToken = (token) => {
    console.log(token);
    // eslint-disable-next-line no-alert
    alert('payment successful');
  };

  return (
    <StripeCheckout
      name="CRAWN CLOTHING Ltd."
      label="pay now"
      shippingAddress
      billingAddress
      image={svg}
      description={`your total is $${price}`}
      amount={priceForStripe}
      stripeKey={publishableKey}
      panelLabel="pay now"
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
