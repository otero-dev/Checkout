import React from "react";
import { Box, CheckOff, CheckOn, MenuItem } from "../basic";

const PaypalItem = (props) => {
  return (
    <MenuItem onClick={() => props.selectMethod("paypal")}>
      {props.selected === "paypal" ? (
        <CheckOn>
          <img src="/images/check.svg" width="100%" alt="" />
        </CheckOn>
      ) : (
        <CheckOff />
      )}
      <Box ml={20}>
        <img src="/images/paypal.svg" height={40} alt="" />
      </Box>
    </MenuItem>
  );
};

export default PaypalItem;
