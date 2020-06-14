import {useState, useEffect} from 'react';
import PhoneInput from 'react-phone-input-2';
import { Box, InvalidBox } from './index';

const Phone = () => {
    
    const [edit, setEdit] = useState(false);
    const [valid, setValid] = useState(false);
    const [phone, setPhone] = useState('');
    const [start, setStart] = useState(false);
    
    const input_style = {
        width: '100%',  
        height: '100%',
        outline: 'none',
        border: 'none',
        marginTop: '17.6px',
        backgroundColor: 'whitesmoke',
        padding: '17.6px',
        fontSize: '16px',
        paddingLeft: '70px',
    };

    const container_style = {
        borderRadius: '5px',
        width: '100%',
        marginTop: '17.2px',
        height: '53.2px',
        boxShadow: !valid && start ? '0px 0px 0px 2px rgba(201, 31, 63, 0.5)' : edit ? '0px 0px 0px 2px rgba(26,178,44,0.5)' : 'none'
    };

    const button_style = {
        background: 'white',
        width: '50px',
        height: '30px',
        top: '12.5px',
        left: '10px',
        border: 'none',
        boxShadow: '2px 5px 12px rgba(0, 0, 0, 0.15)',
        borderRadius: '5px'
    }

    const checkValidation = () => {
        setEdit(false);
        if(/^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/.test(phone)) setValid(true)
        else setValid(false);
    }

    const onChange = number => {
        setPhone(number);
    }

    return (
        <Box>
            <PhoneInput
                placeholder={'Phone'}
                country={'us'}
                onlyCountries={['us', 'ca']}
                localization={{de: 'Deutschland', es: 'España'}}
                inputStyle={input_style}
                containerStyle={container_style}
                buttonStyle={button_style}
                onFocus={() => {setEdit(true); setStart(true)}}
                onBlur={checkValidation}
                onChange={phone => onChange(phone)}
            />
            {(start && !valid && !edit) &&  <InvalidBox>
                Please Enter A Valid Phone Number
            </InvalidBox>}
        </Box>
    )
}

export default Phone;