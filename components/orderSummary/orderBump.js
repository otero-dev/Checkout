import React from 'react';
import { Box, BumpCard, CheckOff, CheckOn, Arrow } from '../basic';

import { getValueFromObjectString, getValueFromString } from '../../utils/metafields';

const OrderBump = (props) => {
    let tmp_bump_icon = '', tmp_bump_headline = '', tmp_bump_offer ='';

    if(props.metadata.length > 0) {
        console.log(props.metadata);
        props.metadata.map(field => {
            if(field.key === 'order_bump_icon') tmp_bump_icon = getValueFromObjectString(field.value, 'src');
            if(field.key === 'order_bump_headline') tmp_bump_headline = getValueFromString(field.value, 'html');
            if(field.key === 'order_bump_offer') tmp_bump_offer = getValueFromString(field.value, 'html');
        })
    };

    const bump_icon = tmp_bump_icon;
    const bump_headline = tmp_bump_headline;
    const bump_offer = tmp_bump_offer;

    return (
        <BumpCard onClick={() => props.checkBump(props.active)}>
            <Box display='flex' justifyContent='center'>
                <img src={bump_icon} />
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center'>
                {props.active ? <CheckOn>
                    <img src='/images/check.svg' width='100%' alt=""/>
                    <Arrow>
                        <img src='/images/arrow.png' width='30px' alt='' ml='-100px'/>
                    </Arrow>
                </CheckOn>
                : <CheckOff>
                    <Arrow>
                        <img src='/images/arrow.png' width='30px' alt='' ml='-100px'/>
                    </Arrow>
                </CheckOff>}                
                <Box dangerouslySetInnerHTML={{__html: bump_headline}} ml={10}/>
            </Box>
            <Box dangerouslySetInnerHTML={{__html: bump_offer}} textAlign='center' px={10}/>
        </BumpCard>
        
    )
}

export default OrderBump;