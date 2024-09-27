import React, { useState } from 'react';
import { Box, Typography, Grid, Container, Button, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DonateButton from '../reusable/DonateButton'


export default function EmpowerHealth() {
    const [expanded, setExpanded] = useState(false);

    const handleToggleExpand = () => {
        setExpanded((ele) => {
            return !ele
        });
    };

    return (

        <Box sx={{ py: 8, backgroundColor: 'rgba(50, 191, 194, 0.1)' }}>
            <Container sx={{ px: { xs: '20px', md: '50px' } }}>
                <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
                    Donate, Heal, <Box component="span" sx={{ color: 'primary.main' }}>Empower!</Box>
                </Typography>

                <Typography variant="body1" sx={{ textAlign: 'justify', mb: 3 }}>
                    At Rangmashal, our commitment to the community goes beyond education and empowerment. We believe that good health is the foundation of a thriving society, and ensuring access to basic healthcare is essential for everyone, especially the underserved. That&apos;s why we regularly organize
                </Typography>

                <Box
                    component="img"
                    sx={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        boxShadow: '8px 8px 15px rgba(0, 0, 0, 0.4)',
                        marginBottom: '20px'
                    }}
                    src="https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899302/Website/nt81qnkkkvjcch48v53k.jpg"
                    alt="Genesis of Rangmashal"
                />

                <Typography variant="body1" sx={{ textAlign: 'justify', mb: 3 }}>
                    Blood Donation Camps and Health Camps, providing vital support to those who need it most.
                    Our Blood Donation Camps serve as a lifeline for many, ensuring that critical blood supplies are available for emergencies and medical treatments. By encouraging voluntary blood donations, we aim to build a network of community care, where every donor plays a vital role in saving lives.
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Button
                        onClick={handleToggleExpand}
                        endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    >
                        {expanded ? 'Read Less' : 'Read More'}
                    </Button>
                </Box>

                <Collapse in={expanded} timeout="auto" unmountOnExit>

                    <Typography variant="body1" sx={{ textAlign: 'justify', mt: 3 }}>
                        In addition, our Health Camps offer essential healthcare services to underserved populations who may not have access to regular medical check-ups. These camps provide free health screenings, medical consultations, and awareness programs, helping to identify and address health concerns before they become serious issues. Our focus is on promoting preventative care and improving overall well-being, ensuring that everyone has the opportunity to lead a healthy life.                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'justify', mt: 3 }}>
                        Through these initiatives, Rangmashal continues to prioritize the well-being of our communities. We believe that a healthy individual is empowered to pursue their dreams and contribute meaningfully to society.
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'justify', mt: 3 }}>
                        Join us in our mission to support better health for all. Whether through donating blood, volunteering at our health camps, or spreading awareness, your contribution can make a difference.
                    </Typography>
                </Collapse>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                    <DonateButton label='I wish to Donate' />
                </Box>
            </Container>
        </Box>

    );
}
