import React from 'react';
import { Box, Card, InputField } from '../basic';

const CustomerInfo = (props) => {
    return (
        <Box mt={20}>
            <Card>
                <Box>
                    <h3>STEP 3: CUSTOMER INFORMATION</h3>
                </Box>
                <hr />
                <Box>
                    <Box display='flex' justifyContent='space-between'>
                        <Box width='48%'>
                            <InputField placeholder='First Name' required/>
                        </Box>
                        <Box width='48%'>
                            <InputField placeholder='Last Name' required/>
                        </Box>
                    </Box>
                    <Box>
                        <InputField placeholder='E-mail' required/>
                    </Box>
                    <Box>
                        <InputField type='tel' placeholder='Phone' required/>
                    </Box>
                </Box>
            </Card>
        </Box>
    )
}

export default CustomerInfo;