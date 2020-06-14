import React from 'react';
import { Box, Card } from '../basic';
import Input from '../basic/customInputField';
import Phone from '../basic/phoneInput';
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
                            <Input placeholder='First Name' name='firstname'/>
                        </Box>
                        <Box width='48%'>
                            <Input placeholder='Last Name'name='lastname'/>
                        </Box>
                    </Box>
                    <Box>
                        <Input placeholder='E-mail' name='email'/>
                    </Box>
                    <Phone />
                </Box>
                {props.proof === 'true' && <Box mt={20}>
                    <img src={proof_image} width='100%' />
                </Box>}
            </Card>
        </Box>
    )
}

export default CustomerInfo;