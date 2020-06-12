import React, {useMemo} from 'react';
import { Box, Card, SelectBox, InputField } from '../basic';
import Input from '../basic/customInputField';
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
    const [country, setCountry] = useState('');
    const [states, setStates] = useState('');
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
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AS">American Samoa</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="AA">Armed Forces Americas</option>
                                <option value="AE">Armed Forces Europe, Canada, Africa and Middle East</option>
                                <option value="AP">Armed Forces Pacific</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="GU">Guam</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MH">Marshall Islands</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="FM">Micronesia</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="MP">Northern Mariana Islands</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PW">Palau</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VI">Virgin Islands</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </SelectBox>
                            : 
                            <SelectBox onChange={ev => setStates(ev.target.value)} defaultValue={states}>
                              <option value="">State</option>
                              <option value="AB">Alberta</option>
                              <option value="BC">British Columbia</option>
                              <option value="MB">Manitoba</option>
                              <option value="NB">New Brunswick</option>
                              <option value="NL">Newfoundland and Labrador</option>
                              <option value="NT">Northwest Territories</option>
                              <option value="NS">Nova Scotia</option>
                              <option value="NU">Nunavut</option>
                              <option value="ON">Ontario</option>
                              <option value="PE">Prince Edward Island</option>
                              <option value="QC">Quebec</option>
                              <option value="SK">Saskatchewan</option>
                              <option value="YT">Yukon</option>
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