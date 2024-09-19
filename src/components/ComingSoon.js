import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';


export default function ComingSoon() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
            }}
        >
            <Container>
                <AccessTimeIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
                    Coming Soon
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, fontSize: '1.2rem', color: 'text.secondary' }}>
                    We're working hard to bring you something amazing! Stay tuned for updates on our upcoming features and content.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ textTransform: 'none', fontSize: '1rem', mt: 3 }}
                    LinkComponent={Link}
                    to='/'
                >
                    Go to Home
                </Button>
            </Container>
        </Box>
    );
}
