import React from 'react';
import { Box, Typography, Grid, Container, Paper, colors } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import DonateButton from '../reusable/DonateButton';
import { Fade, Slide } from 'react-awesome-reveal';

const data = [
    {
        icon: <AttachMoneyIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
        title: ' Giving Through Payroll',
        description: 'Engage your workforce in philanthropy through a payroll donation program. This initiative allows employees to contribute a portion of their salary to support Rangmashal’s projects, with the option for you to match their contributions, fostering a culture of generosity and shared purpose.'
    },
    {
        icon: <VolunteerActivismIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
        title: 'Volunteer for a Cause',
        description: 'Encourage your employees to actively participate in our initiatives by volunteering their time and skills. Whether through mentoring, skill-building workshops, or administrative support, their involvement can create lasting impacts on the lives of children and communities.'
    }
];

export default function Empower() {
    return (
        <Box sx={{ width: '100%', backgroundColor: 'rgba(50, 191, 194, 0.1)' }}>
            <Container sx={{ padding: { xs: '20px', md: '50px' } }}>
                <Slide direction="up" cascade damping={1} triggerOnce>
                    <Fade cascade triggerOnce>
                        <Box>
                            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Empower Your <Box component="span" sx={{ color: 'primary.main' }}>Team</Box>
                            </Typography>

                            <Typography variant="body1" align="center" sx={{ mb: 3, color: 'text.secondary' }}>
                                Encourage employees to become active participants in philanthropic efforts, fostering a sense of purpose and shared responsibility
                            </Typography>

                            <Grid container spacing={4}>
                                {data.map((item, index) => (
                                    <Grid item xs={12} md={6} key={index}>
                                        <Paper elevation={3} sx={{
                                            p: 4,
                                            textAlign: 'center',
                                            height: '100%',
                                            borderRadius: '15px',
                                            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
                                            },
                                        }}>
                                            <Box>
                                                {item.icon}
                                            </Box>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary', textAlign: 'justify' }}>
                                                {item.description}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                                <DonateButton label='I Want to Contribute ❤︎' />
                            </Box>
                        </Box>
                    </Fade>
                </Slide>
            </Container>
        </Box >
    );
}
