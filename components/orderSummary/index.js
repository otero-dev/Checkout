import React, {useState} from 'react';
import axios from 'axios';
import PaypalOrder from './paypalOrder';
import CreditOrder from './creditOrder';



const OrderSummary = (props) => {
    const [discount, setDiscount] = useState({id: null, value: 0})
    const checkDiscount = async (code) => {
        const res_discount = await axios.post('/api/discounts', {userCode: code}); //C3M8YHDMB05Z
        console.log(res_discount.data);
        if(res_discount.data.length > 0) {
            setDiscount({id: res_discount.data[0].id, value: res_discount.data[0].value});
        }
        else setDiscount({id: null, value: 0});
        
    }
    return (
        <React.Fragment>
            {props.method === 'paypal' ?  <PaypalOrder {...props} checkDiscount={checkDiscount} discount={discount}/> : < CreditOrder {...props} checkDiscount={checkDiscount} discount={discount}/>}
        </React.Fragment>
    )
}
export default OrderSummary;