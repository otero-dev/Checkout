import React, {useMemo} from 'react';
import { Box, Card, SelectBox, InputField } from '../basic';
import Input from '../basic/customInputField';
import {Elements, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import { useEffect, useState } from "react";

import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';

import { STATES } from '../../utils/states';

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
    const [country, setCountry] = useState('');
    const [states, setStates] = useState('');

    const { ready, 
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions
    } = usePlacesAutocomplete({
      debounce: 300
    });

    return (
        <Box mt={20}>
            <Card>
                <Box>
                    <h3>STEP 4: SHIPPING INFORMATION</h3>
                </Box>
                <hr />
                <Box>
                    <Box>                      
                        <Input placeholder='Street Address' name='street'/>
                    </Box>
                    <Box>
                        <InputField placeholder='Apartment  or Suite (Optional)'/>
                    </Box>
                    <Box>
                        <Input placeholder='City' name='city'/>
                    </Box>
                    <Box>
                        <SelectBox onChange={ev => setCountry(ev.target.value)}>
                            <option value="">Country</option>
                            <option value="canada">Canada</option>
                            <option value="usa">United States</option>
                        </SelectBox>
                    </Box>
                    <Box display='flex' justifyContent='space-between'>
                        <Box width='60%'>
                          {country === 'usa' ? 
                            <SelectBox onChange={ev => setStates(ev.target.value)} defaultValue={states}>
                                <option value="">State</option>
                                {STATES.usa.map(el => <option value={el.value}>{el.state}</option>)}
                            </SelectBox>
                            : 
                            <SelectBox onChange={ev => setStates(ev.target.value)} defaultValue={states}>
                              <option value="">State</option>
                              {STATES.canada.map(el => <option value={el.value}>{el.state}</option>)}
                            </SelectBox>}
                        </Box>
                        <Box width='35%'>
                            <Input placeholder='Zip Code' name='zipcode'/>
                        </Box>
                    </Box>                    
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