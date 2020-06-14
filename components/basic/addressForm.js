import { useEffect, useState } from "react";

import { Box, InputField, SelectBox } from './index';
import Input from './customInputField';
import StreetInput from './streetInput';


import { STATES } from '../../utils/states';


const AddressForm = (props) => {

    const [country, setCountry] = useState('');
    const [states, setStates] = useState('');
    const [city, setCity] = useState('');

    const fillAddressForm = (Country, States, City) => {
        setCity(City);
        setCountry(Country);
        setStates(States);
    };

    return (
    <Box>
        <Box>                      
            <StreetInput fillAddressForm={fillAddressForm}/>
        </Box>
        <Box>
            <InputField placeholder='Apartment  or Suite (Optional)'/>
        </Box>
        <Box>
            <Input placeholder='City' name='city' value={city}/>
        </Box>
        <Box>
            <SelectBox onChange={ev => setCountry(ev.target.value)}>
                <option value="">Country</option>
                <option value="canada" selected={country==='Canada'}>Canada</option>
                <option value="usa" selected={country==='USA'}>United States</option>
            </SelectBox>
        </Box>
        <Box display='flex' justifyContent='space-between'>
            <Box width='60%'>
                {country === 'USA' ? 
                <SelectBox onChange={ev => setStates(ev.target.value)}>
                    <option value="">State</option>
                    {STATES.usa.map(el => <option value={el.value} selected={el.value===states}>{el.state}</option>)}
                </SelectBox>
                : 
                <SelectBox onChange={ev => setStates(ev.target.value)}>
                    <option value="">State</option>
                    {STATES.canada.map(el => <option value={el.value} selected={el.value===states}>{el.state}</option>)}
                </SelectBox>}
            </Box>
            <Box width='35%'>
                <Input placeholder='Zip Code' name='zipcode'/>
            </Box>
        </Box>
    </Box>
    )
}

export default AddressForm;