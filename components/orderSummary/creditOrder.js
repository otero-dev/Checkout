import React, {useState} from 'react';
import { Box, Card } from '../basic';
import OrderBump from './orderBump';

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
            </Card>
        </Box>
        
    )
}

export default CreditOrder;