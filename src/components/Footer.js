import React from 'react';
import { Box, Grid, Typography, IconButton, Avatar, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SupportIcon from '@mui/icons-material/VolunteerActivism';
import TaxIcon from '@mui/icons-material/VerifiedUser';
import SecureIcon from '@mui/icons-material/Security';
import { Link } from 'react-router-dom';

export default function Footer() {
    const quickLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    const socialLinks = [
        { icon: <FacebookIcon />, url: 'https://www.facebook.com/rangmashalfoundation?mibextid=LQQJ4d' },
        { icon: <InstagramIcon />, url: 'https://www.instagram.com/rangmashalorg?igsh=c2J2aXVjZmNrYnc5' },
        { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/company/rangmashalfoundation/' },
        { icon: <YouTubeIcon />, url: 'https://youtube.com/@rangmashalfoundation?si=SYWJm9kKjk4H9IZZ' },
    ];

    const infoItems = [
        { icon: <SupportIcon sx={{ fontSize: '2rem', color: 'primary.main' }} />, text: 'Together, we create meaningful change – your support makes it all possible.' },
        { icon: <TaxIcon sx={{ fontSize: '2rem', color: 'primary.main' }} />, text: 'Donations to us are fully tax-exempt under 80G of the Indian Income Tax Act, amplifying the impact of your generosity.' },
        { icon: <SecureIcon sx={{ fontSize: '2rem', color: 'primary.main' }} />, text: 'Your trust matters – every donation is processed with top-notch security and integrity.' }
    ]

    return (
        <Box sx={{ p: 4, borderTop: '1px solid #e0e0e0' }}>
            {/* Info Section */}
            <Grid container spacing={3} justifyContent='center' >
                {infoItems.map((item, index) => (
                    <Grid
                        key={index}
                        item
                        xs={12}
                        md={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            flexDirection: { xs: 'column', md: 'row' },
                        }}
                    >
                        {item.icon}
                        <Typography variant='body2' sx={{ mt: { xs: 1, md: 0 }, ml: { xs: 0, md: 1 } }}>
                            {item.text}
                        </Typography>
                    </Grid>
                ))}
            </Grid>

            <Divider sx={{ my: 4 }} />

            <Grid container spacing={2} justifyContent="center">

                <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                        <Avatar
                            alt="Rangmashal Logo"
                            src="/images/logo-black.png"
                            sx={{ width: 200, height: 'auto' }}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="h6" gutterBottom>
                        Quick Links
                    </Typography>
                    {quickLinks.map((link, index) => (
                        <Typography
                            key={index}
                            variant="body2"
                            component={Link}
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
                    <Typography variant="body2" gutterBottom>
                        <strong>Email:</strong> <br />
                        <a href="mailto:connecttorangmashal@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                            connecttorangmashal@gmail.com
                        </a>
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        <strong>Phone:</strong> <br />
                        <a href="tel:+916290442860" style={{ color: 'inherit', textDecoration: 'none' }}>
                            +91 90739 11933
                        </a>
                    </Typography>
                    <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
                        <strong>Address:</strong> <br />
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
                            <IconButton
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: 'primary.main',
                                    transition: 'transform 0.3s ease, color 0.3s ease',
                                    '&:hover': {
                                        color: 'secondary.main',
                                        transform: 'scale(1.2)',
                                        backgroundColor: 'transparent',
                                    }
                                }}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Box>
                </Grid>
            </Grid>

            <Box textAlign="center" mt={4}>
                <Typography variant="body2" color="textSecondary">
                    © {new Date().getFullYear()} Rangmashal Foundation. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}
