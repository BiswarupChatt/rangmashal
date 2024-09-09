import React, { useState } from 'react';
import { Grid, Box, Typography, Avatar, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, Link, Container } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import { Divider } from "@mui/material"

const teamMembers = [
    {
        name: 'Tirthankar Sarkar',
        position: 'President',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQFXL05uliNGdA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718241558096?e=2147483647&v=beta&t=NJg23Vc5H28LmkrEdxFakeBwq2tbDkipWMrjq_F5TpE',
        description: `Tirthankar Sarkar, a distinguished professional holding a master's degree in economics from the University of Calcutta, presently serves as an Analyst at Ipsos MMA. Renowned for his proactive engagement in social issues, Tirthankar has actively participated in various conferences since his school days, showcasing a profound interest in societal development. With a robust academic background and a steadfast commitment to social causes, he contributes invaluable resources to the Rangmashal Foundation.`,
        linkedIn: 'https://www.linkedin.com/in/tirthankar-sarkar21/',
        facebook: 'https://www.facebook.com/tirthankarsarkar21',
        instagram: 'https://www.instagram.com/itsyourtirtha/?hl=en'
    },
    {
        name: 'Turja Chowdhury',
        position: 'Vice President',
        imageUrl: 'https://i.pravatar.cc/150?img=14',
        description: `Turja Chowdhury, a Jadavpur University Philosophy Postgraduate, ardently supports the Rangmashal Foundation's grassroots initiatives. Currently pursuing a PG in Journalism, his adept understanding of societal intricacies fuels his proactive engagement. With a passion for social change, Turja seamlessly integrates academic insights with practical endeavors for a better tomorrow.`,
        linkedIn: '',
        facebook: 'https://www.facebook.com/turja.chowdhury.3',
        instagram: 'https://www.instagram.com/turja______/?hl=en'
    },
    {
        name: 'Sukanya Guha',
        position: 'Secretary',
        imageUrl: 'https://media.licdn.com/dms/image/v2/C5603AQEneYLNyRS06A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1640772448605?e=2147483647&v=beta&t=-B3bT2VxPiXX1o7FWiboYKXZjIc7suhQ9JTQiwROqbU',
        description: `I am Sukanya Guha, an Analyst by profession, currently working in a private company located in Bangalore. I hold a master's degree in Economics. I have been a part of the Rangmashal Foundation since its inception and also one of the founding members of this organization. Being the secretary of this organization, I have been handling all the internal matters of it since the very beginning. My motive is to make this world a better place to live in for all and through the Rangmashal Foundation I am being able to do so.`,
        linkedIn: 'https://www.linkedin.com/in/sukanya-guha-671951218/',
        facebook: 'https://www.facebook.com/sukanya.guha.79',
        instagram: 'https://www.instagram.com/sukanya_guha_/?hl=en'
    },
    {
        name: 'Binita Ghosh',
        position: 'Joint Secretary',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQGmgkxLK4wsNA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1666119526617?e=2147483647&v=beta&t=19xjnZFlECs2kfV1ylJu3flBzSIyi5wvfntHUTC46ys',
        description: `I am Binita Ghosh, one of the co-founders and Joint Secretary of Rangmashal Foundation. Currently I am working as a technical consultant in a private company in Kolkata. I was always keen to do something for the people, for the society. This urge motivated me to be a part of RMF from beginning till now. The great contribution of RMF to the society is beyond expectations. It is a pleasure to be a part of such foundation which is working so hard and successfully making a difference in the society for the underprivileged children. I will always try my best to help RMF grow more and more in every possible perspective.`,
        linkedIn: 'https://www.linkedin.com/in/binitaghosh/',
        facebook: 'https://www.facebook.com/binita.ghosh.733',
        instagram: 'https://www.instagram.com/bini.katha/?hl=en'
    },
    {
        name: 'Joydeep Samadder',
        position: 'Treasurer',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQHlQuUG3LF9Mw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684576940268?e=2147483647&v=beta&t=BgqR0ZcvBqA-gXEq4jypCyndJCR6q3Bu5z2o_4nHjWw',
        description: `Joydeep Samadder, co-founder and Treasurer of the Rangmashal Foundation Holds a Master's degree in Botany. Passionate about community service, I contribute voluntarily, showcasing leadership and organizational skills. My commitment extends beyond my professional background, driving positive change through community-oriented projects. As Treasurer, I ensure financial stability, supporting the foundation's mission to uplift and support the community, and fostering a brighter future through meaningful initiatives.`,
        linkedIn: 'https://www.linkedin.com/in/joydeep-samadder',
        facebook: 'https://www.facebook.com/joydeep.samadder.5/',
        instagram: 'https://www.instagram.com/__an_enigma__/?hl=en'
    },
    {
        name: 'Moutushi Mitra',
        position: 'Resource Allocation',
        imageUrl: 'https://i.pravatar.cc/150?img=46',
        description: `I am a sincere, honest, and hardworking individual now engaged with PNB Metlife India as an Insurance Distribution Manager. I lead a team of insurance advisors and am responsible for driving agency channel sales through my team. As director of Resource Mobilization at Rangmashal, I am responsible for generating funds, finding and mobilizing skilled personnel for social projects, and networking with other organizations that are willing to support our cause.`,
        linkedIn: 'https://www.linkedin.com/in/moutushi-mitra-57093b52/',
        facebook: 'https://www.facebook.com/moutushi.mitra.52',
        instagram: 'https://www.instagram.com/moutushi.1703/'
    },
    {
        name: 'Biman Guha Thakurta',
        position: 'Cultural Secretary',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQHB3ms8AVrnqw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1692174453542?e=2147483647&v=beta&t=Jo4lGmBybgNdmpbd9UzBrSxFTK5LTN9bgbKod7cJ7cE',
        description: `A qualified physiotherapist by profession, I have been associated with Rangmashal since its inception and have been actively involved in all its social improvement projects. As director of Cultural Affairs at Rangmashal, I am responsible for planning, scheduling, and proper execution of cultural events throughout the year. I am responsible for organizing training of children from marginalized sections of our society in various cultural aspects including music, recitation, dance, and drama.`,
        linkedIn: 'https://www.linkedin.com/in/biman-guhathakurta-717ba5118',
        facebook: 'https://www.facebook.com/biman.guhathakurta?mibextid=ZbWKwL',
        instagram: 'https://instagram.com/bimanguhathakurta?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'
    }
];


function TeamSection() {
    const [open, setOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState({});

    const handleClickOpen = (member) => {
        setSelectedMember(member);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container>
            <Divider sx={{ marginTop: '50px' }} />
            <Box sx={{ width: '100%', padding: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }} textAlign="center">
                    Volunteer
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {teamMembers.map((member) => (
                        <Grid item xs={12} sm={6} md={3} key={member.name} onClick={() => handleClickOpen(member)}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: 'pointer' }}>
                                <Avatar src={member.imageUrl} alt={member.name} sx={{ width: 90, height: 90, mb: 2 }} />
                                <Typography variant="h6">{member.name}</Typography>
                                <Typography variant="body2" color="textSecondary">{member.position}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                    <DialogTitle textAlign='center'>
                        {selectedMember.name} - {selectedMember.position}
                    </DialogTitle>
                    <DialogContent>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            <Grid item >
                                <Avatar
                                    src={selectedMember.imageUrl}
                                    alt={selectedMember.name}
                                    sx={{ width: 120, height: 120, mx: 'auto' }}
                                />
                            </Grid>
                            <Grid item >
                                <DialogContentText textAlign='justify'>
                                    {selectedMember.description}
                                </DialogContentText>
                                <Box display="flex" justifyContent="center" mt={2}>
                                    {selectedMember.linkedIn && (
                                        <Link href={selectedMember.linkedIn} target="_blank" rel="noopener" sx={{ mx: 1 }}>
                                            <LinkedInIcon fontSize="large" color="primary" />
                                        </Link>
                                    )}
                                    {selectedMember.facebook && (
                                        <Link href={selectedMember.facebook} target="_blank" rel="noopener" sx={{ mx: 1 }}>
                                            <FacebookIcon fontSize="large" color="primary" />
                                        </Link>
                                    )}
                                    {selectedMember.instagram && (
                                        <Link href={selectedMember.instagram} target="_blank" rel="noopener" sx={{ mx: 1 }}>
                                            <InstagramIcon fontSize="large" color="primary" />
                                        </Link>
                                    )}
                                </Box>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </Box>
            <Divider sx={{ marginBottom: '50px' }} />
        </Container>
    );
}

export default TeamSection;
