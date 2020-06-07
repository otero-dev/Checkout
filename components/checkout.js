import React, {useEffect, useState, useRef} from 'react';
import { Container, Box } from './basic';
import ProductSummary from './productSummary';
import SelectQuantity from './selectQuantity';
import SelectMethod from './selectMethod';
import CustomerInfo from './customerInfo';
import OrderSummary from './orderSummary';
import ShipInformation from './shipInformation';
import BillingAddress from './billingAddress';
import Nav from './navbar';

const CheckOutPage = (props) => {
  const [selectedMethod, setSelectedMethod] = useState('paypal');

  const changeMethod = (method) => {
    setSelectedMethod(method);
  }  
  return (
    <Box pb={10}>
      <Nav />
      <Container>
        <Box>
          <ProductSummary images={props.images}/>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Box width='48%'>
            <SelectQuantity />
          </Box>            
          <Box width='48%'>
            <SelectMethod selectMethod={changeMethod} selected={selectedMethod}/>
            <CustomerInfo />
            {selectedMethod === 'credit' && <React.Fragment>
              <ShipInformation />
              <BillingAddress />
            </React.Fragment>}
            <OrderSummary method={selectedMethod}/>
            {/* <div ref={v => (paypalRef = v)} /> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default CheckOutPage;
