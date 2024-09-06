import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Button, Fab, useScrollTrigger, Slide, Fade } from '@mui/material';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
];

const HideOnScroll = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
};

const ScrollTop = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
};

const ItemDisplay = ({ items }) => {
    return (
        <Box sx={{ display: { xs: 'none', md: 'block' }, marginLeft: 'auto' }}>
            {items.map((ele) => (
                <Button
                    key={ele.name}
                    component={Link}
                    to={ele.path}
                    sx={{
                        color: '#000',
                        textTransform: 'none',
                        margin: '0 10px',
                        fontSize: '1rem',
                    }}
                >
                    {ele.name}
                </Button>
            ))}
        </Box>
    );
};

const ItemDisplayDrawer = ({ items }) => {
    return (
        <List>
            {items.map((ele) => (
                <ListItem key={ele.name} disablePadding>
                    <ListItemButton component={Link} to={ele.path} sx={{ textAlign: 'center' }}>
                        <ListItemText primary={ele.name} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};

export default function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', }}>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar component="nav"
                    sx={{
                        backgroundColor: 'rgba(247, 247, 247, 0.7)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: 'none',
                        zIndex: 1000
                    }}
                >
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                            <Button component={Link} to="/" sx={{ padding: 0 }}>
                                <img
                                    src="../images/logo-only.png"
                                    alt="Rangmashal Logo"
                                    style={{ width: '80px', height: 'auto', padding: '10px' }}
                                />
                            </Button>
                        </Box>

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <ItemDisplay items={navItems} />
                    </Toolbar>

                </AppBar>
            </HideOnScroll>

            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    anchor="right"
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '60%' },
                    }}
                >
                    <Box onClick={handleDrawerToggle}>

                        <Button component={Link} to="/" sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
                            <img
                                src="../images/logo-only.png"
                                alt="Rangmashal Logo"
                                style={{ width: '50px', height: 'auto' }}
                            />
                        </Button>
                        <Divider />

                        <ItemDisplayDrawer items={navItems} />
                    </Box>
                </Drawer>
            </nav>

            <Toolbar id="back-to-top-anchor" />

            {/* Scroll to top button */}
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </Box>
    );
}

Navbar.propTypes = {
    window: PropTypes.func,
};

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};
