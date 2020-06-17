import React from "react";
import { Box } from "../basic";

import {
  getValueFromObjectString,
  getValueFromString,
} from "../../utils/metafields";

const SecurityLogo = (props) => {
  let tmp_security_icon = "",
    tmp_guarantee_icon = "",
    tmp_guarantee_text = "";

  if (props.metadata.length > 0) {
    props.metadata.map((field) => {
      if (field.key === "security_icon")
        tmp_security_icon = getValueFromObjectString(field.value, "src");
      if (field.key === "guarantee_icon")
        tmp_guarantee_icon = getValueFromObjectString(field.value, "src");
      if (field.key === "guarantee_text")
        tmp_guarantee_text = getValueFromString(field.value, "html");
    });
  }

  const security_icon = tmp_security_icon;
  const guarantee_icon = tmp_guarantee_icon;
  const guarantee_text = tmp_guarantee_text;

  return (
    <Box mt={10}>
      <Box display="flex" justifyContent="center">
        <img src={security_icon} />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box>
          <img src={guarantee_icon} />
        </Box>
        <Box
          style={{ lineHeight: "20pt" }}
          dangerouslySetInnerHTML={{ __html: guarantee_text }}
          ml={20}
        />
      </Box>
    </Box>
  );
};

export default SecurityLogo;
