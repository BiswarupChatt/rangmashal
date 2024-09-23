import React from 'react';
import { Box, Typography, Grid, Container, Paper, colors } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const data = [
    {
        icon: <CalendarTodayIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
        title: 'Engage Through Events',
        description: 'Join us in our events—from community celebrations to educational workshops. As a sponsor, you will help raise awareness about critical issues while gaining visibility for your brand. Your involvement can inspire others and contribute to meaningful community engagement.'
    },
    {
        icon: <MonetizationOnIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
        title: 'Community Fundraising Initiatives',
        description: 'Facilitate community involvement by hosting co-branded fundraising drives at your offices or retail locations. These initiatives offer your employees and customers the chance to contribute directly to our mission, reinforcing your organization’s commitment to social responsibility.'
    }
];

export default function Marketing() {
    return (
        <Box sx={{ width: '100%', backgroundColor: 'rgba(255, 208, 65, 0.2)' }}>
            <Container sx={{ padding: { xs: '20px', md: '50px' } }}>
                <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Marketing with a <Box component="span" sx={{ color: 'primary.main' }}>Purpose</Box>
                </Typography>

                <Typography variant="body1" align="center" sx={{ mb: 3, color: 'text.secondary' }}>
                    Integrate your marketing efforts with our mission for social change. Collaborating with Rangmashal on purpose-driven campaigns will enhance your brand’s image while fostering community engagement, amplifying both social impact and business success.
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
            </Container>
        </Box >
    );
}
