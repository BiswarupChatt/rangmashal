import React, { useState } from 'react';
import { Box, Typography, Grid, Container, Button, Collapse } from '@mui/material';



export default function Info() {
    const [expanded, setExpanded] = useState(false);

    const handleToggleExpand = () => {
        setExpanded((ele) => {
            return !ele
        });
    };

    return (
        <Box >
            <Box sx={{ width: '100%' }}>
                <Container sx={{ padding: { xs: '20px', md: '50px' } }}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center', color: 'primary.main' }}>
                        CSR Activity
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'medium', mb: 2, textAlign: 'center' }}>
                        Join Us in Creating Sustainable Change
                    </Typography>

                    <Typography variant="body1" sx={{ textAlign: 'justify', mb: 3 }}>
                        At Rangmashal, we envision a world where every child thrives. Our partnerships with corporations are essential not only for fulfilling CSR commitments but for driving impactful change in the lives of marginalized communities across India.
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
                   
                </Container>
            </Box>
        </Box>
    );
}
