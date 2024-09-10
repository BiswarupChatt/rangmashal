import React from 'react';
import { Box, Grid, Typography, IconButton, Avatar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

export default function Footer() {

    const quickLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    const socialLinks = [
        { icon: <FacebookIcon />, path: '/https://www.facebook.com/rangmashalfoundation?mibextid=LQQJ4d' },
        { icon: <InstagramIcon />, path: '/https://www.instagram.com/rangmashalorg?igsh=c2J2aXVjZmNrYnc5' },
        { icon: <LinkedInIcon />, path: '/https://www.linkedin.com/company/rangmashalfoundation/' },
        { icon: <YouTubeIcon />, path: '/https://youtube.com/@rangmashalfoundation?si=SYWJm9kKjk4H9IZZ' },
    ]

    return (
        <Box sx={{ backgroundColor: '#f8f8f8', p: 4, borderTop: '1px solid #e0e0e0', }}>
            <Grid container spacing={2} justifyContent="center" alignItems="top">

                <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <Avatar
                            alt="Your Company Logo"
                            src="../images/logo-black.png"
                            sx={{ width: 200, height: 'auto' }}
                        />
                    </Box>

                    <Typography variant="body2" color="textSecondary" gutterBottom sx={{ mt: 2, px: 5 }} textAlign='justify'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                </Grid>

                <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="h6" gutterBottom>
                        Quick Links
                    </Typography>
                    {quickLinks.map((link, index) => (
                        <Typography
                            variant="body2"
                            component={Link}
                            key={index}
                            to={link.path}
                            sx={{
                                color: 'inherit',
                                textDecoration: 'none',
                                display: 'block',
                                mb: 1,
                                '&:hover': {
                                    color: 'primary.main',
                                }
                            }}
                        >
                            {link.name}
                        </Typography>
                    ))}
                </Grid>

                <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="h6" gutterBottom>
                        Contact
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                        <span style={{ fontWeight: 'bold' }}>
                            Email: <br />
                        </span>
                        <a href="mailto:connecttorangmashal@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                            connecttorangmashal@gmail.com
                        </a>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                        <span style={{ fontWeight: 'bold' }}>
                            Phone: <br />
                        </span>
                        <a href="tel:+916290442860" style={{ color: 'inherit', textDecoration: 'none' }}>
                            +91 62904 42860
                        </a>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom sx={{ mt: 2 }}>
                        <span style={{ fontWeight: 'bold' }}>
                            Address: <br />
                        </span>
                        Rangmashal Foundation Office, <br />
                        Kalitala Kayalpara Panchasayar, <br />
                        Garia, West Bengal, India <br />
                        Pin Code: 700-084
                    </Typography>
                </Grid>


                <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="h6" gutterBottom>
                        Follow Us
                    </Typography>
                    <Box>
                        {socialLinks.map((social, index) => (
                            <IconButton key={index} component={Link} to={social.path} sx={{ color: 'primary.main', padding: '0px 15px 0px 0px' }}>
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
