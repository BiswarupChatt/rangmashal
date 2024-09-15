import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function Hero() {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: {
                    xs: '60vh',
                    sm: '50vh',
                    md: '40vh',
                },
                backgroundImage: 'url(https://res.cloudinary.com/dgwgnfulm/image/upload/v1725899112/Website/lwijqhxavefwc1ftue0e.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }}
            />

            <Box
                sx={{
                    position: 'relative',
                    textAlign: 'center',
                    color: '#fff',
                    zIndex: 1,
                    maxWidth: { xs: '90%', md: '60%' },
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        color: 'primary.main',
                        fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem', },
                        
                    }}
                >
                    Our Projects
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        mb: 4,
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem', },
                        textAlign: 'justify',
                        textAlignLast: "center", 
                    }}
                >
                    Discover our impactful projects that bring hope and change to communities in need. From blood donation drives to disaster relief efforts,
                    our initiatives are aimed at creating a brighter future for those we serve.
                </Typography>
            </Box>
        </Box>
    );
}
