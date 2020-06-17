import React, { useState, useEffect } from "react";
import axios from "axios";

import CheckOutPage from "../components/checkout";

const Index = (props) => {
  const [images, setImages] = useState([]);
  const [metafields, setMetafields] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res_metafields = await axios.post("/api/metafields", {
        productId: props.productId,
      });
      setMetafields(res_metafields.data);

      const res_product = await axios.post("/api/products", {
        productId: props.productId,
      });
      setPrice(res_product.data.price);
      setImages(res_product.data.images);
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {metafields.length > 0 ? (
        <CheckOutPage
          images={images}
          metadata={metafields}
          price={price}
          faq={props.faq}
          proof={props.proof}
          step={props.step}
        />
      ) : (
        <div />
      )}
    </React.Fragment>
  );
};

Index.getInitialProps = async (context) => {
  const { id, faq, proof, step } = context.query;
  console.log(step);
  return { productId: id, faq: faq, proof: proof, step: step };
};

export default Index;
