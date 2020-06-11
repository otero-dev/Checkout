import React from 'react';
import { Box, Term, FooterBox } from './basic'

import { getValueFromObjectString } from '../utils/metafields';


const Footer = (props) => {
    let tmp_short_name = '', tmp_cert_logo = '';
    if(props.metadata.length > 0) {
        props.metadata.map(field => {
            if(field.key === 'product_shortname') tmp_short_name = field.value;
            if(field.key === 'footer_icon') tmp_cert_logo = getValueFromObjectString(field.value, 'src');
        })
    };   
    
    const short_name = tmp_short_name;
    const cert_logo = tmp_cert_logo;
    return (
        <FooterBox>
          <Box>
            <Box display='flex' justifyContent='center'>
                <span class="dash">Terms &amp; Conditions</span>
                <span class="dash">Privacy Policy</span>
                <span>Returns</span>
            </Box>
            <Box>
                <Term>By filling out the field, you consent for {short_name} to use automated technology, including texts and prerecorded messages, to contact you at the number and email provided about {short_name} offers.</Term>
            </Box>
            <Box display='flex' justifyContent='center'>
                <a href="https://www.dmca.com/Protection/Status.aspx?ID=" title="DMCA.com Protection Status" class="dmca-badge" target="_blank" rel="noopener"><img src={cert_logo} alt="DMCA.com Protection Status" width='100px' /> </a>
            </Box>
          </Box>
        </FooterBox>
    )
}

export default Footer;