import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'; import { Helmet } from "react-helmet"

export default function PageNotFound() {
    return (
        <>
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>

            <Box
                sx={{
                    height: '60vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center', px: 2,
                }}
            >

                <SentimentDissatisfiedIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />

                <Typography variant="h1" color="primary" sx={{ fontWeight: 'bold' }}>
                    404
                </Typography>

                <Typography variant="h5" color="textSecondary" sx={{ mb: 2 }}>
                    Looks like you're lost on the journey of helping others.
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
                    Let's get you back on the path to making a difference.
                </Typography>

                <Button variant="contained" color="primary" component={Link} to="/">
                    Go Back to Home
                </Button>
            </Box>
        </>
    );
};
