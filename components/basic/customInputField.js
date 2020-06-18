import { useState, useEffect } from "react";
import { Box, InputField, InvalidBox } from "./index";
import { validateNumber } from "../../utils";

const Input = (props) => {
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

  const INVALID_MSG = {
    email: "Please Enter A Valid Email Address",
    city: "Please Enter A Valid City",
    zipcode: "Please Enter A Valid Zip Code",
    security_code: "Please Enter A Valid Security Code",
  };

  const checkValidation = (ev) => {
    setEdit(false);
    if (props.name === "email") {
      if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(ev))
        setValid(true);
      else {
        setValid(false);
        textInput.focus();
      }
    } else if (props.name === "security") {
      if (ev.length > 4) setValid(false);
      else setValid(true);
    } else {
      if (ev === "") setValid(false);
      else setValid(true);
    }
  };

  const onKeyDown = (ev) => {
    if (props.name === "security") {
      if (!validateNumber(ev)) ev.preventDefault();
    }
  };

  let textInput = null;
  useEffect(() => {
    if (props.name === "firstname" && props.step == 1) textInput.focus();
  }, []);

  return (
    <Box>
      <InputField
        maxLength={props.name === "security" ? 4 : 100}
        ref={(target) => {
          textInput = target;
        }}
        defaultValue={props.value ? props.value : ""}
        placeholder={props.placeholder}
        onKeyDown={(ev) => onKeyDown(ev)}
        onChange={(ev) => setValue(ev.target.value)}
        onBlur={(ev) => checkValidation(ev.target.value)}
        onFocus={() => {
          setEdit(true);
          setStart(true);
        }}
        style={borderStyle}
      />

      {start && !valid && !edit && (
        <InvalidBox>
          {INVALID_MSG[props.name]
            ? INVALID_MSG[props.name]
            : "This Field Is Required"}
        </InvalidBox>
      )}
    </Box>
  );
};

export default Input;
