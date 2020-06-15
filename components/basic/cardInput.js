import { useState, useEffect } from 'react';
import { Box, InputField, InvalidBox } from './index';

const CardInput = (props) => {
    
    const [edit, setEdit] = useState(false);
    const [valid, setValid] = useState(false);
    const [value, setValue] = useState('');
    const [start, setStart] = useState(false);

    const borderStyle = {
        boxShadow: edit ? '0px 0px 0px 2px rgba(26,178,44,0.5)' : start && !valid ? '0px 0px 0px 2px rgba(201, 31, 63, 0.5)' : 'none'
    }

    
    const checkValidation = (ev) => {
        setEdit(false);
        if(props.name === 'email') {
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(ev)) setValid(true)
            else setValid(false);
        } else {
            if(ev==='') setValid(false)
            else setValid(true);
        }
    }

    const changeValue = (value) => {
        var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        var matches = v.match(/\d{4,16}/g);
        var match = matches && matches[0] || ''
        var parts = []
        for (var i=0, len=match.length; i<len; i+=4) {
            parts.push(match.substring(i, i+4))
        }
        if (parts.length) {
            return parts.join('-')

        } else {
            return value
            // console.log(value);
        }
    }

    const onKeyClick = (ev) => {
        let str="0123456789";
        if(str.indexOf(ev.key) > 1 || ev.key === 'Backspace') {
            if(ev.key === 'Backspace') {
                let deleted = value.slice(0, value.length -1);
                setValue(deleted);
            } else {
                setValue(changeValue(value + ev.key))
            }
        }
        else
            ev.preventDefault();
            return;
    }

    return (
        <Box>            
            <InputField 
                value ={value} 
                onKeyDown={(ev) => onKeyClick(ev)}
                placeholder={props.placeholder}
                onBlur={ev => checkValidation(ev.target.value)} onFocus={() => {setEdit(true); setStart(true)}} style={borderStyle}/>
            
            {(start && !valid && !edit) && <InvalidBox>
                Please Enter A Valid Credit Card Number
            </InvalidBox>}
        </Box>
        
    )
}

export default CardInput;