import React from 'react';
import { ProductSummaryWrapper } from '../basic';
import Product from './Product';
import Summary from './Summary';

/**
 * 
 * @param
 * props: product data
 */

const ProductSummary = (props) => {
    return (
        <ProductSummaryWrapper>
            <Product {...props}/>
            <Summary metadata={props.metadata}/>
        </ProductSummaryWrapper>
    )
}

export default ProductSummary;