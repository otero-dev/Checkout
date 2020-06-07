import React from 'react';
import { Box, CheckOff, MenuItem } from '../basic';

const CreditItem = (props) => {    
    return (
        <MenuItem onClick={() => props.selectMethod('credit')}>            
            {props.selected==='credit' ? <Box width={20} height={20}>
                <img src='/images/check.png' width='100%' alt="" />
            </Box>
            : <CheckOff />}
            
            <Box ml={20} display='flex' alignItems='center'>
                <Box>
                    <h3>Credit Card</h3>
                </Box>
                <Box display='flex' ml={220}>
                    <Box width={40} mr={2}>
                        <img src='/images/express_card.svg' width='100%' alt="" />
                    </Box>

                    <Box width={40} mr={2}>
                        <img src='/images/master_card.svg' width='100%' alt="" />
                    </Box>

                    <Box width={40} mr={2}>
                        <img src='/images/visa_card.svg' width='100%' alt="" />
                    </Box>

                    <Box width={40} mr={2}>
                        <img src='/images/discover_card.svg' width='100%' alt="" />
                    </Box>
                </Box>
            </Box>
        </MenuItem>
    )
}

export default CreditItem;