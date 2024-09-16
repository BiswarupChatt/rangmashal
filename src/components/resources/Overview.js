import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import DonateButton from '../reusable/DonateButton';
import Button from '../reusable/Button';
import { Fade, Slide } from 'react-awesome-reveal';

export default function Overview() {
    return (
        <Container sx={{ my: 10 }}>
            <Slide direction="up" cascade damping={1} triggerOnce>
                <Fade cascade triggerOnce>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="body1"
                                sx={{ fontSize: '1.2rem', textAlign: 'justify', marginBottom: 3}}
                            >
                                <Box component='span' sx={{ color: 'primary.main', fontWeight: 'bold' }}>Rangmashal Foundation</Box> is a registered as non-religious and non-political NGO under the West Bengal Societies Registration Act. 1961.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ fontSize: '1.2rem', textAlign: 'justify' }}
                            >
                                All donations made to Rangmashal Foundation are tax-exempt under section 80G of the Income Tax Act, 1961.
                            </Typography>

                            <Button
                                label="More About Us"
                                navigateTo="/about"
                                bgColor='primary.main'
                                bgColorHover='primary.main'
                                sx={{ margin: '5px' }}
                            />
                            <DonateButton
                                label="Yes! I want to help"
                                color="secondary"
                                bgColor='secondary.main'
                                bgColorHover='primary.main'
                                sx={{ margin: '5px' }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>

                            <Box sx={{ position: 'relative', display: 'inline-block', }}>
                                <Box
                                    sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'primary.main', transform: 'rotate(-5deg)', zIndex: 1, borderRadius: '20px', boxShadow: 20 }}
                                />
                                <Box sx={{ position: 'relative', zIndex: 2 }} >
                                    <img src="https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg" alt="Kids Learning" style={{ width: '100%', borderRadius: '20px', }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Fade>
            </Slide>


        </Container>
    )
}