import React from 'react';
import { Box, CheckOff, CheckOn, DiscountMenuItem } from '../basic';

const DiscoundCard = (props) => {
    return (
        <DiscountMenuItem onClick={() => props.selectOrder(props.index)} style={{background: `${props.index===2 ? '#ffbd03' : 'white'}`}}>
            {props.active ? <CheckOn>
                <img src='/images/check.svg' width='100%' alt=""/>
            </CheckOn>
            : <CheckOff />}
            
            <Box ml={20} display='flex' alignItems='center' justifyContent='space-between' width="90%">
                <Box display='flex' alignItems='center'>
                    {props.discount}% OFF: {props.quantity}
                    <Box ml='10px' dangerouslySetInnerHTML={{__html: props.shortName}} />
                </Box>
                <Box display='flex' width="130px">
                   <Box dangerouslySetInnerHTML={{__html: props.rightText}}></Box>
                </Box>
            </Box>
        </DiscountMenuItem>
    )
}

export default DiscoundCard;