import React from 'react';
import { ProductSummaryWrapper } from '../basic';
import Product from './Product';
import Summary from './Summary';


const ProductSummary = (props) => {
    return (
        <ProductSummaryWrapper>
            <Product />
            <Summary />
        </ProductSummaryWrapper>
    )
}

export default ProductSummary;