import { useEffect, useState } from "react";
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';


import { Box, InputField, SelectBox } from './index';
import Input from './customInputField';


import { STATES } from '../../utils/states';


const AddressForm = (props) => {

    const [country, setCountry] = useState('');
    const [states, setStates] = useState('');

    return (
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
    </Box>
    )
}

export default AddressForm;