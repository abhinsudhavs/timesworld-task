import { Box, Container, Skeleton, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCountries } from '../../../Redux/Slices/CountrySlice';
const CountryList = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.COUTRIES.countries)
    const loading = useSelector((state) => state.COUTRIES.loading)

    useEffect(() => {
        dispatch(loadCountries())
    }, [])


    const country = <>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {countries.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                    <Stack sx={{
                        flexBasis: { xs: '100%', md: '40%' },
                        border: "solid 2px #3E3E3E",
                        padding: '20px',
                        margin: '20px'
                    }}>
                        <Stack direction={{ xs: "row", column: "row" }} alignItems="center" spacing={2}>
                            <Box component='img' src={item.flag} sx={{ width: '127px', height: '96px', objectFit: 'cover' }} />
                            <Stack>
                                <Typography variant='body1' sx={{ fontSize: '24px', color: '#3D3D3D', fontWeight: '600' }}>{item.name}</Typography>
                                <Typography variant='body1' sx={{ fontSize: '16px', color: "#6F6F6F" }}>{item.region}</Typography>
                            </Stack>
                        </Stack>



                    </Stack>
                </Grid>
            ))}
        </Grid>
    </>

    return (
        <>
            <Container maxWidth="lg">
                <Box mt={{ xs: 4, md: 5 }}>
                    {loading ? (
                        <>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                                <Grid item xs={12} md={6}>
                                    <Skeleton width="100%" height="100px" animation="wave" variant='rectangular' />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Skeleton width="100%" height="100px" animation="wave" variant='rectangular' />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Skeleton width="100%" height="100px" animation="wave" variant='rectangular' />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Skeleton width="100%" height="100px" animation="wave" variant='rectangular' />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Skeleton width="100%" height="100px" animation="wave" variant='rectangular' />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Skeleton width="100%" height="100px" animation="wave" variant='rectangular' />
                                </Grid>
                            </Grid>
                        </>
                    ) : country}
                </Box>

            </Container>

        </>
    )
}

export default CountryList