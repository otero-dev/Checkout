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
  constructor(props) {
    super(props);
    this.state = {
      selectedMethod: 'paypal'
    }
  }

  componentDidMount() {

  }

  changeMethod = (method) => {
    console.log('method', method);
    this.setState({
      selectedMethod: method
    })
  }

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
              <SelectMethod selectMethod={this.changeMethod} selected={this.state.selectedMethod}/>
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
