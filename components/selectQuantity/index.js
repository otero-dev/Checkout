import React, {useState} from 'react';
import { Box, Card, DiscountBrand, DiscoundDash, DiscountDescription } from '../basic';
import { getValueFromString } from '../../utils/metafields';
import DiscoundCard from './dicountCard';

const SelectQuantity = (props) => {
    let tmp_offer_discount = [], tmp_offer_quantity = [], tmp_right_text, tmp_short_name;
    if(props.metadata.length > 0) {
        props.metadata.map(field => {
            if(field.key === 'offer_discount_1') tmp_offer_discount[0] = field.value;
            if(field.key === 'offer_discount_2') tmp_offer_discount[1] = field.value;
            if(field.key === 'offer_discount_3') tmp_offer_discount[2] = field.value;
            if(field.key === 'offer_discount_4') tmp_offer_discount[3] = field.value;
            if(field.key === 'offer_discount_5') tmp_offer_discount[4] = field.value;

            if(field.key === 'offer_quantity_1') tmp_offer_quantity[0] = field.value;
            if(field.key === 'offer_quantity_2') tmp_offer_quantity[1] = field.value;
            if(field.key === 'offer_quantity_3') tmp_offer_quantity[2] = field.value;
            if(field.key === 'offer_quantity_4') tmp_offer_quantity[3] = field.value;
            if(field.key === 'offer_quantity_5') tmp_offer_quantity[4] = field.value;

            if(field.key === 'offer_right_text') tmp_right_text = getValueFromString(field.value, 'html');
            if(field.key === 'product_shortname') tmp_short_name = getValueFromString(field.value, 'html');
        })
    };

    const offer_discount = tmp_offer_discount;
    console.log(offer_discount.length);
    const offer_quantity = tmp_offer_quantity; 
    const right_text = tmp_right_text;
    const short_name = tmp_short_name;

    const [nIndex, setNIndex] = useState(0);

    const selectOrder = (index) => {
        setNIndex(index);
    }
    
    return (
        <Box mt={20}>
            <Card>
                <Box display='flex'>
                    <DiscountBrand>
                        <DiscoundDash />
                        <Box>
                            <Box>{'55%'}</Box>
                            <Box>OFF</Box>
                        </Box>
                    </DiscountBrand>
                    <DiscountDescription>
                        <h3>
                            <p>{`Your 55% Discount Has Been Applied`}</p>
                        </h3>
                        <h4>
                            <p>All Orders above $50 get <strong>FREE SHIPPING</strong> When Ordered TODAY</p>
                        </h4>
                    </DiscountDescription>
                </Box>
                <Box>
                    <h3>STEP 1: SELECT ORDER QUANTITY</h3>
                </Box>
                <hr />
                <Box>                    
                    {offer_discount.length > 0 && <Box>
                        {offer_discount.map((offer, index) => {
                            return <DiscoundCard active={nIndex===index} selectOrder={selectOrder} index={index} key={index} discount={offer} quantity={offer_quantity[index]} rightText={right_text} shortName={short_name}/>
                        })}
                    </Box>}
                </Box>
            </Card>
        </Box>
        
    )
}

export default SelectQuantity;