import { useState } from "react";
import { Box, InputField, InvalidBox } from "./index";
import { validateNumber } from "../../utils";

const CardInput = (props) => {
  const [edit, setEdit] = useState(false);
  const [valid, setValid] = useState(false);
  const [value, setValue] = useState("");
  const [start, setStart] = useState(false);

  const borderStyle = {
    boxShadow: edit
      ? "0px 0px 0px 2px rgba(26,178,44,0.5)"
      : start && !valid
      ? "0px 0px 0px 2px rgba(201, 31, 63, 0.5)"
      : "none",
  };

  const checkValidation = (ev) => {
    setEdit(false);
    let str = ev.replace(/[ -]/g, "");
    if (
      /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(
        str
      )
    )
      setValid(true);
    else setValid(false);
  };

  const changeValue = (value) => {
    var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    var matches = v.match(/\d{4,16}/g);
    var match = (matches && matches[0]) || "";
    var parts = [];
    for (var i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join("-");
    } else {
      return value;
      // console.log(value);
    }
  };

  const onKeyClick = (ev) => {
    let str = "0123456789";
    if (!validateNumber(ev)) {
      ev.preventDefault();
      return;
    }

    if (ev.key === "Backspace") {
      let deleted = value.slice(0, value.length - 1);
      setValue(deleted);
    } else {
      setValue(changeValue(value + ev.key));
    }
  };

  return (
    <Box>
      <InputField
        value={value}
        onKeyDown={(ev) => onKeyClick(ev)}
        placeholder={props.placeholder}
        onBlur={(ev) => checkValidation(ev.target.value)}
        onFocus={() => {
          setEdit(true);
          setStart(true);
        }}
        style={borderStyle}
      />

      {start && !valid && !edit && (
        <InvalidBox>Please Enter A Valid Credit Card Number</InvalidBox>
      )}
    </Box>
  );
};

export default CardInput;
