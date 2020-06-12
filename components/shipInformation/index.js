import React, {useMemo} from 'react';
import { Box, Card, SelectBox, InputField } from '../basic';
import AddressForm from '../basic/addressForm';
import {Elements, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import { useEffect, useState } from "react";


const useResponsiveFontSize = () => {
  const getFontSize = () => (window.innerWidth < 450 ? "18px" : "20px");
  const [fontSize, setFontSize] = useState(getFontSize);

  useEffect(() => {
    const onResize = () => {
      setFontSize(getFontSize());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return fontSize;
}


const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');
const useOptions = () => {
    const fontSize = useResponsiveFontSize();
    const options = useMemo(
      () => ({
        style: {
          base: {
            fontSize,
            color: "gray",
            letterSpacing: "0.025em",
            fontFamily: "Source Code Pro, monospace",
            backgroundColor: "whitesmoke",
            "::placeholder": {
              color: "#aab7c4"
            }
          },
          invalid: {
            color: "#9e2146"
          }
        }
      }),
      [fontSize]
    );
  
    return options;
  };

const ShipInformation = (props) => {    
    const options = useOptions();
    return (
        <Box mt={20}>
            <Card>
                <Box>
                    <h3>STEP 4: SHIPPING INFORMATION</h3>
                </Box>
                <hr />
                <Box>
                    <AddressForm />
                    <Box mt={20}>
                        <Box>Add Card Info</Box>
                        <Elements stripe={stripePromise}>
                            <CardElement options={options}/>
                        </Elements>
                    </Box>
                </Box>
            </Card>
        </Box>
        
    )
}

export default ShipInformation;