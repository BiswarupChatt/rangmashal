import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import DonateButton from '../reusable/DonateButton';
import Button from '../reusable/Button';
import { Fade, Slide } from 'react-awesome-reveal';

export default function About() {

    return (
        <Container sx={{ my: 10 }}>
            <Slide direction="up" cascade damping={1} triggerOnce>
                <Fade cascade triggerOnce>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                                About Us
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                                At Rangmashal Foundation, we believe that every child and woman has the potential to succeed, regardless of their background. That is why we have dedicated ourselves to empowering them and providing them with the resources they need irrespective of their background since our establishment in 2020.
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
                                    <img src="/images/background1.png" alt="Kids Learning" style={{ width: '100%', borderRadius: '20px', }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Fade>
            </Slide>


        </Container>
    );
}
