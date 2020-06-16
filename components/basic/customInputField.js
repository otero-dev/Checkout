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

    const checkValidation = (ev) => {
        setEdit(false);
        if(props.name === 'email') {
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(ev)) setValid(true)
            else setValid(false);
        } 
        else if(props.name === 'security') {
            if(ev.length > 4) setValid(false);
            else setValid(true);
        }
        else {
            if(ev==='') setValid(false)
            else setValid(true);
        }
    }

    const onKeyDown = (ev) => {
        console.log('here');
        if(props.name === 'security') {
            let str="\\!@#$%^&*()_+-=~`QWERTYUOP{}qwertyuiop[]ASDFGHJKL:\"|asdfghjkl;'ZXCVBNM<>?zxcvbvnm,./ ";
            if(str.indexOf(ev.key) > -1) ev.preventDefault();
        }
    }

    let textInput = null;
    useEffect(()=>{
        if(props.name==='firstname')textInput.focus();
    }, [])
    
    return (
        <Box>            
            <InputField 
                ref={target => { textInput = props.name === 'firstname'? target: null; }}
                defaultValue={props.value?props.value: ''}
                placeholder={props.placeholder}
                onKeyDown={ev => onKeyDown(ev)}
                onChange={ev => setValue(ev.target.value)}
                onBlur={ev => checkValidation(ev.target.value)} onFocus={() => {setEdit(true); setStart(true)}} style={borderStyle}/>
            
            {(start && !valid && !edit) && <InvalidBox>
                {INVALID_MSG[props.name] ? INVALID_MSG[props.name]: 'This Field Is Required'}
            </InvalidBox>}
        </Box>
        
    )
}

export default Input;