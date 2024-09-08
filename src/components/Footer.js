import React from 'react';
import { Box, Grid, Typography, IconButton, Avatar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom'; 

export default function Footer() {

    const quickLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    const socialLinks = [
        { icon: <LinkedInIcon />, path: '/linkedin' },
        { icon: <FacebookIcon />, path: '/facebook' },
        { icon: <InstagramIcon />, path: '/instagram' },
        { icon: <TwitterIcon />, path: '/twitter' },
    ]

    return (
        <Box
            sx={{
                backgroundColor: '#f8f8f8',
                p: 4,
                borderTop: '1px solid #e0e0e0',
                mt: 4,
            }}
        >
            <Grid container spacing={2} justifyContent="center" alignItems="top">

                <Grid item xs={12} md={3} textAlign="center">
                    <Avatar
                        alt="Your Company Logo"
                        src="../images/logo-black.png"
                        sx={{ width: 200, height: 'auto', mx: 'auto' }}
                    />
                </Grid>

                <Grid item xs={12} md={3} textAlign="left">
                    <Typography variant="h6" gutterBottom>
                        Quick Links
                    </Typography>
                    {quickLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            style={{
                                color: 'inherit',
                                textDecoration: 'none',
                                display: 'block',
                                marginBottom: '1rem',
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </Grid>

                <Grid item xs={12} md={3} textAlign="left">
                    <Typography variant="h6" gutterBottom>
                        Contact
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom sx={{ lineHeight: 1.6 }}>
                        Address: <br />
                        Rangmashal Foundation Office, <br />
                        Kalitala Kayalpara Panchasayar, <br />
                        Garia, West Bengal, India <br />
                        Pin Code: 700-084
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom sx={{ mt: 2 }}>
                        Email: <br />
                        <a href="mailto:connecttorangmashal@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                            connecttorangmashal@gmail.com
                        </a>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                        Phone: <br />
                        <a href="tel:+916290442860" style={{ color: 'inherit', textDecoration: 'none' }}>
                            +91 62904 42860
                        </a>
                    </Typography>
                </Grid>


                <Grid item xs={12} md={3} textAlign="left">
                    <Typography variant="h6" gutterBottom>
                        Follow Us
                    </Typography>
                    <Box>
                        {socialLinks.map((social, index) => (
                            <IconButton key={index} component={Link} to={social.path} sx={{ color: 'primary.main', padding:'0px 15px 0px 0px' }}>
                                {social.icon}
                            </IconButton>
                        ))}
                    </Box>
                </Grid>
            </Grid>

            {/* Footer bottom text */}
            <Box textAlign="center" mt={4}>
                <Typography variant="body2" color="textSecondary">
                    © {new Date().getFullYear()} Rangmashal Foundation. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}
