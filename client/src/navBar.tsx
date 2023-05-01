import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import "./navBar.css"

export default function ButtonAppBar() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
                <MenuIcon />
              </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link className="link-wrapper" to="/">
                  <MenuItem onClick={handleClose}>Home</MenuItem>
                </Link>
                <Link className="link-wrapper" to="/save">
                  <MenuItem onClick={handleClose}>Saved</MenuItem>
                </Link>
              </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="link-wrapper" color="primary" to="/">
                <i className="fa-solid fa-graduation-cap" ></i>
            </Link>
          </Typography>
          <Link to="/save">
            <Button id="save">Saved</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}