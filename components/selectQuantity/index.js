import React from 'react';
import { Box, Card, DiscountBrand, DiscoundDash, DiscountDescription } from '../basic';

const SelectQuantity = (props) => {
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

                </Box>
            </Card>
        </Box>
        
    )
}

export default SelectQuantity;