import React, { useState } from 'react';
import { Box, Typography, Grid, Container, Button, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DonateButton from '../reusable/DonateButton'


export default function JoinCelebration() {
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
                    Join the <Box component="span" sx={{ color: 'primary.main' }}>Celebration!</Box>
                </Typography>

                <Typography variant="body1" sx={{ textAlign: 'justify', mb: 3 }}>
                    Durga Puja is a time of celebration, togetherness, and reflection—a festival that embodies the victory of good over evil and the indomitable strength of Maa Durga. At Rangmashal, this festive season is not just about celebrations; it’s about extending our mission of spreading hope and creating positive change for those in need.
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
                                While our primary focus is on providing quality education to underprivileged children—helping them break the cycle of poverty—we are equally devoted to empowering women, in line with the spirit of Maa Durga herself. Just as the Goddess stands as a symbol of power, courage, and protection, we strive to uplift women, providing them with the dignity, confidence, and opportunities they deserve.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                                Our Durga Puja initiatives seek to bring joy to underserved communities by distributing gifts, meals, and essential items. More importantly, we channel the divine energy of Maa Durga to advocate for women’s empowerment, ensuring that they, too, are shielded from the injustices of society, just as she shields the world from evil forces.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography variant="body1" sx={{ textAlign: 'justify', mt: 3 }}>
                        Maa Durga’s strength inspires us to create a more equitable society where every child can dream of a brighter future, and every woman can stand tall with pride and self-respect. She represents resilience, compassion, and the triumph of justice—values that are at the heart of everything we do.
                        <br /><br />
                        Join us in making this Durga Puja not just a time of celebration, but a time of giving back. Your support will help us bring joy, empowerment, and dignity to those who need it most. Together, we can honor the spirit of Maa Durga by creating lasting, positive change.
                    </Typography>
                </Collapse>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                    <DonateButton label='I wish to Donate' />
                </Box>
            </Container>
        </Box>

    );
}
