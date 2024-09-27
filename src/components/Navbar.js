import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Button, Menu, MenuItem, Collapse } from '@mui/material';
import DonateButton from './reusable/DonateButton';

const navItems = [
    { name: 'Home', path: '/' },
    {
        name: 'Our Mission',
        subItems: [
            { name: 'About Us', path: '/who-we-are/about' },
            { name: 'Resources', path: '/who-we-are/resources' },
        ]
    },
    {
        name: 'Our Initiatives',
        subItems: [
            { name: 'Elevate', path: '/what-we-do/elevate' },
            { name: 'Create Memories', path: '/what-we-do/create-memories' },
            { name: 'Sharodiyar Porosh', path: '/what-we-do/sharodiyar-porosh' },
            { name: 'Health & Blood Donation', path: '/what-we-do/health-blood-donation' },
            { name: 'Past Projects', path: '/what-we-do/past-projects' },
        ]
    },
    {
        name: 'Join Us',
        subItems: [
            // { name: 'Volunteering & Internship', path: '/get-involved/careers' },
            { name: 'CSR Activity', path: '/get-involved/csr' },
        ]
    },
    {
        name: 'Learn More',
        subItems: [
            { name: 'Blog', path: '/resources/blog' },
            // { name: 'Media', path: '/resources/media' },
        ]
    },
]


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
        <Box sx={{
            // display: { xs: 'none', md: 'block' }, 
            display: { xs: 'none', '@media (min-width:980px)': { display: 'block' } },
            marginLeft: 'auto'
        }}>
            {items.map((ele) => {
                if (ele.subItems) {
                    const isOpen = Boolean(anchorEl) && currentSubItems === ele.subItems;

                    return (
                        <React.Fragment key={ele.name}>
                            <Button
                                aria-controls="team-menu"
                                aria-haspopup="true"
                                onClick={(event) => handleMenuOpen(event, ele.subItems)}
                                sx={{
                                    color: '#000',
                                    textTransform: 'none',
                                    margin: '0 5px',
                                    fontSize: '1rem',
                                    '&:hover': {
                                        color: 'primary.main'
                                    }
                                }}
                                endIcon={isOpen ? <ExpandLess /> : <ExpandMore />}
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
                                        sx={{
                                            '&:hover': {
                                                color: 'primary.main'
                                            }
                                        }}
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
                            sx={{
                                color: '#000',
                                textTransform: 'none',
                                margin: '0 5px',
                                fontSize: '1rem',
                                '&:hover': {
                                    color: 'primary.main'
                                }
                            }}
                        >
                            {ele.name}
                        </Button>
                    );
                }
            })}

            <DonateButton label='I want to Donate' />
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
                                    sx={{
                                        textAlign: 'center',
                                        '&:hover': {
                                            color: 'primary.main'
                                        }
                                    }}
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
                                            sx={{
                                                textAlign: 'center',
                                                '&:hover': {
                                                    color: 'primary.main'
                                                }
                                            }}
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
                                sx={{
                                    textAlign: 'center',
                                    '&:hover': {
                                        color: 'primary.main'
                                    }
                                }}
                                onClick={handleDrawerToggle}
                            >
                                <ListItemText primary={ele.name} />
                            </ListItemButton>
                        </ListItem>
                    )}
                </React.Fragment>
            ))}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                <DonateButton label='I want to Donate' />
            </Box>
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
                                src="/images/logo-only.png"
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
                        sx={{
                            mr: 2,
                            // display: { md: 'none' },
                            display: { xs: 'block', '@media (min-width:980px)': { display: 'none' } }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <ItemDisplay items={navItems} />
                </Toolbar>
            </AppBar>

            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    anchor="right"
                    sx={{
                        // display: { xs: 'block', md: 'none' },
                        display: { xs: 'block', '@media (min-width:980px)': { display: 'none' } },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '60%' },
                    }}
                >
                    <Box>
                        <Button component={Link} to="/" sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
                            <img
                                src="/images/logo-only.png"
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


        </Box>
    );
}

Navbar.propTypes = {
    window: PropTypes.func,
};
