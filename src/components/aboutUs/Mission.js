import { Box, Typography, Grid, Container, Collapse, } from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Fade, Slide } from 'react-awesome-reveal';

export default function Mission() {

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
                                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                                        Our Mission
                                    </Typography>
                                    <Typography variant="body1" textAlign='justify'>
                                        Our mission is to provide underprivileged children and women across India with the support they need to succeed in life. Whether it be through education, healthcare, or improved living conditions, we are committed to creating a brighter future for the next generation.
                                        <br /><br />
                                    </Typography>

                                    <Collapse in={expand} timeout="auto" unmountOnExit>
                                        <Typography variant="body1" textAlign='justify'>
                                            We invite you to join us on this journey of building a better future for the future generation of India. Together, we can make a lasting difference in the lives of those who need it most. Every small effort can make a big impact, and with your support, we can ensure that every child and woman has access to equal opportunity as their privileged counterparts.
                                            <br /><br />
                                            As our supporter, you will be a part of a community of like-minded individuals who are committed to making a difference in the lives of those who are deprived of even the basic needs for survival. From supporting our education endeavors to providing healthcare and improved living conditions, your support will make a tangible difference in the lives of those we serve.
                                            <br /><br />
                                            We believe that every child and woman has the right to a brighter future, and we are dedicated to making that a reality. Join us in our mission to unlock potential and build futures for underprivileged children and women in India. Together, we can create a world where every child and woman has the opportunity to reach their full potential.
                                        </Typography>
                                    </Collapse>

                                    <Box sx={{ display: 'flex', justifyContent: 'left', mt: 2 }}>
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