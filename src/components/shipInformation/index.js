import React from 'react';
import { Box, Card, InputField, SelectBox } from '../basic';

const ShipInformation = (props) => {    
    return (
        <Box mt={20}>
            <Card>
                <Box>
                    <h3>STEP 4: SHIPPING INFORMATION</h3>
                </Box>
                <hr />
                <Box>
                    <Box>
                        <InputField placeholder='Street Address'/>
                    </Box>
                    <Box>
                        <InputField placeholder='Apartment  or Suite (Optional)'/>
                    </Box>
                    <Box>
                        <InputField placeholder='City'/>
                    </Box>
                    <Box>
                        <SelectBox>
                            <option value="">Canada</option>
                            <option value="canada">Canada</option>
                            <option value="usa">United States</option>
                        </SelectBox>
                    </Box>
                    <Box display='flex' justifyContent='space-between'>
                        <Box width='60%'>
                            <SelectBox>
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
                        </Box>
                        <Box width='35%'>
                            <InputField placeholder='Zip Code'/>
                        </Box>
                    </Box>
                    <Box>
                        <InputField placeholder='Credit Card Number'/>
                    </Box>
                    <Box>
                        <InputField placeholder='Security Code (3~4 Digits)'/>
                    </Box>
                    <Box display='flex' justifyContent='space-between'>
                        <Box width='48%'>
                            <SelectBox>
                            <option value="0">Exp Month</option>
                            <option value="01">01 - January</option>
                            <option value="02">02 - February</option>
                            <option value="03">03 - March</option>
                            <option value="04">04 - April</option>
                            <option value="05">05 - May</option>
                            <option value="06">06 - June</option>
                            <option value="07">07 - July</option>
                            <option value="08">08 - August</option>
                            <option value="09">09 - September</option>
                            <option value="10">10 - October</option>
                            <option value="11">11 - November</option>
                            <option value="12">12 - December</option>
                            </SelectBox>
                        </Box>
                        <Box width='48%'>
                            <SelectBox>
                                <option value="0">Exp Year</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                                <option value="2032">2032</option>
                                <option value="2033">2033</option>
                                <option value="2034">2034</option>
                            </SelectBox>
                        </Box>
                    </Box>
                </Box>
            </Card>
        </Box>
        
    )
}

export default ShipInformation;