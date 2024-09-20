import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, Container, Paper, Button } from '@mui/material';
import { Slide, Fade } from 'react-awesome-reveal';

export default function TabSection() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const occasions = [
        {
            title: 'Birthdays',
            content: `Instead of traditional gifts, celebrate your birthday by organizing a fundraiser or donation drive to support Rangmashal Foundation's initiatives. Spend quality time with underprivileged children, whether it's playing games, sharing stories, or simply listening to their dreams and aspirations.`,
            button: 'I want to Celebrate My Birthday',
            image: 'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg', // Replace with actual image URL
        },
        {
            title: 'Anniversaries',
            content: `Commemorate your anniversary by volunteering with the Rangmashal Foundation. Spend quality time together while making a positive impact in your community. Whether it's participating in a cleanup drive or organizing a charity event, your partnership with us will create lasting memories for both you and the beneficiaries.`,
            button: 'I want to Celebrate My Birthday',
            image: 'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg', // Replace with actual image URL
        },
        {
            title: 'Festivals',
            content: `Embrace the spirit of giving during festive seasons by supporting Rangmashal Foundation's projects and campaigns. Consider donating to our relief efforts, organizing a charity event, or spending quality time with children in our care, spreading joy and cheer to those in need.`,
            button: 'Let Celebrate With Rangmashal',
            image: 'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg', // Replace with actual image URL
        },
        {
            title: 'Achievements',
            content: `Celebrate personal or professional milestones by giving back to society. Dedicate your achievements to Rangmashal Foundation and spend quality time with the children and families we support. Whether it's organizing a special activity or sharing your success story, your presence and encouragement will inspire positive change.`,
            button: "Let's Celebrate My Achievements",
            image: 'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg', // Replace with actual image URL
        },
        {
            title: 'Special Events',
            content: `Host a special event in collaboration with the Rangmashal Foundation to raise awareness and funds for our programs. From charity concerts to art exhibitions, there are endless possibilities for creating memorable experiences that benefit our cause. Spend quality time interacting with the attendees and sharing the impact of our work.`,
            button: 'I Wish to Spend Special Events',
            image: 'https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg', // Replace with actual image URL
        }
    ];

    return (
        <Box sx={{ width: '100%', backgroundColor: 'rgba(50, 191, 194, 0.1)' }}>
            <Container sx={{ padding: { xs: '20px', md: '50px' } }}>
                <Slide direction="up" cascade damping={1} triggerOnce>
                    <Fade cascade triggerOnce>
                        <Box sx={{ width: '100%', marginTop: 1 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                                <Box sx={{ maxWidth: '100%', overflowX: 'auto' }}>
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        variant="scrollable"
                                        scrollButtons
                                        allowScrollButtonsMobile
                                        aria-label="Occasion Tabs"
                                        sx={{ width: { xs: '100%', md: 'auto' }, display: 'flex', justifyContent: 'center' }}
                                    >
                                        {occasions.map((occasion, index) => (
                                            <Tab
                                                key={index}
                                                label={occasion.title}
                                                {...a11yProps(index)}
                                                sx={{
                                                    textTransform: 'none',
                                                    fontWeight: 'bold',
                                                    fontSize: '1rem',
                                                }}
                                            />
                                        ))}
                                    </Tabs>
                                </Box>
                            </Box>

                            {occasions.map((occasion, index) => (
                                <div
                                    role="tabpanel"
                                    hidden={value !== index}
                                    id={`simple-tabpanel-${index}`}
                                    aria-labelledby={`simple-tab-${index}`}
                                    key={index}
                                >
                                    {value === index && (
                                        <Paper elevation={8} component={Box} sx={{ p: 3, backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: 1 }}>
                                            <Box component="img"
                                                src={occasion.image}
                                                alt={occasion.title}
                                                sx={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: 2, marginBottom: 2 }}
                                            />
                                            <Typography variant="h5" fontWeight='bold' gutterBottom color="primary">{occasion.title}</Typography>
                                            <Typography variant="body1" textAlign='justify'>{occasion.content}</Typography>

                                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        padding: '10px 20px',
                                                        backgroundColor: 'primary.main',
                                                        transition: 'background-color 0.3s ease',
                                                        '&:hover': {
                                                            backgroundColor: 'secondary.main',
                                                            color: 'black',
                                                        },
                                                        borderRadius: '10px',
                                                        fontWeight: 'bold',
                                                        textTransform: 'none',
                                                    }}
                                                >
                                                    {occasion.button}
                                                </Button>
                                            </Box>

                                        </Paper>
                                    )}
                                </div>
                            ))}
                        </Box>
                    </Fade>
                </Slide>
            </Container>
        </Box>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
