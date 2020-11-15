import React from "react";
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from "reselect";
import { selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { CheckoutPageContainer, CheckoutHeaderContainer, CheckoutHeaderBlockContainer, CheckoutTotal } from './checkout.styles'
const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <CheckoutHeaderBlockContainer>
                <span>Product</span>
            </CheckoutHeaderBlockContainer>
            <CheckoutHeaderBlockContainer>
                <span>Description</span>
            </CheckoutHeaderBlockContainer>
            <CheckoutHeaderBlockContainer>
                <span>Quantity</span>
            </CheckoutHeaderBlockContainer>
            <CheckoutHeaderBlockContainer>
                <span>Price</span>
            </CheckoutHeaderBlockContainer>
            <CheckoutHeaderBlockContainer>
                <span>Remove</span>
            </CheckoutHeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
        <CheckoutTotal>
            TOTAL: €{total}
        </CheckoutTotal>

        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});
export default connect(mapStateToProps)(CheckoutPage);