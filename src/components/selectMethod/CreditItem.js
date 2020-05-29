import React, { useState, useEffect } from 'react';
import { Box, CheckOff, MenuItem } from '../basic';

const CreditItem = (props) => {    
    return (
        <MenuItem>
            <CheckOff />
            <Box ml={20} display='flex' alignItems='center'>
                <Box>
                    <h3>Credit Card</h3>
                </Box>
                <Box display='flex' ml={150}>
                    <Box width={40} mr={2}>
                        <img src='/static/images/express_card.svg' width='100%' alt="" />
                    </Box>

                    <Box width={40} mr={2}>
                        <img src='/static/images/master_card.svg' width='100%' alt="" />
                    </Box>

                    <Box width={40} mr={2}>
                        <img src='/static/images/visa_card.svg' width='100%' alt="" />
                    </Box>

                    <Box width={40} mr={2}>
                        <img src='/static/images/discover_card.svg' width='100%' alt="" />
                    </Box>
                </Box>
            </Box>
        </MenuItem>
    )
}

export default CreditItem;