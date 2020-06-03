import React from 'react';
import PaypalOrder from './paypalOrder';
import CreditOrder from './creditOrder';

const OrderSummary = (props) => {
    return (
        <React.Fragment>
            {props.method === 'paypal' ?  <PaypalOrder /> : < CreditOrder />}
        </React.Fragment>
    )
}
export default OrderSummary;