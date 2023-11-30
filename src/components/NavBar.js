import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container } from '@mui/material';
import { Menu } from '@mui/icons-material';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ flexGrow: 1 }}>
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Game of Thrones Characters
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
