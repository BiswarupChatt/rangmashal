import { Box, Typography, Grid, Container, Collapse, } from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Fade, Slide } from 'react-awesome-reveal';
import DonateButton from '../reusable/DonateButton'

export default function Empower() {

    const [expand, setExpand] = useState(false)

    const handleToggle = () => {
        setExpand((ele) => {
            return (!ele)
        })
    }
    return (
        <Box sx={{ width: '100%', backgroundColor: 'rgba(255, 208, 65, 0.2)' }}>
            <Container sx={{ padding: { xs: '20px', md: '50px' } }}>
                <Slide direction="up" cascade damping={1} triggerOnce>
                    <Fade cascade triggerOnce>
                        <Grid container spacing={4} alignItems="center">
                            <Grid item xs={12} md={6}>
                                <Box sx={{ padding: { xs: '20px 0', md: '0 20px' } }}>
                                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
                                        Empowering Children <Box component='span' sx={{ color: 'primary.main' }}>Through Education</Box>
                                    </Typography>
                                    <Typography variant="body1" textAlign='justify' >
                                        At Rangmashal, we recognize education as more than just schooling—it’s a vital tool for expanding a child's capabilities and choices.
                                        <br />
                                    </Typography>

                                    <Collapse in={expand} timeout="auto" unmountOnExit>
                                        <Typography variant="body1" textAlign='justify'>
                                            <br />
                                            Our mission is to ensure every child, regardless of their socio-economic status, gains access to quality education. By equipping underprivileged children with the ability to make informed life decisions, we aim to break the cycle of poverty and build a foundation for a more just and equitable future.
                                            <br />
                                        </Typography>
                                        <Typography variant="body1" textAlign='justify'>
                                            <br />
                                            Together, we can empower these children to take control of their own destinies. Join us in our journey to provide opportunities that nurture growth, hope, and lasting change.
                                        </Typography>
                                        <Typography variant="body1" textAlign='justify'>
                                            <br />
                                            Take action today to help underprivileged children unlock their full potential. Together, we can transform lives and create a world where every child has the freedom to thrive.
                                        </Typography>
                                    </Collapse>

                                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'left' }, mt: 2 }}>
                                        <Typography
                                            component="span"
                                            onClick={handleToggle}
                                            sx={{
                                                cursor: 'pointer',
                                                color: 'primary.main',
                                                fontWeight: 'bold',
                                                display: 'flex',
                                                alignItems: 'center',
                                                '&:hover': { textDecoration: 'underline' }
                                            }}
                                        >
                                            {expand ? 'Read Less' : 'Read More'}
                                            {expand ? <ExpandLessIcon sx={{ ml: 1 }} /> : <ExpandMoreIcon sx={{ ml: 1 }} />}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'left' }, mt: 2 }}>
                                        <DonateButton label='I want to Help Children ♡' />
                                    </Box>
                                </Box>
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
        </Box>
    )
}