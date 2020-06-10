import React from 'react';

import ReactCountryFlag from "react-country-flag"

import { Box, NavBar, Container, ContactUs, StoreLogo, SSLLogo } from './basic'
import { getValueFromObjectString, getValueFromString } from '../utils/metafields';

const Nav = (props) => {
    let tmp_store_logo = '', tmp_ssl_logo = '', tmp_contact_text = '', tmp_contact_email = '';
    if(props.metadata.length > 0) {
        props.metadata.map(field => {
            if(field.key === 'app_logo') tmp_store_logo = getValueFromObjectString(field.value, 'src');
            if(field.key === 'ssl_image') tmp_ssl_logo = getValueFromObjectString(field.value, 'src');
            if(field.key === 'contact_us_text') tmp_contact_text = getValueFromString(field.value, 'html');
            if(field.key === 'contact_us_email') tmp_contact_email = getValueFromString(field.value, 'html');
        })
    };   
    
    const store_logo = tmp_store_logo;
    const ssl_logo = tmp_ssl_logo;
    const contact_text = tmp_contact_text;
    const contact_email = tmp_contact_email;

    return (
        <NavBar>
            <Container>
                <Box display='flex' alignItems='center'>
                    <StoreLogo> 
                        <Box>
                            <img src={store_logo} alt='' />
                        </Box>
                        <SSLLogo>
                            <img src={ssl_logo} alt='' />
                        </SSLLogo>
                    </StoreLogo>
                    <Box display='flex' width='30%' alignItems='center' justifyContent='space-between'>
                        <Box width={'20%'}/>
                        <Box display='flex' alignItems='center' width='80%'>
                            <Box>
                                <ReactCountryFlag
                                    countryCode="US"
                                    svg
                                    style={{
                                        borderRadius: '10px',
                                        width: '3.5em',
                                        height: '2.5em',
                                    }}
                                    title="US"
                                />
                            </Box>
                            <ContactUs>
                                <Box dangerouslySetInnerHTML={{__html: contact_text}} />
                                <Box dangerouslySetInnerHTML={{__html: contact_email}} />
                            </ContactUs>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </NavBar>
    )
}

export default Nav;