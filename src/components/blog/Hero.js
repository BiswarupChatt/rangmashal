import React from 'react';
import { Box, Typography } from '@mui/material';

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
                    Explore Our Latest<br /> <span style={{ color: '#fff' }}>Blogs</span>
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        mb: 4,
                        
                        textAlign: 'justify',
                        textAlignLast: "center",
                    }}
                >
                    Discover inspiring stories and impactful moments from Rangmashal Foundation. Stay informed and find new ways to make a difference in the lives we serve.
                </Typography>
            </Box>
        </Box>
    );
}
