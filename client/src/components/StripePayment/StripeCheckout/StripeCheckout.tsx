import React, { useState } from 'react';
import { stripeCheckout } from '../../../helpers/APICalls/stripeCheckout';
import StripeCheckout from 'react-stripe-checkout';
import Button from '@mui/material/Button';

const StripeCharge = (): JSX.Element => {
  const price = 10;

  const makePayment = async (token: any) => {
    await stripeCheckout(price, token);
  };

  const public_key = process.env.STRIPE_SECRET;
  return (
    <StripeCheckout
      stripeKey="pk_test_3dA62gQqenheCaTwMyKWEY9d00xxUHEEtH"
      token={makePayment}
      name="Pay For Our Services"
      amount={price * 100}
      shippingAddress
      billingAddress
    >
      <Button variant="outlined" sx={{ padding: '20px', fontWeight: 'bold' }}>
        Add new payment profile
      </Button>
    </StripeCheckout>
  );
};

export default StripeCharge;
