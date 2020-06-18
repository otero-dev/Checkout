import React from "react";
import { Box, Card } from "../basic";
import PaypalItem from "./PaypalItem";
import CreditItem from "./CreditItem";

const SelectMethod = (props) => {
  console.log(props.selected);
  return (
    <Box mt={20}>
      <Card>
        <Box>
          <h3>STEP 2: PAYMENT METHOD</h3>
        </Box>
        <hr />
        <Box>
          <Box>
            <PaypalItem {...props} />
          </Box>
          <Box>
            <CreditItem {...props} />
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default SelectMethod;
