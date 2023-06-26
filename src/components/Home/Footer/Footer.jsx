import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
const Footer = () => {
    return (
        <>
            <Stack direction='row' spacing={4} justifyContent="center" mt={{xs:5, md:10}} mb={{xs:2, md:3}}>
                <GoogleIcon sx={iconStyle.socialIcon} />
                <FacebookOutlinedIcon sx={iconStyle.socialIcon} />
                <LinkedInIcon sx={iconStyle.socialIcon} />
                <TwitterIcon sx={iconStyle.socialIcon} />
            </Stack>
            <Stack direction="column" justifyContent="center" alignItems="center">
                <Typography variant='body1'>Example@email.com </Typography>
                <Typography variant='body1'>Copyright © 2020 Name. All rights reserved.</Typography> 
            </Stack>

        </>
       
    )
  
    
}
const iconStyle = {
    socialIcon: {
        fontSize: '30px'
    }
}

export default Footer