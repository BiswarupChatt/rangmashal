import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { Fade, Slide } from 'react-awesome-reveal';


export default function Overview() {
    return (
        <Box sx={{ width: '100%', backgroundColor: 'rgba(255, 208, 65, 0.2)' }}>
            <Container sx={{ py: '50px' }}>
                <Slide direction="up" cascade damping={1} triggerOnce>
                    <Fade cascade triggerOnce>
                        <Grid container spacing={4} alignItems="center">
                            <Grid item xs={12} md={6}>
                                <Typography
                                    variant="body1"
                                    sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem', }, textAlign: 'left', paddingRight: '10px' }}
                                >
                                    <Box component='span' sx={{ color: 'primary.main', fontWeight: 'bold' }}>Rangmashal Foundation</Box> proudly stands as a non-religious, non-political NGO, formally registered under the <Box component='span' sx={{ color: 'primary.main', fontWeight: 'bold' }}>West Bengal Societies Registration Act. 1961.</Box>
                                    <br /><br />

                                    All donations made to <Box component='span' sx={{ color: 'primary.main', fontWeight: 'bold' }}>Rangmashal Foundation</Box> are tax-exempt under section 80G of the Income Tax Act, 1961.
                                    <br /><br />

                                    We are committed to maintaining complete <Box component='span' sx={{ color: 'primary.main', fontWeight: 'bold', textTransform: 'uppercase' }}>accountability and transparency through our annual reports.</Box>
                                </Typography>

                            </Grid>

                            <Grid item xs={12} md={6}>

                                <Box sx={{ position: 'relative', display: 'inline-block', }}>
                                    <Box
                                        sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'primary.main', transform: 'rotate(-3deg)', zIndex: 1, borderRadius: '20px', boxShadow: 20 }}
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
        </Box>
    )
}