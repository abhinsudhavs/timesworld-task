import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/home");
    }

    return (
        <Container maxWidth="lg">
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{
                alignItems: 'center',
                justifyContent: "space-evenly",
                height: { xs: '100vh', md: '97vh' }
            }}>
                <Stack direction={{ xs: 'column' }} spacing={5} sx={{
                    width: { xs: '90%', md: '25%' },
                    padding: { xs: "20px", md: '20px' }
                }}>
                    <Box>
                        <Typography variant='h2' sx={{
                            fontSize: '32px',
                            fontWeight: '700',
                            color: '#3D3D3D',
                            textAlign: { xs: 'center', md: 'left' },
                            // mb:{xs:'20px', md:'20px'}
                        }}>
                            SignIn
                        </Typography>
                    </Box>
                    <Stack direction={{ xs: 'row', md: 'row' }} spacing={3}
                        sx={{
                            alignItems: { xs: 'center', md: 'flex-start' },
                            justifyContent: { xs: 'center', md: 'flex-start' }
                        }}>
                        <Box>
                            <Typography variant='body1' sx={{
                                color: '#3D3D3D',
                                fontWeight: '600'
                            }}>New User?</Typography>
                        </Box>
                        <Box>
                            <Typography variant='body1' sx={{
                                color: '#587FFF',
                                cursor: 'pointer',
                                fontWeight: '600'
                            }}>Create an account</Typography>
                        </Box>
                    </Stack>
                    <Stack direction={{ xs: "column", md: 'column' }} spacing={2}>
                        <TextField variant='outlined' sx={{
                            border: '2px solid #3E3E3E',
                            borderRadius: '0px'
                        }} size='small' placeholder='Username or Email' />
                        <TextField variant='outlined' size='small' type='password' placeholder='Password' sx={{
                            borderRadius: '0px',
                            border: '2px solid #3E3E3E'
                        }} />
                        <FormControlLabel control={<Checkbox sx={{
                            borderColor: 'aquamarine'
                        }} />} label="Keep me signed in" />
                        <Box>
                            <Button variant='contained' fullWidth disableElevation sx={{
                                bgcolor: '#3C3C3C',
                                borderRadius: '0px'
                            }} onClick={handleSubmit}>SignIn</Button>
                        </Box>
                    </Stack>

                    <Stack direction={{ xs: 'column', md: "column" }} alignItems='center' spacing={3}>
                        <Box>
                            <Typography variant='body2' sx={{
                                fontSize: ''
                            }}>or Sign In With</Typography>
                        </Box>
                        <Stack direction='row' spacing={4}>
                            <GoogleIcon sx={iconStyle.socialIcon} />
                            <FacebookOutlinedIcon sx={iconStyle.socialIcon} />
                            <LinkedInIcon sx={iconStyle.socialIcon} />
                            <TwitterIcon sx={iconStyle.socialIcon} />
                        </Stack>

                    </Stack>

                </Stack>
                <Box sx={{
                    display: { xs: 'none', md: 'flex' }
                }}>
                    <Box component='img' src='./images/image.png'
                        sx={{
                            width: '400px',
                            objectFit: 'contain',
                            height: "500px"
                        }} />
                </Box>
            </Stack>
        </Container>
    )
}

const iconStyle = {
    socialIcon: {
        fontSize: '30px'
    }
}

export default Login