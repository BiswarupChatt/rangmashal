import React from 'react'
import { Box, Typography, Grid, Container, Card, CardContent, CardMedia } from '@mui/material'
import { Fade, Slide } from 'react-awesome-reveal'
import ImpactIcon from '@mui/icons-material/VolunteerActivism'
import PersonalDevelopmentIcon from '@mui/icons-material/TrendingUp'
import YouthMovementIcon from '@mui/icons-material/Groups' 

const data = [
    {
        icon: <ImpactIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
        title: 'Make an Impact',
        description: 'Your efforts will directly contribute to empowering underprivileged children and women, helping us create a brighter future for communities across India.'
    },
    {
        icon: <PersonalDevelopmentIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
        title: 'Personal Development',
        description: 'Gain invaluable skills and experience that will enhance your personal and professional growth, while building your leadership capabilities.'
    },
    {
        icon: <YouthMovementIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
        title: 'Join a Youth-Driven Movement',
        description: 'Be a part of a dynamic team of young change makers, where your passion and creativity can truly make a difference.'
    }
]

export default function WhyRangmashal() {
    return (
        <Box sx={{ width: '100%', backgroundColor: 'rgba(50, 191, 194, 0.1)' }}>
            <Container sx={{ padding: { xs: '20px', md: '50px' } }}>
                <Slide direction="up" cascade damping={1} triggerOnce>
                    <Fade cascade triggerOnce>
                        <Box>
                            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Why Volunteer with<Box component="span" sx={{ color: 'primary.main' }}> Rangmashal?</Box>
                            </Typography>

                            <Typography variant="body1" align="center" sx={{ mb: 3, color: 'text.secondary' }}>
                                We offer flexible and meaningful partnership avenues designed to resonate with your organization’s values and goals.
                            </Typography>

                            <Grid container spacing={4}>
                                {data.map((item, index) => (
                                    <Grid item xs={12} md={4} key={index}>
                                        <Card 
                                            sx={{
                                                height: '100%',
                                                borderRadius: '15px',
                                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                                '&:hover': {
                                                    transform: 'scale(1.05)',
                                                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
                                                },
                                            }}
                                        >
                                            <CardContent sx={{ textAlign: 'center' }}>
                                                <Box>
                                                    {item.icon}
                                                </Box>
                                                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary', textAlign: 'justify' }}>
                                                    {item.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Fade>
                </Slide>
            </Container>
        </Box>
    )
}
