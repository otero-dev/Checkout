import React, {useState} from 'react';
import { Box, Card, InputField } from '../basic';
import OrderBump from './orderBump';

const PaypalOrder = (props) => {
    const [selected, setSelected] = useState(false);
    const checkBump = (value) => {
        setSelected(!value);
    }
    return (
        <Box mt={20}>
            <Card>
                <Box>
                    <h3>STEP 4: ORDER SUMMARY</h3>
                </Box>
                <hr />
                <Box>
                    <OrderBump {...props} active={selected} checkBump={checkBump}/>
                </Box>
                <Box>
                    <InputField placeholder='enter' />
                </Box>
            </Card>
        </Box>
        
    )
}

export default PaypalOrder;