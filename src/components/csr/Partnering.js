import React from 'react';
import { Box, Typography, Grid, Container, Paper, colors } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EventIcon from '@mui/icons-material/Event';

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
    },
    // {
    //     icon: <EventIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    //     title: 'Engage Through Events',
    //     description: 'Join us in our events—from community celebrations to educational workshops. As a sponsor, you will help raise awareness about critical issues while gaining visibility for your brand.'
    // },
];

export default function Partnering() {
    return (
        <Box sx={{ width: '100%', backgroundColor: 'rgba(50, 191, 194, 0.1)' }}>
            <Container sx={{ padding: '50px' }}>
                <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Partnering with <Box component="span" sx={{ color: 'primary.main' }}>Rangmashal</Box>
                </Typography>

                <Typography variant="body1" align="center" sx={{ mb: 3, color: 'text.secondary' }}>
                    We offer flexible and meaningful partnership avenues designed to resonate with your organization’s values and goals.
                </Typography>

                <Grid container spacing={4}>
                    {data.map((item, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Paper elevation={3} sx={{ p: 4, textAlign: 'center', height: '100%', borderRadius: '15px' }}>
                                <Box>
                                    {item.icon}
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
                                    {item.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
