import React from "react";
import { Box, CheckOff, MenuItem, CheckOn } from "../basic";

const CreditItem = (props) => {
  return (
    <MenuItem onClick={() => props.selectMethod("credit")}>
      {props.selected === "credit" ? (
        <CheckOn>
          <img src="/images/check.svg" width="100%" alt="" />
        </CheckOn>
      ) : (
        <CheckOff />
      )}

      <Box ml={20} display="flex" justifyContent="space-between" width="90%">
        <Box>
          <h3>Credit Card</h3>
        </Box>
        <Box display="flex">
          <Box width={40} mr={2}>
            <img src="/images/express_card.svg" width="100%" alt="" />
          </Box>

          <Box width={40} mr={2}>
            <img src="/images/master_card.svg" width="100%" alt="" />
          </Box>

          <Box width={40} mr={2}>
            <img src="/images/visa_card.svg" width="100%" alt="" />
          </Box>

          <Box width={40} mr={2}>
            <img src="/images/discover_card.svg" width="100%" alt="" />
          </Box>
        </Box>
      </Box>
    </MenuItem>
  );
};

export default CreditItem;
