import React from 'react';
import { Box, Card } from '../basic';
import AddressForm from '../basic/addressForm';
import CardInputForm from '../basic/CreditInputForm';

const ShipInformation = (props) => {
    return (
        <Box mt={20}>
            <Card>
                <Box>
                    <h3>STEP 4: SHIPPING INFORMATION</h3>
                </Box>
                <hr />
                <Box>
                    <AddressForm />
                    <CardInputForm />
                </Box>
            </Card>
        </Box>
        
    )
}

export default ShipInformation;