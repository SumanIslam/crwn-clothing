import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import svg from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JEAs0SEmqan8qXQS287haIuCZJNDYfzZXFlpqvndZHzjZLjOISZCPxmN3AYe9jqb4X9B6Y4YHQONlvJGlXlMBS700Buh2JB9i';
  console.log(process.env.PUBLISHABLE_KEY);

  const onToken = (token) => {
    console.log(token);
    axios({
      url: 'http://localhost:5000/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        // eslint-disable-next-line no-alert
        alert('payment successful');
      })
      .catch((err) => {
        console.log('payment Error: ', err);
        // eslint-disable-next-line no-alert
        alert('There was an issue with your payment. Please sure to use your credit card');
      });
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
