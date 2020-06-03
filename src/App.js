import React, {useEffect, useState, useRef} from 'react';
import { Container, Box } from './components/basic';
import ProductSummary from './components/productSummary';
import SelectQuantity from './components/selectQuantity';
import SelectMethod from './components/selectMethod';
import CustomerInfo from './components/customerInfo';
import OrderSummary from './components/orderSummary';
import ShipInformation from './components/shipInformation';
import BillingAddress from './components/billingAddress';

import Nav from './components/navbar';


function App(){
  // return (
  //   <Elements stripe={stripePromise}>
  //     <CardNumberElement />        
  //     <CardExpiryElement />
  //     <CardCvcElement />
  //   </Elements>
  // );
  const [selectedMethod, setSelectedMethod] = useState('paypal');
  const [paidFor, setPaidFor] = useState(false);
  const [loaded, setLoaded] = useState(false);

  let paypalRef = useRef();

  const product = {
    price: 777.77,
    description: 'fancy chair, like new',
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=ARNRNvgJTH0oaRUrQUC-p-MG";
    script.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(script);

    if(loaded) {
      setTimeout(() => {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: 'test order description',
                    amound: {
                      currency_code: "USD",
                      value: 10.0
                    }
                  }
                ]
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              setPaidFor(true);
              console.log(order);
            },
          })
          .render(paypalRef);
      });
    }
  });

  const changeMethod = (method) => {
    setSelectedMethod(method);
  }  
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
            <SelectMethod selectMethod={changeMethod} selected={selectedMethod}/>
            <CustomerInfo />
            {selectedMethod === 'credit' && <React.Fragment>
              <ShipInformation />
              <BillingAddress />
            </React.Fragment>}
            <OrderSummary method={selectedMethod}/>
            <div ref={v => (paypalRef = v)} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
