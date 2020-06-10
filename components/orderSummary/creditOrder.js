import React, {useState} from 'react';
import { Box, Card, InputField, CreditOrderDetail, CreditOrderShip, CreditOrderTotal, CardPayButton } from '../basic';
import OrderBump from './orderBump';
import SecurityLogo from './securityLogo';
import { getValueFromString } from '../../utils/metafields';

const CreditOrder = (props) => {
    let tmp_button_text = '', tmp_button_text_color, tmp_button_color;

    if(props.metadata.length > 0) {
        props.metadata.map(field => {
            if(field.key === 'button_text') tmp_button_text = getValueFromString(field.value, 'html');
            if(field.key === 'button_text_color') tmp_button_text_color = field.value;
            if(field.key === 'button_color') tmp_button_text = field.value;
        })
    };

    const button_text = tmp_button_text;
    const button_text_color = tmp_button_text_color;
    const button_color = tmp_button_color;

    const [selected, setSelected] = useState(false);
    const checkBump = (value) => {
        setSelected(!value);
    }



    return (
        <Box mt={20}>
            <Card>
                <Box>
                    <h3>STEP 6: ORDER SUMMARY</h3>
                </Box>
                <hr />
                <Box>
                    <OrderBump {...props} active={selected} checkBump={checkBump}/>
                </Box>
                <Box>
                    <InputField placeholder='enter' />
                </Box>
                <Box mt='17.6px'>
                    <CreditOrderDetail style={{background: `${selected?'whitesmoke': 'white'}`}}>
                        <Box> unPillow Jumbo</Box>
                        <Box>
                            $159.80
                        </Box>
                    </CreditOrderDetail>
                </Box>
                {selected && <CreditOrderDetail>
                    <Box>
                        unPillow Jumbo LifetimeWarranty
                    </Box>
                    <Box>
                        $9.97
                    </Box>
                </CreditOrderDetail>}
                <Box>
                    <CreditOrderShip>
                        <Box>
                            shipping: 
                        </Box>
                        <Box color='#1ab22c'>
                            FREE
                        </Box>
                    </CreditOrderShip>
                    <CreditOrderTotal>
                        <Box>
                            <strong>TOTAL:</strong>(before taxes)
                        </Box>
                        <Box>
                            $169.77
                        </Box>
                    </CreditOrderTotal>
                </Box>
                <Box>
                    <CardPayButton style={{backgroundColor: button_color, color: button_text_color}}>
                        <div dangerouslySetInnerHTML={{__html: button_text}} />
                    </CardPayButton>
                </Box>
                <Box mt='17.6px'>
                    <SecurityLogo {...props} />
                </Box>
            </Card>
        </Box>
        
    )
}

export default CreditOrder;