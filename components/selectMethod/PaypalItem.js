import React from 'react';
import { Box, CheckOff, MenuItem } from '../basic';

const PaypalItem = (props) => {    
    return (
        <MenuItem onClick={() => props.selectMethod('paypal')}>
            {props.selected === 'paypal' ? <Box width={20} height={20}>
                <img src='/images/check.png' width='100%' alt="" />
            </Box>
            : <CheckOff />}
            <Box ml={20}>
                <img src='/images/paypal.svg' height={40} alt="" />
            </Box>            
        </MenuItem>
    )
}

export default PaypalItem;