import React, { useState, useEffect } from 'react';
import { Box, CheckOff, MenuItem } from '../basic';

const PaypalItem = (props) => {    
    return (
        <MenuItem>
            <CheckOff />
            <Box ml={20}>
                <img src='/static/images/paypal.svg' height={40} alt="" />
            </Box>            
        </MenuItem>
    )
}

export default PaypalItem;