import { useState, useEffect } from 'react';
import { Box, InputField, InvalidBox } from './index';
import PhoneInput, { normalize } from "react-phone-input-auto-format";

const Input = (props) => {
    
    const [edit, setEdit] = useState(false);
    const [valid, setValid] = useState(false);
    const [value, setValue] = useState('');
    const [start, setStart] = useState(false);

    const borderStyle = {
        boxShadow: edit ? '0px 0px 0px 2px rgba(26,178,44,0.5)' : start && !valid ? '0px 0px 0px 2px rgba(201, 31, 63, 0.5)' : 'none'
    }

    const INVALID_MSG = {
        email: 'Please Enter A Valid Email Address',
        street: 'Please Enter A Valid Street Address',
        city: 'Please Enter A Valid City',
        zipcode: 'Please Enter A Valid Zip Code',
        card_number: 'Please Enter A Valid Credit Card Number',
        security_code: 'Please Enter A Valid Security Code',
    };

    const checkValidation = () => {
        setEdit(false);
        if(props.name === 'email') {
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) setValid(true)
            else setValid(false);
        } else {
            if(value==='') setValid(false)
            else setValid(true);
        }
    }

    return (
        <Box>            
            <InputField 
                defaultValue={props.value?props.value: ''}
                placeholder={props.placeholder} 
                onChange={ev => setValue(ev.target.value)} 
                onBlur={checkValidation} onFocus={() => {setEdit(true); setStart(true)}} style={borderStyle}/>
            
            {(start && !valid && !edit) && <InvalidBox>
                {INVALID_MSG[props.name] ? INVALID_MSG[props.name]: 'This Field Is Required'}
            </InvalidBox>}
        </Box>
        
    )
}

export default Input;