import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H1bnFIV5nDNJYQikaJnERpL0hbl7O2qezqhWkWgzx0hzqwIz3v4ZJWR4nN8Ss8QCPwEi650ZhTMyB2ogHozOa2C00BewFcvjI";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      name="CRWN Clothing Ltd." // the pop-in header title
      description={`Your total is$${price}`} // the pop-in header subtitle
      image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
      label="Pay with Kreditkart" // text inside the Stripe button
      panelLabel="Pay Now" // prepended to the amount in the bottom pay button
      amount={priceForStripe} // cents
      currency="EURO"
      stripeKey={publishableKey}
      locale="de"
      shippingAddress
      billingAddress={false}
      // Note: enabling both zipCode checks and billing or shipping address will
      // cause zipCheck to be pulled from billing address (set to shipping if none provided).
      zipCode={false}     
      allowRememberMe // "Remember Me" option (default true)
      token={onToken} // submit callback
    />
  );
};
export default StripeCheckoutButton;
