import React from 'react';
import { ProductSummaryWrapper } from '../basic';
import Product from './Product';
import Summary from './Summary';


const ProductSummary = (props) => {
    return (
        <ProductSummaryWrapper>
            <Product images={props.images}/>
            <Summary />
        </ProductSummaryWrapper>
    )
}

export default ProductSummary;