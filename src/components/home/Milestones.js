import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import CountUp from 'react-countup';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import SchoolIcon from '@mui/icons-material/School';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import { Fade, Slide } from 'react-awesome-reveal';

export default function Milestones() {
    const counters = [
        {
            icon: <AutoAwesomeMotionIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
            count: 100,
            suffix: '+',
            label: 'Workshops',
            description:
                'We have conducted over 100 workshops to improve skills and knowledge in various communities.',
        },
        {
            icon: <SchoolIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
            count: 5000,
            suffix: '+',
            label: 'Students Supported',
            description:
                'Over 5000 students have been supported through educational programs and scholarships.',
        },
        {
            icon: <ArchitectureIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
            count: 100000,
            suffix: '+',
            label: 'Study Kits Distributed',
            description:
                'We have distributed over 100,000 study kits to help students with essential educational supplies.',
        },
    ];


    return (
        <Box sx={{ backgroundColor: 'rgba(255, 208, 65, 0.2)', padding: '10px' }}>
            <Container sx={{ my: '30px', }}>
                <Slide direction="up" cascade damping={1} triggerOnce>
                    <Fade cascade triggerOnce>
                        <Box sx={{ py: 4 }}>
                            <Typography variant="h4" marginBottom={3} sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                                Milestones
                            </Typography>
                            <Grid container spacing={4} justifyContent="center">
                                {counters.map((counter, index) => (
                                    <Grid item xs={12} md={4} key={index}>
                                        <Box textAlign="center">
                                            <Box>{counter.icon}</Box>

                                            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
                                                <CountUp start={0} end={counter.count} duration={5} suffix={counter.suffix} />
                                            </Typography>

                                            <Typography variant="h6" color="primary" gutterBottom>
                                                {counter.label}
                                            </Typography>

                                            <Typography variant="body2" color="textSecondary">
                                                {counter.description}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Fade>
                </Slide>
            </Container>
        </Box>
    );
}
