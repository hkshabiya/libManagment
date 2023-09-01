import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          My Library
        </Typography>
        <Button href='/home' color="inherit">Home</Button>
        <Button href='/books' color="inherit">Books</Button>
        <Button color="inherit">Profile</Button>
        
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
