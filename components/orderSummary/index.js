import React from 'react';
import PaypalOrder from './paypalOrder';
import CreditOrder from './creditOrder';

const OrderSummary = (props) => {
    return (
        <React.Fragment>
            {props.method === 'paypal' ?  <PaypalOrder {...props}/> : < CreditOrder {...props}/>}
        </React.Fragment>
    )
}
export default OrderSummary;