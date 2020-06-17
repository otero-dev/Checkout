import React from "react";
import {
  Box,
  CheckOff,
  CheckOn,
  DiscountMenuItem,
  BigArrow,
  PriceTag,
} from "../basic";

const DiscoundCard = (props) => {
  return (
    <DiscountMenuItem
      onClick={() => props.selectOrder(props.index)}
      style={{ background: `${props.index === 2 ? "#ffbd03" : "white"}` }}
    >
      {props.active ? (
        <CheckOn>
          <img src="/images/check.svg" width="100%" alt="" />
          {props.index === 2 && (
            <BigArrow>
              <img src="/images/arrow.png" width="40px" alt="" ml="-100px" />
            </BigArrow>
          )}
        </CheckOn>
      ) : (
        <CheckOff>
          {props.index === 2 && (
            <BigArrow>
              <img src="/images/arrow.png" width="40px" alt="" ml="-100px" />
            </BigArrow>
          )}
        </CheckOff>
      )}

      <Box
        ml={10}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Box width="55%">
          <Box>
            {props.index === 2 ? <strong>Best Seller</strong> : ""}&nbsp;
            {props.discount}% OFF: &nbsp;{props.quantity}&nbsp;{props.shortName}
            {props.quantity > 1 ? "s" : ""}
          </Box>
          <Box>(Normally ${(props.price * props.quantity).toFixed(2)})</Box>
        </Box>
        <Box display="flex">
          <PriceTag ml={1}>${props.price}</PriceTag>
          <Box ml={1}>
            ${((props.price * (100 - props.discount)) / 100).toFixed(2)}
          </Box>
          <Box width="130px" ml={1}>
            {props.index === 2 ? (
              <strong>{props.rightText}</strong>
            ) : (
              props.rightText
            )}
          </Box>
        </Box>
      </Box>
    </DiscountMenuItem>
  );
};

export default DiscoundCard;
