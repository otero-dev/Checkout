import React from 'react';
import { Box, CheckOff, CheckOn, DiscountMenuItem, BigArrow } from '../basic';

const DiscoundCard = (props) => {
    return (
        <DiscountMenuItem onClick={() => props.selectOrder(props.index)} style={{background: `${props.index===2 ? '#ffbd03' : 'white'}`}}>
            {props.active ? <CheckOn>
                <img src='/images/check.svg' width='100%' alt=""/>
                {props.index===2 && <BigArrow>
                    <img src='/images/arrow.png' width='40px' alt='' ml='-100px'/>
                </BigArrow>}
            </CheckOn>
            : <CheckOff>
                {props.index===2 && <BigArrow>
                    <img src='/images/arrow.png' width='40px' alt='' ml='-100px'/>
                </BigArrow>}
            </CheckOff>
            }
            
            <Box ml={20} display='flex' alignItems='center' justifyContent='space-between' width="90%">
                <Box display='flex' alignItems='center' width="55%">
                    <p>{props.index===2 ? <strong>Best Seller</strong> : ''}&nbsp;{props.discount}% OFF:&nbsp;{props.quantity}&nbsp;{props.shortName}{props.quantity>1?'s': ''}&nbsp; (Normally ${(props.price * props.quantity).toFixed(2)})</p>
                </Box>
                <Box display='flex' width="130px">
                   <Box dangerouslySetInnerHTML={{__html: props.rightText}}></Box>
                </Box>
            </Box>
        </DiscountMenuItem>
    )
}

export default DiscoundCard;