import React, { useState } from "react";
import { Box, Card, InputField, PaypalButton } from "../basic";
import OrderBump from "./orderBump";
import SecurityLogo from "./securityLogo";

const PaypalOrder = (props) => {
  const [selected, setSelected] = useState(false);
  const checkBump = (value) => {
    setSelected(!value);
  };
  return (
    <Box mt={20}>
      <Card>
        <Box>
          <h3>STEP 4: ORDER SUMMARY</h3>
        </Box>
        <hr />
        <Box>
          <OrderBump {...props} active={selected} checkBump={checkBump} />
        </Box>
        <Box>
          <InputField
            placeholder="enter"
            onBlur={(ev) => props.checkDiscount(ev.target.value)}
          />
        </Box>
        <Box>
          <PaypalButton>
            <Box>CHECKOUT WITH</Box>
            <Box>
              <img src="/images/paypal.svg" height={40} alt="" />
            </Box>
          </PaypalButton>
        </Box>
        <Box>
          <SecurityLogo {...props} />
        </Box>
      </Card>
    </Box>
  );
};

export default PaypalOrder;
