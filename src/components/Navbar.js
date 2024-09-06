import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Button, Fab, useScrollTrigger, Slide, Fade, Menu, MenuItem, Collapse } from '@mui/material';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
    {
        name: 'Join Our Team',
        subItems: [
            { name: 'Our Roles', path: '/team-roles' },
            { name: 'Internships', path: '/internships' },
            { name: 'Volunteer Opportunities', path: '/volunteer' }
        ]
    }
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
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentSubItems, setCurrentSubItems] = useState(null);

    const handleMenuOpen = (event, subItems) => {
        setAnchorEl(event.currentTarget);
        setCurrentSubItems(subItems);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setCurrentSubItems(null);
    };

    return (
        <Box sx={{ display: { xs: 'none', md: 'block' }, marginLeft: 'auto' }}>
            {items.map((ele) => {
                if (ele.subItems) {
                    const isOpen = Boolean(anchorEl) && currentSubItems === ele.subItems;

                    return (
                        <React.Fragment key={ele.name}>
                            <Button
                                aria-controls="team-menu"
                                aria-haspopup="true"
                                onClick={(event) => handleMenuOpen(event, ele.subItems)}
                                sx={{ color: '#000', textTransform: 'none', margin: '0 10px', fontSize: '1rem' }}
                                endIcon={isOpen ? <ExpandLess /> : <ExpandMore />} // Add ExpandLess/ExpandMore here
                            >
                                {ele.name}
                            </Button>
                            <Menu
                                id="team-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={isOpen}
                                onClose={handleMenuClose}
                                MenuListProps={{
                                    onMouseLeave: handleMenuClose,
                                }}
                                PaperProps={{
                                    style: { zIndex: 1100 },
                                }}
                            >
                                {currentSubItems && currentSubItems.map((subItem) => (
                                    <MenuItem
                                        key={subItem.name}
                                        onClick={handleMenuClose}
                                        component={Link}
                                        to={subItem.path}
                                    >
                                        {subItem.name}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </React.Fragment>
                    );
                } else {

                    return (
                        <Button
                            key={ele.name}
                            component={Link}
                            to={ele.path}
                            sx={{ color: '#000', textTransform: 'none', margin: '0 10px', fontSize: '1rem' }}
                        >
                            {ele.name}
                        </Button>
                    );
                }
            })}
        </Box>
    );
};


const ItemDisplayDrawer = ({ items, handleDrawerToggle }) => {
    const [openStates, setOpenStates] = useState({});

    const handleToggle = (itemName) => {
        setOpenStates((prevOpenStates) => ({
            ...prevOpenStates,
            [itemName]: !prevOpenStates[itemName],
        }));
    };

    return (
        <List>
            {items.map((ele) => (
                <React.Fragment key={ele.name}>
                    {ele.subItems ? (
                        <>
                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => handleToggle(ele.name)}
                                    sx={{ textAlign: 'center' }}
                                >
                                    <ListItemText primary={ele.name} />
                                    {openStates[ele.name] ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                            </ListItem>
                            <Collapse in={openStates[ele.name]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {ele.subItems.map((subItem) => (
                                        <ListItemButton
                                            key={subItem.name}
                                            component={Link}
                                            to={subItem.path}
                                            sx={{ pl: 4 }}
                                            onClick={handleDrawerToggle}
                                        >
                                            <ListItemText primary={subItem.name} />
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Collapse>
                        </>
                    ) : (
                        <ListItem disablePadding>
                            <ListItemButton
                                component={Link}
                                to={ele.path}
                                sx={{ textAlign: 'center' }}
                                onClick={handleDrawerToggle}
                            >
                                <ListItemText primary={ele.name} />
                            </ListItemButton>
                        </ListItem>
                    )}
                </React.Fragment>
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
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar
                    component="nav"
                    sx={{
                        backgroundColor: 'rgba(247, 247, 247, 0.7)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: 'none',
                        zIndex: 10
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
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '60%' },
                    }}
                >
                    <Box>
                        <Button component={Link} to="/" sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
                            <img
                                src="../images/logo-only.png"
                                alt="Rangmashal Logo"
                                style={{ width: '50px', height: 'auto' }}
                            />
                        </Button>
                        <Divider />
                        <ItemDisplayDrawer items={navItems} handleDrawerToggle={handleDrawerToggle} />
                    </Box>
                </Drawer>
            </nav>


            <Toolbar id="back-to-top-anchor" />

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
