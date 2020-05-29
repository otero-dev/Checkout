import React, { Component } from 'react';
import { Container, Box } from './components/basic';
import ProductSummary from './components/productSummary';
import SelectQuantity from './components/selectQuantity';
import SelectMethod from './components/selectMethod';
import CustomerInfo from './components/customerInfo';
import OrderSummary from './components/orderSummary';
import ShipInformation from './components/shipInformation';
import BillingAddress from './components/billingAddress';


import Nav from './components/navbar';

class App extends Component {
  render() {
    return (
      <Box className="App" pb={10}>
        <Nav />
        <Container>
          <Box>
            <ProductSummary />
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Box width='48%'>
              <SelectQuantity />
            </Box>            
            <Box width='48%'>
              <SelectMethod />
              <CustomerInfo />
              <OrderSummary />
              <ShipInformation />
              <BillingAddress />
              <OrderSummary />
            </Box>
          </Box>
        </Container>
      </Box>
    );
  }
}

export default App;
