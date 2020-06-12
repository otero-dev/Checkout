import React, { useState, useEffect } from 'react';
import { Box, Card, CheckOff, CheckOn } from '../basic';
import AddressForm from '../basic/addressForm';

const BillingAddress = (props) => {
    const [useSame, setUseSame] = useState(true);
    useEffect(() => {

    }, [useSame])
    return (
        <Box mt={20}>
            <Card>
                <Box>
                    <h3>STEP 5: BILLING ADDRESS</h3>
                </Box>
                <hr />
                <Box>
                    <Box onClick={() => setUseSame(true)} display='flex' height={30} alignItems='center'>
                        {useSame ? <CheckOn>
                            <img src='/images/check.svg' width='100%' alt=""/>
                        </CheckOn>
                        : <CheckOff />}
                        <Box ml={20}>
                            Same as shipping address
                        </Box>
                    </Box>
                    <Box onClick={() => setUseSame(false)} display='flex' height={30} alignItems='center'>
                        {!useSame ? <CheckOn>
                            <img src='/images/check.svg' width='100%' alt=""/>
                        </CheckOn>
                        : <CheckOff />}
                        <Box ml={20}>
                            Use a different billing address
                        </Box>
                    </Box>
                </Box>
                {!useSame && <AddressForm />}
            </Card>
        </Box>
    )
}

export default BillingAddress;