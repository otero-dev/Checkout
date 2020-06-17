import React, { useState } from "react";
import {
  Box,
  ProductImage,
  ProductOverview,
  ProductGallary,
  GallaryCell,
} from "../basic";

/**
 * Product fc component
 * @param
 * props: product images
 */

const Product = (props) => {
  const [selected, SetSelected] = useState(0);

  return (
    <ProductOverview>
      <ProductImage>
        <img src={props.images[selected]} width="100%" />
      </ProductImage>
      <ProductGallary>
        {props.images.map((image, index) => (
          <GallaryCell
            style={{
              border: `2px solid ${selected === index ? "#efefef" : "#fff"}`,
            }}
            onClick={() => SetSelected(index)}
          >
            <img src={image} width="100%" />
          </GallaryCell>
        ))}
      </ProductGallary>
    </ProductOverview>
  );
};

export default Product;
