import { Box } from './index';
const AddressForm = (props) => {
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
        <Box mt={20}>
            <Box>Add Card Info</Box>
            <Elements stripe={stripePromise}>
                <CardElement options={options}/>
            </Elements>
        </Box>
    </Box>
    )
    
}