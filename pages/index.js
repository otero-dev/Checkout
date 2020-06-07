import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CheckOutPage from '../components/checkout';

const Index = (props) => {
  const [images, setImages] = useState([]);
  const [metafields, setMetafields] = useState([]);

  useEffect(() => {
    async function fetchData() {      
      const res_metafields =  await axios.post('/api/metafields', {productId: props.productId});
      setMetafields(res_metafields.data);

      const res_product =  await axios.post('/api/products', {productId: props.productId});
      setImages(res_product.data);
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {metafields.length > 0 ? <CheckOutPage images={images} metadata={metafields}/> : <div />}
    </React.Fragment>
  )
}

Index.getInitialProps = async (context) => {
    const { id } = context.query;
    return {productId: id};
}

export default Index;