import React from 'react';
import { Box, Typography, Grid, Container, Paper, colors } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Fade, Slide } from 'react-awesome-reveal';

const data = [
    {
        icon: <SchoolIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
        title: 'Support a Local Initiative',
        description: 'Choose to uplift one of our grassroots projects that focus on education, empowerment, and dignity. By supporting a local initiative, your organization will be instrumental in fostering positive change.'
    },
    {
        icon: <AccountBalanceIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
        title: 'Direct Contributions for Change',
        description: 'Make a direct impact by contributing to causes aligned with your mission. Your contributions will support critical initiatives designed to uplift communities and foster holistic development.'
    }
];

export default function Partnering() {
    return (
        <Box sx={{ width: '100%', backgroundColor: 'rgba(50, 191, 194, 0.1)' }}>
            <Container sx={{ padding: { xs: '20px', md: '50px' } }}>
                <Slide direction="up" cascade damping={1} triggerOnce>
                    <Fade cascade triggerOnce>
                        <Box>
                            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Partnering with <Box component="span" sx={{ color: 'primary.main' }}>Rangmashal</Box>
                            </Typography>

                            <Typography variant="body1" align="center" sx={{ mb: 3, color: 'text.secondary' }}>
                                We offer flexible and meaningful partnership avenues designed to resonate with your organization’s values and goals.
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
                        </Box>
                    </Fade>
                </Slide>

            </Container>
        </Box >
    );
}
