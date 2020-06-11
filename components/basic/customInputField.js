import { useState, useEffect } from 'react';
import { Box, InputField, InvalidBox } from './index';
import PhoneInput, { normalize } from "react-phone-input-auto-format";

const Input = (props) => {
    const [value, setValue] = useState('');
    const [active, setActive] = useState(false);
    const [valid, setValid] = useState(false);
    const [startEdit, setStartEdit] = useState(false);
    
    useEffect(() => {        
        if(props.name === 'email') {
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) setValid(true)
            else setValid(false);
        }
        if(props.name === 'phone') {
            var phoneno = /^\d{10}$/;
            if(value.match(phoneno)){
                setValid(true);
            }
            else setValid(false);
        }
    }, [value]);

    useEffect(() => {
        setValid(true);
        if(!active && value==='' && startEdit) {
            setValid(false);
        }
    }, [active]);

    const borderStyle = {
        boxShadow: !valid ? '0px 0px 0px 2px rgba(201, 31, 63, 0.5)' : active ? '0px 0px 0px 2px rgba(26,178,44,0.5)' : 'none'
    }

    const INVALID_MSG = {
        phone: 'Please Enter A Valid Phone Number',
        email: 'Please Enter A Valid Email Address',
        street: 'Please Enter A Valid Street Address',
        city: 'Please Enter A Valid City',
        zipcode: 'Please Enter A Valid Zip Code',
        card_number: 'Please Enter A Valid Credit Card Number',
        security_code: 'Please Enter A Valid Security Code',
    };

    const onChangePhoneNumber = (value) => {
        const normalizeNumber = normalize(value);
        setValue(normalizeNumber);
    }

    return (
        <Box>
            {props.name === 'phone' ? <PhoneInput inputComponent={InputField} onChange={ onChangePhoneNumber } placeholder={props.placeholder} onBlur={() => setActive(false)} onFocus={() => {setActive(true); setStartEdit(true)}}/> : 
            <InputField 
                placeholder={props.placeholder} 
                onChange={ev => setValue(ev.target.value)} 
                onBlur={() => setActive(false)} onFocus={() => {setActive(true); setStartEdit(true)}} style={borderStyle}/>}
            
            {!valid && <InvalidBox>
                {INVALID_MSG[props.name] ? INVALID_MSG[props.name]: 'This Field Is Required'}
            </InvalidBox>}

        </Box>
        
    )
}

export default Input;