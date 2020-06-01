import React from 'react';
import { Box, CheckOff, MenuItem } from '../basic';

const PaypalItem = (props) => {    
    return (
        <MenuItem onClick={() => props.selectMethod('paypal')}>
            {props.selected === 'paypal' ? <Box width={24} height={24}>
                <img src='/static/images/check.png' width='100%' alt="" />
            </Box>
            : <CheckOff />}
            <Box ml={20}>
                <img src='/static/images/paypal.svg' height={40} alt="" />
            </Box>            
        </MenuItem>
    )
}

export default PaypalItem;