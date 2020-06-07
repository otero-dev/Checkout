import React, {useState} from 'react';
import { Box, Card, InputField } from '../basic';
import OrderBump from './orderBump';
import SecurityLogo from './securityLogo';

const CreditOrder = (props) => {
    const [selected, setSelected] = useState(false);
    const checkBump = (value) => {
        setSelected(!value);
    }
    return (
        <Box mt={20}>
            <Card>
                <Box>
                    <h3>STEP 6: ORDER SUMMARY</h3>
                </Box>
                <hr />
                <Box>
                    <OrderBump {...props} active={selected} checkBump={checkBump}/>
                </Box>
                <Box>
                    <InputField placeholder='enter' />
                </Box>
                <Box>
                    <SecurityLogo {...props} />
                </Box>
            </Card>
        </Box>
        
    )
}

export default CreditOrder;