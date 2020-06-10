import React from 'react';
import { Box, Card, InputField } from '../basic';
import { getValueFromObjectString } from '../../utils/metafields';

const CustomerInfo = (props) => {
    let tmp_proof_image = '';
    if(props.metadata.length > 0) {        
        props.metadata.map(field => {            
            if(field.key === 'social_proof') tmp_proof_image = getValueFromObjectString(field.value, 'src');
        })
    };
    const proof_image = tmp_proof_image;
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
                {props.proof === 'true' && <Box mt={20}>
                    <img src={proof_image} width='100%' />
                </Box>}
            </Card>
        </Box>
    )
}

export default CustomerInfo;