import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setIsOpen(open);
    };

    return (
        <div className='mobile-menu'>
            <IconButton
                className="mobile-menu-btn"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor="right"
                open={isOpen}
                onClose={toggleDrawer(false)}
            >
                <div
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                    className='mobile-menu-content'
                >
                    <a href="/" className='mobile-logo'><img src="../assets/images/logo/logo.svg" alt="ilogo" /></a>
                    <List>
                        <ListItem button>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Token" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Docs" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="About" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="FAQ" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Articles" />
                        </ListItem>
                    </List>
                    <IconButton
                        onClick={toggleDrawer(false)}
                        sx={{ position: 'absolute', top: 0, right: 0 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <a href="#" className="bg-white-btn btn-hov-effect dark">
                                                    <span className="btn-inner">
                                                        <span className="btn-normal-text">Launch App</span>
                                                        <span className="btn-hover-text">Launch App</span>
                                                    </span>
                                                    <span className="round-shape" />
                                                </a>

                </div>
            </Drawer>
        </div>
    );
};

export default MobileMenu;
