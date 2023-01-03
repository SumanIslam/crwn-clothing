import React from 'react';

// dependencies
import axios from 'axios';

// Component or Assets
import StripeCheckout from 'react-stripe-checkout';
import svg from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JEAs0SEmqan8qXQS287haIuCZJNDYfzZXFlpqvndZHzjZLjOISZCPxmN3AYe9jqb4X9B6Y4YHQONlvJGlXlMBS700Buh2JB9i';

  const onToken = (token) => {
    axios({
      url: 'https://crwnclothingserver.onrender.com/payment',
      // url: 'http://localhost:5001/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        // eslint-disable-next-line no-alert
        alert('payment success');
      })
      .catch((err) => {
        console.log('payment Error: ', err);
        // eslint-disable-next-line no-alert
        alert('There was an issue with your payment. Please sure to use your credit card');
      });
  };

  return (
    <>
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
    </>
  );
};

export default StripeCheckoutButton;
