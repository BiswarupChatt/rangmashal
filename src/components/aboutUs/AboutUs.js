import React, { useState } from 'react';
import { Box, Typography, Grid, Container, Button, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function About() {
    const [expanded, setExpanded] = useState(false);

    const handleToggleExpand = () => {
        setExpanded((ele) => {
            return !ele
        });
    };

    return (
        <Box >
            {/* The Genesis of Rangmashal Foundation Section with Image in the middle */}
            <Box sx={{ backgroundColor: '#f5f5f5', width: '100%' }}>
                <Container sx={{ padding: { xs: '20px', md: '50px' } }}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center', color: 'primary.main' }}>
                        About Us
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'medium', mb: 2, textAlign: 'center' }}>
                        The Genesis of Rangmashal Foundation
                    </Typography>

                    {/* First part of the text */}
                    <Typography variant="body1" sx={{ textAlign: 'justify', mb: 3 }}>
                        On a cold winter evening, a group of friends passing there free time in a garden. Engaged in light banter and laughter, they reveled in the comfort of each other's company, blissfully unaware that the evening would take an unexpected turn, setting them on a transformative journey of compassion and service to society.
                        <br /><br />
                        As the friends animatedly shared stories and dreams, their attention was abruptly drawn to a beggar woman and her young son who huddled outside, seeking shelter from the winter's harsh embrace. The woman's tired eyes and the child's shivering form struck a chord, prompting an immediate response from the friends.
                        <br /><br />
                        In that moment of spontaneity and empathy, the term "Rangmashal" emerged—a Bengali term translating to "lantern." It signified not only a source of light in the literal darkness but also a metaphorical beacon of hope amidst life's challenges. Rangmashal became a conduit for positive change, focusing particularly on uplifting the lives of women and children facing adversity.
                    </Typography>

                    {/* Image in the middle of the text */}
                    <Box
                        component="img"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '8px 8px 15px rgba(0, 0, 0, 0.4)',
                            marginBottom: '20px'
                        }}
                        src="/images/background2.png"
                        alt="Genesis of Rangmashal"
                    />

                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                        <Button
                            onClick={handleToggleExpand}
                            endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        >
                            {expanded ? 'Read Less' : 'Read More'}
                        </Button>
                    </Box>

                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                                    The first initiative of Rangmashal was the establishment of free educational programs. Recognizing education as a powerful tool for breaking the cycles of poverty, the friends set up impromptu classrooms within the heart of the community they aimed to serve. Volunteer teachers, inspired by the friends' commitment, joined the cause, contributing their time and expertise to empower the underprivileged with knowledge.
                                    <br /><br />
                                    Beyond conventional subjects, Rangmashal's educational programs embraced a holistic approach, encompassing life skills, vocational training, and health awareness. The aim was not just to impart academic knowledge but to equip individuals with the practical skills needed for self-sufficiency.
                                    Healthcare soon became another pillar of Rangmashal's mission. Partnering with medical professionals and institutions, the organization organized mobile health camps, reaching remote areas and providing free check-ups, vaccinations, and basic medical care. The friends understood that a healthy community was fundamental to sustainable development, and they were determined to bridge gaps in healthcare access.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                                    Challenges inevitably surfaced as Rangmashal expanded its reach. Financial constraints were a constant concern, prompting the friends to leverage their networks, organize fundraisers, and collaborate with like-minded NGOs. Social media became a powerful tool for spreading the word about their cause and garnering support from a wider audience.
                                    <br /><br /><br />
                                    The impact of Rangmashal resonated through stories of transformation within the communities it touched. Children who once roamed the streets in search of sustenance now harbored dreams and aspirations. Mothers, resigned to the hardships of their circumstances, found solace in the support provided by Rangmashal.
                                    What started as a simple act of kindness on a winter evening evolved into a lifelong mission for the friends. Rangmashal became not only a symbol of their commitment to social change but also a testament to the profound connections forged with the communities they served.
                                </Typography>
                            </Grid>
                        </Grid>

                        <Typography variant="body1" sx={{ textAlign: 'justify', mt: 3 }}>
                            In the lazy winter evening where laughter turned into purpose, Rangmashal emerged as a source of light dispelling the darkness of despair. The friends, spurred by a genuine desire to make a difference, discovered the profound joy of service and the lasting impact of small acts of kindness. Rangmashal's lantern, kindled in that winter evening, continued to illuminate paths and inspire change, offering a guiding light for anyone seeking to contribute positively to the world.
                        </Typography>
                    </Collapse>
                </Container>
            </Box>
        </Box>
    );
}
