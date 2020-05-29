import React from 'react';
import { Box } from '../basic'

const Summary = (props) => {
    const headline = props.headline ? props.headline : 'Stop Putting Off Your Dream Home Upgrades - Here’s the DIY way Americans are Transforming their Yards During Quarantine'    
    return (
        <Box width={'50%'} m='auto'>
            <Box m={1} display='flex' justifyContent='center'>
                <h1 style={{textAlign: 'center'}}>
                    {headline}
                </h1>
            </Box>
            
            <Box m={'15px'}>
                Now is the Perfect Time to Turn Dark Yards into Stunning Outdoor Spaces with PathBright            
            </Box>

            <Box m={'15px'}>
                Super Easy to Use - Just Stick it into the Ground and Enjoy Your Transformed Yard at Night            
            </Box>

            <Box m={'15px'}>
                Installs in Minutes - No Untangling Wires, Replacing Batteries, or Spending Money on Professional Help            
            </Box>

            <Box m={'15px'}>
                Solar Powered - Can Save Money on Your Power Bill by Using the Sun’s Free Energy            
            </Box>
        </Box>
    )
}

export default Summary;